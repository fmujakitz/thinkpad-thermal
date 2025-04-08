import Gio from 'gi://Gio'
import GLib from 'gi://GLib'
import GObject from 'gi://GObject'

import ConsoleUtil from './Console.js'
import microdiff, { type DifferenceChange } from './vendor/microdiff.js'

export default class IbmAcpiUtil extends ConsoleUtil {
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
        },
        Signals: {
          updated: {
            param_types: [GObject.TYPE_JSOBJECT, GObject.TYPE_JSOBJECT],
          },
        },
      },
      IbmAcpiUtil
    )
  }

  private static NOTIFY = ['cpu', 'gpu', 'speed', 'status']
  private static isNotifiable = (key: string): boolean =>
    IbmAcpiUtil.NOTIFY.includes(key)

  private static CHECKS = [-128, 0]
  private static isValidSensor = (v: number): boolean =>
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

    // immediately get initial values
    if (this.available) this.update(config)
  }

  // temperatures: 43 50 0 0 0 0 0 0
  // status: enabled
  // speed: 2314
  // level: auto
  // commands: level<level>(<level>is 0 - 7, auto, disengaged, full - speed)
  // commands: enable, disable
  // commands: watchdog<timeout>(<timeout>is 0(off), 1 - 120(seconds))
  private parse(str: string) {
    const toInt = (s: string) => Number.parseInt(s)

    let [temps, status, speed, level, cmd1] = str
      .split(/\n/)
      .map((r) => r.slice(r.lastIndexOf('\t') + 1)) as SizedArray<string, 5>

    let [cpu, gpu] = temps
      .split(' ') //
      .map((s) => Number.parseInt(s)) as SizedArray<number, 2>

    let levels: string[] = this.data.levels

    const controllable = Boolean(cmd1 && status === 'enabled')

    if (controllable && !this.data.levels.length) {
      const [range, ...rest] = cmd1
        .slice(cmd1.indexOf('> is ') + 5, -1)
        .split(', ')

      const [, to] = (range as string)
        .split('-') //
        .map(toInt) as SizedArray<number, 2>

      const nums = Array.from(Array(to + 1), (_, i) => i)

      levels = [rest[0] as string, ...nums, ...rest.slice(1)]
        .filter((l) => ![0, 'disengaged'].includes(l))
        .map((l) => l.toString())
    }

    if (gpu <= 0 && 'gpu' in this.prev && this.prev.gpu > 0) {
      // log({
      //   message: 'GPU sensor appears to be offline',
      //   reading: gpu,
      //   fallback: this.prev.gpu,
      // })
      gpu = this.prev.gpu
    }

    speed = Number.parseInt(speed) as unknown as string

    return {
      cpu,
      gpu,
      status,
      speed,
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

    if (config && Object.keys(this.prev).length > 0) {
      for (const k of IbmAcpiUtil.NOTIFY) this.notify(k)
      const diffs = IbmAcpiUtil.NOTIFY.map(
        (k) =>
          ({
            type: 'CHANGE',
            path: [k],
            value: this[k],
            oldValue: '*',
          }) as DifferenceChange
      )
      this.emit('updated', IbmAcpiUtil.NOTIFY, diffs)
      return
    }

    try {
      this.data = await super.execute(this.parse.bind(this))

      const diff = microdiff(this.prev, this.data)
      this.prev = this.data

      if (diff.length === 0) return

      const keys = diff
        .flatMap(({ path }) => path as string[])
        .filter(IbmAcpiUtil.isNotifiable)

      for (const k of keys) this.notify(k as string)

      this.emit('updated', keys, diff)
    } catch (e) {
      logError(e as Error)
    }
  }
  public setLevel(next: string) {
    const cmd = `pkexec sh -c "echo level ${next} | tee /proc/acpi/ibm/fan"`
    const [ok, argv] = GLib.shell_parse_argv(cmd)

    if (!ok || !argv || argv.length === 0) {
      logError('Unable to set fan level')
      return
    }

    try {
      log(`Setting fan level to ${next}`)
      const proc = Gio.Subprocess.new(
        argv,
        Gio.SubprocessFlags.STDOUT_PIPE | Gio.SubprocessFlags.STDERR_PIPE
      )
      proc.communicate_utf8_async(null, null, (proc, res) => {
        if (proc) {
          try {
            const [, , stderr] = proc.communicate_utf8_finish(res)
            if (!proc.get_successful()) throw new Error(stderr as string)
            log(`Fan level set to ${next}`)
          } catch (e) {
            logError(e as Error)
          }
        }
      })
    } catch (e) {
      logError(e as Error)
    }
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
    return this.status === 'enabled' && this.levels.length > 0
  }
}
