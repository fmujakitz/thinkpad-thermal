export const SHELL_KEYBINDINGS_SCHEMA: "org.gnome.shell.keybindings";
export const SCROLL_TIMEOUT_TIME: 150;
export const WindowDimmer: any;
export const TilePreview: any;
export class WindowManager {
    _shellwm: any;
    _minimizing: any;
    _unminimizing: any;
    _mapping: any;
    _resizing: any;
    _resizePending: any;
    _destroying: any;
    _dimmedWindows: any[];
    _skippedActors: any;
    _allowedKeybindings: {};
    _isWorkspacePrepended: boolean;
    _canScroll: boolean;
    _workspaceSwitcherPopup: any;
    _tilePreview: any;
    _gsdWacomProxy: any;
    _windowMenuManager: WindowMenu.WindowMenuManager;
    _workspaceTracker: WorkspaceTracker;
    _workspaceAnimation: WorkspaceAnimation.WorkspaceAnimationController;
    _startX11Services(task: any): Promise<void>;
    _stopX11Services(cancellable: any): Promise<void>;
    _showPadOsd(display: any, device: any, settings: any, imagePath: any, editionMode: any, monitorIndex: any): any;
    _currentPadOsd: any;
    _lookupIndex(windows: any, metaWindow: any): number;
    _switchApp(): void;
    insertWorkspace(pos: any): void;
    _blockAnimations: boolean;
    keepWorkspaceAlive(workspace: any, duration: any): void;
    skipNextEffect(actor: any): void;
    setCustomKeybindingHandler(name: any, modes: any, handler: any): void;
    addKeybinding(name: any, settings: any, flags: any, modes: any, handler: any): any;
    removeKeybinding(name: any): void;
    allowKeybinding(name: any, modes: any): void;
    _shouldAnimate(): boolean;
    _shouldAnimateActor(actor: any, types: any): any;
    _minimizeWindow(shellwm: any, actor: any): void;
    _minimizeWindowDone(shellwm: any, actor: any): void;
    _unminimizeWindow(shellwm: any, actor: any): void;
    _unminimizeWindowDone(shellwm: any, actor: any): void;
    _sizeChangeWindow(shellwm: any, actor: any, whichChange: any, oldFrameRect: any, _oldBufferRect: any): void;
    _prepareAnimationInfo(shellwm: any, actor: any, oldFrameRect: any, _change: any): void;
    _sizeChangedWindow(shellwm: any, actor: any): void;
    _clearAnimationInfo(actor: any): boolean;
    _sizeChangeWindowDone(shellwm: any, actor: any): void;
    _checkDimming(window: any): void;
    _dimWindow(window: any): void;
    _undimWindow(window: any): void;
    _waitForOverviewToHide(): any;
    _mapWindow(shellwm: any, actor: any): Promise<void>;
    _mapWindowDone(shellwm: any, actor: any): void;
    _destroyWindow(shellwm: any, actor: any): void;
    _destroyWindowDone(shellwm: any, actor: any): void;
    _filterKeybinding(shellwm: any, binding: any): boolean;
    _switchWorkspace(shellwm: any, from: any, to: any, direction: any): void;
    _switchInProgress: boolean;
    _switchWorkspaceDone(): void;
    _showTilePreview(shellwm: any, window: any, tileRect: any, monitorIndex: any): void;
    _hideTilePreview(): void;
    _showWindowMenu(shellwm: any, window: any, menu: any, rect: any): void;
    _startSwitcher(display: any, window: any, binding: any): void;
    _startA11ySwitcher(display: any, window: any, binding: any): void;
    _allowFavoriteShortcuts(): any;
    _switchToApplication(display: any, window: any, binding: any): void;
    _toggleCalendar(): void;
    _toggleQuickSettings(): void;
    _showWorkspaceSwitcher(display: any, window: any, binding: any): void;
    actionMoveWorkspace(workspace: any): void;
    actionMoveWindow(window: any, workspace: any): void;
    handleWorkspaceScroll(event: any): any;
    _confirmDisplayChange(): void;
    _createCloseDialog(shellwm: any, window: any): any;
    _createInhibitShortcutsDialog(shellwm: any, window: any): any;
    _showResizePopup(display: any, show: any, rect: any, displayW: any, displayH: any): void;
    _resizePopup: any;
}
import * as WindowMenu from './windowMenu.js';
declare class WorkspaceTracker {
    constructor(wm: any);
    _wm: any;
    _workspaces: any[];
    _checkWorkspacesId: number;
    _pauseWorkspaceCheck: boolean;
    _workspaceSettings: any;
    blockUpdates(): void;
    unblockUpdates(): void;
    _checkWorkspaces(): boolean;
    keepWorkspaceAlive(workspace: any, duration: any): void;
    _windowRemoved(workspace: any, window: any): void;
    _windowLeftMonitor(metaDisplay: any, monitorIndex: any, _metaWin: any): void;
    _windowEnteredMonitor(metaDisplay: any, monitorIndex: any, _metaWin: any): void;
    _queueCheckWorkspaces(): void;
    _nWorkspacesChanged(): boolean;
}
import * as WorkspaceAnimation from './workspaceAnimation.js';
export {};