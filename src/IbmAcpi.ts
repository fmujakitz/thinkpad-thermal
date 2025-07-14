import GObject from 'gi://GObject'

import ConsoleUtil from './Console.js'

export default class IbmAcpiUtil extends ConsoleUtil {
  static {
    GObject.registerClass(
      {
        Signals: {
          updated: {
            param_types: [GObject.TYPE_JSOBJECT],
          },
        },
      },
      IbmAcpiUtil
    )
  }

  private static NOTIFY = ['cpu', 'gpu', 'speed', 'level', 'status', 'levels', 'hasDedicatedGpu','isControllable']
  private static CHECKS = [-128, 0]
  private static DISABLED_LEVELS = [0, 'disengaged']

  public static isValidSensor = (v: number): boolean =>
    IbmAcpiUtil.CHECKS.every((check) => check !== v)

  private data: ThinkPadThermal.IbmAcpiData = {
    cpu: 0,
    gpu: 0,
    status: 'disabled',
    speed: 0,
    level: 'auto',
    levels: [],
  }
  private prev: ThinkPadThermal.IbmAcpiData | object = {}
  private config: ThinkPadThermal.Config

  constructor(config: ThinkPadThermal.Config) {
    super('cat', '/proc/acpi/ibm/thermal', '/proc/acpi/ibm/fan')
    this.update(config)
  }

  // temperatures: 43 50 0 0 0 0 0 0
  // status: enabled
  // speed: 2314
  // level: auto
  // commands: level<level>(<level>is 0 - 7, auto, disengaged, full - speed)
  // commands: enable, disable
  // commands: watchdog<timeout>(<timeout>is 0(off), 1 - 120(seconds))
  private parse(str: string) {
    //
    const [temps, status, speed, level, cmd1] = str
      .split('\n')
      .map((r) => r.slice(r.lastIndexOf('\t') + 1)) as SizedArray<string, 5>

    let [cpu, gpu] = temps
      .split(' ') //
      .map((s) => Number.parseInt(s)) as SizedArray<number, 2>

    // GPU Fallback
    if (gpu <= 0 && 'gpu' in this.prev && this.prev.gpu > 0) {
      // log({
      //   message: 'GPU sensor appears to be offline',
      //   reading: gpu,
      //   fallback: this.prev.gpu,
      // })
      gpu = this.prev.gpu
    }

    let levels = this.data.levels
    if (
      status === 'enabled' &&
      cmd1.includes('<level>') &&
      levels?.length === 0
    ) {
      const [range, ...rest] = cmd1
        .slice(cmd1.indexOf('> is ') + 5, -1)
        .split(', ')

      const [, to] = (range as string)
        .split('-') //
        .map((s) => Number.parseInt(s)) as SizedArray<number, 2>

      const nums = Array.from(Array(to + 1), (_, i) => i)

      levels = [rest[0] as string, ...nums, ...rest.slice(1)]
        .filter((l) => !IbmAcpiUtil.DISABLED_LEVELS.includes(l))
        .map(String)
    }

    return {
      cpu,
      gpu,
      status,
      speed: Number.parseInt(speed),
      level,
      levels,
    }
  }

  async update(config?: object) {
    if (config) {
      this.config = {
        ...(this.config || {}),
        ...config,
      }
    }

    this.prev = this.data

    try {
      this.data = await super.execute(this.parse.bind(this))

      this.emit('updated', IbmAcpiUtil.NOTIFY.reduce((acc, key) => {
        acc[key] = this[key]
        return acc
      }, {}))

    } catch (e) {
      logError(e as Error)
    }
  }

  public setLevel(next: (typeof this.data.levels)[number]) {
    this.run(
      ConsoleUtil.args(
        `pkexec sh -c "echo level ${next} | tee /proc/acpi/ibm/fan"`
      ),
      this.data.levels.includes(next),
      `Invalid level: ${next}. Available levels: ${this.data.levels.join(', ')}`
    )
  }

  get cpu() {
    return ConsoleUtil.temperature(
      this.data.cpu,
      this.config.temperatureUnit,
      true
    )
  }
  get gpu() {
    return ConsoleUtil.temperature(
      this.data.gpu,
      this.config.temperatureUnit,
      true
    )
  }
  get status() {
    return this.data.status
  }
  get speed() {
    return ConsoleUtil.revs(this.data.speed)
  }
  get level() {
    if (this.data.level === 'disengaged' && this.data.speed > 0) {
      return 'full-speed'
    }
    return this.data.level
  }
  get levels() {
    return this.data.levels
  }
  get hasDedicatedGpu(): boolean {
    return IbmAcpiUtil.isValidSensor(this.data.gpu)
  }
  get isControllable(): boolean {
    return this.data.status === 'enabled' && this.data.levels.length > 0
  }
}
