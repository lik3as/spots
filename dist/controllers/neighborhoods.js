"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const controller_1 = __importDefault(require("../infra/controller"));
const fs_1 = require("fs");
const path_1 = __importDefault(require("path"));
class Neighborhooods extends controller_1.default {
    constructor() {
        super(new Map([
            ["GET:/centro", Neighborhooods.getCentro],
        ]));
    }
    static getCentro(req, res) {
        const hubPage = (0, fs_1.readFileSync)(path_1.default.join(__dirname, "..", "..", "pages", "hub.html"));
        res.write(hubPage);
    }
}
exports.default = Neighborhooods;
