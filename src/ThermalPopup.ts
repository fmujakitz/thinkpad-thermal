import type ThermalData from './ThermalData.js'
import type DmiUtil from './Dmi.js'
import type IbmAcpiUtil from './IbmAcpi.js'
import type SensorsUtil from './Sensors.js'

import St from 'gi://St'
import { PopupMenu } from 'resource:///org/gnome/shell/ui/popupMenu.js'
import * as Main from 'resource:///org/gnome/shell/ui/main.js'

import {
  PopupSection,
  Item,
  Group,
  Groups,
  QuickDropdown,
} from './ThermalUI.js'

class Dmi extends PopupSection {
  constructor(data: DmiUtil) {
    super('Device info', data, false)
    this.addMenuItem(new Groups('dmi', 'thinkpad'))
  }
}

class Sensors extends PopupSection {
  constructor(data: SensorsUtil) {
    super('Sensors', data, false)
    this.addMenuItem(new Groups('cpu'))
    this.addMenuItem(new Group('hdd', 'Disks', data.hdd))
    this.addMenuItem(new Group('other', 'Thermal', data.other, 'sensor'))
    this.addMenuItem(new Group('fan', 'Cooling', data.fan))
  }
}

class Acpi extends PopupSection {
  constructor(data: IbmAcpiUtil) {
    super('ACPI', data)

    this.addMenuItem(new Item('cpu', 'CPU', data.cpu, 'cpu'))
    this.addMenuItem(new Item('gpu', 'GPU', data.gpu, 'gpu'))

    data.connect('notify::gpu', (next: IbmAcpiUtil) => {
      if (!next.hasDedicatedGpu) {
        this.item('gpu')?.hide()
      } else {
        this.item('gpu')?.show()
      }
    })
  }
}

class FanControl extends PopupSection {
  private _dropdown: QuickDropdown

  constructor(data: IbmAcpiUtil) {
    super('Fan control', data)

    this.addMenuItem(new Item('status', 'Status', data.status))
    this.addMenuItem(new Item('speed', 'Speed', data.speed))
    this.addMenuItem(new Item('level', 'Level', data.level))

    data.connect('notify::status', (data: IbmAcpiUtil) => {
      this._dropdown?.destroy()

      if (data.isControllable) {
        this._dropdown = new QuickDropdown(
          'Fan Level',
          'fan',
          data.levels,
          data.level,
          (next) => data.setLevel(next)
        )

        Main.panel.statusArea.quickSettings.addExternalIndicator(this._dropdown)
      }
    })

    data.connect('notify::level', () => {
      this._dropdown?.status(
        data.level,
        'ThinkPad Fan Control',
        `Current level is: ${data.level}`
      )
    })
  }
}

export default class ThermalPopup extends PopupMenu {
  constructor(
    align: number,
    actor: St.Widget,
    { acpi, dmi, sensors }: ThermalData
  ) {
    super(actor, align, St.Side.TOP)

    this.actor.add_style_class_name('tpt-popup')

    this.addMenuItem(new Dmi(dmi))
    this.addMenuItem(new Sensors(sensors))
    this.addMenuItem(new Acpi(acpi))
    this.addMenuItem(new FanControl(acpi))
  }
}
