/**
 * @param {Function} initCallback
 * @param {Gio.Cancellable} cancellable
 * @returns {Gio.DBusProxy}
 */
export function Presence(initCallback: Function, cancellable: Gio.Cancellable): Gio.DBusProxy;
/**
 * @param {string} objectPath
 * @param {Function} initCallback
 * @param {Gio.Cancellable} cancellable
 * @returns {Gio.DBusProxy}
 */
export function Inhibitor(objectPath: string, initCallback: Function, cancellable: Gio.Cancellable): Gio.DBusProxy;
/**
 * @param {Function} initCallback
 * @param {Gio.Cancellable} cancellable
 * @returns {Gio.DBusProxy}
 */
export function SessionManager(initCallback: Function, cancellable: Gio.Cancellable): Gio.DBusProxy;
export type PresenceStatus = number;
export namespace PresenceStatus {
    let AVAILABLE: number;
    let INVISIBLE: number;
    let BUSY: number;
    let IDLE: number;
}
export namespace InhibitFlags {
    export let LOGOUT: number;
    export let SWITCH: number;
    export let SUSPEND: number;
    let IDLE_1: number;
    export { IDLE_1 as IDLE };
    export let AUTOMOUNT: number;
}
