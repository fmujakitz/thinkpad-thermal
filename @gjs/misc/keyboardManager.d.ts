/**
 * @returns {GnomeDesktop.XkbInfo}
 */
export function getXkbInfo(): GnomeDesktop.XkbInfo;
/**
 * @returns {KeyboardManager}
 */
export function getKeyboardManager(): KeyboardManager;
export function releaseKeyboard(): void;
export function holdKeyboard(): void;
export const DEFAULT_LOCALE: "en_US";
export const DEFAULT_LAYOUT: "us";
export const DEFAULT_VARIANT: "";
declare class KeyboardManager {
    MAX_LAYOUTS_PER_GROUP: number;
    _xkbInfo: GnomeDesktop.XkbInfo;
    _current: any;
    _localeLayoutInfo: {
        layout: any;
        variant: any;
    };
    _layoutInfos: {};
    _currentKeymap: {
        layouts: any;
        variants: any;
        options: any;
    };
    _applyLayoutGroup(group: any): void;
    _applyLayoutGroupIndex(idx: any): void;
    apply(id: any): void;
    reapply(): void;
    setUserLayouts(ids: any): void;
    _getLocaleLayout(): {
        layout: any;
        variant: any;
    };
    _buildGroupStrings(_group: any): any[];
    setKeyboardOptions(options: any): void;
    _xkbOptions: any;
    _buildOptionsString(): any;
    get currentLayout(): any;
}
export {};
