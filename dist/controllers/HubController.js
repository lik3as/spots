"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Controller_1 = __importDefault(require("../infra/Controller"));
const fs_1 = require("fs");
const path_1 = __importDefault(require("path"));
class HubController extends Controller_1.default {
    constructor() {
        super();
        this.specificOperations = new Map([
            ["GET:/hub", this.getPage]
        ]);
    }
    getPage(res) {
        const hubPage = (0, fs_1.readFileSync)(path_1.default.join(__dirname, "..", "..", "pages", "hub.html"));
        res.setHeader("Content-Type", "text/html; charset=utf8");
        res.write(hubPage);
    }
}
exports.default = HubController;
