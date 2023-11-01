// https://gitlab.gnome.org/GNOME/gnome-shell/-/blob/main/js/misc/parentalControlsManager.js

import type GObject from '@girs/gobject-2.0';
import type Gio from '@girs/gio-2.0';
import type Shell from '@girs/shell-12';

declare class ParentalControlsManager extends GObject.Object {

    protected _initialized: boolean;
    public readonly initialized: boolean;

    constructor();
    public _init(): void;

    _initializeManager(): Promise<void>;
    _onAppFilterChanged(manager: any, uid: ReturnType<typeof Shell.util_get_uid>): void;

    /**
     * Calculate whether the given app (a Gio.DesktopAppInfo) should be shown
     * on the desktop, in search results, etc. The app should be shown if:
     *  - The .desktop file doesn’t say it should be hidden.
     *  - The executable from the .desktop file’s Exec line isn’t denied in
     *    the user’s parental controls.
     *  - None of the flatpak app IDs from the X-Flatpak and the
     *    X-Flatpak-RenamedFrom lines are denied in the user’s parental
     *    controls.
     * @param appInfo The app to check
     */
    shouldShowApp(appInfo: Gio.DesktopAppInfo): boolean;
}

export function getDefault(): ParentalControlsManager;