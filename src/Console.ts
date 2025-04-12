import Gio from 'gi://Gio'
import GLib from 'gi://GLib'
import GObject from 'gi://GObject'

type Assert = (condition: boolean, errorMessage: string) => asserts condition
export const assert: Assert = (condition, errorMessage) => {
  if (condition) return
  logError(errorMessage)
  throw new Error(errorMessage)
}

export default class ConsoleUtil extends GObject.Object {
  static {
    GObject.registerClass(ConsoleUtil)
  }

  private _command: string

  constructor(program: string, ...args: string[]) {
    super()
    assert(typeof program === 'string', 'Program must be a string')
    assert(ConsoleUtil.exists(program), 'Program not found')
    this._command = [program, ...args].join(' ')

    if (
      this.available &&
      'update' in this &&
      typeof this.update === 'function'
    ) {
      this.update()
    }
  }

  run(command: string, errorMessage?: string) {
    const [ok, argv] = GLib.shell_parse_argv(command)
    assert(ok && !!argv, errorMessage ?? 'Unable to parse util arguments')

    return new Promise((resolve, reject) => {
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
  }

  async execute(callback) {
    try {
      assert(this.available, 'Util not available')
      return callback(await this.run(this._command))
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
