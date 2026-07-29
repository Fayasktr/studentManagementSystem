import { CreateStudentDto, updateStudentDto } from "../dto/studentDTO";
import { IStudentRepository } from "../interfaces/IStudentRepository";
import { IStudentService } from "./IStudentService";


export class StudentService implements IStudentService {
    constructor(private studentRepository:IStudentRepository){};

    async createStudent(data:CreateStudentDto):Promise<CreateStudentDto>{
        const existingStudent = await this.studentRepository.findByEmail(data.email);
        if(existingStudent){
            throw new Error("Student with same email already exists");
        }
        return await this.studentRepository.create(data);
    }

    async getStudentById(id:string):Promise<CreateStudentDto|null>{
        const student=await this.studentRepository.findById(id);
        if(!student){
            throw new Error("Student not found");
        }
        return student;
    }

    async updateStudent(id: string, data: updateStudentDto): Promise<CreateStudentDto | null> {
        const updated= await this.studentRepository.updateById(id,data);
        if(!updated){
            throw new Error("the user not found or faild to update");
        }
        return updated;
    }
    async deleteStudent(id: string):Promise<CreateStudentDto|null>{
        const deleted=await this.studentRepository.deleteById(id);
        if(!deleted){
            throw new Error("the student is already deleted or not found"); 
        }
        return deleted;
    }
}