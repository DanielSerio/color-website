"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hexToRGB = void 0;
const is_valid_hex_1 = require("./is-valid-hex");
/**
 * Given a hex string, return an array of RGB values
 * @param {string} hex - The hexadecimal value to convert to RGB.
 * @returns {RGB} [R, G, B]
 */
function hexToRGB(hex) {
    if (!(0, is_valid_hex_1.isValidHex)(hex))
        throw new Error(`Invalid hex: ${hex}`);
    const asInt = (value) => parseInt(value, 16);
    const [_, r, g, b] = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return [asInt(r), asInt(g), asInt(b)];
}
exports.hexToRGB = hexToRGB;
//# sourceMappingURL=hex-to-rgb.js.map