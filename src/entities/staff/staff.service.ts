import { ValidationError } from "../../errorSchema/ErrorSchema.js";
import { sendStaffIdToken } from "../../utils/email.js";
import { School } from "../school/school.model.js";
import Staff, { IStaff } from "./staff.model.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
export class StaffService {
  async create(data: IStaff) {
    try {
      if (!data) {
        throw new ValidationError("Invalid request", 404);
      }

      const existingStaff = await Staff.findOne({ email: data.email });

      if (existingStaff) {
        throw new ValidationError("Staff already exist!", 400);
      }

      const staff = new Staff({
        email: data.email,
        schoolId: data.user.schoolId,
      });
      const school = await School.findById(data.user.schoolId);

      if (!school) {
        throw new ValidationError("Invalid School ID", 404);
      }

      const registrationToken = jwt.sign({ staff: staff._id }, "secret", {
        expiresIn: 3600,
      });

      if (!staff) {
        throw new ValidationError("Invalid Email", 404);
      }

      if (staff.email !== data.email) {
        throw new ValidationError("use email submitted to Admin", 404);
      }

      await sendStaffIdToken(
        staff.email,
        "Token for Staff registration",
        registrationToken,
        school.name
      );

      return await staff.save();
    } catch (error) {
      throw new ValidationError(error,error.status);
    }
  }

  async getAll(): Promise<IStaff[]> {
    try {
      return await Staff.find();
    } catch (error) {
      throw new ValidationError("Internal server error: ", 500);
    }
  }

  async getById(id: string) {
    try {
      const staff = await Staff.findById(id);
      if (!staff) {
        throw new ValidationError("Internal server error: ", 500);
      }
      return staff;
    } catch (error) {
      throw new ValidationError("Internal server error: ", 500);
    }
  }

  async update(id: string, data: Partial<IStaff>) {
    try {
      const updatedStaff = await Staff.findByIdAndUpdate(id, data, {
        new: true,
      });
      if (!updatedStaff) {
        throw new ValidationError("Internal server error: ", 500);
      }
      return updatedStaff;
    } catch (error) {
      throw new ValidationError("Internal server error: ", 500);
    }
  }

  async delete(id: string): Promise<String> {
    try {
      const result = await Staff.findByIdAndDelete(id);
      if (!result) {
        throw new ValidationError("staff resource not found", 404);
      }

      const message = `staff ${id} resource deleted`;

      return message;
    } catch (error) {
      throw error;
    }
  }
}
