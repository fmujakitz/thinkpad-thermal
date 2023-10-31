export class Task extends Signals.EventEmitter {
    constructor(scope: any, handler: any);
    scope: any;
    handler: any;
    run(): any;
}
export class Hold extends Task {
    constructor();
    _acquisitions: number;
    acquire(): void;
    acquireUntilAfter(hold: any): void;
    release(): void;
    isAcquired(): boolean;
}
export class Batch extends Task {
    tasks: any[];
    process(): void;
    runTask(): any;
    _finish(): void;
    nextTask(): void;
    _start(): void;
    hold: Hold;
    _currentTaskIndex: number;
    run(): Hold;
    cancel(): void;
}
export class ConcurrentBatch extends Batch {
}
export class ConsecutiveBatch extends Batch {
}
import * as Signals from '../misc/signals.js';
