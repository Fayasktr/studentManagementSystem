"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userModel_1 = __importDefault(require("./userModel"));
class student extends userModel_1.default {
    id;
    name;
    email;
    age;
    course;
    marks;
    constructor(id, name, email, age, course, marks) {
        super(id, name, email);
        this.id = id;
        this.name = name;
        this.email = email;
        this.age = age;
        this.course = course;
        this.marks = marks;
    }
    getRole() {
        return "student";
    }
    getDashbord() {
        return "welcome student";
    }
}
exports.default = student;
