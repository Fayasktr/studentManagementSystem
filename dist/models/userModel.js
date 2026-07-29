"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    id;
    name;
    email;
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
    getRole() {
        return "User";
    }
    getDashbord() {
        return "welcome user";
    }
}
exports.default = User;
