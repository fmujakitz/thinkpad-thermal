import * as Clutter from "@gi-types/clutter10"
import * as Gio from "@gi-types/gio2"
import * as GLib from "@gi-types/glib2"
import * as GObject from "@gi-types/gobject2"
import * as St from "@gi-types/st1"
import "./stylesheet.css"

// const GETTEXT_DOMAIN = 'my-indicator-extension'

import * as PanelMenu from "@gnomejs/panelMenu"
import * as PopupMenu from "@gnomejs/popupMenu"

const ExtensionUtils = imports.misc.extensionUtils
const Main = imports.ui.main
const ByteArray = imports.byteArray
const Me = ExtensionUtils.getCurrentExtension()

// const _ = ExtensionUtils.gettext

const _ = (text: string) => text

const debug = (str: string) => console.log(["[tpt] => ", str].join(''))

const iconFrom = (filename: string) => {
  const p = [Me.path, 'icons', filename]
    .join('/')
    .replace(/\/+/igm, '/')
  return Gio.icon_new_for_string(p)
}

const UNIT = {
  celsius: "\u00b0C",
  fahrenheit: "\u00b0F",
  rpm: "RPM"
}

type IconType = {
  gicon: Gio.IconPrototype,
  size: number
}
const ICON: {
  [key: string]: IconType
} = {
  fan: {
    gicon: iconFrom('fan-symbolic.svg'),
    size: 12
  },
  cpu: {
    gicon: iconFrom('cpu-symbolic.svg'),
    size: 12
  },
  gpu: {
    gicon: iconFrom('gpu-symbolic.svg'),
    size: 14
  },
  hdd: {
    gicon: iconFrom('hdd-symbolic.svg'),
    size: 14
  },
}

class ConsoleUtil {
  _available: boolean = false
  _command: string = ''
  _updated: boolean = false

  execute(callback) {
    try {
      if (this.available) {
        const [ok, out, err] = GLib.spawn_command_line_sync(this.command)

        if (!ok) {
          throw new Error(ByteArray.toString(err))
        }

        if (ok && out) {
          const str = ByteArray.toString(out)
          return callback(str)
        }
      }
    } catch (e: any) {
      // error here
      debug('catch err :: ' + e)
    }
  }

  set command(cmd: string) {
    this._command = cmd
  }

  get command() {
    return this._command
  }

  set available(flag: boolean) {
    this._available = flag
  }

  get available() {
    return this._available
  }
}

type IbmAcpiData = {
  cpu: number,
  gpu: number,
  status: string,
  speed: number,
  level: string
}
class IbmAcpiUtil extends ConsoleUtil {
  _data: IbmAcpiData = {
    cpu: 0,
    gpu: 0,
    status: '...',
    speed: 0,
    level: '...'
  }

  constructor() {
    super()

    const src = [
      '/proc/acpi/ibm/thermal',
      '/proc/acpi/ibm/fan'
    ]

    this.available =
      GLib.file_test(src[0], GLib.FileTest.EXISTS) &&
      GLib.file_test(src[1], GLib.FileTest.EXISTS)

    if (this.available) {
      this.command = ['cat', src[0], src[1]].join(' ')
      // immediately get initial values
      this.update()
    }
  }

  // temperatures: 43 50 0 0 0 0 0 0
  // status: enabled
  // speed: 2314
  // level: auto
  // commands: level<level>(<level>is 0 - 7, auto, disengaged, full - speed)
  // commands: enable, disable
  // commands: watchdog<timeout>(<timeout>is 0(off), 1 - 120(seconds))
  parse(str: string) {
    const getVal = (str: string) => str
      .replace(/\t+/, " ")
      .split(': ')[1]

    const row = str.split("\n")

    const [cpu, gpu] = getVal(row[0]).split(' ')

    this._data = {
      cpu: parseInt(cpu),
      gpu: parseInt(gpu),
      status: getVal(row[1]),
      speed: parseInt(getVal(row[2])),
      level: getVal(row[3])
    }
  }

  update() {
    super.execute(this.parse.bind(this))
  }

  get cpu() {
    return this._data.cpu.toString()
  }
  get gpu() {
    return this._data.gpu.toString()
  }
  get status() {
    return this._data.status
  }
  get speed() {
    return this._data.speed.toString()
  }
  get level() {
    return this._data.level
  }
}


class SensorsUtil extends ConsoleUtil {

  constructor() {
    super()

    const path = GLib.find_program_in_path('sensors')

    this.available = Boolean(path)

    if (this.available) {
      this.command = [path, '-A', '-j'].join(' ')
    }

  }
}

type ThermalTitle = {
  constructor: (title: string) => ThermalTitle
} & Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
const ThermalTitle = GObject.registerClass(
  class ThermalTitle extends PopupMenu.PopupBaseMenuItem {
    _title: St.Label

    constructor(title: string) {
      super({
        style_class: 'tpt-popup-title', reactive: false
      })

      this.setOrnament(PopupMenu.Ornament.HIDDEN)

      this._title = new St.Label({
        text: title,
        x_align: Clutter.ActorAlign.CENTER,
        x_expand: true
      })

      this.add_child(this._title)
    }
  }
)


type ThermalItem = {
  id: string
  constructor: (data: ThermalItemData) => ThermalItem
  update: (value: string, unit?: string, label?: string) => void
} & Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
type ThermalItemData = {
  id: string,
  label: string,
  value: string,
  unit?: string,
  icon?: IconType,
  hideOrnament?: boolean
}
const ThermalItem = GObject.registerClass(
  class ThermalItem extends PopupMenu.PopupBaseMenuItem {
    _id: string
    _label: St.Label
    _value: St.Label
    _unit: St.Label

    constructor(data: ThermalItemData) {
      super({
        style_class: 'tpt-popup-item', reactive: false
      })

      this._id = data.id

      if (data.icon || data.hideOrnament) {
        this.setOrnament(PopupMenu.Ornament.HIDDEN)
      }
      if (data.icon) {
        this.add_child(new St.Icon({
          style_class: 'popup-menu-ornament',
          icon_size: 14,
          gicon: data.icon?.gicon,
        }))
      }


      this._label = new St.Label({
        style_class: 'label',
        text: data.label,
        x_align: Clutter.ActorAlign.START,
        x_expand: true
      })
      this.add_child(this._label)

      this._value = new St.Label({
        style_class: 'value',
        text: data.value
      })
      this.add_child(this._value)

      if (data?.unit) {
        this._unit = new St.Label({
          style_class: 'unit',
          text: data.unit
        })
        this.add_child(this._unit)
      }

    }

    update(value: string, unit?: string, label?: string) {
      this._value.set_text(value)
      if (unit) this._unit.set_text(unit)
      if (label) this._label.set_text(label)
    }

    get id() {
      return this._id
    }
  }
)


type IndicatorItem = {
  id: string
  update: (value: string, unit?: string) => void
} & Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>

const IndicatorItem = GObject.registerClass(
  class IndicatorItem extends St.BoxLayout {
    _id: string
    _icon: St.Icon
    _value: St.Label
    _unit: St.Label

    constructor(id: string, icon: IconType, value: string, unit: string) {
      super({ style_class: 'tpt-item' })

      this._id = id

      this._icon = new St.Icon({
        gicon: icon.gicon,
        icon_size: icon.size,
        style_class: 'tpt-item-icon',
        y_align: Clutter.ActorAlign.CENTER
      })

      this._value = new St.Label({
        text: value,
        style_class: 'tpt-item-value',
        y_align: Clutter.ActorAlign.CENTER
      })

      this._unit = new St.Label({
        text: unit,
        style_class: 'tpt-item-unit',
        y_align: Clutter.ActorAlign.CENTER
      })

      this.add_child(this._icon)
      this.add_child(this._value)
      this.add_child(this._unit)
    }

    update(value: string, unit?: string) {
      this._value.set_text(value)
      if (unit) this._unit.set_text(unit)
    }

    get id() {
      return this._id
    }
  }
)

type PopupGroup = {
  title: string
  config: ThermalItemData[],
  items: ThermalItem[]
}
const Indicator = GObject.registerClass(
  class Indicator extends PanelMenu.Button {
    _tpAcpi: IbmAcpiUtil
    _elements: string[] = ['cpu', 'gpu', 'speed']
    _indicators: IndicatorItem[] = []
    _updateInterval: GLib.Source | any
    _layout: St.BoxLayout
    _popup: PopupGroup[] = []


    // utility fn to convert celsius to fahrenheit
    _toFahrenheit = (temp: number): number => (temp * (9 / 5)) + 32

    // perform update
    _update = () => {
      if (this._tpAcpi._available) {
        this._tpAcpi.update()

        // update indicator values
        for (let i = 0; i < this._indicators.length; i++) {
          const item = this._indicators[i]
          const value = this._tpAcpi[this._indicators[i].id]
          item.update(value)
        }

        // update popup values
        for (let i = 0; i < this._popup.length; i++) {
          for (let j = 0; j < this._popup[i].items.length; j++) {
            const item = this._popup[i].items[j]
            const value = this._tpAcpi[item.id]
            item.update(value)
          }
        }

      }
    }

    // cleanup on destroy
    _destroy() {
      if (this._updateInterval?.get_id()) {
        this._updateInterval.destroy()
      }
    }

    // is element enabled?
    element(key: string): boolean {
      return this._elements.includes(key)
    }

    appendPopupMenu() {
      // Sensors
      // this.menu.addMenuItem(new ThermalTitle("Sensors"))
      // this.menu.addMenuItem(new PopupMenu.PopupSeparatorMenuItem())


      // tpAcpi groups
      if (this._tpAcpi.available) {
        // add ACPI group to popup
        this._popup.push({
          title: "ACPI",
          config: [
            { id: 'cpu', label: 'CPU', value: this._tpAcpi.cpu, unit: UNIT.celsius, icon: ICON.cpu },
            { id: 'gpu', label: 'GPU', value: this._tpAcpi.gpu, unit: UNIT.celsius, icon: ICON.gpu }
          ],
          items: []
        })
        // add Fan control group to popup
        this._popup.push({
          title: "Fan control",
          config: [
            { id: 'status', label: 'Status', value: this._tpAcpi.status, hideOrnament: true },
            { id: 'speed', label: 'Speed', value: this._tpAcpi.speed, unit: UNIT.rpm, hideOrnament: true },
            { id: 'level', label: 'Level', value: this._tpAcpi.level, hideOrnament: true }
          ],
          items: []
        })

        // place popup items on layout
        for (let i = 0; i < this._popup.length; i++) {

          const { config, title } = this._popup[i]
          this.menu.addMenuItem(new ThermalTitle(title))

          for (let j = 0; j < config.length; j++) {
            const item = new ThermalItem(config[j])
            this._popup[i].items.push(item as any)
            this.menu.addMenuItem(item)
          }

          if (i < (this._popup.length - 1)) {
            this.menu.addMenuItem(new PopupMenu.PopupSeparatorMenuItem)
          }
        }
      }
    }

    constructor(...args) {
      super(...args)

      this._tpAcpi = new IbmAcpiUtil()

      this._layout = new St.BoxLayout({
        style_class: 'tpt-button'
      })

      if (this._tpAcpi.available) {
        // add cpu to indicators
        if (this.element('cpu')) {
          this._indicators.push(
            new IndicatorItem('cpu', ICON.cpu, this._tpAcpi.cpu, UNIT.celsius)
          )
        }
        // add gpu to indicators
        if (this.element('gpu')) {
          this._indicators.push(
            new IndicatorItem('gpu', ICON.gpu, this._tpAcpi.gpu, UNIT.celsius)
          )
        }
        // add speed to indicators
        if (this.element('speed')) {
          this._indicators.push(
            new IndicatorItem('speed', ICON.fan, this._tpAcpi.speed, UNIT.rpm)
          )
        }

        // place indicators on layout
        for (let i = 0; i < this._indicators.length; i++) {
          this._layout.add_child(this._indicators[i])
        }

        this.appendPopupMenu()

      } else {
        this._layout.add_child(new St.Label({ text: "N/A" }))
      }


      this.add_actor(this._layout)

      if (this._tpAcpi.available) {
        this._updateInterval = setInterval(this._update.bind(this), 5000)

        this.connect("destroy", this._destroy.bind(this))
      }
    }
  }
)

class ThinkPadThermal {
  _uuid: any
  _indicator: any

  constructor(uuid) {
    this._uuid = uuid
  }

  enable() {
    this._indicator = new Indicator(0.0, _('ThinkPad Thermal'))
    Main.panel.addToStatusArea(this._uuid, this._indicator)
  }

  disable() {
    this._indicator.destroy()
    this._indicator = null
  }
}

export default function (meta): ThinkPadThermal {
  return new ThinkPadThermal(meta.uuid)
}
