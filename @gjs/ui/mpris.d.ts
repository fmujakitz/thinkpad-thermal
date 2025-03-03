export const MediaMessage: any;
export class MprisPlayer extends Signals.EventEmitter {
    constructor(busName: any);
    _mprisProxy: any;
    _playerProxy: any;
    _visible: boolean;
    _trackArtists: any[];
    _trackTitle: string;
    _trackCoverUrl: string;
    _busName: any;
    get status(): any;
    get trackArtists(): any[];
    get trackTitle(): string;
    get trackCoverUrl(): string;
    get app(): any;
    playPause(): void;
    get canGoNext(): any;
    next(): void;
    get canGoPrevious(): any;
    previous(): void;
    raise(): void;
    _close(): void;
    _onMprisProxyReady(): void;
    _onPlayerProxyReady(): void;
    _updateState(): void;
    _app: any;
}
export const MediaSection: any;
import * as Signals from '../misc/signals.js';
