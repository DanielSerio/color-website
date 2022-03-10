"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidHex = void 0;
/**
 * It checks if the string is a valid hex color.
 * @param {string} hex - the hex value to be validated
 * @returns {boolean} A boolean value.
 */
function isValidHex(hex) {
    const re = /^(#?)([A-F0-9]{2}){3}$/i;
    return re.test(hex);
}
exports.isValidHex = isValidHex;
//# sourceMappingURL=is-valid-hex.js.map