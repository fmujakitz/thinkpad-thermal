import GObject from 'gi://GObject'

import ConsoleUtil, { assert } from './Console.js'
import LsblkUtil from './Lsblk.js'
import LscpuUtil from './Lscpu.js'

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
  private static NOTIFY = ['cpu', 'hdd', 'fan', 'other']
  private static IS = {
    INPUT: /_input$/,
    FANS: /^fan/i,
    CPU: /^coretemp/i,
    DRIVETEMP: /^drivetemp/i,
    NVME: /^nvme/i,
    TPISA: /^thinkpad-isa/i,
    BATTERIES: /^bat/i,
    POWER: /_psy_/i,
  }

  private _lscpu: LscpuUtil
  private _lsblk: LsblkUtil
  private data: object = {}
  private config: ThinkPadThermal.Config

  constructor(config?: ThinkPadThermal.Config) {
    super('sensors', '-A', '-j')

    assert(this.available, 'Lm-sensors not found')

    this._lscpu = new LscpuUtil()
    this._lsblk = new LsblkUtil()
    this.update(config)
  }

  private parse(str: string | object) {
    const obj = typeof str === 'string' ? JSON.parse(str) : str
    const keys = Object.keys(obj)

    if (keys.length === 0) return obj

    if (keys.length === 1)
      return this.parse(Object.values(obj)[0] as string | object)

    const input = keys.find((k) => SensorsUtil.IS.INPUT.test(k))
    if (input) return this.parse(obj[input])

    return keys.reduce((acc, key) => {
      acc[key] = this.parse(obj[key])
      return acc
    }, {})
  }

  async update(config?: ThinkPadThermal.Config) {
    this.config = {
      ...this.config,
      ...config,
    }

    try {
      this.data = await super.execute(this.parse.bind(this))
      const obj = SensorsUtil.NOTIFY.reduce((acc, key) => {
        acc[key] = this[key]
        return acc
      }, {})

      this.emit('updated', obj)
    } catch (error) {
      logError(error)
    }
  }

  private select(
    f: FilterFn<string>,
    r: ReduceFn<string, object>,
    key?: string
  ) {
    return Object.keys(key ? this.data[key] : this.data)
      .filter(f) //
      .reduce(r, {})
  }

  get cpu() {
    return this.select(
      (k) => SensorsUtil.IS.CPU.test(k),
      (acc, k) => {
        const name = this._lscpu.name(k)
        const value = { ...this.data[k] }

        for (const key of Object.keys(value)) {
          value[key] = ConsoleUtil.temperature(
            value[key],
            this.config.temperatureUnit
          )
        }

        acc[name] = value

        return acc
      }
    )
  }

  get hdd() {
    return this.select(
      (k) => SensorsUtil.IS.DRIVETEMP.test(k) || SensorsUtil.IS.NVME.test(k),
      (acc, k) => {
        const name = this._lsblk.name(k)
        let value = this.data[k]

        if (typeof value === 'object') {
          value = Math.max(...(Object.values(value) as number[]))
        }

        acc[name] = ConsoleUtil.temperature(value, this.config.temperatureUnit)

        return acc
      }
    )
  }

  get bat() {
    return this.select(
      (k) => SensorsUtil.IS.BATTERIES.test(k),
      (acc, k) => {
        acc[k] = this.data[k]
        return acc
      }
    )
  }

  get fan() {
    const key = Object.keys(this.data).find((k) =>
      SensorsUtil.IS.TPISA.test(k)
    ) as string

    return this.select(
      (k) => SensorsUtil.IS.FANS.test(k),
      (acc, k) => {
        acc[k] = ConsoleUtil.revs(this.data[key][k])
        return acc
      },
      key
    )
  }

  get other() {
    return this.select(
      (k) =>
        Object.keys(SensorsUtil.IS).every(
          (check) => !SensorsUtil.IS[check].test(k)
        ),
      (acc, k) => {
        const value = this.data[k]
        acc[k] = ConsoleUtil.temperature(value, this.config.temperatureUnit)
        return acc
      }
    )
  }
}
