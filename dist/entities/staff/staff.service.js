import { ValidationError } from "../../errorSchema/ErrorSchema.js";
import Staff from "./staff.model.js";
export class StaffService {
    async create(data) {
        try {
            const staff = new Staff(data);
            return await staff.save();
        }
        catch (error) {
            throw new ValidationError("Internal server error: ", 500);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhZmYuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbnRpdGllcy9zdGFmZi9zdGFmZi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUVuRSxPQUFPLEtBQWlCLE1BQU0sa0JBQWtCLENBQUM7QUFFakQsTUFBTSxPQUFPLFlBQVk7SUFDdkIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFZO1FBQ3ZCLElBQUksQ0FBQztZQUVILE1BQU0sS0FBSyxHQUFHLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRTlCLE9BQU8sTUFBTSxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDNUIsQ0FBQztRQUFDLE9BQU8sS0FBSyxFQUFFLENBQUM7WUFDZixNQUFNLElBQUksZUFBZSxDQUFDLHlCQUF5QixFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQzVELENBQUM7SUFDSCxDQUFDO0lBRUQsS0FBSyxDQUFDLE1BQU07UUFDVixJQUFJLENBQUM7WUFDSCxPQUFPLE1BQU0sS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzVCLENBQUM7UUFBQyxPQUFPLEtBQUssRUFBRSxDQUFDO1lBQ2YsTUFBTSxJQUFJLGVBQWUsQ0FBQyx5QkFBeUIsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUM1RCxDQUFDO0lBQ0gsQ0FBQztJQUVELHdEQUF3RDtJQUN4RCxZQUFZO0lBQ1osZ0RBQWdEO0lBQ2hELHNCQUFzQjtJQUN0QixxRUFBcUU7SUFDckUsVUFBVTtJQUNWLDZCQUE2QjtJQUM3Qix3QkFBd0I7SUFDeEIsbUVBQW1FO0lBQ25FLFFBQVE7SUFDUixNQUFNO0lBRU4sOEVBQThFO0lBQzlFLFlBQVk7SUFDWix1RUFBdUU7SUFDdkUscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWiw2QkFBNkI7SUFDN0IscUVBQXFFO0lBQ3JFLFVBQVU7SUFDVixnQ0FBZ0M7SUFDaEMsd0JBQXdCO0lBQ3hCLG1FQUFtRTtJQUNuRSxRQUFRO0lBQ1IsTUFBTTtJQUVOLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBVTtRQUNyQixJQUFJLENBQUM7WUFDSCxNQUFNLE1BQU0sR0FBRyxNQUFNLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNqRCxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBQ1osTUFBTSxJQUFJLGVBQWUsQ0FBQywwQkFBMEIsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUM3RCxDQUFDO1lBRUQsTUFBTSxPQUFPLEdBQUcsU0FBUyxFQUFFLG1CQUFtQixDQUFDO1lBRS9DLE9BQU8sT0FBTyxDQUFDO1FBQ2pCLENBQUM7UUFBQyxPQUFPLEtBQUssRUFBRSxDQUFDO1lBQ2YsTUFBTSxLQUFLLENBQUM7UUFDZCxDQUFDO0lBQ0gsQ0FBQztDQUNGIn0=