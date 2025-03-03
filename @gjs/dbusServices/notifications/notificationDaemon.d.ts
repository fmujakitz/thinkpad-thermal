export const NotificationDaemon: {
    new (): {
        _autoShutdown: boolean;
        _activeNotifications: any;
        _proxy: any;
        _emitSignal(sender: any, signalName: any, params: any): void;
        _untrackSender(sender: any): void;
        _checkNotificationId(invocation: any, id: any): boolean;
        register(): void;
        NotifyAsync(params: any, invocation: any): Promise<void>;
        CloseNotificationAsync(params: any, invocation: any): Promise<void>;
        GetCapabilitiesAsync(params: any, invocation: any): Promise<void>;
        GetServerInformationAsync(params: any, invocation: any): Promise<void>;
        _getSenderPid(sender: any): Promise<any>;
    };
};
