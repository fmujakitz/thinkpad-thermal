import Gtk from 'gi://Gtk'
import Gio from 'gi://Gio'
import Adw from 'gi://Adw'

import { ExtensionPreferences } from 'resource:///org/gnome/Shell/Extensions/js/extensions/prefs.js'

const TEMPERATURE_UNITS = ['celsius', 'fahrenheit'] as const

export default class ThinkpadThermalPreferences extends ExtensionPreferences {
  // @ts-expect-error
  override fillPreferencesWindow(window: Adw.PreferencesWindow): Promise<void> {
    const dir = this.dir.get_path() as string
    const settings = this.getSettings()

    const builder = new Gtk.Builder()

    builder.add_from_file(`${dir}/prefs.xml`)

    /// Settings page
    settings.bind(
      'check-interval',
      builder.get_object('field_interval'),
      'value',
      Gio.SettingsBindFlags.DEFAULT
    )

    // AdwComboRow uses a numeric index; map the GSettings string to/from index manually
    const fieldUnit = builder.get_object('field_unit') as Adw.ComboRow
    fieldUnit.set_selected(
      Math.max(0, TEMPERATURE_UNITS.indexOf(
        settings.get_string('temperature-unit') as typeof TEMPERATURE_UNITS[number]
      ))
    )
    fieldUnit.connect('notify::selected', () => {
      const idx = fieldUnit.get_selected()
      const unit = TEMPERATURE_UNITS[idx] ?? TEMPERATURE_UNITS[0]
      settings.set_string('temperature-unit', unit)
    })
    settings.connect('changed::temperature-unit', () => {
      const unit = settings.get_string('temperature-unit') as typeof TEMPERATURE_UNITS[number]
      const idx = Math.max(0, TEMPERATURE_UNITS.indexOf(unit))
      if (fieldUnit.get_selected() !== idx) fieldUnit.set_selected(idx)
    })
    settings.bind(
      'show-indicator-unit',
      builder.get_object('field_indicator_show_unit'),
      'active',
      Gio.SettingsBindFlags.DEFAULT
    )
    settings.bind(
      'position-enable',
      builder.get_object('field_indicator_position_enable'),
      'active',
      Gio.SettingsBindFlags.DEFAULT
    )
    settings.bind(
      'position-enable',
      builder.get_object('box_position'),
      'sensitive',
      Gio.SettingsBindFlags.DEFAULT
    )
    // field_indicator_position_area is currently commented out in prefs.xml;
    // skip binding to avoid a null-target settings.bind() call.
    // settings.bind(
    //   'position-area',
    //   builder.get_object('field_indicator_position_area'),
    //   'active_id',
    //   Gio.SettingsBindFlags.DEFAULT
    // )
    settings.bind(
      'position-index',
      builder.get_object('field_indicator_position_index'),
      'value',
      Gio.SettingsBindFlags.DEFAULT
    )

    /// About page
    builder
      .get_object<Gtk.Image>('about_logo') //
      .set_from_file(`${dir}/preview.png`)
    builder
      .get_object<Gtk.Label>('about_name') //
      .set_text(this.metadata.name)
    builder
      .get_object<Gtk.Label>('about_description') //
      .set_text(this.metadata.description)
    builder
      .get_object<Gtk.Label>('about_version') //
      .set_text(this.metadata.version?.toString() as string)
    builder
      .get_object<Gtk.Label>('about_url') //
      .set_markup(`<a href="${this.metadata.url}">${this.metadata.url}</a>`)

    // Window layout
    window.search_enabled = true
    window.add(builder.get_object('page_prefs'))
    window.add(builder.get_object('page_about'))
  }
}
