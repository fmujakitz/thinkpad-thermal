import GObject from 'gi://GObject'
import ConsoleUtil from './Console.js'

export default class LscpuUtil extends ConsoleUtil {
  static {
    GObject.registerClass(LscpuUtil)
  }
  protected override data = {}

  constructor() {
    super('lscpu', '-e=MODELNAME,SOCKET', '-J')
  }

  private extractModel(modelName: string): string {
    if (/intel/i.test(modelName)) {
      return (
        // @ts-ignore
        modelName
          .split('@')[0]
          .replace('CPU', '')
          .replace(/\(R\)/g, '®')
          .replace(/\(TM\)/g, '™')
          .trim() || 'Intel CPU'
      )
    }

    if (/amd/i.test(modelName)) {
      return (
        // @ts-ignore
        modelName
          .split('with')[0]
          .split(/\s+\d+-Core/)[0]
          .split(/\s+[A-Za-z]+-Core/)[0]
          .split('w/')[0]
          .replace('AMD', 'AMD®')
          .trim() || 'AMD CPU'
      )
    }

    return 'Processor'
  }

  private parse(str: string) {
    const { cpus } = JSON.parse(str) as ThinkPadThermal.LscpuEntries
    this.setData(
      Object.values(cpus).reduce<Record<string, string>>((acc, curr) => {
        const key = /intel/i.test(curr.modelname)
          ? `coretemp-isa-${curr.socket.toString().padStart(4, '0')}`
          : 'k10temp' // 'k10temp-pci-00c3'

        acc[key] = this.extractModel(curr.modelname)
        return acc
      }, {})
    )

    return this.data
  }

  update() {
    return super.execute(this.parse.bind(this))
  }

  name(key: string): string {
    return (
      this.data[key] ?? //
      this.data[key.slice(0, key.indexOf('-'))] ??
      key
    )
  }
}
