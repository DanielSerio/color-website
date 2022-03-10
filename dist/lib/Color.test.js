"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Color_1 = require("./Color");
describe('Color', () => {
    it('should have a contrast color', () => {
        const black = new Color_1.Color('#000000');
        const white = new Color_1.Color('#ffffff');
        expect(black.contrastColor).toBe('white');
        expect(white.contrastColor).toBe('black');
    });
    it('should have a compliment color', () => {
        const red = new Color_1.Color('#ff0000');
        expect(red.compliment.HSL[0]).toBe(180);
    });
    it('should throw if invalid hex', () => {
        expect(() => new Color_1.Color('sbcsbc')).toThrow();
    });
    it('should be able to generate random hex colors', () => {
        const randHex = Color_1.Color.randomHex();
        expect(randHex).toBeTruthy();
        expect(randHex.length).toBe(6);
    });
    it('should have a compliment color that does not, itself, have a compliment color. (prevent endless loop)', () => {
        const randHex = Color_1.Color.randomHex();
        const color = new Color_1.Color(randHex);
        console.log(color);
        expect(color.compliment).toBeTruthy();
        expect(color.compliment.compliment).toBeFalsy();
    });
});
//# sourceMappingURL=Color.test.js.map