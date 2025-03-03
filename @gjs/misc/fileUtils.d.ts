/**
 * @typedef {object} SubdirInfo
 * @property {Gio.File} dir the file object for the subdir
 * @property {Gio.FileInfo} info the file descriptor for the subdir
 */
/**
 * @param {string} subdir the subdirectory to search within the data directories
 * @param {boolean} includeUserDir whether the user's data directory should also be searched in addition
 *                                 to the system data directories
 * @returns {Generator<SubdirInfo, void, void>} a generator which yields file info for subdirectories named
 *                                              `subdir` within data directories
 */
export function collectFromDatadirs(subdir: string, includeUserDir: boolean): Generator<SubdirInfo, void, void>;
/**
 * @param {Gio.File} dir
 * @param {boolean} deleteParent
 */
export function recursivelyDeleteDir(dir: Gio.File, deleteParent: boolean): void;
/**
 * @param {Gio.File} srcDir
 * @param {Gio.File} destDir
 */
export function recursivelyMoveDir(srcDir: Gio.File, destDir: Gio.File): void;
export { loadInterfaceXML } from "./dbusUtils.js";
export type SubdirInfo = {
    /**
     * the file object for the subdir
     */
    dir: Gio.File;
    /**
     * the file descriptor for the subdir
     */
    info: Gio.FileInfo;
};
