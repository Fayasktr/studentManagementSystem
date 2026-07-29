import {Router} from "express";
import {studentController} from "../dependencies/studentDependencies";

const router=Router();
console.log("reach on route")
router.post("/",(req,res)=>studentController.createStudent(req,res));
router.get("/:id",(req,res)=>studentController.getStudentById(req,res));
router.put("/:id",(req,res)=>studentController.updateStudent(req,res));
router.delete("/:id",(req,res)=>studentController.deleteStudent(req,res));

export default router;

