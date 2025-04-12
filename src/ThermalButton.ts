import type Gio from 'gi://Gio'
import type IbmAcpiUtil from './IbmAcpi.js'

import GObject from 'gi://GObject'
import St from 'gi://St'
import * as PanelMenu from 'resource:///org/gnome/shell/ui/panelMenu.js'
import { ButtonSection } from './ThermalUI.js'

class ThermalButton extends PanelMenu.Button {
  static {
    GObject.registerClass(ThermalButton)
  }
  private _data: IbmAcpiUtil
  private layout: St.BoxLayout = new St.BoxLayout({
    style_class: 'layout',
  })

  constructor(
    align: number,
    name: string,
    data: IbmAcpiUtil,
    settings: Gio.Settings
  ) {
    super(align, name)
    this._data = data

    this.add_style_class_name('tpt-button')
    this.add_child(this.layout)

    this.addIndicator('cpu')()

    this.addIndicator('gpu')((el, next) => {
      if (next.hasDedicatedGpu) {
        el.show()
        el.update(next.gpu)
      } else {
        el.hide()
      }
    })

    this.addIndicator(
      'speed',
      'fan'
    )((el, { speed }) => {
      el.add_style_class_name('text-only')
      if (speed === '0 RPM') return el.update('OFF')
      if (speed === '65535 RPM') return el.update('SPOOLING')
      el.remove_style_class_name('text-only')
      return el.update(speed)
    })

    this.toggleUnit(settings.get_boolean('show-indicator-unit'))
    settings.connect('changed::show-indicator-unit', () => {
      this.toggleUnit(settings.get_boolean('show-indicator-unit'))
    })
  }

  private toggleUnit(showUnit: boolean) {
    for (const el of this.layout.get_children() as ButtonSection[])
      el.toggleUnit(showUnit)
  }

  private addIndicator<K extends ThinkPadThermal.IndicatorKeys>(
    key: K,
    icon?: string
  ) {
    return (handler?: (child: ButtonSection, next: IbmAcpiUtil) => void) => {
      const text = this._data[key]
      const child = new ButtonSection(key, text, icon)

      this.layout.add_child(child)

      const connectId = this._data.connect(`notify::${key}`, (next) =>
        typeof handler === 'function' //
          ? handler(child, next)
          : child.update(next[key])
      )

      child.connect('destroy', () => {
        this._data.disconnect(connectId)
      })

      return child
    }
  }
}

export default ThermalButton
