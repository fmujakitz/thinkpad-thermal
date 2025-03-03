export class ExtensionManager extends Signals.EventEmitter {
    _initializationPromise: Promise<void>;
    _updateNotified: boolean;
    _updateInProgress: boolean;
    _updatedUUIDS: any[];
    _extensions: any;
    _unloadedExtensions: any;
    _enabledExtensions: any[];
    _extensionOrder: any[];
    _checkVersion: boolean;
    init(): void;
    get updatesSupported(): boolean;
    lookup(uuid: any): any;
    getUuids(): any[];
    _reloadExtensionStylesheets(): void;
    _loadExtensionStylesheet(extension: any): void;
    _unloadExtensionStylesheet(extension: any): void;
    _extensionSupportsSessionMode(uuid: any): boolean;
    _callExtensionDisable(uuid: any): Promise<void>;
    _callExtensionEnable(uuid: any): Promise<void>;
    enableExtension(uuid: any): boolean;
    disableExtension(uuid: any): boolean;
    openExtensionPrefs(uuid: any, parentWindow: any, options: any): boolean;
    notifyExtensionUpdate(uuid: any): void;
    logExtensionError(uuid: any, error: any): void;
    createExtensionObject(uuid: any, dir: any, type: any): {
        metadata: any;
        uuid: any;
        type: any;
        dir: any;
        path: any;
        error: string;
        hasPrefs: any;
        hasUpdate: boolean;
        canChange: boolean;
        sessionModes: any;
    };
    _canLoad(extension: any): boolean;
    _isOutOfDate(extension: any): boolean;
    loadExtension(extension: any): Promise<void>;
    unloadExtension(extension: any): Promise<boolean>;
    reloadExtension(oldExtension: any): Promise<void>;
    _callExtensionInit(uuid: any): Promise<boolean>;
    _getModeExtensions(): any;
    _updateCanChange(extension: any): void;
    _getEnabledExtensions(): any;
    _onUserExtensionsEnabledChanged(): Promise<void>;
    _onEnabledExtensionsChanged(): Promise<void>;
    _onSettingsWritableChanged(): void;
    _onVersionValidationChanged(): Promise<void>;
    _handleMajorUpdate(): Promise<void>;
    _installExtensionUpdates(): void;
    _loadExtensions(): Promise<void>;
    _enableAllExtensions(): Promise<void>;
    /**
     * Disables all currently enabled extensions.
     */
    _disableAllExtensions(): Promise<void>;
    _sessionUpdated(): Promise<void>;
}
import * as Signals from '../misc/signals.js';
