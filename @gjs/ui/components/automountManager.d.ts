export { AutomountManager as Component };
declare class AutomountManager {
    _settings: any;
    _activeOperations: any;
    _session: any;
    _inhibited: boolean;
    _volumeMonitor: any;
    enable(): void;
    _mountAllId: any;
    disable(): void;
    _InhibitorsChanged(_object: any, _senderName: any, [_inhibitor]: [any]): Promise<void>;
    _startupMountAll(): any;
    _onDriveConnected(): void;
    _onDriveDisconnected(): void;
    _onDriveEjectButton(monitor: any, drive: any): void;
    _onVolumeAdded(monitor: any, volume: any): void;
    _checkAndMountVolume(volume: any, params: any): void;
    _mountVolume(volume: any, operation: any, allowAutorun: any): void;
    _onVolumeMounted(volume: any, res: any): void;
    _onVolumeRemoved(monitor: any, volume: any): void;
    _reaskPassword(volume: any): void;
    _closeOperation(volume: any): void;
    _allowAutorun(volume: any): void;
    _allowAutorunExpire(volume: any): void;
}
