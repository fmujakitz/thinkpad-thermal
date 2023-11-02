import ConsoleUtil from './Console.js'

export default class LscpuUtil extends ConsoleUtil {
  private _name: string
  constructor() {
    super('lscpu', '-e=MODELNAME')
    if (this.available) this.update()
  }

  private parse(str: string) {
    let name = str
      .split(/\n/)[1]!
      .split('@')[0]!
      .replace(/CPU/, '')
      .trim()

    this._name = name || "Processor"
  }

  update() {
    return super.execute(this.parse.bind(this))
  }

  get name() {
    return this._name
  }
}
