import './stylesheet.css';
import Clutter from 'gi://Clutter';
import Gio from 'gi://Gio';
import GLib from 'gi://GLib';
import GObject from 'gi://GObject';
import St from 'gi://St';
import * as PanelMenu from 'resource:///org/gnome/shell/ui/panelMenu.js';
import * as PopupMenu from 'resource:///org/gnome/shell/ui/popupMenu.js';
import * as Main from 'resource:///org/gnome/shell/ui/main.js';
import IbmAcpiUtil from './IbmAcpi';
import SensorsUtil from './Sensors';

// const ExtensionUtils = imports.misc.extensionUtils
// const Main = imports.ui.main
// const Me = ExtensionUtils.getCurrentExtension()


// const GETTEXT_DOMAIN = 'my-indicator-extension'
// const _ = ExtensionUtils.gettext

const _ = (text: string) => text
// const $$ = (...args: string[]): string => ['[tpt]', '=>', ...args].join(' ')

const iconFrom = (filename: string) => Gio.icon_new_for_string(
  [/*Me.path, */'icons', filename].join('/').replace(/\/+/igm, '/')
)

// const $_ = (...args) => args.join('-')

const UNIT = {
  celsius: "\u00b0C",
  fahrenheit: "\u00b0F",
  rpm: "RPM"
}

type IconType = {
  gicon: Gio.Icon,
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

// type ThermalTitle = {
//   constructor: (title: string) => ThermalTitle
// } & Clutter.Actor //<Clutter.LayoutManager, Clutter.Content>
// const ThermalTitle = GObject.registerClass(
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
// )


type ThermalItemProps = {
  unit?: string,
  icon?: IconType,
  hideOrnament?: boolean
}
type ThermalItem = {
  update: (value: string, unit?: string, label?: string) => void
} & Clutter.Actor //<Clutter.LayoutManager, Clutter.Content>
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

      const value = updater()

      this._value = new St.Label({
        style_class: 'value',
        text: typeof value === 'string' ? value : 'N/A'
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

      if (props?.icon) {
        console.log('should set icon?!?')
        // this.icon.gicon = props?.icon.gicon
      }

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

const ThermalDropDown = GObject.registerClass(
  class ThermalDropDown extends PopupMenu.PopupSubMenuMenuItem {
    _value: St.Label
    _updater: () => string
    _children

    constructor(style_class: string, updater: () => string, label: string, items: string[], action: (id) => void) {
      super(label, false)
      this.add_style_class_name(style_class)
      this.setOrnament(PopupMenu.Ornament.HIDDEN)

      this._updater = updater

      this._value = new St.Label({
        style_class: 'value',
        text: updater(),
        x_align: Clutter.ActorAlign.END,
        x_expand: false
      })

      this.insert_child_at_index(this._value, this.get_children().length - 1)

      this._children = items.map(key => {
        const element = new PopupMenu.PopupBaseMenuItem({
          style_class: 'tpt-popup-dropdown-item'
        })
        element.add_child(new St.Label({
          style_class: 'label',
          text: key,
          x_align: Clutter.ActorAlign.END,
          x_expand: true
        }))
        element.connect("activate", () => action(key))

        return ({ key, element })
      })

      this._children.forEach(({ element }) => this.menu.addMenuItem(element, undefined))
    }

    update() {
      this._value.set_text(this._updater())
    }
  }
)

type UpdaterFn = () => string
type IndicatorItem = {
  update: (value: string, unit?: string) => void
} & Clutter.Actor //<Clutter.LayoutManager, Clutter.Content>
const IndicatorItem = GObject.registerClass(
  class IndicatorItem extends St.BoxLayout {
    _updater: UpdaterFn
    _icon: St.Icon
    _value: St.Label
    _unit: St.Label
    _off: St.Label | false

    constructor(style_class: string, updater: UpdaterFn, icon: IconType, unit: string) {
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

      this._off = unit === 'RPM' ? new St.Label({
        text: 'OFF',
        style_class: 'unit',
        y_align: Clutter.ActorAlign.CENTER,
      }) : false

      const els = [this._icon, this._value, this._unit]
      els.forEach(el => this.add_child(el))

      if (this._off) this.add_child(this._off)

      this.update()
    }

    private off(hide) {
      if (!this._off) return

      this._off.visible = hide
      this._unit.visible = !hide
      this._value.visible = !hide
    }

    update(unit?: string) {
      const v = this._updater()
      this._value.set_text(v)

      if (unit) this._unit.set_text(unit)

      this.off(v === "0")
    }
  }
)

type BindingType = "tpt-button" | "tpt-popup-title" | "tpt-popup-item" | "tpt-popup-submenu" | "separator" | "tpt-popup-dropdown"
type Binding = {
  type: BindingType
  element: any
}
// const Indicator = GObject.registerClass(
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

    constructor(a, b) {
      super(a, b)

      this._tpAcpi = new IbmAcpiUtil()
      this._sensors = new SensorsUtil()

      this._start()

      // applying the style class overrides default styling
      // this.style_class = "tpt"
    }

    _checkElements = () => {
      // check the reading for dedicated gpu
      // remove the element in case of anything <= 0
      // since reading of unavailable sensor appears to be either -128 or 0
      if (parseInt(this._tpAcpi.gpu) <= 0) {
        this._elements = this._elements.filter(e => e !== 'gpu')
      }
    }

    _start = async () => {
      if (this._tpAcpi.available) {
        await this._tpAcpi.update()
        this._checkElements()
        this.appendButton()
        if (this._sensors.available) await this._sensors.update()
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
    _update = async () => {
      // get the data
      await Promise.all([
        this._tpAcpi.available ? this._tpAcpi.update() : null,
        this._sensors.available ? this._sensors.update() : null
      ].filter(p => p != null))

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
        this.menu.addMenuItem(new PopupMenu.PopupSeparatorMenuItem(''))
        return
      }

      const element = new Element(type, ...args)
      this._bindings.push({ type, element })


      if (['tpt-button'].includes(type))
        this._buttonLayout.add_child(element)

      if (['tpt-popup-dropdown', 'tpt-popup-submenu', 'tpt-popup-title', 'tpt-popup-item'].includes(type))
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
        if (this.element('cpu')) {
          this._attach(ThermalItem, "tpt-popup-item", () => this._tpAcpi.cpu, "CPU", { unit: UNIT.celsius, icon: ICON.cpu })
        }
        if (this.element('gpu')) {
          this._attach(ThermalItem, "tpt-popup-item", () => this._tpAcpi.gpu, "GPU", { unit: UNIT.celsius, icon: ICON.gpu })
        }

        // add Fan control items to popup
        this._attach(ThermalTitle, "tpt-popup-title", "Fan control")
        this._attach(ThermalItem, "tpt-popup-item", () => this._tpAcpi.status, "Status", { hideOrnament: true })
        this._attach(ThermalItem, "tpt-popup-item", () => this._tpAcpi.speed, "Speed", { unit: UNIT.rpm, hideOrnament: true })

        // show dropdown if fan control is enabled
        if (this._tpAcpi.status === 'enabled' && this._tpAcpi.levels.length) {
          this._attach(ThermalDropDown, "tpt-popup-dropdown", () => this._tpAcpi.level, "Levels", this._tpAcpi.levels, a => this._tpAcpi.setLevel(a))
        } else {
          this._attach(ThermalItem, "tpt-popup-item", () => this._tpAcpi.level, "Level", { hideOrnament: true })
        }
      }
    }
  }
// )

class ThinkPadThermal {
  _uuid: any
  _indicator: any

  constructor(uuid) {
    this._uuid = uuid
  }

  enable() {
    this._indicator = new Indicator(0.5, _('ThinkPad Thermal'))
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
