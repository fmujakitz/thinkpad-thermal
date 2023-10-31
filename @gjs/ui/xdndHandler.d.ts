export class XdndHandler extends Signals.EventEmitter {
    _cursorWindowClone: any;
    _dummy: any;
    _onLeave(): void;
    _onEnter(): void;
    _onWindowGroupVisibilityChanged(): void;
    _onPositionChanged(obj: any, x: any, y: any): void;
}
import * as Signals from '../misc/signals.js';
