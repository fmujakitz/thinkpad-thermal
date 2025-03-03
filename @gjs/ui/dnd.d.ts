/**
 * @typedef {object} DragMonitor
 * @property {Function} dragMotion
 */
/**
 * @param {DragMonitor} monitor
 */
export function addDragMonitor(monitor: DragMonitor): void;
/**
 * @param {DragMonitor} monitor
 */
export function removeDragMonitor(monitor: DragMonitor): void;
/**
 * Create an object which controls drag and drop for the given actor.
 *
 * If %manualMode is %true in @params, do not automatically start
 * drag and drop on click
 *
 * If %dragActorMaxSize is present in @params, the drag actor will
 * be scaled down to be no larger than that size in pixels.
 *
 * If %dragActorOpacity is present in @params, the drag actor will
 * will be set to have that opacity during the drag.
 *
 * Note that when the drag actor is the source actor and the drop
 * succeeds, the actor scale and opacity aren't reset; if the drop
 * target wants to reuse the actor, it's up to the drop target to
 * reset these values.
 *
 * @param {Clutter.Actor} actor Source actor
 * @param {object} [params] Additional parameters
 * @returns {_Draggable} a new Draggable
 */
export function makeDraggable(actor: Clutter.Actor, params?: object): _Draggable;
export type DragMotionResult = number;
export namespace DragMotionResult {
    let NO_DROP: number;
    let COPY_DROP: number;
    let MOVE_DROP: number;
    let CONTINUE: number;
}
export namespace DragDropResult {
    export let FAILURE: number;
    export let SUCCESS: number;
    let CONTINUE_1: number;
    export { CONTINUE_1 as CONTINUE };
}
export const dragMonitors: any[];
export type DragMonitor = {
    dragMotion: Function;
};
declare class _Draggable extends Signals.EventEmitter {
    constructor(actor: any, params: any);
    actor: any;
    _dragState: number;
    _actorDestroyed: boolean;
    _onEventId: any;
    _touchSequence: any;
    _restoreOnSuccess: any;
    _dragActorMaxSize: any;
    _dragActorOpacity: any;
    _dragTimeoutThreshold: any;
    _animationInProgress: boolean;
    _dragCancellable: boolean;
    /**
     * addClickAction:
     *
     * @param {Clutter.ClickAction} action - click action to add to draggable actor
     *
     * Add @action to the draggable's actor, and set it up so that it does not
     * impede drag operations.
     */
    addClickAction(action: Clutter.ClickAction): void;
    _actionClicked: boolean;
    _dragTouchSequence: any;
    _longPressLater: any;
    _onButtonPress(actor: any, event: any): any;
    _dragStartX: any;
    _dragStartY: any;
    _dragStartTime: any;
    _dragThresholdIgnored: boolean;
    _onTouchEvent(actor: any, event: any): any;
    _grabDevice(actor: any, pointer: any, touchSequence: any): void;
    _grab: any;
    _grabbedDevice: any;
    _ungrabDevice(): void;
    _grabActor(device: any, touchSequence: any): void;
    _ungrabActor(): void;
    _grabEvents(device: any, touchSequence: any): void;
    _eventsGrab: any;
    _ungrabEvents(): void;
    _eventIsRelease(event: any): any;
    _onEvent(actor: any, event: any): any;
    /**
     * Fake a release event.
     * Must be called if you want to intercept release events on draggable
     * actors for other purposes (for example if you're using
     * PopupMenu.ignoreRelease())
     */
    fakeRelease(): void;
    /**
     * Directly initiate a drag and drop operation from the given actor.
     * This function is useful to call if you've specified manualMode
     * for the draggable.
     *
     * @param {number} stageX - X coordinate of event
     * @param {number} stageY - Y coordinate of event
     * @param {number} time - Event timestamp
     * @param {Clutter.EventSequence=} sequence - Event sequence
     * @param {Clutter.InputDevice=} device - device that originated the event
     */
    startDrag(stageX: number, stageY: number, time: number, sequence?: Clutter.EventSequence, device?: Clutter.InputDevice): void;
    _dragX: any;
    _dragY: any;
    _dragActor: any;
    _dragActorSource: any;
    _dragActorSourceDestroyId: any;
    _dragOrigParent: any;
    _dragOffsetX: number;
    _dragOffsetY: number;
    _dragActorHadFixedPos: any;
    _dragOrigX: any;
    _dragOrigY: any;
    _dragActorHadNatWidth: any;
    _dragActorHadNatHeight: any;
    _dragOrigWidth: any;
    _dragOrigHeight: any;
    _dragOrigScale: any;
    _dragOrigParentDestroyId: any;
    _dragActorDestroyId: any;
    _dragOrigOpacity: any;
    _snapBackX: any;
    _snapBackY: any;
    _snapBackScale: any;
    _updateActorPosition(origScale: any, origDragOffsetX: any, origDragOffsetY: any, transX: any, transY: any): void;
    _maybeStartDrag(event: any): any;
    _pickTargetActor(): any;
    _updateDragHover(): any;
    _updateHoverId: any;
    _queueUpdateDragHover(): void;
    _updateDragPosition(event: any): boolean;
    _dragActorDropped(event: any): boolean;
    _getRestoreLocation(): any[];
    _cancelDrag(eventTime: any): void;
    _restoreDragActor(eventTime: any): void;
    _animateDragEnd(eventTime: any, params: any): void;
    _finishAnimation(): void;
    _onAnimationComplete(dragActor: any, eventTime: any): void;
    _dragComplete(): void;
}
import * as Signals from '../misc/signals.js';
export {};
