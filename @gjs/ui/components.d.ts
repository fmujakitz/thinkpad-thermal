export class ComponentManager {
    _allComponents: {};
    _enabledComponents: any[];
    _sessionModeUpdated(): Promise<void>;
    _importComponent(name: any): Promise<any>;
    _ensureComponent(name: any): Promise<any>;
    _enableComponent(name: any): Promise<void>;
    _disableComponent(name: any): void;
}
