export class IntrospectService {
    _dbusImpl: any;
    _runningApplications: {};
    _runningApplicationsDirty: boolean;
    _activeApplication: any;
    _activeApplicationDirty: boolean;
    _animationsEnabled: boolean;
    _appSystem: any;
    _senderChecker: DBusSenderChecker;
    _settings: any;
    _isStandaloneApp(app: any): any;
    _getSandboxedAppId(app: any): any;
    _syncRunningApplications(): void;
    _isEligibleWindow(window: any): boolean;
    GetRunningApplicationsAsync(params: any, invocation: any): Promise<void>;
    GetWindowsAsync(params: any, invocation: any): Promise<void>;
    _syncAnimationsEnabled(): void;
    _syncScreenSize(): void;
    _screenWidth: any;
    _screenHeight: any;
    get AnimationsEnabled(): boolean;
    get ScreenSize(): any[];
    get version(): number;
}
import { DBusSenderChecker } from './util.js';
