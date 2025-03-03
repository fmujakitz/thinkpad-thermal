/**
 * Captures a screenshot from a texture, given a region, scale and optional
 * cursor data.
 *
 * @param {Cogl.Texture} texture - The texture to take the screenshot from.
 * @param {number[4]} [geometry] - The region to use: x, y, width and height.
 * @param {number} scale - The texture scale.
 * @param {object} [cursor] - Cursor data to include in the screenshot.
 * @param {Cogl.Texture} cursor.texture - The cursor texture.
 * @param {number} cursor.x - The cursor x coordinate.
 * @param {number} cursor.y - The cursor y coordinate.
 * @param {number} cursor.scale - The cursor texture scale.
 */
export function captureScreenshot(texture: Cogl.Texture, geometry?: any, scale: number, cursor?: {
    texture: Cogl.Texture;
    x: number;
    y: number;
    scale: number;
}): Promise<void>;
/**
 * Shows the screenshot UI.
 */
export function showScreenshotUI(): void;
/**
 * Shows the screen recording UI.
 */
export function showScreenRecordingUI(): void;
export const Tooltip: any;
export const ScreenshotUI: any;
export class ScreenshotService {
    _dbusImpl: any;
    _screenShooter: any;
    _senderChecker: DBusSenderChecker;
    _lockdownSettings: any;
    _createScreenshot(invocation: any, needsDisk?: boolean, restrictCallers?: boolean): Promise<any>;
    _onNameVanished(connection: any, name: any): void;
    _removeShooterForSender(sender: any): void;
    _checkArea(x: any, y: any, width: any, height: any): boolean;
    _resolveRelativeFilename(filename: any): {};
    _createStream(filename: any, invocation: any): any[];
    _flashAsync(shooter: any): any;
    _onScreenshotComplete(stream: any, file: any, invocation: any): void;
    _scaleArea(x: any, y: any, width: any, height: any): any[];
    _unscaleArea(x: any, y: any, width: any, height: any): any[];
    ScreenshotAreaAsync(params: any, invocation: any): Promise<void>;
    ScreenshotWindowAsync(params: any, invocation: any): Promise<void>;
    ScreenshotAsync(params: any, invocation: any): Promise<void>;
    SelectAreaAsync(params: any, invocation: any): Promise<void>;
    FlashAreaAsync(params: any, invocation: any): Promise<void>;
    PickColorAsync(params: any, invocation: any): Promise<void>;
}
export const SelectArea: any;
export const PickPixel: any;
export const Flashspot: any;
import { DBusSenderChecker } from '../misc/util.js';
