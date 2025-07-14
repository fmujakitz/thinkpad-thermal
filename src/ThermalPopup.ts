import type ThermalData from './ThermalData.js'

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
  constructor(data: ThermalData) {
    super('Device info', data, false)
    this.addMenuItem(new Groups('dmi', 'thinkpad'))
  }
}

class Sensors extends PopupSection {
  constructor(data: ThermalData) {
    super('Sensors', data, false)
    this.addMenuItem(new Groups('cpus'))
    this.addMenuItem(new Group('hdds', 'Disks', data.hdds))
    this.addMenuItem(new Group('other', 'Thermal', data.other, 'sensor'))
    this.addMenuItem(new Group('fans', 'Cooling', data.fans))
  }
}

class Acpi extends PopupSection {
  constructor(data: ThermalData) {
    super('ACPI', data)

    this.addMenuItem(new Item('cpu', 'CPU', data.cpu, 'cpu'))
    this.addMenuItem(new Item('gpu', 'GPU', data.gpu, 'gpu'))

    data.connect('notify::gpu', (next: ThermalData) => {
      if (!next.hasDedicatedGpu) {
        this.item('gpu')?.hide()
      } else {
        this.item('gpu')?.show()
      }
    })
  }
}

class FanControl extends PopupSection {
  constructor(data: ThermalData) {
    super('Fan control', data)

    this.addMenuItem(new Item('status', 'Status', data.status))
    this.addMenuItem(new Item('speed', 'Speed', data.speed))
    this.addMenuItem(new Item('level', 'Level', data.level))
  }
}

export default class ThermalPopup extends PopupMenu {
  _dd: QuickDropdown | null

  constructor(
    align: number,
    actor: St.Widget,
    data: ThermalData
  ) {
    super(actor, align, St.Side.TOP)

    this.actor.add_style_class_name('tpt-popup')

    this.addMenuItem(new Dmi(data))
    this.addMenuItem(new Sensors(data))
    this.addMenuItem(new Acpi(data))
    this.addMenuItem(new FanControl(data))

    data.connect('notify::status', (data: ThermalData) => {
      //
      if (!data.isControllable) {
        this._dd?.destroy()
        this._dd = null
        return
      }

      if (this._dd) return

      this._dd = new QuickDropdown(
        'Fan Level',
        'fan',
        data.levels,
        data.level,
        (next) => data.level = next
      )

      Main.panel.statusArea.quickSettings //
        .addExternalIndicator(this._dd)
    })

    data.connect('notify::level', (data: ThermalData) => {
      this._dd?.status(
        data.level,
        'ThinkPad Fan Control',
        `Current level is: ${data.level}`
      )
    })
  }

  override destroy(): void {
    this._dd?.destroy()
    this._dd = null
    super.destroy()
  }
}
