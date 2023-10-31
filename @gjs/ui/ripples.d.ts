export class Ripples {
    constructor(px: any, py: any, styleClass: any);
    _x: number;
    _y: number;
    _px: any;
    _py: any;
    _ripple1: any;
    _ripple2: any;
    _ripple3: any;
    destroy(): void;
    _animRipple(ripple: any, delay: any, duration: any, startScale: any, startOpacity: any, finalScale: any): void;
    addTo(stage: any): void;
    _stage: any;
    playAnimation(x: any, y: any): void;
}
