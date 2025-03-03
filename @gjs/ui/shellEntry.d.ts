/**
 * @param {St.Entry} entry
 * @param {*} params
 */
export function addContextMenu(entry: St.Entry, params: any): void;
export class EntryMenu extends PopupMenu.PopupMenu {
    constructor(entry: any);
    _entry: any;
    _clipboard: any;
    _copyItem: any;
    _pasteItem: any;
    _makePasswordItem(): void;
    _passwordItem: any;
    _updateCopyItem(): void;
    _updatePasteItem(): void;
    _updatePasswordItem(): void;
    _onCopyActivated(): void;
    _onPasteActivated(): void;
    _onPasswordActivated(): void;
}
export const CapsLockWarning: any;
import * as PopupMenu from './popupMenu.js';
