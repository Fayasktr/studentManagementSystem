import { Router } from "express";
import { adminController } from "../dependencies/adminDependencies";

const router = Router();

router.delete("/delete/:id", (req, res) => adminController.deleteStudent(req, res));
router.post("/assign/:id", (req, res) => adminController.assignCourse(req, res));
router.put("/marks/:id", (req, res) => adminController.updateMarks(req, res));

export default router;
