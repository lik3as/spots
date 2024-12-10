"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Controller_1 = __importDefault(require("../infra/Controller"));
const path_1 = __importDefault(require("path"));
const fs_1 = require("fs");
class HomeController extends Controller_1.default {
    constructor() {
        super();
        this.specificOperations = new Map([
            ["GET:/minha-casa", this.getPage]
        ]);
    }
    getPage(res) {
        const homeHtmlPath = path_1.default.join(__dirname, "..", "..", "pages", "home.html");
        const homeHtml = (0, fs_1.readFileSync)(homeHtmlPath);
        res.setHeader("Content-Type", "text/html; charset=utf8");
        res.write(homeHtml);
    }
}
exports.default = HomeController;
