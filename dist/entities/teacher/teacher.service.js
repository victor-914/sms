import { ValidationError } from "../../errorSchema/ErrorSchema.js";
import Teacher from "./teacher.model.js";
export class TeacherService {
    async create(data) {
        try {
            const teacher = new Teacher(data);
            return await teacher.save();
        }
        catch (error) {
            throw new ValidationError("Internal server error: ", 500);
        }
    }
    async getAll() {
        try {
            return await Teacher.find();
        }
        catch (error) {
            throw new ValidationError("Internal server error: ", 500);
        }
    }
    async getById(id) {
        try {
            const teacher = await Teacher.findById(id);
            if (!teacher) {
                throw new ValidationError("Internal server error: ", 500);
            }
            return teacher;
        }
        catch (error) {
            throw new ValidationError("Internal server error: ", 500);
        }
    }
    async update(id, data) {
        try {
            const updatedTeacher = await Teacher.findByIdAndUpdate(id, data, {
                new: true,
            });
            if (!updatedTeacher) {
                throw new ValidationError("Internal server error: ", 500);
            }
            return updatedTeacher;
        }
        catch (error) {
            throw new ValidationError("Internal server error: ", 500);
        }
    }
    async delete(id) {
        try {
            const result = await Teacher.findByIdAndDelete(id);
            if (!result) {
                throw new ValidationError("teacher resource not found", 404);
            }
            const message = `teacher ${id} resource deleted`;
            return message;
        }
        catch (error) {
            throw error;
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVhY2hlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2VudGl0aWVzL3RlYWNoZXIvdGVhY2hlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNuRSxPQUFPLE9BQXFCLE1BQU0sb0JBQW9CLENBQUM7QUFFdkQsTUFBTSxPQUFPLGNBQWM7SUFDekIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFjO1FBQ3pCLElBQUksQ0FBQztZQUNILE1BQU0sT0FBTyxHQUFHLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2xDLE9BQU8sTUFBTSxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDOUIsQ0FBQztRQUFDLE9BQU8sS0FBSyxFQUFFLENBQUM7WUFDZixNQUFNLElBQUksZUFBZSxDQUFDLHlCQUF5QixFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQzVELENBQUM7SUFDSCxDQUFDO0lBRUQsS0FBSyxDQUFDLE1BQU07UUFDVixJQUFJLENBQUM7WUFDSCxPQUFPLE1BQU0sT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzlCLENBQUM7UUFBQyxPQUFPLEtBQUssRUFBRSxDQUFDO1lBQ2YsTUFBTSxJQUFJLGVBQWUsQ0FBQyx5QkFBeUIsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUM1RCxDQUFDO0lBQ0gsQ0FBQztJQUVELEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBVTtRQUN0QixJQUFJLENBQUM7WUFDSCxNQUFNLE9BQU8sR0FBRyxNQUFNLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDM0MsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUNiLE1BQU0sSUFBSSxlQUFlLENBQUMseUJBQXlCLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDNUQsQ0FBQztZQUNELE9BQU8sT0FBTyxDQUFDO1FBQ2pCLENBQUM7UUFBQyxPQUFPLEtBQUssRUFBRSxDQUFDO1lBQ2YsTUFBTSxJQUFJLGVBQWUsQ0FBQyx5QkFBeUIsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUM1RCxDQUFDO0lBQ0gsQ0FBQztJQUVELEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBVSxFQUFFLElBQXVCO1FBQzlDLElBQUksQ0FBQztZQUNILE1BQU0sY0FBYyxHQUFHLE1BQU0sT0FBTyxDQUFDLGlCQUFpQixDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUU7Z0JBQy9ELEdBQUcsRUFBRSxJQUFJO2FBQ1YsQ0FBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUNwQixNQUFNLElBQUksZUFBZSxDQUFDLHlCQUF5QixFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQzVELENBQUM7WUFDRCxPQUFPLGNBQWMsQ0FBQztRQUN4QixDQUFDO1FBQUMsT0FBTyxLQUFLLEVBQUUsQ0FBQztZQUNmLE1BQU0sSUFBSSxlQUFlLENBQUMseUJBQXlCLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDNUQsQ0FBQztJQUNILENBQUM7SUFFRCxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQVU7UUFDckIsSUFBSSxDQUFDO1lBQ0gsTUFBTSxNQUFNLEdBQUcsTUFBTSxPQUFPLENBQUMsaUJBQWlCLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDbkQsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUNaLE1BQU0sSUFBSSxlQUFlLENBQUMsNEJBQTRCLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDL0QsQ0FBQztZQUVELE1BQU0sT0FBTyxHQUFHLFdBQVcsRUFBRSxtQkFBbUIsQ0FBQztZQUVqRCxPQUFPLE9BQU8sQ0FBQztRQUNqQixDQUFDO1FBQUMsT0FBTyxLQUFLLEVBQUUsQ0FBQztZQUNmLE1BQU0sS0FBSyxDQUFDO1FBQ2QsQ0FBQztJQUNILENBQUM7Q0FDRiJ9