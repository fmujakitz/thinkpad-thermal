export class Magnifier extends Signals.EventEmitter {
    _zoomRegions: ZoomRegion[];
    _cursorTracker: any;
    _mouseSprite: any;
    _cursorRoot: any;
    /**
     * showSystemCursor:
     * Show the system mouse pointer.
     */
    showSystemCursor(): void;
    /**
     * hideSystemCursor:
     * Hide the system mouse pointer.
     */
    hideSystemCursor(): void;
    _cursorVisibilityChangedId: any;
    /**
     * setActive:
     * Show/hide all the zoom regions.
     *
     * @param {boolean} activate Boolean to activate or de-activate the magnifier.
     */
    setActive(activate: boolean): void;
    /**
     * isActive:
     *
     * @returns {boolean} Whether the magnifier is active.
     */
    isActive(): boolean;
    /**
     * startTrackingMouse:
     * Turn on mouse tracking, if not already doing so.
     */
    startTrackingMouse(): void;
    _pointerWatch: {
        watcher: any;
        interval: any;
        callback: any;
        remove(): void;
    };
    /**
     * stopTrackingMouse:
     * Turn off mouse tracking, if not already doing so.
     */
    stopTrackingMouse(): void;
    /**
     * isTrackingMouse:
     *
     * @returns {boolean} whether the magnifier is currently tracking the mouse
     */
    isTrackingMouse(): boolean;
    /**
     * scrollToMousePos:
     * Position all zoom regions' ROI relative to the current location of the
     * system pointer.
     *
     * @param {[xMouse: number, yMouse: number] | []} args
     */
    scrollToMousePos(...args: [xMouse: number, yMouse: number] | []): void;
    xMouse: any;
    yMouse: any;
    /**
     * createZoomRegion:
     * Create a ZoomRegion instance with the given properties.
     *
     * @param {number} xMagFactor
     *     The power to set horizontal magnification of the ZoomRegion. A value
     *     of 1.0 means no magnification, a value of 2.0 doubles the size.
     * @param {number} yMagFactor
     *    The power to set the vertical magnification of the ZoomRegion.
     * @param {{x: number, y: number, width: number, height: number}} roi
     *    The reg Object that defines the region to magnify, given in
     *    unmagnified coordinates.
     * @param {{x: number, y: number, width: number, height: number}} viewPort
     *     Object that defines the position of the ZoomRegion on screen.
     * @returns {ZoomRegion} the newly created ZoomRegion.
     */
    createZoomRegion(xMagFactor: number, yMagFactor: number, roi: {
        x: number;
        y: number;
        width: number;
        height: number;
    }, viewPort: {
        x: number;
        y: number;
        width: number;
        height: number;
    }): ZoomRegion;
    /**
     * addZoomRegion:
     * Append the given ZoomRegion to the list of currently defined ZoomRegions
     * for this Magnifier instance.
     *
     * @param {ZoomRegion} zoomRegion The zoomRegion to add.
     */
    addZoomRegion(zoomRegion: ZoomRegion): void;
    /**
     * getZoomRegions:
     * Return a list of ZoomRegion's for this Magnifier.
     *
     * @returns {ZoomRegion[]} The Magnifier's zoom region list.
     */
    getZoomRegions(): ZoomRegion[];
    /**
     * clearAllZoomRegions:
     * Remove all the zoom regions from this Magnfier's ZoomRegion list.
     */
    clearAllZoomRegions(): void;
    /**
     * addCrosshairs:
     * Add and show a cross hair centered on the magnified mouse.
     */
    addCrosshairs(): void;
    _crossHairs: any;
    /**
     * setCrosshairsVisible:
     *
     * Show or hide the cross hair
     *
     * @param {boolean} visible Flag that indicates show (true) or hide (false).
     */
    setCrosshairsVisible(visible: boolean): void;
    /**
     * setCrosshairsColor:
     *
     * Set the color of the crosshairs for all ZoomRegions.
     *
     * @param {string} color The color as a string, e.g. '#ff0000ff' or 'red'.
     */
    setCrosshairsColor(color: string): void;
    /**
     * getCrosshairsColor:
     * Get the color of the crosshairs.
     *
     * @returns {string} The color as a string, e.g. '#0000ffff' or 'blue'.
     */
    getCrosshairsColor(): string;
    /**
     * setCrosshairsThickness:
     *
     * Set the crosshairs thickness for all ZoomRegions.
     *
     * @param {number} thickness The width of the vertical and
     *     horizontal lines of the crosshairs.
     */
    setCrosshairsThickness(thickness: number): void;
    /**
     * Get the crosshairs thickness.
     *
     * @returns {number} The width of the vertical and horizontal
     *     lines of the crosshairs.
     */
    getCrosshairsThickness(): number;
    /**
     * @param {number} opacity Value between 0.0 (transparent)
     *     and 1.0 (fully opaque).
     */
    setCrosshairsOpacity(opacity: number): void;
    /**
     * @returns {number} Value between 0.0 (transparent) and 1.0 (fully opaque).
     */
    getCrosshairsOpacity(): number;
    /**
     * Set the crosshairs length for all ZoomRegions.
     *
     * @param {number} length The length of the vertical and horizontal
     *     lines making up the crosshairs.
     */
    setCrosshairsLength(length: number): void;
    /**
     * getCrosshairsLength:
     * Get the crosshairs length.
     *
     * @returns {number} The length of the vertical and horizontal
     *     lines making up the crosshairs.
     */
    getCrosshairsLength(): number;
    /**
     * setCrosshairsClip:
     *
     * Set whether the crosshairs are clipped at their intersection.
     *
     * @param {boolean} clip Flag to indicate whether to clip the crosshairs.
     */
    setCrosshairsClip(clip: boolean): void;
    /**
     * getCrosshairsClip:
     * Get whether the crosshairs are clipped by the mouse image.
     *
     * @returns {boolean} Whether the crosshairs are clipped.
     */
    getCrosshairsClip(): boolean;
    _updateMouseSprite(): void;
    _updateSpriteTexture(): void;
    _settingsInit(zoomRegion: any): void;
    _settings: any;
    _updateScreenPosition(): void;
    _updateMagFactor(): void;
    _updateLensMode(): void;
    _updateClampMode(): void;
    _updateMouseTrackingMode(): void;
    _updateFocusTrackingMode(): void;
    _updateCaretTrackingMode(): void;
    _updateInvertLightness(): void;
    _updateColorSaturation(): void;
    _updateBrightness(): void;
    _updateContrast(): void;
}
import * as Signals from '../misc/signals.js';
declare class ZoomRegion {
    constructor(magnifier: any, mouseSourceActor: any);
    _magnifier: any;
    _focusCaretTracker: FocusCaretTracker.FocusCaretTracker;
    _mouseTrackingMode: any;
    _focusTrackingMode: any;
    _caretTrackingMode: any;
    _clampScrollingAtEdges: boolean;
    _lensMode: boolean;
    _screenPosition: any;
    _invertLightness: boolean;
    _colorSaturation: number;
    _brightness: {
        r: number;
        g: number;
        b: number;
    };
    _contrast: {
        r: number;
        g: number;
        b: number;
    };
    _magView: any;
    _background: any;
    _uiGroupClone: any;
    _mouseSourceActor: any;
    _mouseActor: any;
    _crossHairs: any;
    _crossHairsActor: any;
    _viewPortX: number;
    _viewPortY: number;
    _viewPortWidth: any;
    _viewPortHeight: any;
    _xCenter: number;
    _yCenter: number;
    _xMagFactor: number;
    _yMagFactor: number;
    _followingCursor: boolean;
    _xFocus: number;
    _yFocus: number;
    _xCaret: number;
    _yCaret: number;
    _pointerIdleMonitor: any;
    _scrollContentsTimerId: number;
    _connectSignals(): void;
    _signalConnections: any[];
    _disconnectSignals(): void;
    _updateScreenPosition(): void;
    _convertExtentsToScreenSpace(accessible: any, extents: any): any;
    _updateFocus(caller: any, event: any): void;
    _updateCaret(caller: any, event: any): void;
    /**
     * setActive:
     *
     * @param {boolean} activate Boolean to show/hide the ZoomRegion.
     */
    setActive(activate: boolean): void;
    /**
     * isActive:
     *
     * @returns {boolean} Whether this ZoomRegion is active
     */
    isActive(): boolean;
    /**
     * setMagFactor:
     *
     * @param {number} xMagFactor The power to set the horizontal
     *     magnification factor to of the magnified view. A value of 1.0
     *     means no magnification. A value of 2.0 doubles the size.
     * @param {number} yMagFactor The power to set the vertical
     *     magnification factor to of the magnified view.
     */
    setMagFactor(xMagFactor: number, yMagFactor: number): void;
    /**
     * getMagFactor:
     *
     * @returns {number[]} an array, [xMagFactor, yMagFactor], containing
     *     the horizontal and vertical magnification powers. A value of
     *     1.0 means no magnification. A value of 2.0 means the contents
     *     are doubled in size, and so on.
     */
    getMagFactor(): number[];
    /**
     * setMouseTrackingMode
     *
     * @param {GDesktopEnums.MagnifierMouseTrackingMode} mode the new mode
     */
    setMouseTrackingMode(mode: GDesktopEnums.MagnifierMouseTrackingMode): void;
    /**
     * getMouseTrackingMode:
     *
     * @returns {GDesktopEnums.MagnifierMouseTrackingMode} the current mode
     */
    getMouseTrackingMode(): GDesktopEnums.MagnifierMouseTrackingMode;
    /**
     * setFocusTrackingMode
     *
     * @param {GDesktopEnums.MagnifierFocusTrackingMode} mode the new mode
     */
    setFocusTrackingMode(mode: GDesktopEnums.MagnifierFocusTrackingMode): void;
    /**
     * setCaretTrackingMode
     *
     * @param {GDesktopEnums.MagnifierCaretTrackingMode} mode the new mode
     */
    setCaretTrackingMode(mode: GDesktopEnums.MagnifierCaretTrackingMode): void;
    _syncFocusTracking(): void;
    _syncCaretTracking(): void;
    /**
     * setViewPort
     * Sets the position and size of the ZoomRegion on screen.
     *
     * @param {{x: number, y: number, width: number, height: number}} viewPort
     *     Object defining the position and size of the view port.
     *     The values are in stage coordinate space.
     */
    setViewPort(viewPort: {
        x: number;
        y: number;
        width: number;
        height: number;
    }): void;
    /**
     * setROI
     * Sets the "region of interest" that the ZoomRegion is magnifying.
     *
     * @param {{x: number, y: number, width: number, height: number}} roi
     *     Object that defines the region of the screen to magnify.
     *     The values are in screen (unmagnified) coordinate space.
     */
    setROI(roi: {
        x: number;
        y: number;
        width: number;
        height: number;
    }): void;
    /**
     * getROI:
     * Retrieves the "region of interest" -- the rectangular bounds of that part
     * of the desktop that the magnified view is showing (x, y, width, height).
     * The bounds are given in non-magnified coordinates.
     *
     * @returns {number[]} an array, [x, y, width, height], representing
     *     the bounding rectangle of what is shown in the magnified view.
     */
    getROI(): number[];
    /**
     * setLensMode:
     *
     *  Turn lens mode on/off.  In full screen mode, lens mode does nothing since
     * a lens the size of the screen is pointless.
     *
     * @param {boolean} lensMode Whether lensMode should be active
     */
    setLensMode(lensMode: boolean): void;
    /**
     * isLensMode:
     * Is lens mode on or off?
     *
     * @returns {boolean} The lens mode state.
     */
    isLensMode(): boolean;
    /**
     * setClampScrollingAtEdges:
     * Stop vs. allow scrolling of the magnified contents when it scroll beyond
     * the edges of the screen.
     *
     *  @param {boolean} clamp Boolean to turn on/off clamping.
     */
    setClampScrollingAtEdges(clamp: boolean): void;
    /**
     * setTopHalf:
     * Magnifier view occupies the top half of the screen.
     */
    setTopHalf(): void;
    /**
     * setBottomHalf:
     * Magnifier view occupies the bottom half of the screen.
     */
    setBottomHalf(): void;
    /**
     * setLeftHalf:
     * Magnifier view occupies the left half of the screen.
     */
    setLeftHalf(): void;
    /**
     * setRightHalf:
     * Magnifier view occupies the right half of the screen.
     */
    setRightHalf(): void;
    /**
     * setFullScreenMode:
     * Set the ZoomRegion to full-screen mode.
     * Note:  disallows lens mode.
     */
    setFullScreenMode(): void;
    /**
     * setScreenPosition:
     * Positions the zoom region to one of the enumerated positions on the
     * screen.
     *
     *  @param {GDesktopEnums.MagnifierScreenPosition} inPosition the position
     */
    setScreenPosition(inPosition: GDesktopEnums.MagnifierScreenPosition): void;
    /**
     * getScreenPosition:
     * Tell the outside world what the current mode is -- magnifiying the
     * top half, bottom half, etc.
     *
     *  @returns {GDesktopEnums.MagnifierScreenPosition}: the current position.
     */
    getScreenPosition(): GDesktopEnums.MagnifierScreenPosition;
    _clearScrollContentsTimer(): void;
    /**
     * scrollToMousePos:
     * Set the region of interest based on the position of the system pointer.
     *
     *  @returns {boolean}: Whether the system mouse pointer is over the
     *     magnified view.
     */
    scrollToMousePos(): boolean;
    _xDelayed: any;
    _yDelayed: any;
    _scrollContentsToDelayed(x: any, y: any): void;
    /**
     * scrollContentsTo:
     * Shift the contents of the magnified view such it is centered on the given
     * coordinate.
     *
     *  @param {number} x The x-coord of the point to center on.
     * @param {number} y The y-coord of the point to center on.
     */
    scrollContentsTo(x: number, y: number): void;
    /**
     * addCrosshairs:
     * Add crosshairs centered on the magnified mouse.
     *
     *  @param {Crosshairs} crossHairs Crosshairs instance
     */
    addCrosshairs(crossHairs: any): void;
    /**
     * setInvertLightness:
     * Set whether to invert the lightness of the magnified view.
     *
     *  @param {boolean} flag whether brightness should be inverted
     */
    setInvertLightness(flag: boolean): void;
    /**
     * getInvertLightness:
     *
     * Retrieve whether the lightness is inverted.
     *
     * @returns {boolean} whether brightness should be inverted
     */
    getInvertLightness(): boolean;
    /**
     * setColorSaturation:
     *
     * Set the color saturation of the magnified view.
     *
     * @param {number} saturation A value from 0.0 to 1.0 that defines
     *     the color saturation, with 0.0 defining no color (grayscale),
     *     and 1.0 defining full color.
     */
    setColorSaturation(saturation: number): void;
    /**
     * getColorSaturation:
     * Retrieve the color saturation of the magnified view.
     *
     *  @returns {number} the color saturation
     */
    getColorSaturation(): number;
    /**
     * setBrightness:
     * Alter the brightness of the magnified view.
     *
     *  @param {object} brightness Object containing the contrast for the
     *     red, green, and blue channels. Values of 0.0 represent "standard"
     *     brightness (no change), whereas values less or greater than
     *     0.0 indicate decreased or incresaed brightness, respectively.
     *
     *     {number} brightness.r - the red component
     *     {number} brightness.g - the green component
     *     {number} brightness.b - the blue component
     */
    setBrightness(brightness: object): void;
    /**
     * setContrast:
     * Alter the contrast of the magnified view.
     *
     *  @param {object} contrast Object containing the contrast for the
     *     red, green, and blue channels. Values of 0.0 represent "standard"
     *     contrast (no change), whereas values less or greater than
     *     0.0 indicate decreased or incresaed contrast, respectively.
     *
     *     {number} contrast.r - the red component
     *     {number} contrast.g - the green component
     *     {number} contrast.b - the blue component
     */
    setContrast(contrast: object): void;
    /**
     * getContrast:
     * Retrieve the contrast of the magnified view.
     *
     *  @returns {{r: number, g: number, b: number}}: Object containing
     *     the contrast for the red, green, and blue channels.
     */
    getContrast(): {
        r: number;
        g: number;
        b: number;
    };
    _createActors(): void;
    _magShaderEffects: MagShaderEffects;
    _destroyActors(): void;
    _setViewPort(viewPort: any, fromROIUpdate: any): void;
    _changeROI(params: any): void;
    _isMouseOverRegion(): boolean;
    _isFullScreen(): boolean;
    _centerFromMousePosition(): any[];
    _centerFromCaretPosition(): void;
    _centerFromFocusPosition(): void;
    _centerFromPointPush(xPoint: any, yPoint: any): number[];
    _centerFromPointProportional(xPoint: any, yPoint: any): number[];
    _centerFromPointCentered(xPoint: any, yPoint: any): any[];
    _screenToViewPort(screenX: any, screenY: any): number[];
    _updateMagViewGeometry(): void;
    _updateCloneGeometry(animate?: boolean): void;
    _updateMousePosition(): void;
    _getMousePosition(): number[];
    _getCrossHairsPosition(): number[];
    _monitorsChanged(): void;
}
import * as FocusCaretTracker from './focusCaretTracker.js';
declare class MagShaderEffects {
    constructor(uiGroupClone: any);
    _inverse: any;
    _brightnessContrast: any;
    _colorDesaturation: any;
    _magView: any;
    /**
     * destroyEffects:
     * Remove contrast and brightness effects from the magnified view, and
     * lose the reference to the actor they were applied to.  Don't use this
     * object after calling this.
     */
    destroyEffects(): void;
    /**
     * setInvertLightness:
     * Enable/disable invert lightness effect.
     *
     * @param {boolean} invertFlag Enabled flag.
     */
    setInvertLightness(invertFlag: boolean): void;
    setColorSaturation(factor: any): void;
    /**
     * setBrightness:
     * Set the brightness of the magnified view.
     *
     * @param {object} brightness Object containing the contrast for the
     *     red, green, and blue channels. Values of 0.0 represent "standard"
     *     brightness (no change), whereas values less or greater than
     *     0.0 indicate decreased or incresaed brightness, respectively.
     *
     *     {number} brightness.r - the red component
     *     {number} brightness.g - the green component
     *     {number} brightness.b - the blue component
     */
    setBrightness(brightness: object): void;
    /**
     * Set the contrast of the magnified view.
     *
     * @param {object} contrast Object containing the contrast for the
     *     red, green, and blue channels. Values of 0.0 represent "standard"
     *     contrast (no change), whereas values less or greater than
     *     0.0 indicate decreased or incresaed contrast, respectively.
     *
     *     {number} contrast.r - the red component
     *     {number} contrast.g - the green component
     *     {number} contrast.b - the blue component
     */
    setContrast(contrast: object): void;
}
export {};
