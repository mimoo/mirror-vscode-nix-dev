"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.set = void 0;
const util_1 = require("util");
const child_process_1 = require("child_process");
const dotenv_1 = require("dotenv");
;
const env = util_1.promisify(child_process_1.exec)("nix develop -c env");
const parse = ({ stdout }) => dotenv_1.parse(stdout);
const success = (result) => ({
    success: true,
    result
});
const failure = ({ error, stderr }) => ({
    success: false,
    error
});
const result = (p) => p.then(success).catch(failure);
const set = () => {
    return result(env.then(parse)).then(r => {
        if (r.success) {
            Object.entries(r.result).map(([k, v]) => process.env[k] = v);
        }
        return r;
    });
};
exports.set = set;
//# sourceMappingURL=env.js.map