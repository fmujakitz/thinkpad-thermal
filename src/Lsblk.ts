import ConsoleUtil from "./Console.js"

class LsnvmeUtil extends ConsoleUtil {
  private _data: {
    [key: string]: string
  }

  constructor() {
    super('ls', '-l', '/dev/disk/by-path')

    if (this.available) this.update()
  }

  private simplify(obj) {
    const nvme = new RegExp(/nvme/i)
    return obj
      .split('\n')
      .filter(l => nvme.test(l))
      .map(r => r
        .slice(r.indexOf('pci-'))
        .replace(/(\.\.\/)/gim, '')
        .split(' -> ')
      )
      .reduce((acc, [path, name]) => {
        const id = 'nvme-pci-' + path.slice(9, 14).replace(':', '')

        acc[name] = id
        return acc
      }, {})
  }

  private parse(str: string) {
    this._data = this.simplify(str)
  }

  update() {
    return super.execute(this.parse.bind(this))
  }

  name(key: string) {
    if (!this._data) return 'Nvme'
    return this._data[key]
  }
}

export default class LsblkUtil extends ConsoleUtil {
  private _lsnvme: LsnvmeUtil

  private _data: {
    [key: string]: string
  }

  private _hasNvme: Boolean = false

  constructor() {
    super('lsblk', '-o', 'HCTL,MODEL,NAME,TRAN,VENDOR,TYPE', '-dnJ')

    if (this.available) {
      this._lsnvme = new LsnvmeUtil()
      this.update()
    }
  }

  private simplify(obj) {
    return obj.blockdevices.reduce((acc, { hctl, model, tran, name }) => {
      if (hctl) {
        const [a, b] = hctl.split(':')
        const key = ['drivetemp', 'scsi', a, b].join('-')
        acc[key] = model
        return acc
      }

      if (tran === 'nvme') {
        this._hasNvme = true
        const key = this._lsnvme.name(name)
        if (key) {
          acc[key] = model
        } else {
          console.log("nvme key not found!!!")
          console.log({ key, model, hctl, tran, name })
        }
        return acc
      }

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
    if (!this._data) return 'Disk'
    return this._data[key]
  }
  hasNvme() {
    return this._hasNvme
  }
}
