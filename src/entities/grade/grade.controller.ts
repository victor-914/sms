import { Request, Response } from "express";
import GradeFormatService from "./grade.service";

class GradingFormatsController {
  private gradeFormatService = new GradeFormatService();
  async create(req: Request, res: Response) {
    try {
      const scale = await this.gradeFormatService.createGradingFormat(req.body);
      res.status(201).json(scale);
    } catch (error) {
      res.status(500).json({ message: "Error creating grading scale", error });
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const scales = await this.gradeFormatService.getGradingFormats();
      res.status(200).json(scales);
    } catch (error) {
      res.status(500).json({ message: "Error fetching grading scales", error });
    }
  }

  async getById(req: Request, res: Response) {
    try {
      const scale = await this.gradeFormatService.getGradingFormatById(
        req.params.id
      );
      if (scale) {
        res.status(200).json(scale);
      } else {
        res.status(404).json({ message: "Grading scale not found" });
      }
    } catch (error) {
      res.status(500).json({ message: "Error fetching grading scale", error });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const scale = await this.gradeFormatService.updateGradingFormat(
        req.params.id,
        req.body
      );
      if (scale) {
        res.status(200).json(scale);
      } else {
        res.status(404).json({ message: "Grading scale not found" });
      }
    } catch (error) {
      res.status(500).json({ message: "Error updating grading scale", error });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const scale = await this.gradeFormatService.deleteGradingFormat(req.params.id);
      if (scale) {
        res.status(200).json({ message: "Grading scale deleted" });
      } else {
        res.status(404).json({ message: "Grading scale not found" });
      }
    } catch (error) {
      res.status(500).json({ message: "Error deleting grading scale", error });
    }
  }
}

export default new GradingFormatsController();
