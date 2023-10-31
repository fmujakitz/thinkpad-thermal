export const ScreencastService: {
    new (): {
        _canScreencast: boolean;
        _recorders: any;
        _senders: any;
        _lockdownSettings: any;
        _proxy: any;
        _introspectProxy: any;
        readonly ScreencastSupported: boolean;
        _removeRecorder(sender: any): void;
        _addRecorder(sender: any, recorder: any): void;
        _getAbsolutePath(filename: any): any;
        _generateFilePath(template: any): any;
        ScreencastAsync(params: any, invocation: any): Promise<void>;
        ScreencastAreaAsync(params: any, invocation: any): Promise<void>;
        StopScreencastAsync(params: any, invocation: any): Promise<void>;
    };
    canScreencast(): boolean;
};
