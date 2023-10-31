export const ScreenSaverService: {
    new (): {
        _autoShutdown: boolean;
        _proxy: any;
        LockAsync(params: any, invocation: any): Promise<void>;
        GetActiveAsync(params: any, invocation: any): Promise<void>;
        SetActiveAsync(params: any, invocation: any): Promise<void>;
        GetActiveTimeAsync(params: any, invocation: any): Promise<void>;
    };
};
