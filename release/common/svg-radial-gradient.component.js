import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
var SvgRadialGradientComponent = (function () {
    function SvgRadialGradientComponent() {
        this.endOpacity = 1;
        this.cx = 0;
        this.cy = 0;
    }
    Object.defineProperty(SvgRadialGradientComponent.prototype, "stops", {
        get: function () {
            return this.stopsInput || this.stopsDefault;
        },
        set: function (value) {
            this.stopsInput = value;
        },
        enumerable: true,
        configurable: true
    });
    SvgRadialGradientComponent.prototype.ngOnChanges = function (changes) {
        this.r = '30%';
        if (('color' in changes) ||
            ('startOpacity' in changes) ||
            ('endOpacity' in changes)) {
            this.stopsDefault = [{
                    offset: 0,
                    color: this.color,
                    opacity: this.startOpacity
                }, {
                    offset: 100,
                    color: this.color,
                    opacity: this.endOpacity
                }];
        }
    };
    SvgRadialGradientComponent.decorators = [
        { type: Component, args: [{
                    selector: 'g[ngx-charts-svg-radial-gradient]',
                    template: "\n    <svg:radialGradient\n      [id]=\"name\"\n      [attr.cx]=\"cx\"\n      [attr.cy]=\"cy\"\n      [attr.r]=\"r\"\n      gradientUnits=\"userSpaceOnUse\">\n      <svg:stop *ngFor=\"let stop of stops\"\n        [attr.offset]=\"stop.offset + '%'\"\n        [style.stop-color]=\"stop.color\"\n        [style.stop-opacity]=\"stop.opacity\"\n      />\n    </svg:radialGradient>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush
                },] },
    ];
    /** @nocollapse */
    SvgRadialGradientComponent.ctorParameters = function () { return []; };
    SvgRadialGradientComponent.propDecorators = {
        'color': [{ type: Input },],
        'name': [{ type: Input },],
        'startOpacity': [{ type: Input },],
        'endOpacity': [{ type: Input },],
        'cx': [{ type: Input },],
        'cy': [{ type: Input },],
        'stops': [{ type: Input },],
    };
    return SvgRadialGradientComponent;
}());
export { SvgRadialGradientComponent };
//# sourceMappingURL=svg-radial-gradient.component.js.map