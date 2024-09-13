import { ValidationError } from "../../errorSchema/ErrorSchema";
import { ISchool, School } from "./school.model";

export class SchoolService {
  // Create a new school
  async create(data: ISchool): Promise<ISchool> {
    try {
      const school = new School(data);
      return await school.save();
    } catch (error) {
      throw new ValidationError("Internal server error: ", 500);
    }
  }

  // Get all schools
  async getAll(): Promise<ISchool[]> {
    try {
      return await School.find();
    } catch (error) {
      throw new ValidationError("Internal server error: ", 500);
    }
  }

  // Get a school by ID
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

  // Update a school by ID
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

  // Delete a school by ID
  async delete(id: string): Promise<void> {
    try {
      const result = await School.findByIdAndDelete(id);
      if (!result) {
        throw new ValidationError("Internal server error: ", 500);
      }
    } catch (error) {
      throw new ValidationError("Internal server error: ", 500);
    }
  }
}
