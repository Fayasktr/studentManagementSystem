import { StudentRepository } from "../repositories/studentRpository";
import { StudentService } from "../services/studentService";
import { StudentController } from "../controller/studentController";

const repository=new StudentRepository();
const service=new StudentService(repository);

export const studentController=new StudentController(service);
