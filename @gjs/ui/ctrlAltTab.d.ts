export namespace SortGroup {
    let TOP: number;
    let MIDDLE: number;
    let BOTTOM: number;
}
export class CtrlAltTabManager {
    _items: any[];
    addGroup(root: any, name: any, icon: any, params: any): void;
    removeGroup(root: any): void;
    focusGroup(item: any, timestamp: any): void;
    _sortItems(a: any, b: any): number;
    popup(backward: any, binding: any, mask: any): void;
    _popup: any;
    _focusWindows(timestamp: any): void;
}
