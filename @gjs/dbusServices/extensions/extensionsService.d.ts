export const extensionManager: ExtensionManager;
export const ExtensionsService: {
    new (): {
        _proxy: any;
        readonly ShellVersion: any;
        UserExtensionsEnabled: any;
        ListExtensionsAsync(params: any, invocation: any): Promise<void>;
        GetExtensionInfoAsync(params: any, invocation: any): Promise<void>;
        GetExtensionErrorsAsync(params: any, invocation: any): Promise<void>;
        InstallRemoteExtensionAsync(params: any, invocation: any): Promise<void>;
        UninstallExtensionAsync(params: any, invocation: any): Promise<void>;
        EnableExtensionAsync(params: any, invocation: any): Promise<void>;
        DisableExtensionAsync(params: any, invocation: any): Promise<void>;
        LaunchExtensionPrefsAsync([uuid]: [any], invocation: any): void;
        OpenExtensionPrefsAsync(params: any, invocation: any): Promise<void>;
        _prefsDialog: any;
        CheckForUpdatesAsync(params: any, invocation: any): Promise<void>;
    };
};
declare class ExtensionManager {
    createExtensionObject(serialized: any): any;
    lookup(uuid: any): any;
    #private;
}
export {};
