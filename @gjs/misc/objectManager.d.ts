export class ObjectManager extends Signals.EventEmitter {
    constructor(params: any);
    _connection: any;
    _serviceName: any;
    _managerPath: any;
    _cancellable: any;
    _managerProxy: any;
    _interfaceInfos: {};
    _objects: {};
    _interfaces: {};
    _onLoaded: any;
    _completeLoad(): void;
    _addInterface(objectPath: any, interfaceName: any): Promise<void>;
    _removeInterface(objectPath: any, interfaceName: any): void;
    _initManagerProxy(): Promise<void>;
    _onNameAppeared(): Promise<void>;
    _onNameVanished(): void;
    _registerInterfaces(interfaces: any): void;
    getProxy(objectPath: any, interfaceName: any): any;
    getProxiesForInterface(interfaceName: any): any;
    getAllProxies(): any[];
}
import * as Signals from './signals.js';
