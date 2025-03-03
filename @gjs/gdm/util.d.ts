/**
 * @param {Clutter.Actor} actor
 */
export function cloneAndFadeOutActor(actor: Clutter.Actor): Batch.Hold;
export const PASSWORD_SERVICE_NAME: "gdm-password";
export const FINGERPRINT_SERVICE_NAME: "gdm-fingerprint";
export const SMARTCARD_SERVICE_NAME: "gdm-smartcard";
export const LOGIN_SCREEN_SCHEMA: "org.gnome.login-screen";
export const PASSWORD_AUTHENTICATION_KEY: "enable-password-authentication";
export const FINGERPRINT_AUTHENTICATION_KEY: "enable-fingerprint-authentication";
export const SMARTCARD_AUTHENTICATION_KEY: "enable-smartcard-authentication";
export const BANNER_MESSAGE_KEY: "banner-message-enable";
export const BANNER_MESSAGE_TEXT_KEY: "banner-message-text";
export const ALLOWED_FAILURES_KEY: "allowed-failures";
export const LOGO_KEY: "logo";
export const DISABLE_USER_LIST_KEY: "disable-user-list";
/**
 * Keep messages in order by priority
 */
export type MessageType = number;
export namespace MessageType {
    let NONE: number;
    let HINT: number;
    let INFO: number;
    let ERROR: number;
}
export class ShellUserVerifier extends Signals.EventEmitter {
    constructor(client: any, params: any);
    _reauthOnly: any;
    _client: any;
    _defaultService: string;
    _preemptingService: any;
    _settings: any;
    _fprintManager: any;
    _smartcardManager: {
        _objectManager: import("../misc/objectManager.js").ObjectManager;
        _insertedTokens: {};
        _loginToken: any;
        _onLoaded(): void;
        _updateToken(token: any): void;
        _addToken(token: any): void;
        _removeToken(token: any): void;
        hasInsertedTokens(): boolean;
        hasInsertedLoginToken(): boolean;
        connectObject(...args: any[]): void;
        disconnectObject(...args: any[]): void;
        connect_object(...args: any[]): void;
        disconnect_object(...args: any[]): void;
    };
    smartcardDetected: boolean;
    _messageQueue: any[];
    _messageQueueTimeoutId: number;
    reauthenticating: boolean;
    _failCounter: number;
    _unavailableServices: any;
    _credentialManagers: {};
    addCredentialManager(serviceName: any, credentialManager: any): void;
    removeCredentialManager(serviceName: any): void;
    get hasPendingMessages(): boolean;
    get allowedFailures(): any;
    get currentMessage(): any;
    begin(userName: any, hold: any): void;
    _cancellable: any;
    _hold: any;
    _userName: any;
    cancel(): void;
    _clearUserVerifier(): void;
    _userVerifier: any;
    _userVerifierChoiceList: any;
    clear(): void;
    destroy(): void;
    selectChoice(serviceName: any, key: any): void;
    answerQuery(serviceName: any, answer: any): Promise<void>;
    _getIntervalForMessage(message: any): number;
    finishMessageQueue(): void;
    increaseCurrentMessageTimeout(interval: any): void;
    _currentMessageExtraInterval: any;
    _serviceHasPendingMessages(serviceName: any): boolean;
    _filterServiceMessages(serviceName: any, messageType: any): void;
    _queueMessageTimeout(): void;
    _queueMessage(serviceName: any, message: any, messageType: any): void;
    _queuePriorityMessage(serviceName: any, message: any, messageType: any): void;
    _clearMessageQueue(): void;
    _checkForFingerprintReader(): Promise<void>;
    _fingerprintReaderType: number;
    _onCredentialManagerAuthenticated(credentialManager: any, _token: any): void;
    _checkForSmartcard(): void;
    _reportInitError(where: any, error: any, serviceName: any): void;
    _openReauthenticationChannel(userName: any): Promise<void>;
    _getUserVerifier(): Promise<void>;
    _connectSignals(): void;
    _disconnectSignals(): void;
    _getForegroundService(): any;
    serviceIsForeground(serviceName: any): boolean;
    foregroundServiceDeterminesUsername(): boolean;
    serviceIsDefault(serviceName: any): boolean;
    serviceIsFingerprint(serviceName: any): boolean;
    _updateDefaultService(): void;
    _startService(serviceName: any): Promise<void>;
    _beginVerification(): void;
    _onChoiceListQuery(client: any, serviceName: any, promptMessage: any, list: any): void;
    _onInfo(client: any, serviceName: any, info: any): void;
    _onProblem(client: any, serviceName: any, problem: any): void;
    _fingerprintFailedId: any;
    _onInfoQuery(client: any, serviceName: any, question: any): void;
    _onSecretInfoQuery(client: any, serviceName: any, secretQuestion: any): void;
    _onReset(): void;
    _onVerificationComplete(): void;
    _cancelAndReset(): void;
    _retry(serviceName: any): void;
    _canRetry(): any;
    _verificationFailed(serviceName: any, shouldRetry: any): Promise<void>;
    _handlePendingMessages(): any;
    _onServiceUnavailable(_client: any, serviceName: any, errorMessage: any): void;
    _onConversationStopped(client: any, serviceName: any): void;
}
import * as Batch from './batch.js';
import * as Signals from '../misc/signals.js';
