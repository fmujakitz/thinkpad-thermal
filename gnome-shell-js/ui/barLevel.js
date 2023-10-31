/* -*- mode: js2; js2-basic-offset: 4; indent-tabs-mode: nil -*- */

import Atk from 'gi://Atk';
import Clutter from 'gi://Clutter';
import GObject from 'gi://GObject';
import St from 'gi://St';

export const BarLevel = GObject.registerClass({
    Properties: {
        'value': GObject.ParamSpec.double(
            'value', 'value', 'value',
            GObject.ParamFlags.READWRITE,
            0, 2, 0),
        'maximum-value': GObject.ParamSpec.double(
            'maximum-value', 'maximum-value', 'maximum-value',
            GObject.ParamFlags.READWRITE,
            1, 2, 1),
        'overdrive-start': GObject.ParamSpec.double(
            'overdrive-start', 'overdrive-start', 'overdrive-start',
            GObject.ParamFlags.READWRITE,
            1, 2, 1),
    },
}, class BarLevel extends St.DrawingArea {
    _init(params) {
        this._maxValue = 1;
        this._value = 0;
        this._overdriveStart = 1;
        this._barLevelWidth = 0;

        let defaultParams = {
            style_class: 'barlevel',
            accessible_role: Atk.Role.LEVEL_BAR,
        };
        super._init(Object.assign(defaultParams, params));
        this.connect('notify::allocation', () => {
            this._barLevelWidth = this.allocation.get_width();
        });

        this._customAccessible = St.GenericAccessible.new_for_actor(this);
        this.set_accessible(this._customAccessible);

        this._customAccessible.connect('get-current-value', this._getCurrentValue.bind(this));
        this._customAccessible.connect('get-minimum-value', this._getMinimumValue.bind(this));
        this._customAccessible.connect('get-maximum-value', this._getMaximumValue.bind(this));
        this._customAccessible.connect('set-current-value', this._setCurrentValue.bind(this));

        this.connect('notify::value', this._valueChanged.bind(this));
    }

    get value() {
        return this._value;
    }

    set value(value) {
        value = Math.max(Math.min(value, this._maxValue), 0);

        if (this._value === value)
            return;

        this._value = value;
        this.notify('value');
        this.queue_repaint();
    }

    get maximumValue() {
        return this._maxValue;
    }

    set maximumValue(value) {
        value = Math.max(value, 1);

        if (this._maxValue === value)
            return;

        this._maxValue = value;
        this._overdriveStart = Math.min(this._overdriveStart, this._maxValue);
        this.notify('maximum-value');
        this.queue_repaint();
    }

    get overdriveStart() {
        return this._overdriveStart;
    }

    set overdriveStart(value) {
        if (this._overdriveStart === value)
            return;

        if (value > this._maxValue) {
            throw new Error(`Tried to set overdrive value to ${value}, ` +
                `which is a number greater than the maximum allowed value ${this._maxValue}`);
        }

        this._overdriveStart = value;
        this.notify('overdrive-start');
        this.queue_repaint();
    }

    vfunc_repaint() {
        let cr = this.get_context();
        let themeNode = this.get_theme_node();
        let [width, height] = this.get_surface_size();
        const rtl = this.get_text_direction() === Clutter.TextDirection.RTL;

        let barLevelHeight = themeNode.get_length('-barlevel-height');
        let barLevelBorderRadius = Math.min(width, barLevelHeight) / 2;
        let fgColor = themeNode.get_foreground_color();

        let barLevelColor = themeNode.get_color('-barlevel-background-color');
        let barLevelActiveColor = themeNode.get_color('-barlevel-active-background-color');
        let barLevelOverdriveColor = themeNode.get_color('-barlevel-overdrive-color');

        let barLevelBorderWidth = Math.min(themeNode.get_length('-barlevel-border-width'), 1);
        let [hasBorderColor, barLevelBorderColor] =
            themeNode.lookup_color('-barlevel-border-color', false);
        if (!hasBorderColor)
            barLevelBorderColor = barLevelColor;
        let [hasActiveBorderColor, barLevelActiveBorderColor] =
            themeNode.lookup_color('-barlevel-active-border-color', false);
        if (!hasActiveBorderColor)
            barLevelActiveBorderColor = barLevelActiveColor;
        let [hasOverdriveBorderColor, barLevelOverdriveBorderColor] =
            themeNode.lookup_color('-barlevel-overdrive-border-color', false);
        if (!hasOverdriveBorderColor)
            barLevelOverdriveBorderColor = barLevelOverdriveColor;

        const TAU = Math.PI * 2;

        let endX = 0;
        if (this._maxValue > 0) {
            let progress = this._value / this._maxValue;
            if (rtl)
                progress = 1 - progress;
            endX = barLevelBorderRadius + (width - 2 * barLevelBorderRadius) * progress;
        }

        let overdriveRatio = this._overdriveStart / this._maxValue;
        if (rtl)
            overdriveRatio = 1 - overdriveRatio;
        let overdriveSeparatorX = barLevelBorderRadius + (width - 2 * barLevelBorderRadius) * overdriveRatio;

        let overdriveActive = this._overdriveStart !== this._maxValue;
        let overdriveSeparatorWidth = 0;
        if (overdriveActive)
            overdriveSeparatorWidth = themeNode.get_length('-barlevel-overdrive-separator-width');

        let xcArcStart = barLevelBorderRadius + barLevelBorderWidth;
        let xcArcEnd = width - xcArcStart;
        if (rtl)
            [xcArcStart, xcArcEnd] = [xcArcEnd, xcArcStart];

        /* background bar */
        if (!rtl)
            cr.arc(xcArcEnd, height / 2, barLevelBorderRadius, TAU * (3 / 4), TAU * (1 / 4));
        else
            cr.arcNegative(xcArcEnd, height / 2, barLevelBorderRadius, TAU * (3 / 4), TAU * (1 / 4));
        cr.lineTo(endX, (height + barLevelHeight) / 2);
        cr.lineTo(endX, (height - barLevelHeight) / 2);
        cr.lineTo(xcArcEnd, (height - barLevelHeight) / 2);
        cr.setSourceColor(barLevelColor);
        cr.fillPreserve();
        cr.setSourceColor(barLevelBorderColor);
        cr.setLineWidth(barLevelBorderWidth);
        cr.stroke();

        /* normal progress bar */
        let x = 0;
        if (!rtl) {
            x = Math.min(endX, overdriveSeparatorX - overdriveSeparatorWidth / 2);
            cr.arc(xcArcStart, height / 2, barLevelBorderRadius, TAU * (1 / 4), TAU * (3 / 4));
        } else {
            x = Math.max(endX, overdriveSeparatorX + overdriveSeparatorWidth / 2);
            cr.arcNegative(xcArcStart, height / 2, barLevelBorderRadius, TAU * (1 / 4), TAU * (3 / 4));
        }
        cr.lineTo(x, (height - barLevelHeight) / 2);
        cr.lineTo(x, (height + barLevelHeight) / 2);
        cr.lineTo(xcArcStart, (height + barLevelHeight) / 2);
        if (this._value > 0)
            cr.setSourceColor(barLevelActiveColor);
        cr.fillPreserve();
        cr.setSourceColor(barLevelActiveBorderColor);
        cr.setLineWidth(barLevelBorderWidth);
        cr.stroke();

        /* overdrive progress barLevel */
        if (!rtl)
            x = Math.min(endX, overdriveSeparatorX) + overdriveSeparatorWidth / 2;
        else
            x = Math.max(endX, overdriveSeparatorX) - overdriveSeparatorWidth / 2;
        if (this._value > this._overdriveStart) {
            cr.moveTo(x, (height - barLevelHeight) / 2);
            cr.lineTo(endX, (height - barLevelHeight) / 2);
            cr.lineTo(endX, (height + barLevelHeight) / 2);
            cr.lineTo(x, (height + barLevelHeight) / 2);
            cr.lineTo(x, (height - barLevelHeight) / 2);
            cr.setSourceColor(barLevelOverdriveColor);
            cr.fillPreserve();
            cr.setSourceColor(barLevelOverdriveBorderColor);
            cr.setLineWidth(barLevelBorderWidth);
            cr.stroke();
        }

        /* end progress bar arc */
        if (this._value > 0) {
            if (this._value <= this._overdriveStart)
                cr.setSourceColor(barLevelActiveColor);
            else
                cr.setSourceColor(barLevelOverdriveColor);
            if (!rtl) {
                cr.arc(endX, height / 2, barLevelBorderRadius, TAU * (3 / 4), TAU * (1 / 4));
                cr.lineTo(Math.floor(endX), (height + barLevelHeight) / 2);
                cr.lineTo(Math.floor(endX), (height - barLevelHeight) / 2);
            } else {
                cr.arcNegative(endX, height / 2, barLevelBorderRadius, TAU * (3 / 4), TAU * (1 / 4));
                cr.lineTo(Math.ceil(endX), (height + barLevelHeight) / 2);
                cr.lineTo(Math.ceil(endX), (height - barLevelHeight) / 2);
            }
            cr.lineTo(endX, (height - barLevelHeight) / 2);
            cr.fillPreserve();
            cr.setLineWidth(barLevelBorderWidth);
            cr.stroke();
        }

        /* draw overdrive separator */
        if (overdriveActive) {
            cr.moveTo(overdriveSeparatorX - overdriveSeparatorWidth / 2, (height - barLevelHeight) / 2);
            cr.lineTo(overdriveSeparatorX + overdriveSeparatorWidth / 2, (height - barLevelHeight) / 2);
            cr.lineTo(overdriveSeparatorX + overdriveSeparatorWidth / 2, (height + barLevelHeight) / 2);
            cr.lineTo(overdriveSeparatorX - overdriveSeparatorWidth / 2, (height + barLevelHeight) / 2);
            cr.lineTo(overdriveSeparatorX - overdriveSeparatorWidth / 2, (height - barLevelHeight) / 2);
            if (this._value <= this._overdriveStart)
                cr.setSourceColor(fgColor);
            else
                cr.setSourceColor(barLevelColor);
            cr.fill();
        }

        cr.$dispose();
    }

    _getCurrentValue() {
        return this._value;
    }

    _getOverdriveStart() {
        return this._overdriveStart;
    }

    _getMinimumValue() {
        return 0;
    }

    _getMaximumValue() {
        return this._maxValue;
    }

    _setCurrentValue(_actor, value) {
        this._value = value;
    }

    _valueChanged() {
        this._customAccessible.notify('accessible-value');
    }
});
