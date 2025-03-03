export { AutorunManager as Component };
declare class AutorunManager {
    _session: any;
    _volumeMonitor: any;
    _dispatcher: AutorunDispatcher;
    enable(): void;
    disable(): void;
    _onMountAdded(monitor: any, mount: any): Promise<void>;
    _onMountRemoved(monitor: any, mount: any): void;
}
declare class AutorunDispatcher {
    constructor(manager: any);
    _manager: any;
    _sources: any[];
    _settings: any;
    _getAutorunSettingForType(contentType: any): number;
    _getSourceForMount(mount: any): any;
    _addSource(mount: any, apps: any): void;
    addMount(mount: any, apps: any, contentTypes: any): void;
    removeMount(mount: any): void;
}
