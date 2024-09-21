import { ValidationError } from "../../errorSchema/ErrorSchema.js";
import Teacher, { ITeacher } from "./teacher.model.js";

export class TeacherService {
  async create(data: ITeacher) {
    try {
      const teacher = new Teacher(data);
      return await teacher.save();
    } catch (error) {
      throw new ValidationError("Internal server error: ", 500);
    }
  }

  async getAll(): Promise<ITeacher[]> {
    try {
      return await Teacher.find();
    } catch (error) {
      throw new ValidationError("Internal server error: ", 500);
    }
  }

  async getById(id: string) {
    try {
      const teacher = await Teacher.findById(id);
      if (!teacher) {
        throw new ValidationError("Internal server error: ", 500);
      }
      return teacher;
    } catch (error) {
      throw new ValidationError("Internal server error: ", 500);
    }
  }

  async update(id: string, data: Partial<ITeacher>) {
    try {
      const updatedTeacher = await Teacher.findByIdAndUpdate(id, data, {
        new: true,
      });
      if (!updatedTeacher) {
        throw new ValidationError("Internal server error: ", 500);
      }
      return updatedTeacher;
    } catch (error) {
      throw new ValidationError("Internal server error: ", 500);
    }
  }

  async delete(id: string): Promise<String> {
    try {
      const result = await Teacher.findByIdAndDelete(id);
      if (!result) {
        throw new ValidationError("teacher resource not found", 404);
      }

      const message = `teacher ${id} resource deleted`;

      return message;
    } catch (error) {
      throw error;
    }
  }
}
