import { IStudentRepository } from "../interfaces/IStudentRepository";
import { IAdminService } from "./IAdminService";
import { AssignCourseDto, UpdateMarksDto } from "../dto/adminDTO";

export class AdminService implements IAdminService {
    constructor(private studentRepository: IStudentRepository) { }

    async deleteStudent(id: string): Promise<any> {
        const deleted = await this.studentRepository.deleteById(id);
        if (!deleted) {
            throw new Error("Student not found or deletion failed");
        }
        return deleted;
    }
    async assignCourse(id: string, data: AssignCourseDto): Promise<any> {
        const student = await this.studentRepository.findById(id);
        if (!student) {
            throw new Error("Student not found");
        }
        return await this.studentRepository.updateById(id, { course: data.course });
    }

    async updateMarks(id: string, data: UpdateMarksDto): Promise<any> {
        const student = await this.studentRepository.findById(id);
        if (!student) {
            throw new Error("Student not found");
        }
        return await this.studentRepository.updateById(id, { marks: data.marks });
    }
}
