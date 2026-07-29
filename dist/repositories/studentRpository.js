"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentRepository = void 0;
const baseRepository_1 = require("./baseRepository");
const studentSchema_1 = __importDefault(require("../schemas/studentSchema"));
class StudentRepository extends baseRepository_1.BaseRepository {
    constructor() {
        super(studentSchema_1.default);
    }
    async findByEmail(email) {
        return await studentSchema_1.default.findOne({ email });
    }
}
exports.StudentRepository = StudentRepository;
