export class AppMenu extends PopupMenu.PopupMenu {
    /**
     * @param {Clutter.Actor} sourceActor - actor the menu is attached to
     * @param {St.Side} side - arrow side
     * @param {object} params - options
     * @param {bool} params.favoritesSection - show items to add/remove favorite
     * @param {bool} params.showSingleWindow - show window section for a single window
     */
    constructor(sourceActor: Clutter.Actor, side?: St.Side, params?: {
        favoritesSection: bool;
        showSingleWindow: bool;
    });
    _app: any;
    _appSystem: any;
    _parentalControlsManager: any;
    _appFavorites: {
        _parentalControlsManager: any;
        FAVORITE_APPS_KEY: string;
        _favorites: {};
        _onFavsChanged(): void;
        reload(): void;
        _getIds(): string[];
        getFavoriteMap(): {};
        getFavorites(): any[];
        isFavorite(appId: any): boolean;
        _addFavorite(appId: any, pos: any): boolean;
        addFavoriteAtPos(appId: any, pos: any): void;
        addFavorite(appId: any): void;
        moveFavoriteToPos(appId: any, pos: any): void;
        _removeFavorite(appId: any): boolean;
        removeFavorite(appId: any): void;
        connectObject(...args: any[]): void;
        disconnectObject(...args: any[]): void;
        connect_object(...args: any[]): void;
        disconnect_object(...args: any[]): void;
    };
    _enableFavorites: any;
    _showSingleWindows: any;
    _windowsChangedId: number;
    _updateWindowsLaterId: number;
    _openWindowsHeader: any;
    _windowSection: PopupMenu.PopupMenuSection;
    _newWindowItem: any;
    _actionSection: PopupMenu.PopupMenuSection;
    _onGpuMenuItem: any;
    _toggleFavoriteItem: any;
    _detailsItem: any;
    _quitItem: any;
    _onAppStateChanged(sys: any, app: any): void;
    _updateQuitItem(): void;
    _updateNewWindowItem(): void;
    _updateFavoriteItem(): void;
    _updateGpuItem(): void;
    _updateDetailsVisibility(): void;
    _animateLaunch(): void;
    _getNonDefaultLaunchGpu(): any;
    /**
     * @returns {bool} - true if the menu is empty
     */
    isEmpty(): bool;
    /**
     * @param {Shell.App} app - the app the menu represents
     */
    setApp(app: Shell.App): void;
    _queueUpdateWindowsSection(): void;
    _updateWindowsSection(): void;
}
import * as PopupMenu from './popupMenu.js';
