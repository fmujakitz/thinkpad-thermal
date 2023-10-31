/**
 * @returns {boolean}
 */
export function canLock(): boolean;
export function registerSessionWithGDM(): Promise<void>;
/**
 * An abstraction over systemd/logind and ConsoleKit.
 *
 * @returns {LoginManagerSystemd | LoginManagerDummy} - the LoginManager singleton
 */
export function getLoginManager(): LoginManagerSystemd | LoginManagerDummy;
declare class LoginManagerSystemd extends Signals.EventEmitter {
    _proxy: any;
    _userProxy: any;
    getCurrentSessionProxy(): Promise<any>;
    _currentSession: any;
    canSuspend(): Promise<{
        canSuspend: boolean;
        needsAuth: boolean;
    }>;
    canRebootToBootLoaderMenu(): Promise<{
        canRebootToBootLoaderMenu: boolean;
        needsAuth: boolean;
    }>;
    setRebootToBootLoaderMenu(): void;
    listSessions(): Promise<any>;
    suspend(): void;
    inhibit(reason: any, cancellable: any): Promise<any>;
    _prepareForSleep(proxy: any, sender: any, [aboutToSuspend]: [any]): void;
}
declare class LoginManagerDummy extends Signals.EventEmitter {
    getCurrentSessionProxy(): any;
    canSuspend(): any;
    canRebootToBootLoaderMenu(): any;
    setRebootToBootLoaderMenu(): void;
    listSessions(): any;
    suspend(): void;
    inhibit(): Promise<any>;
}
import * as Signals from './signals.js';
export {};
