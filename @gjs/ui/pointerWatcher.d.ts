/**
 * @returns {PointerWatcher}
 */
export function getPointerWatcher(): PointerWatcher;
declare class PointerWatcher {
    _idleMonitor: any;
    _idle: boolean;
    _watches: any[];
    pointerX: any;
    pointerY: any;
    addWatch(interval: any, callback: any): PointerWatch;
    _removeWatch(watch: any): void;
    _onIdleMonitorBecameActive(): void;
    _onIdleMonitorBecameIdle(): void;
    _updateTimeout(): void;
    _timeoutId: any;
    _onTimeout(): any;
    _updatePointer(): void;
}
declare class PointerWatch {
    constructor(watcher: any, interval: any, callback: any);
    watcher: any;
    interval: any;
    callback: any;
    remove(): void;
}
export {};
