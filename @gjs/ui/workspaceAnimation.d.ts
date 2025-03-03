export const WORKSPACE_SPACING: 100;
export const WorkspaceGroup: any;
export const MonitorGroup: any;
export class WorkspaceAnimationController {
    _movingWindow: any;
    _switchData: {
        monitors: any[];
        gestureActivated: boolean;
        inProgress: boolean;
    };
    _swipeTracker: any;
    _prepareWorkspaceSwitch(workspaceIndices: any): void;
    _finishWorkspaceSwitch(switchData: any): void;
    set movingWindow(arg: any);
    get movingWindow(): any;
    animateSwitch(from: any, to: any, direction: any, onComplete: any): void;
    canHandleScrollEvent(event: any): any;
    _findMonitorGroup(monitorIndex: any): any;
    _switchWorkspaceBegin(tracker: any, monitor: any): void;
    _switchWorkspaceUpdate(tracker: any, progress: any): void;
    _switchWorkspaceEnd(tracker: any, duration: any, endProgress: any): void;
    get gestureActive(): boolean;
    cancelSwitchAnimation(): void;
}
