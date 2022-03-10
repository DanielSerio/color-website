"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HSLToRGB = void 0;
/**
 * Given an HSL color, convert it to RGB
 * @param {number} h - hue (0-360)
 * @param {number} s - saturation (0-100)
 * @param {number} l - lightness (0-100)
 * @returns {RGB} [R, G, B]
 */
function HSLToRGB(h, s, l) {
    const { round } = Math;
    h /= 360;
    s /= 100;
    l /= 100;
    let r;
    let g;
    let b;
    if (s === 0)
        r = g = b = l;
    else {
        const hue2rgb = (p, q, t) => {
            if (t < 0)
                t += 1;
            if (t > 1)
                t -= 1;
            if (t < 1 / 6)
                return p + (q - p) * 6 * t;
            if (t < 1 / 2)
                return q;
            if (t < 2 / 3)
                return p + (q - p) * (2 / 3 - t) * 6;
            return p;
        };
        const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        const p = 2 * l - q;
        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
    }
    return [round(r * 255), round(g * 255), round(b * 255)];
}
exports.HSLToRGB = HSLToRGB;
//# sourceMappingURL=hsl-to-rgb.js.map