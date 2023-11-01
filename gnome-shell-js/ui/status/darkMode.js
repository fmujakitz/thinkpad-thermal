import Gio from 'gi://Gio';
import GObject from 'gi://GObject';

import * as Main from '../main.js';

import {QuickToggle, SystemIndicator} from '../quickSettings.js';

const DarkModeToggle = GObject.registerClass(
class DarkModeToggle extends QuickToggle {
    _init() {
        super._init({
            title: _('Dark Style'),
            iconName: 'dark-mode-symbolic',
        });

        this._settings = new Gio.Settings({
            schema_id: 'org.gnome.desktop.interface',
        });
        this._changedId = this._settings.connect('changed::color-scheme',
            () => this._sync());

        this.connectObject(
            'destroy', () => this._settings.run_dispose(),
            'clicked', () => this._toggleMode(),
            this);
        this._sync();
    }

    _toggleMode() {
        Main.layoutManager.screenTransition.run();
        this._settings.set_string('color-scheme',
            this.checked ? 'default' : 'prefer-dark');
    }

    _sync() {
        const colorScheme = this._settings.get_string('color-scheme');
        const checked = colorScheme === 'prefer-dark';
        if (this.checked !== checked)
            this.set({checked});
    }
});

export const Indicator = GObject.registerClass(
class Indicator extends SystemIndicator {
    _init() {
        super._init();

        this.quickSettingsItems.push(new DarkModeToggle());
    }
});
