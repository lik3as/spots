"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
class AppEngine {
    constructor(controllers) {
        this.server = http_1.default.createServer((req, res) => {
            for (let i = 0; i < controllers.length; i++) {
                const controller = controllers[i];
                const formatedUrl = req.url.split("%")[0];
                const handler = controller.operations.get(`GET:${formatedUrl}`);
                if (handler) {
                    handler.length == 2
                        ? handler(req, res)
                        : handler(res);
                    break;
                }
            }
            res.end();
        });
        this.server.listen(8080, () => {
            console.log("listening");
        });
    }
    static init(controllers) {
        if (AppEngine.instance) {
            console.log("Already initialized.");
            return AppEngine.instance;
        }
        return new AppEngine(controllers);
    }
}
exports.default = AppEngine;
