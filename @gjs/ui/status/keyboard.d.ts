/**
 * @returns {InputSourceManager}
 */
export function getInputSourceManager(): InputSourceManager;
export const INPUT_SOURCE_TYPE_XKB: "xkb";
export const INPUT_SOURCE_TYPE_IBUS: "ibus";
export const LayoutMenuItem: any;
export class InputSource extends Signals.EventEmitter {
    constructor(type: any, id: any, displayName: any, shortName: any, index: any);
    type: any;
    id: any;
    displayName: any;
    _shortName: any;
    index: any;
    properties: any;
    xkbId: any;
    set shortName(arg: any);
    get shortName(): any;
    activate(interactive: any): void;
    _getXkbId(): any;
}
export const InputSourcePopup: any;
export class InputSourceManager extends Signals.EventEmitter {
    _inputSources: {};
    _ibusSources: {};
    _currentSource: any;
    _mruSources: any[];
    _mruSourcesBackup: any[];
    _keybindingAction: any;
    _keybindingActionBackward: any;
    _settings: InputSourceSystemSettings | InputSourceSessionSettings;
    _xkbInfo: GnomeDesktop.XkbInfo;
    _keyboardManager: {
        MAX_LAYOUTS_PER_GROUP: number;
        _xkbInfo: GnomeDesktop.XkbInfo;
        _current: any;
        _localeLayoutInfo: {
            layout: any;
            variant: any;
        };
        _layoutInfos: {};
        _currentKeymap: {
            layouts: any;
            variants: any;
            options: any;
        };
        _applyLayoutGroup(group: any): void;
        _applyLayoutGroupIndex(idx: any): void;
        apply(id: any): void;
        reapply(): void;
        setUserLayouts(ids: any): void;
        _getLocaleLayout(): {
            layout: any;
            variant: any;
        };
        _buildGroupStrings(_group: any): any[];
        setKeyboardOptions(options: any): void;
        _xkbOptions: any;
        _buildOptionsString(): any;
        readonly currentLayout: any;
    };
    _ibusReady: boolean;
    _ibusManager: {
        _MAX_INPUT_SOURCE_ACTIVATION_TIME: number;
        _PRELOAD_ENGINES_DELAY_TIME: number;
        _candidatePopup: any;
        _panelService: any;
        _engines: any;
        _ready: boolean;
        _registerPropertiesId: number;
        _currentEngineName: any;
        _preloadEnginesId: number;
        _ibus: any;
        _ibusSystemdServiceExists(): Promise<any>;
        _ibusIsSystemdService: any;
        _queueSpawn(): Promise<void>;
        _tryAppendEnv(env: any, varname: any): void;
        _spawn(extraArgs?: any[]): void;
        restartDaemon(extraArgs?: any[]): Promise<void>;
        _clear(): void;
        _cancellable: any;
        _onConnected(): void;
        _initEngines(): Promise<void>;
        _initPanelService(): Promise<void>;
        _updateReadiness(): void;
        _engineChanged(bus: any, engineName: any): void;
        _updateProperty(panel: any, prop: any): void;
        _setContentType(panel: any, purpose: any, hints: any): void;
        activateProperty(key: any, state: any): void;
        getEngineDesc(id: any): any;
        _setEngine(id: any, callback: any): Promise<void>;
        setEngine(id: any, callback: any): Promise<void>;
        preloadEngines(ids: any): void;
        setCompletionEnabled(enabled: any, callback: any): boolean;
        _oskCompletion: any;
        _preOskState: {
            engine: any;
            emoji: any;
            langs: any;
            completion: any;
            inputMethod: any;
        };
        connectObject(...args: any[]): void;
        disconnectObject(...args: any[]): void;
        connect_object(...args: any[]): void;
        disconnect_object(...args: any[]): void;
    };
    _sourcesPerWindow: boolean;
    _focusWindowNotifyId: number;
    _disableIBus: boolean;
    _reloading: boolean;
    reload(): void;
    _ibusReadyCallback(im: any, ready: any): void;
    _modifiersSwitcher(): boolean;
    _switchInputSource(display: any, window: any, binding: any): void;
    _switcherPopup: any;
    _keyboardOptionsChanged(): void;
    _updateMruSettings(): void;
    _currentInputSourceChanged(newSource: any): void;
    activateInputSource(is: any, interactive: any): void;
    _updateMruSources(): void;
    _inputSourcesChanged(): void;
    _makeEngineShortName(engineDesc: any): any;
    _ibusPropertiesRegistered(im: any, engineName: any, props: any): void;
    _ibusPropertyUpdated(im: any, engineName: any, prop: any): void;
    _updateSubProperty(props: any, prop: any): boolean;
    _ibusSetContentType(im: any, purpose: any, _hints: any): void;
    _getNewInputSource(current: any): any;
    _getCurrentWindow(): any;
    _setPerWindowInputSource(): void;
    _sourcesPerWindowChanged(): void;
    _changePerWindowSource(): void;
    get currentSource(): any;
    get inputSources(): {};
    get keyboardManager(): {
        MAX_LAYOUTS_PER_GROUP: number;
        _xkbInfo: GnomeDesktop.XkbInfo;
        _current: any;
        _localeLayoutInfo: {
            layout: any;
            variant: any;
        };
        _layoutInfos: {};
        _currentKeymap: {
            layouts: any;
            variants: any;
            options: any;
        };
        _applyLayoutGroup(group: any): void;
        _applyLayoutGroupIndex(idx: any): void;
        apply(id: any): void;
        reapply(): void;
        setUserLayouts(ids: any): void;
        _getLocaleLayout(): {
            layout: any;
            variant: any;
        };
        _buildGroupStrings(_group: any): any[];
        setKeyboardOptions(options: any): void;
        _xkbOptions: any;
        _buildOptionsString(): any;
        readonly currentLayout: any;
    };
}
export const InputSourceIndicator: any;
import * as Signals from '../../misc/signals.js';
declare class InputSourceSystemSettings extends InputSourceSettings {
    _BUS_NAME: string;
    _BUS_PATH: string;
    _BUS_IFACE: string;
    _BUS_PROPS_IFACE: string;
    _layouts: string;
    _variants: string;
    _options: string;
    _reload(): Promise<void>;
    get inputSources(): {
        type: string;
        id: string;
    }[];
    get keyboardOptions(): string[];
}
declare class InputSourceSessionSettings extends InputSourceSettings {
    _DESKTOP_INPUT_SOURCES_SCHEMA: string;
    _KEY_INPUT_SOURCES: string;
    _KEY_MRU_SOURCES: string;
    _KEY_KEYBOARD_OPTIONS: string;
    _KEY_PER_WINDOW: string;
    _settings: any;
    _getSourcesList(key: any): {
        type: any;
        id: any;
    }[];
    get inputSources(): {
        type: any;
        id: any;
    }[];
    set mruSources(arg: {
        type: any;
        id: any;
    }[]);
    get mruSources(): {
        type: any;
        id: any;
    }[];
    get keyboardOptions(): any;
    get perWindow(): any;
}
declare class InputSourceSettings extends Signals.EventEmitter {
    _emitInputSourcesChanged(): void;
    _emitKeyboardOptionsChanged(): void;
    _emitPerWindowChanged(): void;
    get inputSources(): any[];
    set mruSources(arg: any[]);
    get mruSources(): any[];
    get keyboardOptions(): any[];
    get perWindow(): boolean;
}
export {};
