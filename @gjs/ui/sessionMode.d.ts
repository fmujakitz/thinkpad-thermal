export function listModes(): void;
export class SessionMode extends Signals.EventEmitter {
    _modeStack: any[];
    pushMode(mode: any): void;
    popMode(mode: any): void;
    switchMode(to: any): void;
    get currentMode(): any;
    _sync(): void;
}
import * as Signals from '../misc/signals.js';
