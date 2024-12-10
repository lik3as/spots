"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const fs_1 = require("fs");
class Controller {
    constructor() {
        this.areSpecificOperationsLoaded = false;
        this._operations = new Map();
        this._operations.set("GET:/assets/styles/", Controller.getCssAssets);
        this._operations.set("GET:/assets/images/", Controller.getImageAssets);
    }
    static getCssAssets(req, res) {
        const assetName = req.url.split("%")[1];
        const appCssPath = path_1.default.join(__dirname, "..", "..", "assets", "styles", assetName + ".css");
        const appCss = (0, fs_1.readFileSync)(appCssPath);
        res.setHeader("Content-Type", "text/css; charset=utf8");
        res.write(appCss);
    }
    static getImageAssets(req, res) {
        const assetName = req.url.split("%")[1];
        const appImage = (0, fs_1.readFileSync)(path_1.default.join(__dirname, "..", "..", "assets", "images", assetName + ".webp"));
        res.setHeader("Content-Type", "image/webp;");
        res.write(appImage);
    }
    get operations() {
        if (this.areSpecificOperationsLoaded) {
            return this._operations;
        }
        if (this.specificOperations.size == 0) {
            throw new Error("No specific operations where placed in the map.");
        }
        this.specificOperations.forEach((handler, key) => this._operations.set(key, handler));
        this.areSpecificOperationsLoaded = true;
        return this._operations;
    }
}
exports.default = Controller;
