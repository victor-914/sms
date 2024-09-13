import { Router } from "express";
import { SchoolController } from "./school.controller";

const router = Router();

const schoolConroller = new SchoolController();

router.get("/schools", schoolConroller.getSchools);
router.get("/schools/:id", schoolConroller.getSchoolById);
router.post("/schools/create", schoolConroller.createSchool);
router.put("/schools/update/:id", schoolConroller.updateSchool);
router.delete("schools/del/:id", schoolConroller.deleteSchool);

export default router;
