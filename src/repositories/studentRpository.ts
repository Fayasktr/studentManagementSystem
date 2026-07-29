
import { BaseRepository } from "./baseRepository";
import {IStudentRepository} from "../interfaces/IStudentRepository";
import studentModel from "../schemas/studentSchema";

export class StudentRepository extends BaseRepository <any> implements IStudentRepository{
    constructor(){
        super(studentModel)
    }
    async findByEmail(email:string):Promise<any|null>{
        return await studentModel.findOne({email});
    }
}
