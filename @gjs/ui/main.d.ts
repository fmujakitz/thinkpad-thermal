/** @returns {void} */
export function start(): void;
/** @returns {string} */
export function getStyleVariant(): string;
/**
 * Creates an adjustment that has its lower, upper, and value
 * properties set for the number of available workspaces. Consumers
 * of the returned adjustment must only change the 'value' property,
 * and only that.
 *
 * @param {Clutter.Actor} actor
 *
 * @returns {St.Adjustment} - an adjustment representing the
 * current workspaces layout
 */
export function createWorkspacesAdjustment(actor: Clutter.Actor): St.Adjustment;
/**
 * Get the theme CSS file that the shell will load
 *
 * @returns {?Gio.File}: A #GFile that contains the theme CSS,
 *          null if using the default
 */
export function getThemeStylesheet(): Gio.File;
/**
 * Set the theme CSS file that the shell will load
 *
 * @param {string=} cssStylesheet - A file path that contains the theme CSS,
 *     set it to null to use the default
 */
export function setThemeStylesheet(cssStylesheet?: string | undefined): void;
export function reloadThemeResource(): void;
/**
 * loadTheme:
 *
 * Reloads the theme CSS file
 */
export function loadTheme(): void;
/**
 * @param {string} msg A message
 * @param {string} details Additional information
 */
export function notify(msg: string, details: string): void;
/**
 * See shell_global_notify_problem().
 *
 * @param {string} msg - An error message
 * @param {string} details - Additional information
 */
export function notifyError(msg: string, details: string): void;
/**
 * Ensure we are in a mode where all keyboard and mouse input goes to
 * the stage, and focus @actor. Multiple calls to this function act in
 * a stacking fashion; the effect will be undone when an equal number
 * of popModal() invocations have been made.
 *
 * Next, record the current Clutter keyboard focus on a stack. If the
 * modal stack returns to this actor, reset the focus to the actor
 * which was focused at the time pushModal() was invoked.
 *
 * `params` may be used to provide the following parameters:
 *  - timestamp: used to associate the call with a specific user initiated
 *               event. If not provided then the value of
 *               global.get_current_time() is assumed.
 *
 *  - options: Meta.ModalOptions flags to indicate that the pointer is
 *             already grabbed
 *
 *  - actionMode: used to set the current Shell.ActionMode to filter
 *                global keybindings; the default of NONE will filter
 *                out all keybindings
 *
 * @param {Clutter.Actor} actor - actor which will be given keyboard focus
 * @param {object=} params - optional parameters
 * @returns {Clutter.Grab} - the grab handle created
 */
export function pushModal(actor: Clutter.Actor, params?: object | undefined): Clutter.Grab;
/**
 * Reverse the effect of pushModal(). If this invocation is undoing
 * the topmost invocation, then the focus will be restored to the
 * previous focus at the time when pushModal() was invoked.
 *
 * `timestamp` is optionally used to associate the call with a specific user
 * initiated event. If not provided then the value of
 * global.get_current_time() is assumed.
 *
 * @param {Clutter.Grab} grab - the grab given by pushModal()
 * @param {number=} timestamp - optional timestamp
 */
export function popModal(grab: Clutter.Grab, timestamp?: number | undefined): void;
/**
 * Creates the looking glass panel
 *
 * @returns {LookingGlass.LookingGlass}
 */
export function createLookingGlass(): any;
/**
 * Opens the run dialog
 */
export function openRunDialog(): void;
export function openWelcomeDialog(): void;
/**
 * activateWindow:
 *
 * @param {Meta.Window} window the window to activate
 * @param {number=} time current event time
 * @param {number=} workspaceNum  window's workspace number
 *
 * Activates @window, switching to its workspace first if necessary,
 * and switching out of the overview if it's currently active
 */
export function activateWindow(window: Meta.Window, time?: number | undefined, workspaceNum?: number | undefined): void;
/**
 * Move @window to the specified monitor and workspace.
 *
 * @param {Meta.Window} window - the window to move
 * @param {number} monitorIndex - the requested monitor
 * @param {number} workspaceIndex - the requested workspace
 * @param {bool} append - create workspace if it doesn't exist
 */
export function moveWindowToMonitorAndWorkspace(window: Meta.Window, monitorIndex: number, workspaceIndex: number, append?: bool): void;
/**
 * This function sets up a callback to be invoked when either the
 * given actor is mapped, or after some period of time when the machine
 * is idle. This is useful if your actor isn't always visible on the
 * screen (for example, all actors in the overview), and you don't want
 * to consume resources updating if the actor isn't actually going to be
 * displaying to the user.
 *
 * Note that queueDeferredWork is called by default immediately on
 * initialization as well, under the assumption that new actors
 * will need it.
 *
 * @param {Clutter.Actor} actor - an actor
 * @param {callback} callback - Function to invoke to perform work
 *
 * @returns {string} - A string work identifier
 */
export function initializeDeferredWork(actor: Clutter.Actor, callback: any): string;
/**
 * queueDeferredWork:
 *
 * @param {string} workId work identifier
 *
 * Ensure that the work identified by @workId will be
 * run on map or timeout. You should call this function
 * for example when data being displayed by the actor has
 * changed.
 */
export function queueDeferredWork(workId: string): void;
export let componentManager: any;
export let extensionManager: any;
export let panel: any;
export let overview: any;
export let runDialog: any;
export let lookingGlass: any;
export let welcomeDialog: any;
export let wm: any;
export let messageTray: any;
export let screenShield: any;
export let notificationDaemon: any;
export let windowAttentionHandler: any;
export let ctrlAltTabManager: any;
export let padOsdService: any;
export let osdWindowManager: any;
export let osdMonitorLabeler: any;
export let sessionMode: any;
export let screenshotUI: any;
export let shellAccessDialogDBusService: any;
export let shellAudioSelectionDBusService: any;
export let shellDBusService: any;
export let shellMountOpDBusService: any;
export let screenSaverDBus: any;
export let modalCount: number;
export let actionMode: any;
export let modalActorFocusStack: any[];
export let uiGroup: any;
export let magnifier: any;
export let xdndHandler: any;
export let keyboard: any;
export let layoutManager: any;
export let kbdA11yDialog: any;
export let inputMethod: any;
export let introspectService: any;
export let locatePointer: any;
