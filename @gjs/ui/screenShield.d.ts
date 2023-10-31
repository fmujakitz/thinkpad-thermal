/**
 * If you are setting org.gnome.desktop.session.idle-delay directly in dconf,
 * rather than through System Settings, you also need to set
 * org.gnome.settings-daemon.plugins.power.sleep-display-ac and
 * org.gnome.settings-daemon.plugins.power.sleep-display-battery to the same value.
 * This will ensure that the screen blanks at the right time when it fades out.
 * https://bugzilla.gnome.org/show_bug.cgi?id=668703 explains the dependency.
 */
export class ScreenShield extends Signals.EventEmitter {
    actor: any;
    _lockScreenState: number;
    _lockScreenGroup: any;
    _lockDialogGroup: any;
    _presence: any;
    _screenSaverDBus: ShellDBus.ScreenSaverDBus;
    _smartcardManager: {
        _objectManager: import("../misc/objectManager.js").ObjectManager;
        _insertedTokens: {};
        _loginToken: any;
        _onLoaded(): void;
        _updateToken(token: any): void;
        _addToken(token: any): void;
        _removeToken(token: any): void;
        hasInsertedTokens(): boolean;
        hasInsertedLoginToken(): boolean;
        connectObject(...args: any[]): void;
        disconnectObject(...args: any[]): void;
        connect_object(...args: any[]): void;
        disconnect_object(...args: any[]): void;
    };
    _credentialManagers: {};
    _loginManager: {
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
        connectObject(...args: any[]): void;
        disconnectObject(...args: any[]): void;
        connect_object(...args: any[]): void;
        disconnect_object(...args: any[]): void;
    } | {
        getCurrentSessionProxy(): any;
        canSuspend(): any;
        canRebootToBootLoaderMenu(): any;
        setRebootToBootLoaderMenu(): void;
        listSessions(): any;
        suspend(): void;
        inhibit(): Promise<any>;
        connectObject(...args: any[]): void;
        disconnectObject(...args: any[]): void;
        connect_object(...args: any[]): void;
        disconnect_object(...args: any[]): void;
    };
    _loginSession: any;
    _settings: any;
    _lockSettings: any;
    _isModal: boolean;
    _isGreeter: boolean;
    _isActive: boolean;
    _isLocked: boolean;
    _inUnlockAnimation: boolean;
    _inhibited: boolean;
    _activationTime: number;
    _becameActiveId: number;
    _lockTimeoutId: number;
    _longLightbox: any;
    _shortLightbox: any;
    idleMonitor: any;
    _cursorTracker: any;
    _getLoginSession(): Promise<void>;
    _setActive(active: any): void;
    _setLocked(locked: any): void;
    _activateDialog(): void;
    _maybeCancelDialog(): void;
    _becomeModal(): boolean;
    _grab: any;
    _syncInhibitor(): Promise<void>;
    _inhibitCancellable: any;
    _inhibitor: any;
    _prepareForSleep(loginManager: any, aboutToSuspend: any): void;
    _onStatusChanged(status: any): void;
    _activateFade(lightbox: any, time: any): void;
    _onUserBecameActive(): void;
    _onLongLightbox(lightBox: any): void;
    _onShortLightbox(lightBox: any): void;
    showDialog(): void;
    _hideLockScreenComplete(): void;
    _showPointer(): void;
    _motionId: any;
    _hidePointerUntilMotion(): void;
    _hideLockScreen(animate: any): void;
    _ensureUnlockDialog(allowCancel: any): boolean;
    _dialog: any;
    _wakeUpScreenId: any;
    _onUnlockFailed(): void;
    _resetLockScreen(params: any): void;
    _lockScreenShown(params: any): void;
    _completeLockScreenShown(): void;
    _wakeUpScreen(): void;
    get locked(): boolean;
    get active(): boolean;
    get activationTime(): number;
    deactivate(animate: any): void;
    _continueDeactivate(animate: any): void;
    _completeDeactivate(): void;
    activate(animate: any): void;
    addCredentialManager(serviceName: any, credentialManager: any): void;
    removeCredentialManager(serviceName: any): void;
    lock(animate: any): void;
    lockIfWasLocked(): void;
}
import * as Signals from '../misc/signals.js';
import * as ShellDBus from './shellDBus.js';
