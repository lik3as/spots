"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BlessedController_1 = __importDefault(require("./controllers/BlessedController"));
const HomeController_1 = __importDefault(require("./controllers/HomeController"));
const HubController_1 = __importDefault(require("./controllers/HubController"));
const AppEngine_1 = __importDefault(require("./infra/AppEngine"));
AppEngine_1.default.init([
    new HubController_1.default(), new HomeController_1.default(),
    new BlessedController_1.default()
]);
