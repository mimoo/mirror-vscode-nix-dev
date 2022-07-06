"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = void 0;
const env_1 = require("./env");
function activate(context) {
    env_1.set().then(console.debug);
}
exports.activate = activate;
//# sourceMappingURL=extension.js.map