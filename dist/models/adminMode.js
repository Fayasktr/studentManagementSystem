"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userModel_1 = __importDefault(require("./userModel"));
class admin extends userModel_1.default {
    id;
    name;
    email;
    role;
    constructor(id, name, email, role) {
        super(id, name, email);
        this.id = id;
        this.name = name;
        this.email = email;
        this.role = role;
    }
    getRole() {
        return "admin";
    }
    getDashbord() {
        return `welcome ${this.name}`;
    }
}
exports.default = admin;
