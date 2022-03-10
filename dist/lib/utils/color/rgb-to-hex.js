"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RGBToHex = void 0;
/**
 * Convert RGB color values to hexadecimal
 * @param {number} r - red value (0-255)
 * @param {number} g - green value (0-255)
 * @param {number} b - blue value (0-255)
 * @returns {string} hex
 */
function RGBToHex(r, g, b) {
    return ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}
exports.RGBToHex = RGBToHex;
//# sourceMappingURL=rgb-to-hex.js.map