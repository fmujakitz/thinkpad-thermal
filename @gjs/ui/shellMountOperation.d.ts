export class ShellMountOperation {
    constructor(source: any, params: any);
    _dialog: any;
    _existingDialog: any;
    _processesDialog: any;
    mountOp: any;
    _closeExistingDialog(): void;
    _onAskQuestion(op: any, message: any, choices: any): void;
    _onAskPassword(op: any, message: any, defaultUser: any, defaultDomain: any, flags: any): void;
    close(_op: any): void;
    _notifier: any;
    _onShowProcesses2(op: any): void;
    _onShowUnmountProgress(op: any, message: any, timeLeft: any, bytesLeft: any): void;
    borrowDialog(): any;
}
export class GnomeShellMountOpHandler {
    _dbusImpl: any;
    _dialog: any;
    _ensureEmptyRequest(): void;
    _currentId: string;
    _currentInvocation: any;
    _currentType: any;
    _clearCurrentRequest(response: any, details: any): void;
    _setCurrentRequest(invocation: any, id: any, type: any): boolean;
    _closeDialog(): void;
    /**
     * The dialog will stay visible until clients call the Close() method, or
     * another dialog becomes visible.
     * Calling AskPassword again for the same id will have the effect to clear
     * the existing dialog and update it with a message indicating the previous
     * attempt went wrong.
     *
     * @param {Array} params
     *   {string} id: an opaque ID identifying the object for which
     *       the operation is requested
     *   {string} message: the message to display
     *   {string} icon_name: the name of an icon to display
     *   {string} default_user: the default username for display
     *   {string} default_domain: the default domain for display
     *   {Gio.AskPasswordFlags} flags: a set of GAskPasswordFlags
     *   {Gio.MountOperationResults} response: a GMountOperationResult
     *   {Object} response_details: a dictionary containing response details as
     *       entered by the user. The dictionary MAY contain the following
     *       properties:
     *   - "password" -> (s): a password to be used to complete the mount operation
     *   - "password_save" -> (u): a GPasswordSave
     * @param {Gio.DBusMethodInvocation} invocation
     *      The ID must be unique in the context of the calling process.
     */
    AskPasswordAsync(params: any[], invocation: Gio.DBusMethodInvocation): void;
    /**
     * The dialog will stay visible until clients call the Close() method, or
     * another dialog becomes visible.
     * Calling AskQuestion again for the same id will have the effect to clear
     * update the dialog with the new question.
     *
     * @param {Array} params - params
     *   {string} id: an opaque ID identifying the object for which
     *       the operation is requested
     *      The ID must be unique in the context of the calling process.
     *   {string} message: the message to display
     *   {string} icon_name: the name of an icon to display
     *   {string[]} choices: an array of choice strings
     * @param {Gio.DBusMethodInvocation} invocation - invocation
     */
    AskQuestionAsync(params: any[], invocation: Gio.DBusMethodInvocation): void;
    /**
     * The dialog will stay visible until clients call the Close() method, or
     * another dialog becomes visible.
     * Calling ShowProcesses again for the same id will have the effect to clear
     * the existing dialog and update it with the new message and the new list
     * of processes.
     *
     * @param {Array} params - params
     *   {string} id: an opaque ID identifying the object for which
     *       the operation is requested
     *      The ID must be unique in the context of the calling process.
     *   {string} message: the message to display
     *   {string} icon_name: the name of an icon to display
     *   {number[]} application_pids: the PIDs of the applications to display
     *   {string[]} choices: an array of choice strings
     * @param {Gio.DBusMethodInvocation} invocation - invocation
     */
    ShowProcessesAsync(params: any[], invocation: Gio.DBusMethodInvocation): void;
    /**
     * Closes a dialog previously opened by AskPassword, AskQuestion or ShowProcesses.
     * If no dialog is open, does nothing.
     *
     * @param {Array} _params - params
     * @param {Gio.DBusMethodInvocation} _invocation - invocation
     */
    Close(_params: any[], _invocation: Gio.DBusMethodInvocation): void;
}
