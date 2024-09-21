import { ValidationError } from "../../errorSchema/ErrorSchema.js";
import { sendStaffIdToken } from "../../utils/email.js";
import { School } from "../school/school.model.js";
import Staff from "./staff.model.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
export class StaffService {
    async create(data) {
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
            await sendStaffIdToken(staff.email, "Token for Staff registration", registrationToken, school.name);
            return await staff.save();
        }
        catch (error) {
            throw new ValidationError(error, error.status);
        }
    }
    async getAll() {
        try {
            return await Staff.find();
        }
        catch (error) {
            throw new ValidationError("Internal server error: ", 500);
        }
    }
    async getById(id) {
        try {
            const staff = await Staff.findById(id);
            if (!staff) {
                throw new ValidationError("Internal server error: ", 500);
            }
            return staff;
        }
        catch (error) {
            throw new ValidationError("Internal server error: ", 500);
        }
    }
    async update(id, data) {
        try {
            const updatedStaff = await Staff.findByIdAndUpdate(id, data, {
                new: true,
            });
            if (!updatedStaff) {
                throw new ValidationError("Internal server error: ", 500);
            }
            return updatedStaff;
        }
        catch (error) {
            throw new ValidationError("Internal server error: ", 500);
        }
    }
    async delete(id) {
        try {
            const result = await Staff.findByIdAndDelete(id);
            if (!result) {
                throw new ValidationError("staff resource not found", 404);
            }
            const message = `staff ${id} resource deleted`;
            return message;
        }
        catch (error) {
            throw error;
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhZmYuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbnRpdGllcy9zdGFmZi9zdGFmZi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNuRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDbkQsT0FBTyxLQUFpQixNQUFNLGtCQUFrQixDQUFDO0FBQ2pELE9BQU8sR0FBRyxNQUFNLGNBQWMsQ0FBQztBQUMvQixPQUFPLE1BQU0sTUFBTSxRQUFRLENBQUM7QUFDNUIsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQ2hCLE1BQU0sT0FBTyxZQUFZO0lBQ3ZCLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBWTtRQUN2QixJQUFJLENBQUM7WUFDSCxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ1YsTUFBTSxJQUFJLGVBQWUsQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUNwRCxDQUFDO1lBRUQsTUFBTSxhQUFhLEdBQUcsTUFBTSxLQUFLLENBQUMsT0FBTyxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO1lBRWpFLElBQUksYUFBYSxFQUFFLENBQUM7Z0JBQ2xCLE1BQU0sSUFBSSxlQUFlLENBQUMsc0JBQXNCLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDekQsQ0FBQztZQUVELE1BQU0sS0FBSyxHQUFHLElBQUksS0FBSyxDQUFDO2dCQUN0QixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7Z0JBQ2pCLFFBQVEsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVE7YUFDN0IsQ0FBQyxDQUFDO1lBQ0gsTUFBTSxNQUFNLEdBQUcsTUFBTSxNQUFNLENBQUMsUUFB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