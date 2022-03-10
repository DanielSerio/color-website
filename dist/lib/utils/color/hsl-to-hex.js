"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HSLToHex = void 0;
const hsl_to_rgb_1 = require("./hsl-to-rgb");
const rgb_to_hex_1 = require("./rgb-to-hex");
/**
 * Convert a hue, saturation, and lightness to a hex color
 * @param {number} h - hue, a number between 0 and 360
 * @param {number} s - saturation, a value between 0 and 1
 * @param {number} l - lightness, a number between 0 and 1
 * @returns {string} A string of 6 characters representing a hex color.
 */
function HSLToHex(h, s, l) {
    const [r, g, b] = (0, hsl_to_rgb_1.HSLToRGB)(h, s, l);
    return (0, rgb_to_hex_1.RGBToHex)(r, g, b);
}
exports.HSLToHex = HSLToHex;
//# sourceMappingURL=hsl-to-hex.js.map