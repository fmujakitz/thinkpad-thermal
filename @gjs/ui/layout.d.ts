export const MonitorConstraint: any;
export const LayoutManager: any;
export const HotCorner: any;
export class PressureBarrier extends Signals.EventEmitter {
    constructor(threshold: any, timeout: any, actionMode: any);
    _threshold: any;
    _timeout: any;
    _actionMode: any;
    _barriers: any[];
    _eventFilter: any;
    _isTriggered: boolean;
    addBarrier(barrier: any): void;
    _disconnectBarrier(barrier: any): void;
    removeBarrier(barrier: any): void;
    destroy(): void;
    setEventFilter(filter: any): void;
    _reset(): void;
    _barrierEvents: any;
    _currentPressure: number;
    _lastTime: any;
    _isHorizontal(barrier: any): boolean;
    _getDistanceAcrossBarrier(barrier: any, event: any): number;
    _getDistanceAlongBarrier(barrier: any, event: any): number;
    _trimBarrierEvents(): void;
    _onBarrierLeft(barrier: any, _event: any): void;
    _trigger(): void;
    _onBarrierHit(barrier: any, event: any): void;
}
import * as Signals from '../misc/signals.js';
