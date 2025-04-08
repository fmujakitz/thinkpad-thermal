import GObject from 'gi://GObject'
import ConsoleUtil from './Console.js'

const NVME = new RegExp(/nvme/i)
const PART = new RegExp(/part/i)

class LsnvmeUtil extends ConsoleUtil {
  static {
    GObject.registerClass(LsnvmeUtil)
  }

  private data: {
    [key: string]: string
  } = {}

  constructor() {
    super('ls', '-l', '/dev/disk/by-path')

    if (this.available) this.update()
  }

  private parse(str: string) {
    this.data = str
      .split('\n')
      .filter((l) => !PART.test(l))
      .filter((l) => NVME.test(l))
      .map((l) => l.slice(l.indexOf('pci-')))
      .map((l) => l.replace(/(\.\.\/)/gim, '').split('->') as [string, string])
      .map(([a, b]): [string, string] => [
        b.trim(),
        ['nvme', 'pci', a.slice(9, 14).replace(/[:.]/gim, '')].join('-'),
      ])
      .reduce((acc, [path, name]) => {
        acc[path] = name
        return acc
      }, {})
  }

  update() {
    return super.execute(this.parse.bind(this))
  }

  name(key: string) {
    return this.data[key] ?? key
  }
}

export default class LsblkUtil extends ConsoleUtil {
  static {
    GObject.registerClass(LsblkUtil)
  }

  private _lsnvme = new LsnvmeUtil()

  private data: {
    [key: string]: string
  } = {}

  constructor() {
    super('lsblk', '-o', 'HCTL,MODEL,NAME,TRAN', '-dnJ')

    if (this.available) {
      this.update()
    }
  }

  private parse(str: string) {
    const { blockdevices } = JSON.parse(str)
    this.data = blockdevices.reduce(
      (acc: object, { hctl, model, name, tran }) => {
        if (hctl) {
          const [a, b] = hctl.split(':')
          const key = ['drivetemp', 'scsi', a, b].join('-')
          acc[key] = model
          return acc
        }

        if (tran === 'nvme') {
          const key = this._lsnvme.name(name)
          acc[key] = model
          return acc
        }

        return acc
      },
      {}
    )
  }

  update() {
    return super.execute(this.parse.bind(this))
  }

  name(key: string): string {
    if (!this.data[key]) {
      this.update()
      this._lsnvme.update()
    }
    return this.data[key] ?? key
  }
}
