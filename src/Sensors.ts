import GObject from 'gi://GObject'

import ConsoleUtil from './Console.js'
import LsblkUtil from './Lsblk.js'
import LscpuUtil from './Lscpu.js'

const INPUT = new RegExp(/_input$/)
const FANS = new RegExp(/^fan/i)

const CPU = new RegExp(/^coretemp/i)
const DRIVETEMP = new RegExp(/^drivetemp/i)
const NVME = new RegExp(/^nvme/i)
const TPISA = new RegExp(/^thinkpad-isa/i)
const BATTERIES = new RegExp(/^bat/i)
const POWER = new RegExp(/_psy_/i)

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

  private _lscpu: LscpuUtil
  private _lsblk: LsblkUtil
  private data: object = {}
  private config: ThinkPadThermal.Config

  constructor(config?: ThinkPadThermal.Config) {
    super('sensors', '-A', '-j')

    if (this.available) {
      this._lscpu = new LscpuUtil()
      this._lsblk = new LsblkUtil()
      this.update(config)
    }
  }

  private parse(str: string | object) {
    const obj = typeof str === 'string' ? JSON.parse(str) : str
    const keys = Object.keys(obj)

    if (keys.length > 1) {
      return keys.reduce((acc, key) => {
        const value = obj[key]

        const input = Object.keys(value).find((key) => INPUT.test(key))

        acc[key] = input ? value[input] : this.parse(value)

        return acc
      }, {})
    }

    if (keys.length === 1) {
      const value = obj[keys[0] as string]

      return typeof value === 'object' ? this.parse(value) : value
    }

    return -256
  }

  async update(config?: ThinkPadThermal.Config) {
    if (config) {
      this.config = {
        ...(this.config || {}),
        ...config,
      }
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
      (k) => CPU.test(k),
      (acc, k) => {
        const value = { ...this.data[k] }

        for (const key of Object.keys(value)) {
          value[key] = ConsoleUtil.temperature(
            value[key],
            this.config.temperatureUnit
          )
        }

        acc[this.cpuName(k)] = value

        return acc
      }
    )
  }

  get hdd() {
    return this.select(
      (k) => DRIVETEMP.test(k) || NVME.test(k),
      (acc, k) => {
        const value = Math.max(...(Object.values(this.data[k]) as number[]))

        acc[this.diskName(k)] = ConsoleUtil.temperature(
          value,
          this.config.temperatureUnit
        )

        return acc
      }
    )
  }

  get bat() {
    return this.select(
      (k) => BATTERIES.test(k),
      (acc, k) => {
        acc[k] = this.data[k]
        return acc
      }
    )
  }

  get fan() {
    const key = Object.keys(this.data).find((k) => TPISA.test(k)) as string

    return this.select(
      (k) => FANS.test(k),
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
        [CPU, DRIVETEMP, NVME, BATTERIES, TPISA, POWER].every(
          (check) => !check.test(k)
        ),
      (acc, k) => {
        const value = this.data[k]
        acc[k] = ConsoleUtil.temperature(value, this.config.temperatureUnit)
        return acc
      }
    )
  }

  cpuName(key: string) {
    return this._lscpu.name(key)
  }

  diskName(key: string) {
    return this._lsblk.name(key)
  }
}
