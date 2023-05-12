import * as Gio from "@gi-types/gio2"
import * as GLib from "@gi-types/glib2"

export default class ConsoleUtil {
  private _available: boolean = false
  private _command: string = ''

  constructor(program: string | string[], ...args: string[]) {

    if (typeof program === 'string') {
      const path = GLib.find_program_in_path(program as string)
      this._available = Boolean(path)

      if (this._available) {
        this._command = [path, ...args].join(' ')
      }
    }

    if (typeof program === 'object' && Array.isArray(program)) {
      this._available = program.every((file: string) => GLib.file_test(file, GLib.FileTest.EXISTS))

      if (this._available) {
        this._command = ['cat', ...program, ...args].join(' ')
      }
    }
  }

  async execute(callback) {
    try {
      if (!this.available) throw new Error("Util not available")

      const [ok, argv] = GLib.shell_parse_argv(this._command)

      if (!ok || !argv) throw new Error("Unable to parse util arguments")

      const p = new Promise((resolve, reject) => {
        let proc = Gio.Subprocess.new(argv, Gio.SubprocessFlags.STDOUT_PIPE | Gio.SubprocessFlags.STDERR_PIPE)
        proc.communicate_utf8_async(null, null, (proc, res) => {
          try {
            if (!proc) throw new Error("Util subprocess error")
            let [, stdout, stderr] = proc?.communicate_utf8_finish(res)
            if (!proc?.get_successful()) throw new Error(stderr)
            resolve(stdout)
          } catch (e) {
            reject(e)
          }
        })
      })

      callback(await p)
    } catch (e) {
      logError(e)
    }
  }

  get available() {
    return this._available
  }

}