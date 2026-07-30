import { StudentRepository } from "../repositories/studentRpository";
import { AdminService } from "../services/adminService";
import { AdminController } from "../controller/adminController";

const repository = new StudentRepository();
const service = new AdminService(repository);

export const adminController = new AdminController(service);
