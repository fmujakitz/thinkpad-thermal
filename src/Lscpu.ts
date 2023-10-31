import ConsoleUtil from './Console'

export default class LscpuUtil extends ConsoleUtil {
  private _name: string
  constructor() {
    super('lscpu')
    if (this.available) this.update()
  }

  private parse(str: string) {
    let name = str
      .split(/\n/)
      .find(row => row.includes("Model name:"))
      ?.replace("Model name:", '')
      .split('@')[0]
      ?.replace(/CPU/, ' ')
      .replace(/ +/igm, ' ')
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
