import GObject from 'gi://GObject'

import ConsoleUtil from './Console.js'
import LsblkUtil from './Lsblk.js'
import LscpuUtil from './Lscpu.js'
import IbmAcpiUtil from './IbmAcpi.js'

export default class SensorsUtil extends ConsoleUtil {
  static {
    GObject.registerClass(
      {
        Signals: {
          updated: {
            param_types: [GObject.TYPE_JSOBJECT],
          },
        },
      },
      SensorsUtil
    )
  }
  private static NOTIFY = ['cpus', 'hdds', 'fans', 'other']
  private static IS = {
    INPUT: /_input$/,
    FANS: /^fan/i,
    CPU: /^(coretemp|k10temp)/i,
    GPU: /^amdgpu/i,
    DRIVETEMP: /^drivetemp/i,
    NVME: /^nvme/i,
    TPISA: /^thinkpad-isa/i,
    BATTERIES: /^bat/i,
    POWER: /_psy_/i,
  }

  private _lscpu: LscpuUtil
  private _lsblk: LsblkUtil
  protected override data: object = {}

  protected prev: { cpu: number; gpu?: number }

  constructor(config?: ThinkPadThermal.Config) {
    super('sensors', '-A', '-j', config)

    this._lscpu = new LscpuUtil()
    this._lsblk = new LsblkUtil()
  }

  private parse(str: string | object) {
    const obj = typeof str === 'string' ? JSON.parse(str) : str
    const keys = Object.keys(obj)

    if (keys.length === 0) return obj

    if (keys.length === 1 && keys[0] !== 'Tctl')
      return this.parse(Object.values(obj)[0] as string | object)

    const input = keys.find((k) => SensorsUtil.IS.INPUT.test(k))
    if (input) return this.parse(obj[input])

    return keys.reduce((acc, key) => {
      acc[key] = this.parse(obj[key])
      return acc
    }, {})
  }

  async update(config?: ThinkPadThermal.Config) {
    if (!this.available) return

    this.setConfig(config)

    try {
      this.setData(await super.execute(this.parse.bind(this)))

      this.emit(
        'updated',
        SensorsUtil.NOTIFY.reduce((acc, key) => {
          acc[key] = this[key]
          return acc
        }, {})
      )
    } catch (error) {
      logError(error)
    }
  }

  isGpuDetected(): this is { prev: { gpu: number } } {
    return (
      typeof this.prev?.gpu === 'number' &&
      IbmAcpiUtil.isValidSensor(this.prev.gpu)
    )
  }

  private select =
    <T extends string, I = object>(
      f: RegExp | RegExp[] | FilterFn<T>,
      r: ReduceFn<T, I>,
      i: I = {} as I
    ) =>
    (key?: string | RegExp): I => {
      const source =
        key instanceof RegExp
          ? Object.keys(this.data).find((k) => key.test(k))
          : key

      const data = source ? this.data[source] : this.data
      const keys = Object.keys(data) as T[]

      let fn: FilterFn<T>
      if (typeof f === 'function') {
        fn = f
      } else {
        const test = Array.isArray(f) ? f : [f]
        fn = (k) => test.some((exp) => exp.test(String(k)))
      }

      return keys
        .filter(fn) //
        .reduce((acc, k) => r(acc, k, data[k]), i)
    }

  get quirks() {
    const cpu = this.select(
      [SensorsUtil.IS.TPISA, SensorsUtil.IS.CPU],
      (acc, _, data) =>
        Number.parseInt(
          (data.CPU || data.Tctl) ?? ConsoleUtil.average(Object.values(data))
        ) || acc,
      0
    )()

    let gpu = this.select(
      [SensorsUtil.IS.TPISA, SensorsUtil.IS.GPU],
      (acc, _, data) => Number.parseInt(data.GPU ?? data.edge) || acc,
      -128
    )()

    const speed = this.select(
      SensorsUtil.IS.FANS,
      (acc, _, value) => acc.concat(value),
      []
    )(SensorsUtil.IS.TPISA)

    const hasDedicatedGpu = this.isGpuDetected()
    // GPU Fallback, flaky sensor, {} -> -128
    if (gpu <= 0 && hasDedicatedGpu) {
      gpu = this.prev.gpu
    }

    this.prev = { cpu, gpu }

    return {
      cpu: ConsoleUtil.temperature(
        Math.round(cpu),
        this.config.temperatureUnit
      ),
      gpu: ConsoleUtil.temperature(
        Math.round(gpu),
        this.config.temperatureUnit
      ),
      speed: ConsoleUtil.revs(ConsoleUtil.average(speed)),
      hasDedicatedGpu,
      status: 'disabled',
      isControllable: false,
    }
  }

  get cpus() {
    return this.select(
      SensorsUtil.IS.CPU, //
      (acc, k, data) => {
        const name = this._lscpu.name(k) ?? k
        const value = { ...(data as object) }

        for (const key of Object.keys(value)) {
          value[key] = ConsoleUtil.temperature(
            value[key],
            this.config.temperatureUnit
          )
        }

        acc[name] = value

        return acc
      }
    )()
  }

  get hdds() {
    return this.select(
      [SensorsUtil.IS.DRIVETEMP, SensorsUtil.IS.NVME],
      (acc, k, data) => {
        const name = this._lsblk.name(k)
        let value = data

        if (typeof value === 'object') {
          value = Math.max(...(Object.values(value) as number[]))
        }

        acc[name] = ConsoleUtil.temperature(value, this.config.temperatureUnit)

        return acc
      }
    )()
  }

  get bats() {
    return this.select(
      SensorsUtil.IS.BATTERIES, //
      (acc, k, value) => {
        acc[k] = value
        return acc
      }
    )()
  }

  get fans() {
    return this.select(
      SensorsUtil.IS.FANS, //
      (acc, k, value) => {
        acc[k] = ConsoleUtil.revs(value)
        return acc
      }
    )(SensorsUtil.IS.TPISA)
  }

  get other() {
    return this.select(
      (k) => !Object.values(SensorsUtil.IS).some((exp) => exp.test(k)),
      (acc, k, value) => {
        acc[k] = ConsoleUtil.temperature(value, this.config.temperatureUnit)
        return acc
      }
    )()
  }
}
