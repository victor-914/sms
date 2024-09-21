// src/controllers/teacher.controller.ts

import { Request, Response } from "express";
import { TeacherService } from "./teacher.service.js";

const teacherService = new TeacherService();

export class TeacherController {
  async create(req: Request, res: Response) {
    try {
      const teacher = await teacherService.create(req.body);
      res.status(201).json(teacher);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const teachers = await teacherService.getAll();
      res.status(200).json(teachers);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async getById(req: Request, res: Response) {
    try {
      const teacher = await teacherService.getById(req.params.id);
      if (!teacher) {
        return res.status(404).json({ message: "Teacher not found" });
      }
      res.status(200).json(teacher);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const teacher = await teacherService.update(req.params.id, req.body);
      if (!teacher) {
        return res.status(404).json({ message: "Teacher not found" });
      }
      res.status(200).json(teacher);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const teacher = await teacherService.delete(req.params.id);
      if (!teacher) {
        return res.status(404).json({ message: "Teacher not found" });
      }
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}
