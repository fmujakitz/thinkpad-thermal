import GObject from 'gi://GObject'
import ConsoleUtil from './Console.js'

class LsnvmeUtil extends ConsoleUtil {
  static {
    GObject.registerClass(LsnvmeUtil)
  }

  protected override data: ThinkPadThermal.ValueReadings = {}

  constructor() {
    super('ls', '-l', '/dev/disk/by-path')
  }

  private static IS = {
    NVME: /^(?=.*nvme)(?!.*-part).*/i,
  }

  private parse(str: string) {
    const ids = str
      .split('\n') //
      .filter((l) => LsnvmeUtil.IS.NVME.test(l))
      .map((l) => l.slice(l.indexOf('pci-')).split('->') as [string, string])
      .map(
        ([a, b]) =>
          [
            b.slice(b.indexOf('nvme')).trim(),
            ['nvme-pci', a.slice(9, 14).replace(/[:.]/gim, '')].join('-'),
          ] as [string, string]
      )
    for (const [path, id] of ids) {
      this.data[path] = id
    }
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

  protected override data: ThinkPadThermal.ValueReadings = {}

  constructor() {
    super('lsblk', '-o', 'HCTL,MODEL,NAME,TRAN', '-dnJ')
  }

  private parse(str: string) {
    const { blockdevices } = JSON.parse(str)
    this.setData(
      blockdevices.reduce((acc: object, { hctl, model, name, tran }) => {
        if (hctl) {
          const key = [
            'drivetemp',
            'scsi',
            ...hctl.split(':').slice(0, 2),
          ].join('-')
          acc[key] = model
          return acc
        }

        if (tran === 'nvme') {
          const key = this._lsnvme.name(name)
          acc[key] = model
          return acc
        }

        return acc
      }, {})
    )
  }

  update() {
    return super.execute(this.parse.bind(this))
  }

  name(key: string): string {
    if (!this.data[key]) {
      this._lsnvme.update()
      this.update()
    }
    return this.data[key] ?? key
  }
}
