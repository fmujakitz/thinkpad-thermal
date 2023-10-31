export class Manager extends Signals.EventEmitter {
    _aggregateProvider: any;
    _realms: {};
    _loginFormat: any;
    _reloadRealms(): void;
    _reloadRealm(realm: any): void;
    _onRealmLoaded(realm: any, error: any): void;
    _updateLoginFormat(): void;
    get loginFormat(): any;
    release(): void;
}
import * as Signals from '../misc/signals.js';
