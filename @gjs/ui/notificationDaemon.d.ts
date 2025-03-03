export const FdoNotificationDaemonSource: any;
export const GtkNotificationDaemonAppSource: any;
export class NotificationDaemon {
    _fdoNotificationDaemon: FdoNotificationDaemon;
    _gtkNotificationDaemon: GtkNotificationDaemon;
}
declare class FdoNotificationDaemon {
    _dbusImpl: any;
    _sources: any[];
    _notifications: {};
    _nextNotificationId: number;
    _imageForNotificationData(hints: any): any;
    _fallbackIconForNotificationData(hints: any): any;
    _iconForNotificationData(icon: any): any;
    _lookupSource(title: any, pid: any): any;
    _getSource(title: any, pid: any, ndata: any, sender: any): any;
    NotifyAsync(params: any, invocation: any): any;
    _notifyForSource(source: any, ndata: any): void;
    CloseNotification(id: any): void;
    GetCapabilities(): string[];
    GetServerInformation(): any[];
    _emitNotificationClosed(id: any, reason: any): void;
    _emitActionInvoked(id: any, action: any): void;
}
declare class GtkNotificationDaemon {
    _sources: {};
    _dbusImpl: any;
    _ensureAppSource(appId: any): any;
    _loadNotifications(): void;
    _isLoading: boolean;
    _saveNotifications(): void;
    AddNotificationAsync(params: any, invocation: any): void;
    RemoveNotificationAsync(params: any, invocation: any): void;
}
export {};
