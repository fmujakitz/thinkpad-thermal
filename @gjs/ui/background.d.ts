export const SystemBackground: any;
export class BackgroundManager extends Signals.EventEmitter {
    constructor(params: any);
    _settingsSchema: any;
    _backgroundSource: any;
    _container: any;
    _layoutManager: any;
    _vignette: any;
    _monitorIndex: any;
    _controlPosition: any;
    _useContentSize: any;
    backgroundActor: any;
    _newBackgroundActor: any;
    destroy(): void;
    _swapBackgroundActor(): void;
    _updateBackgroundActor(): void;
    _createBackgroundActor(): any;
}
import * as Signals from '../misc/signals.js';
