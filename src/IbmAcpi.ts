import * as Gio from "@gi-types/gio2"
import * as GLib from "@gi-types/glib2"

import ConsoleUtil from "./Console"

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
    const getVal = (str: string) => str
      .replace(/\t+/, " ")
      .split(': ')[1]

    const row = str.split(/\n/)

    const [cpu, gpu] = getVal(row[0]).split(' ')

    let levels: string[] = []

    if (row[4]) {
      const [mm, ...rest] = row[4]
        .split('(<level> is')[1]
        .replace(/ +/im, '')
        .replace(/\)$/im, '')
        .split(', ')
        .filter(e => e !== 'disengaged')

      const max = parseInt(mm.split('-')[1])
      const nums = Array.from(Array(max), (_, i) => (i + 1).toString())
      levels = [...nums, ...rest]
    }


    this._data = {
      cpu: parseInt(cpu),
      gpu: parseInt(gpu),
      status: getVal(row[1]),
      speed: parseInt(getVal(row[2])),
      level: getVal(row[3]),
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
              let [, stdout, stderr] = proc?.communicate_utf8_finish(res)

              if (!proc?.get_successful()) throw new Error(stderr)
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
}