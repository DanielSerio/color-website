"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
const router_1 = __importDefault(require("./router"));
const PORT = 4000;
const reload = require('reload');
const server = (0, http_1.createServer)(router_1.default);
function onError(e) {
    const error = e;
    console.table({ message: error.message, name: error.name });
    process.exit(1);
}
function onSuccess() {
    server.listen(PORT, () => console.log(`http://127.0.0.1:${PORT}/color/random`));
}
reload(router_1.default)
    .then(onSuccess)
    .catch(onError);
//# sourceMappingURL=index.js.map