import Clutter from 'gi://Clutter'
import Gio from 'gi://Gio'
import GObject from 'gi://GObject'
import Pango from 'gi://Pango'
import St from 'gi://St'

import {
  PopupBaseMenuItem,
  PopupMenuSection,
  PopupSubMenuMenuItem,
  Ornament,
  PopupSeparatorMenuItem,
} from 'resource:///org/gnome/shell/ui/popupMenu.js'
import {
  QuickMenuToggle,
  SystemIndicator,
} from 'resource:///org/gnome/shell/ui/quickSettings.js'

import microdiff from './vendor/microdiff.js'
import { ME } from './extension.js'

export class ButtonSection extends St.BoxLayout {
  static {
    GObject.registerClass(ButtonSection)
  }

  key: string

  private _icon: St.Icon
  private _value: St.Label
  private _unit: St.Label

  constructor(key: ThinkPadThermal.IndicatorKeys, text: string, icon?: string) {
    super({ style_class: 'section' })
    this.key = key

    this._icon = new Icon(icon ?? key)
    this._value = new Label('value', '')
    this._unit = new Label('unit', '')

    this.add_child(this._icon)
    this.add_child(this._value)
    this.add_child(this._unit)

    this.update(text)
  }

  update(text: string) {
    const [value, unit = ''] = text.split(' ')
    this._value.set_text(value)
    this._unit.set_text(unit)
  }

  toggleUnit(show: boolean) {
    this._unit.visible = show
  }
}

export class Label extends St.Label {
  static {
    GObject.registerClass(Label)
  }

  constructor(style_class: string, text = '') {
    super({
      text,
      style_class,
      y_align: Clutter.ActorAlign.CENTER,
    })

    this.clutter_text.set_ellipsize(Pango.EllipsizeMode.NONE)
  }
}

export class Icon extends St.Icon {
  static {
    GObject.registerClass(Icon)
  }

  constructor(filename: string, style_class = 'icon', icon_size = 14) {
    super({
      icon_size,
      style_class,
      y_align: Clutter.ActorAlign.CENTER,
    })

    this.set_gicon(Icon.createIcon(filename))
  }

  static createIcon(filename: string) {
    if (!ME) return null
    return new Gio.FileIcon({
      file: ME.dir.resolve_relative_path(`icons/${filename}-symbolic.svg`),
    })
  }
}

export class Title extends PopupBaseMenuItem {
  static {
    GObject.registerClass(Title)
  }

  private _text: St.Label

  constructor(text: string) {
    super({
      style_class: 'title',
      reactive: false,
    })

    this._text = new St.Label({
      text,
      x_align: Clutter.ActorAlign.CENTER,
      y_align: Clutter.ActorAlign.CENTER,
      x_expand: true,
    })

    this.add_child(this._text)
  }
}

export class Item extends PopupBaseMenuItem {
  static {
    GObject.registerClass(Item)
  }

  key: string

  private _label: St.Label
  private _value: St.Label
  private _icon?: St.Icon

  constructor(key: string, label: string, value: string, icon?: string) {
    super({
      style_class: 'item',
      reactive: false,
    })
    this.key = key

    if (icon) {
      this.setOrnament(Ornament.HIDDEN)
      this._icon = new Icon(icon, 'popup-menu-ornament')
      this.add_child(this._icon)
    }

    this._label = new St.Label({
      style_class: 'label',
      text: label,
      x_align: Clutter.ActorAlign.START,
      x_expand: false,
      reactive: false,
    })
    this._value = new St.Label({
      style_class: 'value',
      text: value,
      x_align: Clutter.ActorAlign.END,
      x_expand: true,
    })

    this.add_child(this._label)
    this.add_child(this._value)
  }

  set value(value: string) {
    this._value.set_text(value)
  }

  set label(label: string) {
    this._label.set_text(label)
  }
}

// export class DropDown extends PopupSubMenuMenuItem {
//   static {
//     GObject.registerClass(DropDown)
//   }
//   key: string
//   private _value: St.Label

//   constructor(
//     key: string,
//     label: string,
//     value: string,
//     items: string[],
//     onClick: (key: string) => void
//   ) {
//     super(label, false)
//     this.key = key

//     this.menu.actor.add_style_class_name('dropdown-menu')
//     this.add_style_class_name('dropdown-button')
//     this.setOrnament(Ornament.HIDDEN)

//     this.label.add_style_class_name('label')
//     this.label.clutter_text.set_ellipsize(Pango.EllipsizeMode.NONE)

//     this._value = new St.Label({
//       style_class: 'value',
//       text: value,
//       x_align: Clutter.ActorAlign.END,
//       y_align: Clutter.ActorAlign.CENTER,
//       x_expand: true,
//     })
//     this._value.clutter_text.set_ellipsize(Pango.EllipsizeMode.NONE)

//     const expander = this.get_child_at_index(2) as Clutter.Actor
//     this.replace_child(expander, this._value)

//     for (const key of items) {
//       this.menu.addAction(key, () => onClick(key))
//       const item = this.menu.actor.lastChild.lastChild
//       item.lastChild.x_expand = true
//       item.lastChild.x_align = Clutter.ActorAlign.END
//     }
//   }

//   set value(value: string) {
//     this._value.set_text(value)
//   }
// }

export class Group extends PopupSubMenuMenuItem {
  static {
    GObject.registerClass(Group)
  }
  key: string
  private rename: (key: string) => string

  constructor(
    key: string,
    label: string,
    value: object,
    icon?: string,
    rename?: (key: string) => string
  ) {
    super(label, true)
    this.key = key

    this.actor.y_expand = false
    this.add_style_class_name('submenu')
    this.setOrnament(Ornament.HIDDEN)

    if ('icon' in this) {
      const i = this.icon as St.Icon
      i.set_gicon(Icon.createIcon(icon ?? key))
    }

    if (typeof rename === 'function') this.rename = rename

    for (const k of Object.keys(value)) {
      this.CREATE([k], value[k])
    }
  }

  element(key: string) {
    return (this.menu._getMenuItems() as Item[]).find(
      (item) => item.key === key
    ) as Item
  }

  private CREATE(path: (string | number)[], value: string) {
    const key = path[0] as string
    const el = new Item(key, key, value)
    el.value = value
    el.setOrnament(Ornament.HIDDEN)

    const curr = this.element(key)
    if (curr) {
      this.menu.actor.replace_child(curr, el)
    } else {
      this.menu.addMenuItem(el)
    }
  }
  private CHANGE(path: (string | number)[], value: string) {
    const key = path[0] as string
    const el = this.element(key)
    el.value = value
    if (typeof this.rename === 'function' && el.label === key) {
      el.label = this.rename(key)
    }
  }
  private REMOVE(path: (string | number)[]) {
    const key = path[0] as string
    this.element(key).destroy()
  }

  update(diffs: ThinkPadThermal.Diffs) {
    for (const { type, path, value } of diffs) {
      this[type](path, value)
    }
  }
}

export class Groups extends PopupMenuSection {
  key: string
  private icon: string

  constructor(key: string, /*values: object,*/ icon?: string) {
    super()
    this.key = key
    this.icon = icon ?? key
    this.actor.y_expand = false
  }

  element(key: string) {
    return (this._getMenuItems() as Group[]).find(
      (item) => item.key === key
    ) as Group
  }

  private CREATE(path: (string | number)[], value: object) {
    const key = path[0] as string
    this.addMenuItem(new Group(key, key, value, this.icon))
  }
  private CHANGE(path: (string | number)[], value: string) {
    const key = path[0] as string
    this.element(key).update([
      {
        type: 'CHANGE',
        path: path.slice(1),
        value,
        oldValue: 'unknown',
      },
    ])
  }
  private REMOVE(path: (string | number)[]) {
    const key = path[0] as string
    this.element(key).destroy()
  }

  update(diffs: ThinkPadThermal.Diffs) {
    for (const { type, path, value } of diffs) {
      this[type](path, value as never)
    }
  }
}

export class PopupSection extends PopupMenuSection {
  name = 'Section'

  constructor(name: string, data: ThinkPadThermal.Util, createTitle = true) {
    super()
    this.name = name
    this.actor.y_expand = false

    if (createTitle) this.addMenuItem(new Title(name))

    data.connect('updated', (next) => this.sync(next))
  }

  private get elements() {
    return (this._getMenuItems() as ThinkPadThermal.PrevElement[]) //
      .filter((e) => e.key)
  }

  item(key: string) {
    return this.elements.find((e) => e.key === key)
  }

  private sync(data: object) {
    for (const el of this.elements) {
      const { key, prev } = el
      const value = data[key]

      if (prev === value) continue

      if (
        typeof value === 'object' ||
        el instanceof Group ||
        el instanceof Groups
      ) {
        const diffs = microdiff(prev ?? {}, value)

        if (diffs.length === 0) continue

        el.prev = value
        if ('update' in el) el.update(diffs)
        continue
      }

      el.prev = value
      el.value = value
    }
  }
}

export class QuickDropdown extends SystemIndicator {
  static {
    GObject.registerClass(QuickDropdown)
  }

  private _quick: QuickMenuToggle
  private _icon: Gio.Icon

  constructor(
    title: string,
    icon_name: string,
    items: string[],
    current: string,
    onClick: (next: string) => void
  ) {
    super()

    this._icon = Icon.createIcon(icon_name) as Gio.Icon

    this._quick = new QuickMenuToggle({
      title,
      subtitle: current ?? '...',
      gicon: this._icon,
      toggleMode: false,
    })

    this._quick.menu.setHeader(this._icon, title, current ?? '...')

    for (const s of items) {
      this._quick.menu.addAction(s, () => onClick(s))
    }

    this._quick.menu.addMenuItem(new PopupSeparatorMenuItem())
    this._quick.menu.addAction(
      'Settings',
      () => ME?.openPreferences(),
      'org.gnome.Settings-symbolic' as unknown as Gio.Icon
    )

    this.quickSettingsItems.push(this._quick)
  }

  override destroy(): void {
    this._quick.destroy()
    super.destroy()
  }

  status(current: string, header: string, subtitle: string) {
    this._quick.subtitle = current
    this._quick.menu.setHeader(this._icon, header, subtitle)

    for (const item of this._quick.menu._getMenuItems() as PopupBaseMenuItem[]) {
      if (item instanceof PopupSeparatorMenuItem) break

      item.setOrnament(Ornament.NONE)
      if ((item.labelActor as St.Label).text === current) {
        item.setOrnament(Ornament.CHECK)
      }
    }
  }
}
