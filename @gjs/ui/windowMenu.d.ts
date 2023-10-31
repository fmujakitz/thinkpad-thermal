export class WindowMenu extends PopupMenu.PopupMenu {
    constructor(window: any, sourceActor: any);
    _buildMenu(window: any): void;
    addAction(label: any, callback: any): any;
}
export class WindowMenuManager {
    _manager: PopupMenu.PopupMenuManager;
    _sourceActor: any;
    showWindowMenuForWindow(window: any, type: any, rect: any): void;
}
import * as PopupMenu from './popupMenu.js';
