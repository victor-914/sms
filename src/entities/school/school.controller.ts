import { Request, Response } from "express";
import { SchoolService } from "./school.service";
import { ValidationError } from "../../errorSchema/ErrorSchema";

export class SchoolController {
  private schoolService = new SchoolService();

  getSchools = async (req: Request, res: Response) => {
    try {
      const schools = await this.schoolService.getAll();
      res.status(200).json(schools);
    } catch (error) {
      if (error instanceof ValidationError) {
        res.status(400).json({ message: error.message });
      } else {
        res.status(500).json({ message: "Internal server error" });
      }
    }
  };

  getSchoolById = async (req: Request, res: Response) => {
    try {
      const school = await this.schoolService.getById(req.params.id);
      res.status(200).json(school);
    } catch (error) {
      if (error instanceof ValidationError) {
        res.status(404).json({ message: error.message });
      } else {
        res.status(500).json({ message: "Internal server error" });
      }
    }
  };

  createSchool = async (req: Request, res: Response) => {
    try {
      const school = await this.schoolService.create(req.body);
      res.status(201).json(school);
    } catch (error) {
      if (error instanceof ValidationError) {
        res.status(400).json({ message: error.message });
      } else {
        res.status(500).json({ message: "Internal server error" });
      }
    }
  };

  updateSchool = async (req: Request, res: Response) => {
    try {
      const updatedSchool = await this.schoolService.update(
        req.params.id,
        req.body
      );
      res.status(200).json(updatedSchool);
    } catch (error) {
      if (error instanceof ValidationError) {
        res.status(404).json({ message: error.message });
      } else {
        res.status(500).json({ message: "Internal server error" });
      }
    }
  };

  deleteSchool = async (req: Request, res: Response) => {
    try {
      await this.schoolService.delete(req.params.id);
      res.status(204).send();
    } catch (error) {
      if (error instanceof ValidationError) {
        res.status(404).json({ message: error.message });
      } else {
        res.status(500).json({ message: "Internal server error" });
      }
    }
  };
}
