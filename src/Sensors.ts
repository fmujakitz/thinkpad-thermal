import ConsoleUtil from "./Console"
import LsblkUtil from "./Lsblk"
import LscpuUtil from "./Lscpu"

type SensorsData = {
  cpu: object,
  hdd: object,
  bat: object,
  fan: object,
  other: object
}
export default class SensorsUtil extends ConsoleUtil {
  private _lscpu: LscpuUtil
  private _lsblk: LsblkUtil
  private _data: SensorsData

  constructor() {
    super('sensors', '-A', '-j')

    if (this.available) {
      this._lscpu = new LscpuUtil()
      this._lsblk = new LsblkUtil()
      this.update()
    }
  }

  private simplify(obj) {
    const input = new RegExp(/input$/)
    const fans = new RegExp(/^fan/i)

    return Object.keys(obj).reduce((acc, key) => {
      const inner = Object.keys(obj[key]).find(k => input.test(k))

      if (inner) {
        let value = obj[key][inner]
        if (value > 0 || fans.test(key)) {
          if (typeof value === 'number') value = value.toString()
          acc[key] = value
        }
      } else {
        acc[key] = this.simplify(obj[key])
      }

      return acc
    }, {})
  }

  private organize(data: object) {
    const cores = new RegExp(/^coretemp/i)
    const drives = new RegExp(/^drivetemp/i)
    const batteries = new RegExp(/^bat/i)
    const tpisa = new RegExp(/^thinkpad-isa/i)
    const temp = new RegExp(/^temp/i)

    return Object.keys(data).reduce((acc, key) => {
      let value = data[key]

      if (Object.keys(value).length === 1) {
        value = Object.values(value)[0]
        if (typeof value === 'number') {
          value = value.toString()
        }
      }

      if (cores.test(key)) {
        acc.cpu[this._lscpu.name] = value
        return acc
      }

      if (drives.test(key)) {
        acc.hdd[this._lsblk.name(key) as string] = value
        return acc
      }

      if (batteries.test(key)) {
        const k = key.split('-')[0] as string
        acc.bat[k] = value
        return acc
      }

      if (tpisa.test(key)) {
        const fans = new RegExp(/^fan/i)
        acc.fan = Object.keys(value)
          .filter(k => fans.test(k))
          .reduce((acc, k) => {
            acc[k] = value[k].toString()
            return acc
          }, {})

        return acc
      }

      if (typeof value === 'object') {
        Object.keys(value)
          .filter(k => temp.test(k))
          .map(k => {
            const subkey = [key, k].join('-')
            acc.other[subkey] = value[k]
          })

        return acc
      }

      acc.other[key] = value

      return acc
    }, { cpu: {}, hdd: {}, bat: {}, fan: {}, other: {} })
  }

  private parse(str: string) {
    this._data = this.organize(this.simplify(JSON.parse(str)))
  }

  update() {
    return super.execute(this.parse.bind(this))
  }

  private verify(obj) {
    return Object.keys(obj).length ? obj : false
  }

  get cpu() {
    return this.verify(this._data.cpu)
  }
  get hdd() {
    return this.verify(this._data.hdd)
  }
  get bat() {
    return this.verify(this._data.bat)
  }
  get fan() {
    return this.verify(this._data.fan)
  }
  get other() {
    return this.verify(this._data.other)
  }

}
