export class AudioDeviceSelectionDBus {
    _audioSelectionDialog: any;
    _dbusImpl: any;
    _onDialogClosed(): void;
    _onDeviceSelected(dialog: any, device: any): void;
    OpenAsync(params: any, invocation: any): void;
    CloseAsync(params: any, invocation: any): void;
}
