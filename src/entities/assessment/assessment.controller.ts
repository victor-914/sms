import { Request, Response } from "express";
import AssessingFormatService from "./assessment.service.js";

class AssessingFormatsController {
  private assessingFormat = new AssessingFormatService();
  async create(req: Request, res: Response) {
    try {
      const scale = await this.assessingFormat.createAssessingFormat(req.body);
      res.status(201).json(scale);
    } catch (error) {
      res.status(500).json({ message: "Error creating grading scale", error });
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const scales = await this.assessingFormat.getAssessingFormats();
      res.status(200).json(scales);
    } catch (error) {
      res.status(500).json({ message: "Error fetching grading scales", error });
    }
  }

  async getById(req: Request, res: Response) {
    try {
      const scale = await this.assessingFormat.getAssessingFormatById(
        req.params.id
      );
      if (scale) {
        res.status(200).json(scale);
      } else {
        res.status(404).json({ message: "Assessing scale not found" });
      }
    } catch (error) {
      res.status(500).json({ message: "Error fetching grading scale", error });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const scale = await this.assessingFormat.updateAssessingFormat(
        req.params.id,
        req.body
      );
      if (scale) {
        res.status(200).json(scale);
      } else {
        res.status(404).json({ message: "Assessing scale not found" });
      }
    } catch (error) {
      res.status(500).json({ message: "Error updating grading scale", error });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const scale = await this.assessingFormat.deleteAssessingFormat(
        req.params.id
      );
      if (scale) {
        res.status(200).json({ message: "Assessing scale deleted" });
      } else {
        res.status(404).json({ message: "Assessing scale not found" });
      }
    } catch (error) {
      res.status(500).json({ message: "Error deleting grading scale", error });
    }
  }
}

export default AssessingFormatsController;
