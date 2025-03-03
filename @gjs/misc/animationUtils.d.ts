/**
 * adjustAnimationTime:
 *
 * @param {number} msecs - time in milliseconds
 *
 * Adjust `msecs` to account for St's enable-animations
 * and slow-down-factor settings
 */
export function adjustAnimationTime(msecs: number): number;
/**
 * Animate scrolling a scrollview until an actor is visible.
 *
 * @param {St.ScrollView} scrollView - the scroll view the actor is in
 * @param {Clutter.Actor} actor - the actor
 */
export function ensureActorVisibleInScrollView(scrollView: St.ScrollView, actor: Clutter.Actor): void;
/**
 * "Wiggles" a clutter actor. A "wiggle" is an animation the moves an actor
 * back and forth on the X axis a specified amount of times.
 *
 * @param {Clutter.Actor} actor - an actor to animate
 * @param {object} params - options for the animation
 * @param {number} params.offset - the offset to move the actor by per-wiggle
 * @param {number} params.duration - the amount of time to move the actor per-wiggle
 * @param {number} params.wiggleCount - the number of times to wiggle the actor
 */
export function wiggle(actor: Clutter.Actor, params: {
    offset: number;
    duration: number;
    wiggleCount: number;
}): void;
