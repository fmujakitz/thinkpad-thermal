/**
 * @returns {IBusManager}
 */
export function getIBusManager(): IBusManager;
declare class IBusManager extends Signals.EventEmitter {
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
}
import * as Signals from './signals.js';
export {};
