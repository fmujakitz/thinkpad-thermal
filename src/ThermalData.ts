import type Gio from 'gi://Gio'

import GLib from 'gi://GLib'
import SensorsUtil from './Sensors.js'
import IbmAcpiUtil from './IbmAcpi.js'
import DmiUtil from './Dmi.js'

class ThermalData {
  private _interval: number | null
  private _settingsIds: number[]
  private _settings: Gio.Settings
  private config: ThinkPadThermal.Config

  acpi: IbmAcpiUtil
  dmi: DmiUtil
  sensors: SensorsUtil

  constructor(settings: Gio.Settings) {
    this._settings = settings
    this.config = {
      checkInterval: settings.get_int('check-interval'),
      temperatureUnit: settings.get_string('temperature-unit') as ThinkPadThermal.Unit,
    }

    this.dmi = new DmiUtil()
    this.acpi = new IbmAcpiUtil(this.config)
    this.sensors = new SensorsUtil(this.config)

    this._settingsIds = [
      settings.connect('changed::check-interval', () => {
        this.config.checkInterval = settings.get_int('check-interval')
        this.startInterval()
      }),
      settings.connect('changed::temperature-unit', () => {
        this.config.temperatureUnit = settings.get_string('temperature-unit') as ThinkPadThermal.Unit
        this.acpi.update(this.config)
        this.sensors.update(this.config)
      }),
    ]

    this.startInterval()
  }

  private startInterval() {
    if (this._interval) GLib.source_remove(this._interval)

    this._interval = GLib.timeout_add_seconds(
      GLib.PRIORITY_DEFAULT,
      this.config.checkInterval,
      this.fetchData.bind(this)
    )
  }

  private fetchData() {
    this.acpi.update()
    this.sensors.update()
    //
    return GLib.SOURCE_CONTINUE
  }

  destroy() {
    for (const id of this._settingsIds) this._settings.disconnect(id)
    this._settingsIds = []

    if (this._interval) {
      GLib.source_remove(this._interval)
      this._interval = null
    }
  }
}

export default ThermalData
