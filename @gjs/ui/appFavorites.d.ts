/**
 * @returns {AppFavorites}
 */
export function getAppFavorites(): AppFavorites;
declare class AppFavorites extends Signals.EventEmitter {
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
}
import * as Signals from '../misc/signals.js';
export {};
