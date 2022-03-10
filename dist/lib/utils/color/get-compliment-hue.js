"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getComplimentHue = void 0;
/**
 * Given a hue, return the hue of the color that is 180 degrees away on the color wheel
 * @param {number} hue - the hue of the color you want to find the compliment of.
 * @returns {number} The compliment of the hue.
 */
function getComplimentHue(hue) {
    const compliment = hue + 180;
    if (compliment >= 360)
        return compliment % 360;
    return compliment;
}
exports.getComplimentHue = getComplimentHue;
//# sourceMappingURL=get-compliment-hue.js.map