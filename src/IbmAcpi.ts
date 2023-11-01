import Gio from 'gi://Gio';
import GLib from 'gi://GLib';

import ConsoleUtil from "./Console.js"

type IbmAcpiData = {
  cpu: number
  gpu: number
  status: string
  speed: number
  level: string
  levels: string[]
}
export default class IbmAcpiUtil extends ConsoleUtil {
  private _data: IbmAcpiData = {
    cpu: 0,
    gpu: 0,
    status: '...',
    speed: 0,
    level: '...',
    levels: []
  }

  private _hasDedicatedGpu: Boolean = false

  constructor() {
    super([
      '/proc/acpi/ibm/thermal',
      '/proc/acpi/ibm/fan'
    ])

    // immediately get initial values
    if (this.available) this.update()
  }

  // temperatures: 43 50 0 0 0 0 0 0
  // status: enabled
  // speed: 2314
  // level: auto
  // commands: level<level>(<level>is 0 - 7, auto, disengaged, full - speed)
  // commands: enable, disable
  // commands: watchdog<timeout>(<timeout>is 0(off), 1 - 120(seconds))
  private parse(str: string) {

    const toInt = s => parseInt(s)

    let [temps, status, speed, level, cmd1]: (string | number)[] = str
      .split(/\n/)
      .map(r => r.slice(r.lastIndexOf('\t') + 1)) as [string, string, string, string, string]

    let [cpu, gpu]: number[] = temps
      .split(' ')
      .map(toInt) as [number, number]

    speed = parseInt(speed)

    let levels: string[] = []

    const controllable = Boolean(cmd1 && status === 'enabled')

    if (controllable) {
      const [range, ...rest] = cmd1
        .slice(cmd1.indexOf('> is ') + 5, -1)
        .split(', ')

      const [, to] = (range as string)
        .split('-')
        .map(toInt) as [number, number]

      const nums = Array.from(Array(to + 1), (_, i) => i)
      const disabled = [0, 'disengaged']

      levels = [...nums, ...rest]
        .filter(l => !disabled.includes(l))
        .map(l => l.toString())
    }

    if (level === 'disengaged' && Boolean(speed)) {
      level = 'full-speed'
    }

    if (!this._hasDedicatedGpu && gpu > 0) {
      this._hasDedicatedGpu = true
    }

    if (this._hasDedicatedGpu && gpu <= 0 && this._data.gpu) {
      gpu = this._data.gpu
    }

    this._data = {
      cpu,
      gpu,
      status,
      speed,
      level,
      levels
    }
  }

  update() {
    return super.execute(this.parse.bind(this))
  }

  setLevel(next) {
    const cmd = `pkexec sh -c "echo level ${next} | tee /proc/acpi/ibm/fan"`
    const [ok, argv] = GLib.shell_parse_argv(cmd)

    log(`Setting fan level to: ${next}`)

    if (ok && argv?.length) {

      try {
        let proc = Gio.Subprocess.new(
          argv,
          Gio.SubprocessFlags.STDOUT_PIPE | Gio.SubprocessFlags.STDERR_PIPE
        )
        proc.communicate_utf8_async(null, null, (proc, res) => {
          if (proc) {
            try {
              let [, , stderr] = proc?.communicate_utf8_finish(res)

              if (!proc?.get_successful()) throw new Error(stderr as string)
              // done
            } catch (e) {
              logError(e as Error)
            }
          }
        })
      } catch (e) {
        logError(e as Error)
      }
    }


  }

  get cpu() {
    return this._data.cpu.toString()
  }
  get gpu() {
    return this._data.gpu.toString()
  }
  get status() {
    return this._data.status
  }
  get speed() {
    return this._data.speed.toString()
  }
  get level() {
    return this._data.level
  }
  get levels() {
    return this._data.levels
  }
  get dGpu() {
    return this._hasDedicatedGpu
  }
}
