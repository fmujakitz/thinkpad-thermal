// import './stylesheet.css';
import Clutter from 'gi://Clutter';
import Gio from 'gi://Gio';
import GLib from 'gi://GLib';
import GObject from 'gi://GObject';
import St from 'gi://St';
import * as PanelMenu from 'resource:///org/gnome/shell/ui/panelMenu.js';
import * as PopupMenu from 'resource:///org/gnome/shell/ui/popupMenu.js';
import * as Main from 'resource:///org/gnome/shell/ui/main.js';
import { Extension } from 'resource:///org/gnome/shell/extensions/extension.js';

import IbmAcpiUtil from './IbmAcpi.js';
import SensorsUtil from './Sensors.js';


//
//
//

const UPDATE_INTERVAL = 2000

const _ = (text: string) => text

const UNIT = {
  celsius: "\u00b0C",
  fahrenheit: "\u00b0F",
  rpm: "RPM"
}

type ThermalTitle = {
  constructor: (title: string) => ThermalTitle
} & Clutter.Actor
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
  value: string
  label: string
  unit?: string
  icon?: IconType
  hideOrnament?: boolean
}
type ThermalItem = {
  update: (props: ThermalItemProps) => void
} & Clutter.Actor
const ThermalItem = GObject.registerClass(
  class ThermalItem extends PopupMenu.PopupBaseMenuItem {
    _label: St.Label
    _value: St.Label
    _unit: St.Label

    constructor(
      style_class: string,
      { value, label, unit, icon, hideOrnament }: ThermalItemProps,
    ) {
      super({ style_class, reactive: false })

      if (icon || hideOrnament) {
        this.setOrnament(PopupMenu.Ornament.HIDDEN)
      }

      if (icon) {
        this.add_child(new St.Icon({
          style_class: 'popup-menu-ornament',
          icon_size: 14,
          gicon: icon?.gicon,
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
        text: typeof value === 'string' ? value : 'N/A'
      })

      const els = [this._label, this._value]

      if (unit) {
        this._unit = new St.Label({
          style_class: 'unit',
          text: unit
        })
        els.push(this._unit)
      }

      els.forEach(el => this.add_child(el))
    }

    update({ value, label, unit }) {
      this._value.set_text(value)

      if (unit) this._unit.set_text(unit)

      if (label) this._label.set_text(label)
    }
  }
)

type ThermalGroupChild = {
  key: string
  element: any
}
type ThermalGroupProps = {
  values: {
    [key: string]: string
  }
  icon: IconType
  unit?: string
  label: string
  hasOrnament: boolean
}
type ThermalGroup = {
  update: (props: ThermalGroupProps) => void
} & Clutter.Actor
const ThermalGroup = GObject.registerClass(
  class ThermalGroup extends PopupMenu.PopupSubMenuMenuItem {
    _children: ThermalGroupChild[] = []

    constructor(
      style_class: string,
      { values, label, icon, unit }: ThermalGroupProps,
    ) {
      super(label, true)
      this.add_style_class_name(style_class)
      this.setOrnament(PopupMenu.Ornament.HIDDEN)


      if (icon) {
        // @ts-expect-error
        this.icon.gicon = icon.gicon
      }

      this._children = Object.keys(values).map(key => ({
        key,
        element: new ThermalItem("tpt-popup-submenu-item", {
          value: values[key],
          unit,
          label: key,
          hideOrnament: true
        } as ThermalItemProps)
      }))

      this._children.forEach(({ element }) => this.menu.addMenuItem(element, undefined))

    }

    update({ values }) {
      this._children.forEach(({ key, element }) => element.update({ value: values[key] }))
    }
  }
)
type ThermalDropDownProps = {
  value: string
  label: string
  items: any
  onClick: (id: string) => any
}
type ThermalDropDown = {
  update: (props: ThermalDropDownProps) => void
} & Clutter.Actor
const ThermalDropDown = GObject.registerClass(
  class ThermalDropDown extends PopupMenu.PopupSubMenuMenuItem {
    _value: St.Label
    _children

    constructor(
      style_class: string,
      { value, label, items, onClick }: ThermalDropDownProps
    ) {
      super(label, false)

      this.add_style_class_name(style_class)
      this.setOrnament(PopupMenu.Ornament.HIDDEN)

      this._value = new St.Label({
        style_class: 'value',
        text: value,
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
        element.connect("activate", () => onClick(key))

        return ({ key, element })
      })

      this._children.forEach(({ element }) => this.menu.addMenuItem(element, undefined))
    }

    update({ value }) {
      this._value.set_text(value)
    }
  }
)

type IndicatorItemProps = {
  value: string
  icon: IconType
  unit: string
}
type IndicatorItem = {
  update: (props: IndicatorItemProps) => void
} & Clutter.Actor
const IndicatorItem = GObject.registerClass(
  class IndicatorItem extends St.BoxLayout {
    _icon: St.Icon
    _value: St.Label
    _unit: St.Label
    _off: St.Label | false

    constructor(
      style_class: string,
      { icon, value, unit }: IndicatorItemProps,
    ) {
      super({ style_class })

      this._icon = new St.Icon({
        gicon: icon.gicon,
        icon_size: icon.size,
        style_class: 'icon',
        y_align: Clutter.ActorAlign.CENTER
      })

      this._value = new St.Label({
        text: value,
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

      this.off(value === "0")
    }

    private off(hide) {
      if (!this._off) return

      this._off.visible = hide
      this._unit.visible = !hide
      this._value.visible = !hide
    }

    update({ value, unit }) {
      this._value.set_text(value)

      if (unit) this._unit.set_text(unit)

      this.off(value === "0")
    }
  }
)
type IconType = {
  gicon: Gio.Icon | null,
  size: number
}
type BindingType = "tpt-button" | "tpt-popup-title" | "tpt-popup-item" | "tpt-popup-submenu" | "separator" | "tpt-popup-dropdown"
type Binding = {
  type: BindingType
  element: any
  updater: () => void
}

const Indicator = GObject.registerClass(
  class Indicator extends PanelMenu.Button {
    // icons
    _i: {
      [key: string]: IconType
    } = {}
    // utils
    _tpAcpi: IbmAcpiUtil
    _sensors: SensorsUtil
    // ui
    _buttonLayout: St.BoxLayout = new St.BoxLayout({ style_class: 'tpt-button-layout' })
    // internals
    _bindings: Binding[] = []
    _elements: string[] = ['cpu', 'gpu', 'speed']
    _updateInterval: GLib.Source | any
    _temp: string = UNIT.celsius

    constructor(
      ext: Extension,
      align: number,
      name: string
    ) {
      super(align, name)

      this._tpAcpi = new IbmAcpiUtil()
      this._sensors = new SensorsUtil()

      const icons = ['cpu', 'gpu', 'hdd', 'fan', 'sensor']

      icons.forEach(k => {
        const name = k + '-symbolic.svg'
        const path = [
          ext.dir.get_child('icons').get_path(),
          name
        ].join('/')
        this._i[k] = {
          gicon: Gio.icon_new_for_string(path),
          size: 14
        }
      })

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
        this._updateInterval = setInterval(this._update.bind(this), UPDATE_INTERVAL)
        this.connect("destroy", this._destroy.bind(this))
      }
    }

    // utility fn to convert celsius to fahrenheit
    _toFahrenheit = (t: string): string => ((parseFloat(t) * (9 / 5)) + 32).toFixed(1)
    _convert = (t: string | Object): string | Object => {
      if (this._temp === UNIT.fahrenheit) {
        if (typeof t === 'string') return this._toFahrenheit(t)
        const o = { ...t }
        Object.keys(o).forEach(k => {
          o[k] = this._toFahrenheit(o[k])
        })
        return o
      }
      return t
    }

    // perform update
    _update = async () => {
      // get the data
      await Promise.all([
        this._tpAcpi.available ? this._tpAcpi.update() : null,
        this._sensors.available ? this._sensors.update() : null
      ].filter(p => p != null))

      // update values for non static bound elements
      this._bindings
        .filter(({ type, updater }) => typeof updater === 'function' && !['separator', 'tpt-popup-title'].includes(type))
        .forEach(({ element, updater }) => {
          const props = updater()
          element.update(props)
        })
    }
    // create and attach element to bindings
    _attach(Element, type: BindingType, ...args) {
      if (type === 'separator') {
        this.menu.addMenuItem(new PopupMenu.PopupSeparatorMenuItem(''))
        return
      }

      const [updater, ...rest] = args
      if (typeof updater === 'function') {
        const props = updater()
        args = [props, ...rest]
      }

      const element = new Element(type, ...args)

      this._bindings.push({ type, element, updater })

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
      if (this.element('cpu')) this._attach(IndicatorItem, "tpt-button", () => ({
        value: this._convert(this._tpAcpi.cpu),
        icon: this._i.cpu,
        unit: this._temp
      }))

      if (this.element('gpu')) this._attach(IndicatorItem, "tpt-button", () => ({
        value: this._convert(this._tpAcpi.gpu),
        icon: this._i.gpu,
        unit: this._temp
      }))

      if (this.element('speed')) this._attach(IndicatorItem, "tpt-button", () => ({
        value: this._tpAcpi.speed,
        icon: this._i.fan,
        unit: UNIT.rpm
      }))
    }

    appendPopupMenu() {
      // Sensors
      if (this._sensors.available) {
        // attach submenu for every cpu
        if (this._sensors.cpu) Object.keys(this._sensors.cpu)
          .forEach(k => this._attach(ThermalGroup, "tpt-popup-submenu", () => ({
            values: this._convert(this._sensors.cpu[k]),
            label: k,
            icon: this._i.cpu,
            unit: this._temp
          })))
        // attach submenu for disks
        if (this._sensors.hdd) this._attach(ThermalGroup, "tpt-popup-submenu", () => ({
          values: this._convert(this._sensors.hdd),
          label: "Disks",
          icon: this._i.hdd,
          unit: this._temp
        }))
        // attach submenu for other thermal sensors
        if (this._sensors.other) this._attach(ThermalGroup, "tpt-popup-submenu", () => ({
          values: this._convert(this._sensors.other),
          label: "Thermal",
          icon: this._i.sensor,
          unit: this._temp
        }))
        // attach submenu for fans
        if (this._sensors.fan) this._attach(ThermalGroup, "tpt-popup-submenu", () => ({
          values: this._sensors.fan,
          label: "Cooling",
          icon: this._i.fan,
          unit: UNIT.rpm
        }))

      }

      // tpAcpi groups
      if (this._tpAcpi.available) {
        // add ACPI items to popup
        this._attach(ThermalTitle, "tpt-popup-title", "ACPI")
        if (this.element('cpu')) {
          this._attach(ThermalItem, "tpt-popup-item", () => ({
            value: this._convert(this._tpAcpi.cpu),
            label: "CPU",
            unit: this._temp,
            icon: this._i.cpu
          }))
        }
        if (this.element('gpu')) {
          this._attach(ThermalItem, "tpt-popup-item", () => ({
            value: this._convert(this._tpAcpi.gpu),
            label: "GPU",
            unit: this._temp,
            icon: this._i.gpu
          }))
        }

        // add Fan control items to popup
        this._attach(ThermalTitle, "tpt-popup-title", "Fan control")
        this._attach(ThermalItem, "tpt-popup-item", () => ({
          value: this._tpAcpi.status,
          label: "Status",
          hideOrnament: true
        }))
        this._attach(ThermalItem, "tpt-popup-item", () => ({
          value: this._tpAcpi.speed,
          label: "Speed",
          unit: UNIT.rpm,
          hideOrnament: true
        }))

        // show dropdown if fan control is enabled
        if (this._tpAcpi.status === 'enabled' && this._tpAcpi.levels.length) {
          this._attach(ThermalDropDown, "tpt-popup-dropdown", () => ({
            value: this._tpAcpi.level,
            label: "Levels",
            items: this._tpAcpi.levels,
            onClick: a => this._tpAcpi.setLevel(a)
          }))
        } else {
          this._attach(ThermalItem, "tpt-popup-item", () => ({
            value: this._tpAcpi.level,
            label: "Level",
            hideOrnament: true
          }))
        }
      }
    }
  }
)

export default class ThinkPadThermal extends Extension {
  _indicator: any

  constructor(meta) {
    super(meta)
  }

  override enable() {
    this._indicator = new Indicator(this, 0.5, _('ThinkPad Thermal'))
    Main.panel.addToStatusArea(this.uuid, this._indicator)
  }

  override disable() {
    this._indicator.destroy()
    this._indicator = null
  }
}
