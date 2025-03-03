export { NetworkAgent as Component };
declare class NetworkAgent {
    _native: any;
    _dialogs: {};
    _vpnRequests: {};
    _notifications: {};
    _initialized: boolean;
    _initNative(): Promise<void>;
    enable(): void;
    disable(): void;
    _showNotification(requestId: any, connection: any, settingName: any, hints: any, flags: any): void;
    _newRequest(agent: any, requestId: any, connection: any, settingName: any, hints: any, flags: any): void;
    _handleRequest(requestId: any, connection: any, settingName: any, hints: any, flags: any): void;
    _cancelRequest(agent: any, requestId: any): void;
    _vpnRequest(requestId: any, connection: any, hints: any, flags: any): Promise<void>;
    _findAuthBinary(serviceType: any): Promise<{
        fileName: any;
        supportsHints: any;
        externalUIMode: any;
    }>;
}
