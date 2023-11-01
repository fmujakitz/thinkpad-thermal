/**
 * arrowIcon
 *
 * @param {St.Side} side - Side to which the arrow points.
 * @returns {St.Icon} a new arrow icon
 */
export function arrowIcon(side: St.Side): St.Icon;
export type Ornament = number;
export namespace Ornament {
    let NONE: number;
    let DOT: number;
    let CHECK: number;
    let HIDDEN: number;
}
export const PopupBaseMenuItem: any;
export const PopupMenuItem: any;
export const PopupSeparatorMenuItem: any;
export const Switch: any;
export const PopupSwitchMenuItem: any;
export const PopupImageMenuItem: any;
export class PopupMenuBase extends Signals.EventEmitter {
    constructor(sourceActor: any, styleClass: any);
    sourceActor: any;
    focusActor: any;
    _parent: any;
    box: any;
    length: number;
    isOpen: boolean;
    _activeMenuItem: any;
    _settingsActions: {};
    _sensitive: boolean;
    _getTopMenu(): any;
    _setParent(parent: any): void;
    getSensitive(): any;
    setSensitive(sensitive: any): void;
    set sensitive(arg: any);
    get sensitive(): any;
    _sessionUpdated(): void;
    addAction(title: any, callback: any, icon: any): any;
    addSettingsAction(title: any, desktopFile: any): any;
    _setSettingsVisibility(visible: any): void;
    isEmpty(): boolean;
    itemActivated(animate: any): void;
    _subMenuActiveChanged(submenu: any, submenuItem: any): void;
    _connectItemSignals(menuItem: any): void;
    _updateSeparatorVisibility(menuItem: any): void;
    moveMenuItem(menuItem: any, position: any): void;
    addMenuItem(menuItem: any, position: any): void;
    _getMenuItems(): any;
    get firstMenuItem(): any;
    get numMenuItems(): any;
    removeAll(): void;
    toggle(): void;
    destroy(): void;
}
export class PopupMenu extends PopupMenuBase {
    constructor(sourceActor: any, arrowAlignment: any, arrowSide: any);
    _arrowAlignment: any;
    _arrowSide: any;
    _boxPointer: any;
    actor: any;
    _systemModalOpenedId: number;
    _openedSubMenu: any;
    _setOpenedSubMenu(submenu: any): void;
    _onKeyPress(actor: any, event: any): any;
    setArrowOrigin(origin: any): void;
    setSourceAlignment(alignment: any): void;
    open(animate: any): void;
    close(animate: any): void;
}
export class PopupDummyMenu extends Signals.EventEmitter {
    constructor(sourceActor: any);
    sourceActor: any;
    actor: any;
    getSensitive(): boolean;
    get sensitive(): boolean;
    open(): void;
    isOpen: boolean;
    close(): void;
    toggle(): void;
    destroy(): void;
}
export class PopupSubMenu extends PopupMenuBase {
    _arrow: any;
    actor: any;
    _needsScrollbar(): boolean;
    get sensitive(): any;
    open(animate: any): void;
    close(animate: any): void;
    _onKeyPressEvent(actor: any, event: any): any;
}
/**
 * PopupMenuSection:
 *
 * A section of a PopupMenu which is handled like a submenu
 * (you can add and remove items, you can destroy it, you
 * can add it to another menu), but is completely transparent
 * to the user
 */
export class PopupMenuSection extends PopupMenuBase {
    constructor();
    actor: any;
    open(): void;
    close(): void;
}
export const PopupSubMenuMenuItem: any;
export class PopupMenuManager {
    constructor(owner: any, grabParams: any);
    _grabParams: any;
    _menus: any[];
    addMenu(menu: any, position: any): void;
    removeMenu(menu: any): void;
    _grab: any;
    ignoreRelease(): void;
    _onMenuOpenState(menu: any, open: any): void;
    activeMenu: any;
    _changeMenu(newMenu: any): void;
    _onCapturedEvent(actor: any, event: any): any;
    _findMenuForSource(source: any): any;
    _closeMenu(isUser: any, menu: any): void;
}
import * as Signals from '../misc/signals.js';
