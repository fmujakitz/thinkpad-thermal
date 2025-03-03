/**
 * findUrls:
 *
 * @param {string} str string to find URLs in
 *
 * Searches `str` for URLs and returns an array of objects with %url
 * properties showing the matched URL string, and %pos properties indicating
 * the position within `str` where the URL was found.
 *
 * @returns {{url: string, pos: number}[]} the list of match objects, as described above
 */
export function findUrls(str: string): {
    url: string;
    pos: number;
}[];
/**
 * spawn:
 *
 * Runs `argv` in the background, handling any errors that occur
 * when trying to start the program.
 *
 * @param {readonly string[]} argv an argv array
 */
export function spawn(argv: readonly string[]): void;
/**
 * spawnCommandLine:
 *
 * @param {readonly string[]} commandLine a command line
 *
 * Runs commandLine in the background, handling any errors that
 * occur when trying to parse or start the program.
 */
export function spawnCommandLine(commandLine: readonly string[]): void;
/**
 * spawnApp:
 *
 * @param {readonly string[]} argv an argv array
 *
 * Runs argv as if it was an application, handling startup notification
 */
export function spawnApp(argv: readonly string[]): void;
/**
 * trySpawn:
 *
 * @param {readonly string[]} argv an argv array
 *
 * Runs argv in the background. If launching argv fails,
 * this will throw an error.
 */
export function trySpawn(argv: readonly string[]): void;
/**
 * trySpawnCommandLine:
 *
 * @param {readonly string[]} commandLine a command line
 *
 * Runs commandLine in the background. If launching commandLine
 * fails, this will throw an error.
 */
export function trySpawnCommandLine(commandLine: readonly string[]): void;
/**
 * Returns an {@link St.Label} with the date passed formatted
 * using {@link formatTime}
 *
 * @param {Date} date the date to format for the label
 * @param {object} params params for {@link formatTime}
 * @returns {St.Label}
 */
export function createTimeLabel(date: Date, params: object): St.Label;
/**
 * insertSorted:
 *
 * @template T, [K=T]
 * @param {T[]} array an array sorted according to `cmp`
 * @param {K} val a value to insert
 * @param {(a: T, val: K) => number} cmp the sorting function
 * @returns {number}
 *
 * Inserts `val` into `array`, preserving the
 * sorting invariants.
 *
 * Returns the position at which it was inserted
 */
export function insertSorted<T, K = T>(array: T[], val: K, cmp: (a: T, val: K) => number): number;
/**
 * @param {number} start
 * @param {number} end
 * @param {number} progress
 * @returns {number}
 */
export function lerp(start: number, end: number, progress: number): number;
/**
 * GNOMEversionCompare:
 *
 * @param {string} version1 a string containing a GNOME version
 * @param {string} version2 a string containing another GNOME version
 * @returns {number}
 *
 * Returns an integer less than, equal to, or greater than
 * zero, if `version1` is older, equal or newer than `version2`
 */
export function GNOMEversionCompare(version1: string, version2: string): number;
export class DBusSenderChecker {
    /**
     * @param {string[]} allowList - list of allowed well-known names
     */
    constructor(allowList: string[]);
    _allowlistMap: any;
    _uninitializedNames: any;
    _initializedPromise: any;
    _resolveInitialized: any;
    _watchList: any[];
    /**
     * @param {string} name - bus name for which the watcher got initialized
     */
    _checkAndResolveInitialized(name: string): void;
    /**
     * @async
     * @param {string} sender - the bus name that invoked the checked method
     * @returns {bool}
     */
    _isSenderAllowed(sender: string): bool;
    /**
     * Check whether the bus name that invoked @invocation maps
     * to an entry in the allow list.
     *
     * @async
     * @throws
     * @param {Gio.DBusMethodInvocation} invocation - the invocation
     * @returns {void}
     */
    checkInvocation(invocation: Gio.DBusMethodInvocation): void;
    /**
     * @returns {void}
     */
    destroy(): void;
}
export class Highlighter {
    /**
     * @param {?string[]} terms - list of terms to highlight
     */
    constructor(terms: string[] | null);
    _highlightRegex: RegExp;
    /**
     * Highlight all occurences of the terms defined for this
     * highlighter in the provided text using markup.
     *
     * @param {string} text - text to highlight the defined terms in
     * @returns {string}
     */
    highlight(text: string): string;
}
