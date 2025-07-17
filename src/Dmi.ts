import GObject from 'gi://GObject'
import ConsoleUtil from './Console.js'

export default class DmiUtil extends ConsoleUtil {
  static {
    GObject.registerClass(
      {
        Signals: {
          updated: {
            param_types: [GObject.TYPE_JSOBJECT],
          },
        },
      },
      DmiUtil
    )
  }
  constructor() {
    super(
      'cat',
      ...DmiUtil.TAGS.map((tag) => `/sys/devices/virtual/dmi/id/${tag}`)
    )
  }

  private static TAGS = [
    'bios_date',
    'bios_release',
    'bios_version',
    'ec_firmware_release',
    'product_name',
    'product_version',
    'sys_vendor',
  ] as const

  protected declare data: {
    [K in (typeof DmiUtil.TAGS)[number]]: string
  }

  private parse(str: string) {
    const values = str.split('\n')

    this.setData(
      DmiUtil.TAGS.reduce((acc, curr, i) => {
        acc[curr] = (values[i] ?? '')
          .replace(/\(\s+/g, '(')
          .replace(/\s+\)/g, ')')
          .trim()
        return acc
      }, {})
    ) // as typeof this.data

    this.emit('updated', { dmi: this.dmi })
  }

  get dmi() {
    if (!this.data) return {}

    return {
      [this.data.product_version]: {
        [this.data.sys_vendor]: this.data.product_name,
        BIOS: this.data.bios_version,
        Date: this.data.bios_date,
        Release: this.data.bios_release,
        'EC firmware': this.data.ec_firmware_release,
      },
    }
  }

  update() {
    return super.execute(this.parse.bind(this))
  }
}
