import { ValidationError } from "../../errorSchema/ErrorSchema.js";
import { createUserAndRole } from "../../helperFunctions/role.helper.js";
import Staff, { IStaff } from "./staff.model.js";

export class StaffService {
  async create(data: IStaff) {
    try {
        
      const staff = new Staff(data);

      return await staff.save();
    } catch (error) {
      throw new ValidationError("Internal server error: ", 500);
    }
  }

  async getAll(): Promise<IStaff[]> {
    try {
      return await Staff.find();
    } catch (error) {
      throw new ValidationError("Internal server error: ", 500);
    }
  }

  //   async getById(id: string): Promise<IStaff | null> {
  //     try {
  //       const staff = await Staff.findById(id);
  //       if (!staff) {
  //         throw new ValidationError("Internal server error: ", 500);
  //       }
  //       return staff || null
  //     } catch (error) {
  //       throw new ValidationError("Internal server error: ", 500);
  //     }
  //   }

  //   async update(id: string, data: Partial<IStaff>): Promise<IStaff | null> {
  //     try {
  //       const updatedStaff = await Staff.findByIdAndUpdate(id, data, {
  //         new: true,
  //       });
  //       if (!updatedStaff) {
  //         throw new ValidationError("Internal server error: ", 500);
  //       }
  //     //   return updatedStaff;
  //     } catch (error) {
  //       throw new ValidationError("Internal server error: ", 500);
  //     }
  //   }

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
