/**
 * GrabHelper:
 *
 * Creates a new GrabHelper object, for dealing with keyboard and pointer grabs
 * associated with a set of actors.
 *
 * Note that the grab can be automatically dropped at any time by the user, and
 * your code just needs to deal with it; you shouldn't adjust behavior directly
 * after you call ungrab(), but instead pass an 'onUngrab' callback when you
 * call grab().
 */
export class GrabHelper {
    /**
     * @param {Clutter.Actor} owner the actor that owns the GrabHelper
     * @param {*} params optional parameters to pass to Main.pushModal()
     */
    constructor(owner: Clutter.Actor, params: any);
    _owner: Clutter.Actor;
    _modalParams: any;
    _grabStack: any[];
    _ignoreUntilRelease: boolean;
    _modalCount: number;
    _isWithinGrabbedActor(actor: any): boolean;
    get currentGrab(): any;
    get grabbed(): boolean;
    get grabStack(): any[];
    _findStackIndex(actor: any): number;
    _actorInGrabStack(actor: any): number;
    isActorGrabbed(actor: any): boolean;
    grab(params: any): boolean;
    grabAsync(params: any): any;
    _takeModalGrab(): boolean;
    _grab: any;
    _capturedEventId: any;
    _releaseModalGrab(): void;
    ignoreRelease(): void;
    ungrab(params: any): void;
    onCapturedEvent(event: any): any;
}
