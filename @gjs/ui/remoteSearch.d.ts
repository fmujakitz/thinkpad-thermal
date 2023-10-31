/**
 * loadRemoteSearchProviders:
 *
 * @param {Gio.Settings} searchSettings - search settings
 * @returns {RemoteSearchProvider[]} - the list of remote providers
 */
export function loadRemoteSearchProviders(searchSettings: Gio.Settings): RemoteSearchProvider[];
declare class RemoteSearchProvider {
    constructor(appInfo: any, dbusName: any, dbusPath: any, autoStart: any, proxyInfo: any);
    proxy: any;
    appInfo: any;
    id: any;
    isRemoteProvider: boolean;
    canLaunchSearch: boolean;
    createIcon(size: any, meta: any): any;
    filterResults(results: any, maxNumber: any): any;
    getInitialResultSet(terms: any, cancellable: any): Promise<any>;
    getSubsearchResultSet(previousResults: any, newTerms: any, cancellable: any): Promise<any>;
    getResultMetas(ids: any, cancellable: any): Promise<{
        id: any;
        name: any;
        description: any;
        createIcon: {};
        clipboardText: any;
    }[]>;
    activateResult(id: any): void;
    launchSearch(_terms: any): void;
}
export {};
