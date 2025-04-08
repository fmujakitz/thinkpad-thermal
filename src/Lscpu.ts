import GObject from 'gi://GObject'
import ConsoleUtil from './Console.js'

export default class LscpuUtil extends ConsoleUtil {
  static {
    GObject.registerClass(LscpuUtil)
  }
  private _data = {}

  constructor() {
    super('lscpu', '-e=MODELNAME,SOCKET', '-J')

    if (this.available) this.update()
  }

  private extractModel(modelName: string): string {
    if (modelName.toLowerCase().includes('intel')) {
      return modelName
        .split('@')[0]!
        .replace('CPU', '') //
        .replace(/\(R\)/g, '®')
        .replace(/\(TM\)/g, '™')
        .trim()
    }

    if (modelName.toLowerCase().includes('amd')) {
      return modelName
        .split('with')[0]!
        .split(/\s+\d+-Core/)[0]!
        .split(/\s+[A-Za-z]+-Core/)[0]!
        .trim()
    }

    return 'Processor'
  }

  private parse(str: string) {
    const { cpus } = JSON.parse(str) as ThinkPadThermal.LscpuEntries
    this._data = Object.values(cpus).reduce<Record<string, string>>(
      (acc, curr) => {
        let key = curr.socket.toString().padStart(4, '0')
        key = `coretemp-isa-${key}`
        acc[key] = this.extractModel(curr.modelname)
        return acc
      },
      {}
    )
    return this._data
  }

  update() {
    return super.execute(this.parse.bind(this))
  }

  name(key: string): string {
    return this._data[key] ?? key
  }
}
