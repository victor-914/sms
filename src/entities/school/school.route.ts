import { Router } from "express";
import { SchoolController } from "./school.controller.js";
import { authenticationMDW } from "../../middlewares/auth.middleware.js";
const router = Router();

const schoolController = new SchoolController();

router.get("/schools", authenticationMDW, schoolController.getSchools);
router.get("/schools/:id", authenticationMDW, schoolController.getSchoolById);
router.post("/schools", authenticationMDW, schoolController.createSchool);
router.put("/schools/:id", authenticationMDW, schoolController.updateSchool);
router.delete("/schools/:id", authenticationMDW, schoolController.deleteSchool);

export default router;
