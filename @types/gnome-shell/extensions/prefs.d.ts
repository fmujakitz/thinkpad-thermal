export class ExtensionPreferences extends ExtensionBase {
    static lookupByUUID(uuid: any): any;
    static defineTranslationFunctions(url: any): {
        gettext: any;
        ngettext: any;
        pgettext: any;
    };
    /**
     * Get the single widget that implements
     * the extension's preferences.
     *
     * @returns {Gtk.Widget}
     */
    getPreferencesWidget(): Gtk.Widget;
    /**
     * Fill the preferences window with preferences.
     *
     * The default implementation adds the widget
     * returned by getPreferencesWidget().
     *
     * @param {Adw.PreferencesWindow} window - the preferences window
     */
    fillPreferencesWindow(window: Adw.PreferencesWindow): void;
    _wrapWidget(widget: any): any;
}
export const gettext: any;
export const ngettext: any;
export const pgettext: any;
import { ExtensionBase } from './sharedInternals.js';
