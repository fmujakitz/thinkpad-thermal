import GObject from 'gi://GObject'
import ConsoleUtil from './Console.js'

const TAGS = [
  'bios_date',
  'bios_release',
  'bios_vendor',
  'bios_version',
  'board_asset_tag',
  'board_name',
  'board_vendor',
  'board_version',
  'chassis_asset_tag',
  'chassis_type',
  'chassis_vendor',
  'chassis_version',
  'ec_firmware_release',
  'product_family',
  'product_name',
  'product_sku',
  'product_version',
  'sys_vendor',
] as const

type Tags = (typeof TAGS)[number]
type DmiData = {
  [K in Tags]: string
}

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
    super('cat', ...TAGS.map((tag) => `/sys/devices/virtual/dmi/id/${tag}`))

    if (this.available) this.update()
  }

  private data: DmiData

  private parse(str: string) {
    const values = str.split('\n')

    this.data = TAGS.reduce((acc, curr, i) => {
      acc[curr] = (values[i] ?? '')
        .replace(/\(\s+/g, '(')
        .replace(/\s+\)/g, ')')
        .trim()
      return acc
    }, {} as DmiData)

    this.emit('updated', this.dmi)
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
