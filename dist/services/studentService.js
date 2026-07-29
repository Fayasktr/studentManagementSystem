"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentService = void 0;
class StudentService {
    studentRepository;
    constructor(studentRepository) {
        this.studentRepository = studentRepository;
    }
    ;
    async createStudent(data) {
        const existingStudent = await this.studentRepository.findByEmail(data.email);
        if (existingStudent) {
            throw new Error("Student with same email already exists");
        }
        return await this.studentRepository.create(data);
    }
    async getStudentById(id) {
        const student = await this.studentRepository.findById(id);
        if (!student) {
            throw new Error("Student not found");
        }
        return student;
    }
    async updateStudent(id, data) {
        const updated = await this.studentRepository.updateById(id, data);
        if (!updated) {
            throw new Error("the user not found or faild to update");
        }
        return updated;
    }
    async deleteStudent(id) {
        const deleted = await this.studentRepository.deleteById(id);
        if (!deleted) {
            throw new Error("the student is already deleted or not found");
        }
        return deleted;
    }
}
exports.StudentService = StudentService;
