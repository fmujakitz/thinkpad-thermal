/**
 * @param {string} uuid - extension uuid
 * @param {Gio.DBusMethodInvocation} invocation - the caller
 * @returns {void}
 */
export function installExtension(uuid: string, invocation: Gio.DBusMethodInvocation): void;
/**
 * @param {string} uuid
 */
export function uninstallExtension(uuid: string): boolean;
/**
 * @param {string} uuid - extension uuid
 * @returns {void}
 */
export function downloadExtensionUpdate(uuid: string): void;
/**
 * Check extensions.gnome.org for updates
 *
 * @returns {void}
 */
export function checkForUpdates(): void;
export function init(): void;
