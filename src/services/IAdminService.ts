import { AssignCourseDto, UpdateMarksDto } from "../dto/adminDTO";

export interface IAdminService {
    deleteStudent(id: string): Promise<any>;
    assignCourse(id: string, data: AssignCourseDto): Promise<any>;
    updateMarks(id: string, data: UpdateMarksDto): Promise<any>;
}
