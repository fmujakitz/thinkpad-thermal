import ConsoleUtil from "./Console"

export default class LsblkUtil extends ConsoleUtil {
  private _data: {
    [key: string]: string
  }
  constructor() {
    super('lsblk', '-o', 'HCTL,MODEL,NAME,TRAN,VENDOR,TYPE', '-dnJ')

    if (this.available) this.update()
  }

  private simplify(obj) {
    return obj.blockdevices.reduce((acc, { hctl, model }) => {
      if (!hctl) return acc
      const [a, b] = hctl.split(':')
      const key = ['drivetemp', 'scsi', a, b].join('-')
      acc[key] = model
      return acc
    }, {})
  }

  private parse(str: string) {
    this._data = this.simplify(JSON.parse(str))
  }

  update() {
    return super.execute(this.parse.bind(this))
  }

  name(key: string) {
    return this._data[key]
  }
}