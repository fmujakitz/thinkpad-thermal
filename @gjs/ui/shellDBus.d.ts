export class GnomeShell {
    _dbusImpl: any;
    _senderChecker: DBusSenderChecker;
    _extensionsService: GnomeShellExtensions;
    _screenshotService: Screenshot.ScreenshotService;
    _grabbedAccelerators: any;
    _grabbers: any;
    _cachedOverviewVisible: boolean;
    /**
     * This function executes arbitrary code in the main
     * loop, and returns a boolean success and
     * JSON representation of the object as a string.
     *
     * If evaluation completes without throwing an exception,
     * then the return value will be [true, JSON.stringify(result)].
     * If evaluation fails, then the return value will be
     * [false, JSON.stringify(exception)];
     *
     * @param {string} code A string containing JavaScript code
     * @returns {Array}
     */
    Eval(code: string): any[];
    /**
     * Focus the overview's search entry
     *
     * @async
     * @param {...any} params - method parameters
     * @param {Gio.DBusMethodInvocation} invocation - the invocation
     * @returns {void}
     */
    FocusSearchAsync(params: any[], invocation: Gio.DBusMethodInvocation): void;
    /**
     * Show OSD with the specified parameters
     *
     * @async
     * @param {...any} params - method parameters
     * @param {Gio.DBusMethodInvocation} invocation - the invocation
     * @returns {void}
     */
    ShowOSDAsync([params]: any[], invocation: Gio.DBusMethodInvocation): void;
    /**
     * Focus specified app in the overview's app grid
     *
     * @async
     * @param {string} id - an application ID
     * @param {Gio.DBusMethodInvocation} invocation - the invocation
     * @returns {void}
     */
    FocusAppAsync([id]: string, invocation: Gio.DBusMethodInvocation): void;
    /**
     * Show the overview's app grid
     *
     * @async
     * @param {...any} params - method parameters
     * @param {Gio.DBusMethodInvocation} invocation - the invocation
     * @returns {void}
     */
    ShowApplicationsAsync(params: any[], invocation: Gio.DBusMethodInvocation): void;
    GrabAcceleratorAsync(params: any, invocation: any): Promise<void>;
    GrabAcceleratorsAsync(params: any, invocation: any): Promise<void>;
    UngrabAcceleratorAsync(params: any, invocation: any): Promise<void>;
    UngrabAcceleratorsAsync(params: any, invocation: any): Promise<void>;
    ScreenTransitionAsync(params: any, invocation: any): Promise<void>;
    _emitAcceleratorActivated(action: any, device: any, timestamp: any): void;
    _grabAcceleratorForSender(accelerator: any, modeFlags: any, grabFlags: any, sender: any): any;
    _ungrabAccelerator(action: any): any;
    _ungrabAcceleratorForSender(action: any, sender: any): any;
    _onGrabberBusNameVanished(connection: any, name: any): void;
    ShowMonitorLabelsAsync(params: any, invocation: any): Promise<void>;
    HideMonitorLabelsAsync(params: any, invocation: any): Promise<void>;
    _checkOverviewVisibleChanged(): void;
    get Mode(): any;
    set OverviewActive(arg: boolean);
    get OverviewActive(): boolean;
    get ShellVersion(): any;
}
export class ScreenSaverDBus {
    constructor(screenShield: any);
    _screenShield: any;
    _dbusImpl: any;
    LockAsync(parameters: any, invocation: any): void;
    SetActive(active: any): void;
    GetActive(): any;
    GetActiveTime(): number;
}
import { DBusSenderChecker } from '../misc/util.js';
declare class GnomeShellExtensions {
    _dbusImpl: any;
    _userExtensionsEnabled: boolean;
    ListExtensions(): {};
    GetExtensionInfo(uuid: any): any;
    GetExtensionErrors(uuid: any): any;
    InstallRemoteExtensionAsync([uuid]: [any], invocation: any): void;
    UninstallExtension(uuid: any): boolean;
    EnableExtension(uuid: any): any;
    DisableExtension(uuid: any): any;
    LaunchExtensionPrefs(uuid: any): void;
    OpenExtensionPrefs(uuid: any, parentWindow: any, options: any): void;
    ReloadExtensionAsync(params: any, invocation: any): void;
    CheckForUpdates(): void;
    get ShellVersion(): any;
    set UserExtensionsEnabled(arg: boolean);
    get UserExtensionsEnabled(): boolean;
    _extensionStateChanged(_: any, newState: any): void;
}
import * as Screenshot from './screenshot.js';
export {};
