import { Router } from "express";
import { SchoolController } from "./school.controller";

const router = Router();

const schoolController = new SchoolController();

router.get("/schools", schoolController.getSchools);
router.get("/schools/:id", schoolController.getSchoolById);
router.post("/schools", schoolController.createSchool);
router.put("/schools/:id", schoolController.updateSchool);
router.delete("/schools/:id", schoolController.deleteSchool);

export default router;
