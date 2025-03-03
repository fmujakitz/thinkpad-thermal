/**
 * @returns {SmartcardManager}
 */
export function getSmartcardManager(): SmartcardManager;
declare class SmartcardManager extends Signals.EventEmitter {
    _objectManager: ObjectManager.ObjectManager;
    _insertedTokens: {};
    _loginToken: any;
    _onLoaded(): void;
    _updateToken(token: any): void;
    _addToken(token: any): void;
    _removeToken(token: any): void;
    hasInsertedTokens(): boolean;
    hasInsertedLoginToken(): boolean;
}
import * as Signals from './signals.js';
import * as ObjectManager from './objectManager.js';
export {};
