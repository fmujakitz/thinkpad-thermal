import Gtk from 'gi://Gtk'
import Gio from 'gi://Gio'
import type Adw from 'gi://Adw'

import { ExtensionPreferences } from 'resource:///org/gnome/Shell/Extensions/js/extensions/prefs.js'

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
    settings.bind(
      'quirks-mode',
      builder.get_object('field_quirks_mode'),
      'active',
      Gio.SettingsBindFlags.DEFAULT
    )
    settings.bind(
      'temperature-unit',
      builder.get_object('field_unit'),
      'active_id',
      Gio.SettingsBindFlags.DEFAULT
    )
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
    settings.bind(
      'position-area',
      builder.get_object('field_indicator_position_area'),
      'active_id',
      Gio.SettingsBindFlags.DEFAULT
    )
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
