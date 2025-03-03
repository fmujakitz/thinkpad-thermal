/**
 * Serialize extension into an object that can be used
 * in a vardict {GLib.Variant}
 *
 * @param {object} extension - an extension object
 * @returns {object}
 */
export function serializeExtension(extension: object): object;
/**
 * Deserialize an unpacked variant into an extension object
 *
 * @param {object} variant - an unpacked {GLib.Variant}
 * @returns {object}
 */
export function deserializeExtension(variant: object): object;
export namespace ExtensionType {
    let SYSTEM: number;
    let PER_USER: number;
}
export type ExtensionState = number;
export namespace ExtensionState {
    let ENABLED: number;
    let DISABLED: number;
    let ERROR: number;
    let OUT_OF_DATE: number;
    let DOWNLOADING: number;
    let INITIALIZED: number;
    let DISABLING: number;
    let ENABLING: number;
    let UNINSTALLED: number;
}
