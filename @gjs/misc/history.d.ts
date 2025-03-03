export class HistoryManager extends Signals.EventEmitter {
    constructor(params: any);
    _key: any;
    _limit: any;
    _historyIndex: number;
    _history: any;
    _entry: any;
    _historyChanged(): void;
    _setPrevItem(text: any): boolean;
    _setNextItem(text: any): boolean;
    lastItem(): any;
    addItem(input: any): any;
    _onEntryKeyPress(entry: any, event: any): any;
    _indexChanged(): void;
    _save(): void;
}
import * as Signals from './signals.js';
