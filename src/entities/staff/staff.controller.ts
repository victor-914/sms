import { Request, Response } from "express";
import { StaffService } from "./staff.service.js";

export class StaffController {
  private staffService = new StaffService();

  getStaffs = async (req: Request, res: Response) => {
    try {
      const staffs = await this.staffService.getAll();
      res.status(200).json(staffs);
    } catch (error) {
      if (error.status && error.message) {
        return res.status(error.status).json({ error: error.message });
      }
      return res.status(500).json("Internal server error");
    }
  };

  getStaffById = async (req: Request, res: Response) => {
    try {
      const staff = await this.staffService.getById(req.params.id);
      res.status(200).json(staff);
    } catch (error) {
      if (error.status && error.message) {
        return res.status(error.status).json({ error: error.message });
      }
      return res.status(500).json("Internal server error");
    }
  };

  createStaff = async (req: Request, res: Response) => {
    try {
      const staff = await this.staffService.create(req.body);

      res.status(200).json(staff);
    } catch (error) {
      console.log( error)
      if (error.status && error.message) {
        return res.status(error.status).json({ error: error.message });
      }
      return res.status(500).json("Internal server error");
    }
  };

  updateStaff = async (req: Request, res: Response) => {
    try {
      const updatedStaff = await this.staffService.update(
        req.params.id,
        req.body
      );
      res.status(200).json(updatedStaff);
    } catch (error) {
      if (error.status && error.message) {
        return res.status(error.status).json({ error: error.message });
      }
      return res.status(500).json("Internal server error");
    }
  };

  deleteStaff = async (req: Request, res: Response) => {
    try {
      const message = await this.staffService.delete(req.params.id);
      res.status(200).send(message);
    } catch (error) {
      if (error.status && error.message) {
        return res.status(error.status).json({ error: error.message });
      }
      return res.status(500).json("Internal server error");
    }
  };
}
