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

  private _command: string[]

  protected config = {} as ThinkPadThermal.Config
  protected setConfig(next = {}) {
    this.config = {
      ...this.config,
      ...next,
    }
  }
  protected data: unknown
  protected setData(next = {}) {
    this.data = {
      ...(this.data || {}),
      ...next,
    }
  }

  constructor(
    cmd: string,
    ...args: (string | ThinkPadThermal.Config | undefined)[]
  ) {
    super()

    assert(!!cmd, 'Util not defined')
    assert(!!GLib.find_program_in_path(cmd), `Util ${cmd} not found`)

    let rest = args
    const last = rest[rest.length - 1]

    if (typeof last === 'object') {
      this.setConfig(last)
      rest = args.slice(0, args.length - 1)
    }

    this._command = ConsoleUtil.args([cmd, ...rest].join(' '))

    if (
      this.available &&
      'update' in this &&
      typeof this.update === 'function'
    ) {
      this.update()
    }
  }

  run(argv: string[], condition: boolean, errorMessage: string) {
    assert(condition, errorMessage)

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
      return callback(
        await this.run(
          this._command,
          this.available,
          `Util ${this._command[0]} not available`
        )
      )
    } catch (e) {
      logError(e)
      if (/no such file or directory/i.test(e as string)) {
        console.log('Disabling utility', this._command)
        this._command = []
      }
    }
  }

  get available() {
    return this._command.length > 0
  }

  static args(cmd: string | string[]) {
    if (typeof cmd !== 'string') return cmd
    const [ok, argv] = GLib.shell_parse_argv(cmd)
    assert(ok && !!argv, `Unable to parse ${cmd} as argument vector`)
    return argv
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
  static average(values: number[]) {
    return values.length
      ? Math.ceil(values.reduce((acc, curr) => acc + curr, 0) / values.length)
      : 0
  }
}
