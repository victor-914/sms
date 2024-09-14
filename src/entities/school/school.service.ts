import { ValidationError } from "../../errorSchema/ErrorSchema.js";
import { ISchool, School } from "./school.model.js";

export class SchoolService {
  async create(data: ISchool): Promise<ISchool> {
    try {
      const school = new School(data);
      return await school.save();
    } catch (error) {
      throw new ValidationError("Internal server error: ", 500);
    }
  }

  async getAll(): Promise<ISchool[]> {
    try {
      return await School.find();
    } catch (error) {
      throw new ValidationError("Internal server error: ", 500);
    }
  }

  async getById(id: string): Promise<ISchool | null> {
    try {
      const school = await School.findById(id);
      if (!school) {
        throw new ValidationError("Internal server error: ", 500);
      }
      return school;
    } catch (error) {
      throw new ValidationError("Internal server error: ", 500);
    }
  }

  async update(id: string, data: Partial<ISchool>): Promise<ISchool | null> {
    try {
      const updatedSchool = await School.findByIdAndUpdate(id, data, {
        new: true,
      });
      if (!updatedSchool) {
        throw new ValidationError("Internal server error: ", 500);
      }
      return updatedSchool;
    } catch (error) {
      throw new ValidationError("Internal server error: ", 500);
    }
  }

  async delete(id: string): Promise<String> {
    try {
      const result = await School.findByIdAndDelete(id);
      if (!result) {
        throw new ValidationError("school resource not found", 404);
      }

      const message = `school ${id} resource deleted`;

      return message;
    } catch (error) {
      throw error;
    }
  }
}
