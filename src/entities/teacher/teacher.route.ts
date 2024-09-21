// src/routes/teacher.routes.ts

import { Router } from "express";
import { TeacherController } from "./teacher.controller.js";

const router = Router();
const teacherController = new TeacherController();

router.post("/", teacherController.create.bind(teacherController));
router.get("/", teacherController.getAll.bind(teacherController));
router.get("/:id", teacherController.getById.bind(teacherController));
router.put("/:id", teacherController.update.bind(teacherController));
router.delete("/:id", teacherController.delete.bind(teacherController));

export default router;
