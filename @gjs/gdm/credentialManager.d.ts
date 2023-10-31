export class CredentialManager extends Signals.EventEmitter {
    constructor(service: any);
    _token: any;
    _service: any;
    set token(arg: any);
    get token(): any;
    get service(): any;
}
import * as Signals from '../misc/signals.js';
