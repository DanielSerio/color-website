"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const app_1 = __importDefault(require("./app"));
const lib_1 = require("./lib");
const router = (0, express_1.Router)();
router.get('/random', (_, res) => {
    const hex = lib_1.Color.randomHex();
    return res.redirect(`/color/${hex}`);
});
router.get('/:color', (req, res, next) => {
    try {
        const color = new lib_1.Color(req.params.color);
        const data = {
            title: `#${color.hex}`,
            color: color.hex,
            colorRGB: color.RGB,
            colorHSL: color.HSL,
            contrastColor: color.contrastColor,
            compliment: color.compliment.hex,
            complimentRGB: color.compliment.RGB,
            complimentHSL: color.compliment.HSL,
            complimentContrastColor: color.compliment.contrastColor
        };
        return res.render('pages/color.pug', data);
    }
    catch (e) {
        if (e.message)
            return next(e.message);
        next('Invalid color');
    }
});
app_1.default.use('/color', router);
app_1.default.get('/', (_, res) => {
    return res.render('pages/landing.pug', { title: 'Home' });
});
exports.default = app_1.default;
//# sourceMappingURL=router.js.map