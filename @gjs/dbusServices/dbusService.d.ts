export class ServiceImplementation {
    constructor(info: any, objectPath: any);
    _objectPath: any;
    _dbusImpl: any;
    _senders: any;
    _holdCount: number;
    _hasSignals: boolean;
    _shutdownTimeoutId: number;
    _autoShutdown: boolean;
    register(): void;
    export(): void;
    unexport(): void;
    hold(): void;
    release(): void;
    /**
     * Complete @invocation with an appropriate error if @error is set;
     * useful for implementing early returns from method implementations.
     *
     * @param {Gio.DBusMethodInvocation}
     * @param {Error}
     *
     * @returns {bool} - true if @invocation was completed
     */
    _handleError(invocation: any, error: any): bool;
    _maybeShutdown(): void;
    _queueShutdownCheck(): void;
    _trackSender(sender: any): void;
    _untrackSender(sender: any): void;
    _injectTracking(methodName: any): void;
}
export class DBusService {
    constructor(name: any, service: any);
    _name: any;
    _service: any;
    _loop: any;
    runAsync(): Promise<void>;
}
