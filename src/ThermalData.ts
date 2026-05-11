import type Gio from 'gi://Gio'
import GObject from 'gi://GObject'

import GLib from 'gi://GLib'
import SensorsUtil from './Sensors.js'
import IbmAcpiUtil from './IbmAcpi.js'
import DmiUtil from './Dmi.js'

import microdiff from './vendor/microdiff.js'

class ThermalData extends GObject.Object {
  static {
    GObject.registerClass(
      {
        Properties: {
          cpu: GObject.ParamSpec.string(
            'cpu',
            'CPU temperature',
            'Current CPU temperature',
            GObject.ParamFlags.READABLE,
            '...'
          ),
          gpu: GObject.ParamSpec.string(
            'gpu',
            'GPU temperature',
            'Current GPU temperature',
            GObject.ParamFlags.READABLE,
            '...'
          ),
          speed: GObject.ParamSpec.string(
            'speed',
            'Fan speed',
            'Current fan speed',
            GObject.ParamFlags.READABLE,
            '...'
          ),
          status: GObject.ParamSpec.string(
            'status',
            'Fan status',
            'Current fan status',
            GObject.ParamFlags.READABLE,
            '...'
          ),
          level: GObject.ParamSpec.string(
            'level',
            'Fan level',
            'Current fan level',
            GObject.ParamFlags.READABLE,
            '...'
          ),
          levels: GObject.ParamSpec.jsobject(
            'levels',
            'Fan levels',
            'Supported fan levels',
            GObject.ParamFlags.READABLE
          ),
        },
        Signals: {
          updated: {
            param_types: [
              GObject.TYPE_JSOBJECT,
              GObject.TYPE_JSOBJECT,
              GObject.TYPE_JSOBJECT,
            ],
          },
        },
      },
      ThermalData
    )
  }

  private _interval: number | null
  private config: ThinkPadThermal.Config

  private data: Partial<ThinkPadThermal.ThermalData> = {}
  private prev: Partial<ThinkPadThermal.ThermalData> = {}

  acpi: IbmAcpiUtil
  dmi: DmiUtil
  sensors: SensorsUtil

  constructor(settings: Gio.Settings) {
    super()

    this.config = {
      checkInterval: settings.get_int('check-interval'),
      temperatureUnit: settings.get_string(
        'temperature-unit'
      ) as ThinkPadThermal.Unit,
      quirksMode: settings.get_boolean('quirks-mode'),
    }

    this.dmi = new DmiUtil()
    this.acpi = new IbmAcpiUtil(this.config)
    this.sensors = new SensorsUtil(this.config)

    this.acpi.connect('updated', this.sync)
    this.dmi.connect('updated', this.sync)
    this.sensors.connect('updated', this.sync)

    settings.connect('changed::check-interval', () => {
      this.config.checkInterval = settings.get_int('check-interval')
      this.startInterval()
    })
    settings.connect('changed::temperature-unit', () => {
      this.config.temperatureUnit = settings.get_string(
        'temperature-unit'
      ) as ThinkPadThermal.Unit
      this.startInterval()
    })
    settings.connect('changed::quirks-mode', () => {
      this.config.quirksMode = settings.get_boolean('quirks-mode')
      this.startInterval()
    })

    this.startInterval()
  }

  private startInterval() {
    if (this._interval) GLib.source_remove(this._interval)

    const fetch = () => {
      this.acpi.update(this.config)
      this.sensors.update(this.config)
      //
      return GLib.SOURCE_CONTINUE
    }

    fetch()

    this._interval = GLib.timeout_add_seconds(
      GLib.PRIORITY_DEFAULT,
      this.config.checkInterval,
      fetch.bind(this)
    )
  }

  private static NOTIFY = ['cpu', 'gpu', 'speed', 'level', 'status']
  private static isNotifiable = (s: Set<string>) =>
    ThermalData.NOTIFY.filter((k) => s.has(k))

  private setData(next: object) {
    this.data = {
      ...this.data,
      ...next,
    }
  }

  private sync = (_: object, updated: object) => {
    this.setData(updated)

    if (this.config.quirksMode) this.setData(this.sensors.quirks)

    const diff = microdiff(this.prev, this.data, { cyclesFix: false })

    if (diff.length === 0) return

    this.prev = this.data

    const keys = new Set(diff.flatMap(({ path }) => path as string[]))
    const notify = ThermalData.isNotifiable(keys)

    for (const k of notify) this.notify(k as string)

    this.emit('updated', this.data, diff, keys)
  }

  destroy() {
    if (this._interval) {
      GLib.source_remove(this._interval)
      this._interval = null
    }
  }

  get cpu() {
    return this.data.cpu ?? '...'
  }
  get gpu() {
    return this.data.gpu ?? '...'
  }
  get speed() {
    return this.data.speed ?? '...'
  }
  get status() {
    return this.data.status ?? 'initializing'
  }
  get level() {
    return this.data.level ?? 'auto'
  }
  set level(next) {
    this.acpi.setLevel(next)
  }
  get levels() {
    return this.data.levels ?? []
  }
  get hasDedicatedGpu() {
    return this.data.hasDedicatedGpu ?? false
  }
  get isControllable() {
    return this.data.isControllable ?? false
  }

  get cpus() {
    return this.data.cpus ?? {}
  }
  get hdds() {
    return this.data.hdds ?? {}
  }
  get fans() {
    return this.data.fans ?? {}
  }
  get other() {
    return this.data.other ?? {}
  }
}

export default ThermalData
