/**
 * Returns a list of potential completions for text. Completions either
 * follow a dot (e.g. foo.ba -> bar) or they are picked from globalCompletionList (e.g. fo -> foo)
 * commandHeader is prefixed on any expression before it is eval'ed.  It will most likely
 * consist of global constants that might not carry over from the calling environment.
 *
 * This function is likely the one you want to call from external modules
 *
 * @param {string} text
 * @param {string} commandHeader
 * @param {readonly string[]} [globalCompletionList]
 */
export function getCompletions(text: string, commandHeader: string, globalCompletionList?: readonly string[]): Promise<(string | any[])[]>;
/**
 * Given the ending position of a quoted string, find where it starts
 *
 * @param {string} expr
 * @param {number} offset
 */
export function findMatchingQuote(expr: string, offset: number): number;
/**
 * Given the ending position of a regex, find where it starts
 *
 * @param {string} expr
 * @param {number} offset
 */
export function findMatchingSlash(expr: string, offset: number): number;
/**
 * If expr.charAt(offset) is ')' or ']',
 * return the position of the corresponding '(' or '[' bracket.
 * This function does not check for syntactic correctness.  e.g.,
 * findMatchingBrace("[(])", 3) returns 1.
 *
 * @param {string} expr
 * @param {number} offset
 */
export function findMatchingBrace(expr: string, offset: number): number;
/**
 * @param {*} expr
 * @param {*} offset
 * @param  {...any} braces
 * @returns {number}
 */
export function findTheBrace(expr: any, offset: any, ...braces: any[]): number;
/**
 * Walk expr backwards from offset looking for the beginning of an
 * expression suitable for passing to eval.
 * There is no guarantee of correct javascript syntax between the return
 * value and offset.  This function is meant to take a string like
 * "foo(Obj.We.Are.Completing" and allow you to extract "Obj.We.Are.Completing"
 *
 * @param {string} expr
 * @param {number} offset
 */
export function getExpressionOffset(expr: string, offset: number): number;
/**
 * To get all properties (enumerable and not), we need to walk
 * the prototype chain ourselves
 *
 * @param {object} obj
 */
export function getAllProps(obj: object): any;
/**
 * Given a string _expr_, returns all methods
 * that can be accessed via '.' notation.
 * e.g., expr="({ foo: null, bar: null, 4: null })" will
 * return ["foo", "bar", ...] but the list will not include "4",
 * since methods accessed with '.' notation must star with a letter or _.
 *
 * @param {string} expr
 * @param {string=} commandHeader
 */
export function getPropertyNamesFromExpression(expr: string, commandHeader?: string | undefined): Promise<string[]>;
/**
 * Given a list of words, returns the longest prefix they all have in common
 *
 * @param {readonly string[]} words
 */
export function getCommonPrefix(words: readonly string[]): string;
/**
 * Remove any blocks that are quoted or are in a regex
 *
 * @param {string} str
 */
export function removeLiterals(str: string): any;
/**
 * Returns true if there is reason to think that eval(str)
 * will modify the global scope
 *
 * @param {string} str
 */
export function isUnsafeExpression(str: string): boolean;
/**
 * Returns a list of global keywords derived from str
 *
 * @param {string} str
 */
export function getDeclaredConstants(str: string): any[];
