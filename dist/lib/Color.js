"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Color = void 0;
const index_1 = require("./utils/color/index");
class Color {
    constructor(hex, isRoot = true) {
        this.setContrastColor = () => {
            this.contrastColor = this.HSL[2] <= 50 ? 'white' : 'black';
        };
        this.strippedHex = (hex) => hex.replace(/#/g, '');
        this.hex = this.strippedHex(hex);
        this.RGB = (0, index_1.hexToRGB)(hex);
        this.HSL = (0, index_1.RGBToHSL)(...this.RGB);
        this.setContrastColor();
        const [h, s, l] = this.HSL;
        const complimentHue = (0, index_1.getComplimentHue)(h);
        if (isRoot) {
            this.compliment = new Color((0, index_1.HSLToHex)(complimentHue, s, l), false);
        }
    }
    static randomHex() {
        const { floor, random } = Math;
        const getValue = () => floor(random() * 256);
        return (0, index_1.RGBToHex)(getValue(), getValue(), getValue());
    }
}
exports.Color = Color;
//# sourceMappingURL=Color.js.map