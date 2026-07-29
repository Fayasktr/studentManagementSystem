"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const app_1 = __importDefault(require("./app"));
const DBconnection_1 = __importDefault(require("./config/DBconnection"));
(0, DBconnection_1.default)().then(() => {
    app_1.default.listen(process.env.PORT, () => {
        console.log("http://localhost:4444");
    });
}).catch((error) => {
    console.log(error);
});
