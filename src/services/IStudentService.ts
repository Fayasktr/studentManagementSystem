import { CreateStudentDto, updateStudentDto } from "../dto/studentDTO";

export interface IStudentService {
    createStudent(data: CreateStudentDto): Promise<CreateStudentDto>
    updateStudent(id: string, data: updateStudentDto): Promise<CreateStudentDto | null>
    deleteStudent(id: string): Promise<CreateStudentDto | null>
    getStudentById(id: string): Promise<CreateStudentDto | null>
}

