export const AppGrid: any;
export const AppDisplay: any;
export class AppSearchProvider {
    _appSys: any;
    id: string;
    isRemoteProvider: boolean;
    canLaunchSearch: boolean;
    _systemActions: any;
    _parentalControlsManager: any;
    getResultMetas(apps: any): any;
    filterResults(results: any, maxNumber: any): any;
    getInitialResultSet(terms: any, cancellable: any): any;
    getSubsearchResultSet(previousResults: any, terms: any, cancellable: any): any;
    createResultObject(resultMeta: any): any;
}
export const AppViewItem: any;
export const FolderView: any;
export const FolderIcon: any;
export const AppFolderDialog: any;
export const AppIcon: any;
