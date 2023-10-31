export class FocusCaretTracker extends Signals.EventEmitter {
    _atspiListener: any;
    _atspiInited: boolean;
    _focusListenerRegistered: boolean;
    _caretListenerRegistered: boolean;
    _onChanged(event: any): void;
    _initAtspi(): boolean;
    registerFocusListener(): void;
    registerCaretListener(): void;
    deregisterFocusListener(): void;
    deregisterCaretListener(): void;
}
import * as Signals from '../misc/signals.js';
