/**
 * Formats a Date object according to a C sprintf-style string using
 * the cached local timezone.
 *
 * @param {Date} date a Date object
 * @param {string} format a format String for the date
 * @returns {string}
 */
export function formatDateWithCFormatString(date: Date, format: string): string;
/**
 * Formats a time span string representing the
 * date passed in to the current time.
 *
 * @param {Date} date the start of the time span
 * @returns {string}
 */
export function formatTimeSpan(date: Date): string;
/**
 * Formats a date time string based on style parameters
 *
 * @param {GLib.DateTime | Date} time a Date object
 * @param {object} [params] style parameters for the output string
 * @param {boolean=} params.timeOnly whether the string should only contain the time (no date)
 * @param {boolean=} params.ampm whether to include the "am" or "pm" in the string
 * @returns {string}
 */
export function formatTime(time: GLib.DateTime | Date, params?: {
    timeOnly?: boolean | undefined;
    ampm?: boolean | undefined;
}): string;
/**
 * Update the timezone used by JavaScript Date objects and other
 * date utilities
 */
export function clearCachedLocalTimeZone(): void;
