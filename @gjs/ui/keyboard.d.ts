export class KeyboardManager extends Signals.EventEmitter {
    _keyboard: any;
    _a11yApplicationsSettings: any;
    _seat: any;
    _lastDevice: any;
    _bottomDragAction: any;
    _lastDeviceIsTouchscreen(): boolean;
    _syncEnabled(): void;
    get keyboardActor(): any;
    get visible(): any;
    open(monitor: any): void;
    close(): void;
    addSuggestion(text: any, callback: any): void;
    resetSuggestions(): void;
    setSuggestionsVisible(visible: any): void;
    maybeHandleEvent(event: any): boolean;
}
export const Keyboard: any;
import * as Signals from '../misc/signals.js';
