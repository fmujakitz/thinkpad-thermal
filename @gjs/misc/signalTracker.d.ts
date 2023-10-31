/**
 * Connect one or more signals, and associate the handlers
 * with a tracked object.
 *
 * All handlers for a particular object can be disconnected
 * by calling disconnectObject(). If object is a {Clutter.widget},
 * this is done automatically when the widget is destroyed.
 *
 * @param {object} thisObj - the emitter object
 * @param {...any} args - a sequence of signal-name/handler pairs
 * with an optional flags value, followed by an object to track
 * @returns {void}
 */
export function connectObject(thisObj: object, ...args: any[]): void;
/**
 * Disconnect all signals that were connected for
 * the specified tracked object
 *
 * @param {object} thisObj - the emitter object
 * @param {object} obj - the tracked object
 * @returns {void}
 */
export function disconnectObject(thisObj: object, obj: object): void;
/**
 * Register a GObject type as having a 'destroy' signal
 * that should disconnect all handlers
 *
 * @param {GObject.Type} gtype - a GObject type
 */
export function registerDestroyableType(gtype: GObject.Type): void;
export const TransientSignalHolder: any;
