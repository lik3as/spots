"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Controller_1 = __importDefault(require("../infra/Controller"));
const path_1 = __importDefault(require("path"));
const fs_1 = require("fs");
class BlessedController extends Controller_1.default {
    constructor() {
        super();
        this.specificOperations = new Map([
            ["GET:/blessed", this.getPage]
        ]);
    }
    getPage(res) {
        const filePath = path_1.default.join(__dirname, "..", "..", "pages", "blessed.html");
        const file = (0, fs_1.readFileSync)(filePath);
        res.setHeader("Content-Type", "text/html; charset=utf8");
        res.write(file);
    }
}
exports.default = BlessedController;
