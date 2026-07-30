import { Request, Response } from "express";
import { IAdminService } from "../services/IAdminService";

export class AdminController {
    constructor(private adminService: IAdminService) {}

    async deleteStudent(req: Request, res: Response): Promise<void> {
        try {
            const id = req.params.id as string;
            await this.adminService.deleteStudent(id);
            res.status(200).json({ success: true, message: "Student deleted by Admin" });
        } catch (error: any) {
            res.status(400).json({ success: false, message: error.message });
        }
    }

    async assignCourse(req: Request, res: Response): Promise<void> {
        try {
            const id = req.params.id as string;
            const updated = await this.adminService.assignCourse(id, req.body);
            res.status(200).json({ success: true, message: "Course assigned successfully", data: updated });
        } catch (error: any) {
            res.status(400).json({ success: false, message: error.message });
        }
    }

    async updateMarks(req: Request, res: Response): Promise<void> {
        try {
            const id = req.params.id as string;
            const updated = await this.adminService.updateMarks(id, req.body);
            res.status(200).json({ success: true, message: "Marks updated successfully", data: updated });
        } catch (error: any) {
            res.status(400).json({ success: false, message: error.message });
        }
    }
}
