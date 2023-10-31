// https://gitlab.gnome.org/GNOME/gnome-shell/-/blob/main/js/ui/ripples.js



import type Clutter from '@girs/clutter-12';
import type St from '@girs/st-12';

export class Ripples {
    _x: number;
    _y: number;
    _px: number;
    _py: number;
    _ripple1: St.BoxLayout;
    _ripple2: St.BoxLayout;
    _ripple3: St.BoxLayout;

    constructor(px: number, py: number, styleClass: string | null);

    public destroy(): void;
    public addTo(stage: Clutter.Stage): void;
    public playAnimation(x: number, y: number): void;

    /**
     * We draw a ripple by using a source image and animating it scaling
     * outwards and fading away. We want the ripples to move linearly
     * or it looks unrealistic, but if the opacity of the ripple goes
     * linearly to zero it fades away too quickly, so we use a separate
     * tween to give a non-linear curve to the fade-away and make
     * it more visible in the middle section.
     * @param ripple 
     * @param delay 
     * @param duration 
     * @param startScale 
     * @param startOpacity 
     * @param finalScale 
     */
    protected _animRipple(ripple: St.BoxLayout, delay: number, duration: number, startScale: number, startOpacity: number, finalScale: number): void;
}