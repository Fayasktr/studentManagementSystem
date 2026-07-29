"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentController = void 0;
class StudentController {
    studentService;
    constructor(studentService) {
        this.studentService = studentService;
    }
    ;
    async createStudent(req, res) {
        try {
            const result = await this.studentService.createStudent(req.body);
            res.json({ success: true, message: "student created successfully", data: result });
        }
        catch (error) {
            res.json({ success: false, message: error.message });
        }
    }
    async getStudentById(req, res) {
        try {
            const id = req.params.id;
            const student = await this.studentService.getStudentById(id);
            res.json({ success: true, data: student });
        }
        catch (error) {
            res.json({ success: false, message: error.message });
        }
    }
    async updateStudent(req, res) {
        try {
            const id = req.params.id;
            const updated = await this.studentService.updateStudent(id, req.body);
            res.status(200).json({ success: true, message: "Student updated", data: updated });
        }
        catch (error) {
            res.status(400).json({ success: false, message: error.message });
        }
    }
    async deleteStudent(req, res) {
        try {
            const id = req.params.id;
            await this.studentService.deleteStudent(id);
            res.status(200).json({ success: true, message: "Student deleted" });
        }
        catch (error) {
            res.status(400).json({ success: false, message: error.message });
        }
    }
}
exports.StudentController = StudentController;
