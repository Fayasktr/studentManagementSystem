"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentController = void 0;
const studentRpository_1 = require("../repositories/studentRpository");
const studentService_1 = require("../services/studentService");
const studentController_1 = require("../controller/studentController");
const repository = new studentRpository_1.StudentRepository();
const service = new studentService_1.StudentService(repository);
exports.studentController = new studentController_1.StudentController(service);
