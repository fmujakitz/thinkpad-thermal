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

const iconFrom = (filename: string) => Gio.icon_new_for_string(
  [Me.path, 'icons', filename].join('/').replace(/\/+/igm, '/')
)

const $_ = (...args) => args.join('-')

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
  fan: { gicon: iconFrom('fan-symbolic.svg'), size: 12 },
  cpu: { gicon: iconFrom('cpu-symbolic.svg'), size: 12 },
  gpu: { gicon: iconFrom('gpu-symbolic.svg'), size: 14 },
  hdd: { gicon: iconFrom('hdd-symbolic.svg'), size: 14 },
  sensor: { gicon: iconFrom('sensor-symbolic.svg'), size: 14 }
}

class ConsoleUtil {
  private _available: boolean = false
  private _command: string = ''

  constructor(program: string | string[], ...args: string[]) {

    if (typeof program === 'string') {
      const path = GLib.find_program_in_path(program as string)
      this._available = Boolean(path)

      if (this._available) {
        this._command = [path, ...args].join(' ')
      }
    }

    if (typeof program === 'object' && Array.isArray(program)) {
      this._available = program.every((file: string) => GLib.file_test(file, GLib.FileTest.EXISTS))

      if (this._available) {
        this._command = ['cat', ...program, ...args].join(' ')
      }
    }

    // debug("ConsoleUtil " + this._command)


  }

  execute(callback) {
    try {
      if (this.available) {
        const [ok, out, err] = GLib.spawn_command_line_sync(this._command)

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

  get available() {
    return this._available
  }

}
class LscpuUtil extends ConsoleUtil {
  private _name: string
  constructor() {
    super('lscpu')
    if (this.available) this.update()
  }

  private parse(str: string) {
    let name = str
      .split(/\n/)
      .find(row => row.includes("Model name:"))
      ?.replace("Model name:", '')
      .split('@')[0]
      .replace(/CPU/, ' ')
      .replace(/ +/igm, ' ')
      .trim()

    this._name = name || "Processor"
  }

  update() {
    super.execute(this.parse.bind(this))
  }

  get name() {
    return this._name
  }
}
class LsblkUtil extends ConsoleUtil {
  private _data: {
    [key: string]: string
  }
  constructor() {
    super('lsblk', '-o', 'HCTL,MODEL,NAME,TRAN,VENDOR,TYPE', '-dnJ')

    if (this.available) this.update()
  }

  private simplify(obj) {
    return obj.blockdevices.reduce((acc, { hctl, model }) => {
      const [a, b] = hctl.split(':')
      const key = ['drivetemp', 'scsi', a, b].join('-')
      acc[key] = model
      return acc
    }, {})
  }

  private parse(str: string) {
    this._data = this.simplify(JSON.parse(str))
  }

  update() {
    super.execute(this.parse.bind(this))
  }

  name(key: string) {
    return this._data[key]
  }
}
type SensorsData = {
  cpu: object,
  hdd: object,
  bat: object,
  fan: object,
  other: object
}
class SensorsUtil extends ConsoleUtil {
  private _lscpu: LscpuUtil
  private _lsblk: LsblkUtil
  private _data: SensorsData

  constructor() {
    super('sensors', '-A', '-j')

    if (this.available) {
      this._lscpu = new LscpuUtil()
      this._lsblk = new LsblkUtil()
      this.update()
    }
  }

  private simplify(obj) {
    const input = new RegExp(/input$/)

    return Object.keys(obj).reduce((acc, key) => {
      const inner = Object.keys(obj[key]).find(k => input.test(k))

      if (inner) {
        let value = obj[key][inner]
        if (value > 0) {
          if (typeof value === 'number') value = value.toString()
          acc[key] = value
        }
      } else {
        acc[key] = this.simplify(obj[key])
      }

      return acc
    }, {})
  }

  private organize(data: object) {
    const cores = new RegExp(/^coretemp/i)
    const drives = new RegExp(/^drivetemp/i)
    const batteries = new RegExp(/^bat/i)
    const tpisa = new RegExp(/^thinkpad-isa/i)

    return Object.keys(data).reduce((acc, key) => {
      let value = data[key]

      if (Object.keys(value).length === 1) {
        value = Object.values(value)[0]
        if (typeof value === 'number') {
          value = value.toString()
        }
      }

      if (cores.test(key)) {
        acc.cpu[this._lscpu.name] = value
        return acc
      }

      if (drives.test(key)) {
        acc.hdd[this._lsblk.name(key)] = value
        return acc
      }

      if (batteries.test(key)) {
        const k = key.split('-')[0]
        acc.bat[k] = value
        return acc
      }

      if (tpisa.test(key)) {
        const fans = new RegExp(/^fan/i)
        acc.fan = Object.keys(value)
          .filter(k => fans.test(k))
          .reduce((acc, k) => {
            acc[k] = value[k].toString()
            return acc
          }, {})

        return acc
      }

      acc.other[key] = value

      return acc
    }, { cpu: {}, hdd: {}, bat: {}, fan: {}, other: {} })
  }

  private parse(str: string) {
    this._data = this.organize(this.simplify(JSON.parse(str)))
    // console.log(this._data)
  }

  update() {
    super.execute(this.parse.bind(this))
  }

  private verify(obj) {
    return Object.keys(obj).length ? obj : false
  }

  get cpu() {
    return this.verify(this._data.cpu)
  }
  get hdd() {
    return this.verify(this._data.hdd)
  }
  get bat() {
    return this.verify(this._data.bat)
  }
  get fan() {
    return this.verify(this._data.fan)
  }
  get other() {
    return this.verify(this._data.other)
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
  private _data: IbmAcpiData = {
    cpu: 0,
    gpu: 0,
    status: '...',
    speed: 0,
    level: '...'
  }

  constructor() {
    super([
      '/proc/acpi/ibm/thermal',
      '/proc/acpi/ibm/fan'
    ])

    // immediately get initial values
    if (this.available) this.update()
  }

  // temperatures: 43 50 0 0 0 0 0 0
  // status: enabled
  // speed: 2314
  // level: auto
  // commands: level<level>(<level>is 0 - 7, auto, disengaged, full - speed)
  // commands: enable, disable
  // commands: watchdog<timeout>(<timeout>is 0(off), 1 - 120(seconds))
  private parse(str: string) {
    const getVal = (str: string) => str
      .replace(/\t+/, " ")
      .split(': ')[1]

    const row = str.split(/\n/)

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

type ThermalTitle = {
  constructor: (title: string) => ThermalTitle
} & Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
const ThermalTitle = GObject.registerClass(
  class ThermalTitle extends PopupMenu.PopupBaseMenuItem {
    _title: St.Label

    constructor(style_class: string, title: string) {
      super({
        style_class, reactive: false
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


type ThermalItemProps = {
  unit?: string,
  icon?: IconType,
  hideOrnament?: boolean
}
type ThermalItem = {
  update: (value: string, unit?: string, label?: string) => void
} & Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
const ThermalItem = GObject.registerClass(
  class ThermalItem extends PopupMenu.PopupBaseMenuItem {
    _updater: UpdaterFn
    _label: St.Label
    _value: St.Label
    _unit: St.Label

    constructor(style_class: string, updater: UpdaterFn, label: string, props?: ThermalItemProps) {
      super({ style_class, reactive: false })

      this._updater = updater

      if (props?.icon || props?.hideOrnament) {
        this.setOrnament(PopupMenu.Ornament.HIDDEN)
      }
      if (props?.icon) {
        this.add_child(new St.Icon({
          style_class: 'popup-menu-ornament',
          icon_size: 14,
          gicon: props?.icon?.gicon,
          y_align: Clutter.ActorAlign.CENTER
        }))
      }

      this._label = new St.Label({
        style_class: 'label',
        text: label,
        x_align: Clutter.ActorAlign.START,
        x_expand: true
      })

      this._value = new St.Label({
        style_class: 'value',
        text: updater()
      })

      const els = [this._label, this._value]

      if (props?.unit) {
        this._unit = new St.Label({
          style_class: 'unit',
          text: props.unit
        })
        els.push(this._unit)
      }

      els.forEach(el => this.add_child(el))

    }

    update(unit?: string, label?: string) {
      const value = this._updater()
      this._value.set_text(value)
      if (unit) this._unit.set_text(unit)
      if (label) this._label.set_text(label)
    }
  }
)

type ChildrenUpdaterFn = () => object
type ThermalGroupChild = {
  key: string
  element: any
}
type ThermalGroupProps = {
  icon: IconType,
  unit?: string,
}
const ThermalGroup = GObject.registerClass(
  class ThermalGroup extends PopupMenu.PopupSubMenuMenuItem {
    _children: ThermalGroupChild[] = []

    constructor(style_class: string, updater: ChildrenUpdaterFn, label: string, props?: ThermalGroupProps) {
      super(label, true)

      this.add_style_class_name(style_class)
      this.setOrnament(PopupMenu.Ornament.HIDDEN)

      if (props?.icon) this.icon.gicon = props?.icon.gicon

      const data = updater()
      this._children = Object.keys(data).map(key => ({
        key,
        // @ts-expect-error
        element: new ThermalItem("tpt-popup-submenu-item", () => updater()[key], key, { ...props, icon: false, hideOrnament: true })
      }))

      this._children.forEach(({ element }) => this.menu.addMenuItem(element, undefined))

    }

    update() {
      this._children.forEach(({ element }) => element.update())
    }
  }
)

type UpdaterFn = () => string
type IndicatorItem = {
  update: (value: string, unit?: string) => void
} & Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
const IndicatorItem = GObject.registerClass(
  class IndicatorItem extends St.BoxLayout {
    _updater: UpdaterFn
    _icon: St.Icon
    _value: St.Label
    _unit: St.Label

    constructor(style_class: string, updater: UpdaterFn, icon: IconType, unit: string) {
      // constructor(id: string, icon: IconType, value: string, unit: string) {
      super({ style_class })

      this._updater = updater

      this._icon = new St.Icon({
        gicon: icon.gicon,
        icon_size: icon.size,
        style_class: 'icon',
        y_align: Clutter.ActorAlign.CENTER
      })

      this._value = new St.Label({
        text: updater(),
        style_class: 'value',
        y_align: Clutter.ActorAlign.CENTER
      })

      this._unit = new St.Label({
        text: unit,
        style_class: 'unit',
        y_align: Clutter.ActorAlign.CENTER
      })

      const els = [this._icon, this._value, this._unit]
      els.forEach(el => this.add_child(el))
    }

    update(unit?: string) {
      const value = this._updater()
      this._value.set_text(value)
      if (unit) this._unit.set_text(unit)
    }
  }
)

type BindingType = "tpt-button" | "tpt-popup-title" | "tpt-popup-item" | "tpt-popup-submenu" | "separator"
type Binding = {
  type: BindingType
  element: any
}
const Indicator = GObject.registerClass(
  class Indicator extends PanelMenu.Button {
    // utils
    _tpAcpi: IbmAcpiUtil
    _sensors: SensorsUtil
    // ui
    _buttonLayout: St.BoxLayout = new St.BoxLayout({ style_class: 'tpt-button-layout' })
    // internals
    _bindings: Binding[] = []
    _elements: string[] = ['cpu', 'gpu', 'speed']
    _updateInterval: GLib.Source | any

    constructor(...args) {
      super(...args)

      this._tpAcpi = new IbmAcpiUtil()
      this._sensors = new SensorsUtil()

      if (this._tpAcpi.available) {
        this.appendButton()
        this.appendPopupMenu()
      } else {
        this._buttonLayout.add_child(new St.Label({ text: "ThinkPad ACPI is not available" }))
      }

      this.add_actor(this._buttonLayout)

      if (this._tpAcpi.available) {
        this._updateInterval = setInterval(this._update.bind(this), 5000)
        this.connect("destroy", this._destroy.bind(this))
      }
    }

    // utility fn to convert celsius to fahrenheit
    _toFahrenheit = (temp: number): number => (temp * (9 / 5)) + 32

    // perform update
    _update = () => {
      if (this._tpAcpi.available) this._tpAcpi.update()
      if (this._sensors.available) this._sensors.update()

      // update values for non static bound elements
      this._bindings
        .filter(({ type }) => !['separator', 'tpt-popup-title'].includes(type))
        .forEach(({ element }) => {
          if (typeof element.update === 'function') element.update()
        })
    }
    // create and attach element to bindings
    _attach(Element, type: BindingType, ...args) {
      if (type === 'separator') {
        this.menu.addMenuItem(new PopupMenu.PopupSeparatorMenuItem)
        return
      }

      const element = new Element(type, ...args)
      this._bindings.push({ type, element })


      if (['tpt-button'].includes(type))
        this._buttonLayout.add_child(element)

      if (['tpt-popup-submenu', 'tpt-popup-title', 'tpt-popup-item'].includes(type))
        this.menu.addMenuItem(element)
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


    appendButton() {
      // attach cpu, gpu, speed indicator
      if (this.element('cpu')) this._attach(IndicatorItem, "tpt-button", () => this._tpAcpi.cpu, ICON.cpu, UNIT.celsius)
      if (this.element('gpu')) this._attach(IndicatorItem, "tpt-button", () => this._tpAcpi.gpu, ICON.gpu, UNIT.celsius)
      if (this.element('speed')) this._attach(IndicatorItem, "tpt-button", () => this._tpAcpi.speed, ICON.fan, UNIT.rpm)
    }

    appendPopupMenu() {
      // Sensors

      if (this._sensors.available) {

        // attach submenu for every cpu
        if (this._sensors.cpu) Object.keys(this._sensors.cpu)
          .forEach(k => this._attach(ThermalGroup, "tpt-popup-submenu", () => this._sensors.cpu[k], k, { icon: ICON.cpu, unit: UNIT.celsius }))
        // attach submenu for disks
        if (this._sensors.hdd) this._attach(ThermalGroup, "tpt-popup-submenu", () => this._sensors.hdd, "Disks", { icon: ICON.hdd, unit: UNIT.celsius })
        // attach submenu for other thermal sensors
        if (this._sensors.other) this._attach(ThermalGroup, "tpt-popup-submenu", () => this._sensors.other, "Thermal", { icon: ICON.sensor, unit: UNIT.celsius })
        // attach submenu for fans
        if (this._sensors.fan) this._attach(ThermalGroup, "tpt-popup-submenu", () => this._sensors.fan, "Cooling", { icon: ICON.fan, unit: UNIT.rpm })

      }

      // tpAcpi groups
      if (this._tpAcpi.available) {
        // add ACPI items to popup
        this._attach(ThermalTitle, "tpt-popup-title", "ACPI")
        this._attach(ThermalItem, "tpt-popup-item", () => this._tpAcpi.cpu, "CPU", { unit: UNIT.celsius, icon: ICON.cpu })
        this._attach(ThermalItem, "tpt-popup-item", () => this._tpAcpi.gpu, "GPU", { unit: UNIT.celsius, icon: ICON.gpu })

        // add Fan control items to popup
        this._attach(ThermalTitle, "tpt-popup-title", "Fan control")
        this._attach(ThermalItem, "tpt-popup-item", () => this._tpAcpi.status, "Status", { hideOrnament: true })
        this._attach(ThermalItem, "tpt-popup-item", () => this._tpAcpi.speed, "Speed", { unit: UNIT.rpm, hideOrnament: true })
        this._attach(ThermalItem, "tpt-popup-item", () => this._tpAcpi.level, "Level", { hideOrnament: true })
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
    this._indicator = new Indicator(St.Align.START, _('ThinkPad Thermal'))
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
