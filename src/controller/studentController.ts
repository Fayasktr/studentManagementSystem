import { Request,Response } from "express";
import { IStudentService } from "../services/IStudentService";
import { error } from "node:console";

export class StudentController{
    constructor(private studentService: IStudentService){};
    async createStudent(req:Request,res:Response):Promise<void>{
        try{
            console.log('reach creation controller')
            const result=await this.studentService.createStudent(req.body);
            res.json({success:true,message:"student created successfully",data:result});
        }catch(error:any){
            res.json({success:false,message:error.message})
        }
    }

    async getStudentById(req:Request,res:Response):Promise<void>{
        try{
            const id=req.params.id as string;
            const student=await this.studentService.getStudentById(id);
            res.json({success:true,data:student});
        }catch(error:any){
            res.json({success:false,message:error.message});
        }
    }

    async updateStudent(req: Request, res: Response): Promise<void> {
        try {
            const id=req.params.id as string;
            const updated = await this.studentService.updateStudent(id, req.body);
            res.status(200).json({ success: true, message: "Student updated", data: updated });
        } catch (error: any) {
            res.status(400).json({ success: false, message: error.message });
        }
    }

    async deleteStudent(req: Request, res: Response): Promise<void> {
        try {
            const id=req.params.id as string;
            await this.studentService.deleteStudent(id);
            res.status(200).json({ success: true, message: "Student deleted" });
        } catch (error: any) {
            res.status(400).json({ success: false, message: error.message });
        }
    }
}