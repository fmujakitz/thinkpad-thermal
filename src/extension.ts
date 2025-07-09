import type Gio from 'gi://Gio'
import { Extension } from 'resource:///org/gnome/shell/extensions/extension.js'
import * as Main from 'resource:///org/gnome/shell/ui/main.js'

import ThermalData from './ThermalData.js'
import ThermalButton from './ThermalButton.js'
import ThermalPopup from './ThermalPopup.js'

let ME: ThinkPadThermal | null
export { ME }

export default class ThinkPadThermal extends Extension {
  _settings: Gio.Settings
  _data: ThermalData
  _indicator: ThermalButton

  override enable() {
    ME = this

    this._settings = this.getSettings()
    this._data = new ThermalData(this._settings)

    this._indicator = new ThermalButton(
      0.5,
      'ThinkPad Thermal',
      this._data.acpi,
      this._settings
    )
    this._indicator.setMenu(new ThermalPopup(0.5, this._indicator, this._data))

    Main.panel.addToStatusArea(this.uuid, this._indicator, this._position, this._area)

    this._settings.connect('changed', (_, change) => {
      if (change.startsWith('position-')) this.reposition()
    })
  }

  get _position() {
    return this._settings.get_boolean('position-enable')
      ? this._settings.get_int('position-index')
      : 0
  }
  get _area() {
    return this._settings.get_boolean('position-enable')
      ? this._settings.get_string('position-area')
      : 'right'
  }
  get _box() {
    return Main.panel.get_child_at_index(['left', 'center', 'right'].indexOf(this._area))
  }
  private reposition() {
    if (!this._settings.get_boolean('position-enable')) return

    Main.panel._addToPanelBox(
      this.uuid,
      this._indicator,
      this._position,
      this._box
    )
  }

  override disable() {
    this._indicator?.destroy()
    this._data?.destroy()

    this._indicator = null as unknown as ThermalButton
    this._data = null as unknown as ThermalData

    ME = null
  }
}
