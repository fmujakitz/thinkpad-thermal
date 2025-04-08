import Gio from 'gi://Gio'
import GLib from 'gi://GLib'
import GObject from 'gi://GObject'

export default class ConsoleUtil extends GObject.Object {
  static {
    GObject.registerClass(ConsoleUtil)
  }

  private _command: string

  constructor(program: string | string[], ...args: string[]) {
    super()
    if (typeof program === 'string' && ConsoleUtil.exists(program)) {
      this._command = [program, ...args].join(' ')
    } else {
      logError(`${program} is not available.`)
    }
  }

  async execute(callback) {
    try {
      if (!this.available) throw new Error('Util not available')

      const [ok, argv] = GLib.shell_parse_argv(this._command)

      if (!ok || !argv) throw new Error('Unable to parse util arguments')

      const p = new Promise((resolve, reject) => {
        const proc = Gio.Subprocess.new(
          argv,
          Gio.SubprocessFlags.STDOUT_PIPE | Gio.SubprocessFlags.STDERR_PIPE
        )
        proc.communicate_utf8_async(null, null, (proc, res) => {
          try {
            if (!proc) throw new Error('Util subprocess error')
            const [, stdout, stderr] = proc.communicate_utf8_finish(res)
            if (!proc.get_successful()) throw new Error(stderr as string)
            resolve(stdout)
          } catch (e) {
            reject(e)
          }
        })
      })

      return callback(await p)
    } catch (e) {
      logError(e)
    }
  }

  get available() {
    return typeof this._command === 'string' && this._command.length > 0
  }

  static exists(prog: string): boolean {
    return typeof prog === 'string' && Boolean(GLib.find_program_in_path(prog))
  }

  static celsius(c: number, round?: boolean) {
    return `${round ? Math.round(c) : c} °C`
  }
  static fahrenheit(c: number, round?: boolean) {
    const value = (c * 9) / 5 + 32
    return `${round ? Math.round(value) : value} °F`
  }
  static temperature(c: number, unit: ThinkPadThermal.Unit, round?: boolean) {
    return unit === 'celsius'
      ? ConsoleUtil.celsius(c, round)
      : ConsoleUtil.fahrenheit(c, round)
  }
  static revs(n: number) {
    return `${n} RPM`
  }
}
