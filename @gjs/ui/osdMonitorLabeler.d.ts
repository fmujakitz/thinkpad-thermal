export class OsdMonitorLabeler {
    _monitorManager: any;
    _client: any;
    _clientWatchId: number;
    _osdLabels: any[];
    _monitorLabels: any;
    _reset(): void;
    _trackClient(client: any): boolean;
    _untrackClient(client: any): boolean;
    show(client: any, params: any): void;
    hide(client: any): void;
}
