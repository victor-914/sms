import { ValidationError } from "../../errorSchema/ErrorSchema.js";
import Staff from "./staff.model.js";
export class StaffService {
    //   async create(data: IStaff): Promise<IStaff> {
    //     try {
    //       const staff = new Staff(data);
    //     //   return await staff.save();
    //     } catch (error) {
    //       throw new ValidationError("Internal server error: ", 500);
    //     }
    //   }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhZmYuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbnRpdGllcy9zdGFmZi9zdGFmZi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNuRSxPQUFPLEtBQWlCLE1BQU0sa0JBQWtCLENBQUM7QUFFakQsTUFBTSxPQUFPLFlBQVk7SUFDekIsa0RBQWtEO0lBQ2xELFlBQVk7SUFDWix1Q0FBdUM7SUFDdkMsc0NBQXNDO0lBQ3RDLHdCQUF3QjtJQUN4QixtRUFBbUU7SUFDbkUsUUFBUTtJQUNSLE1BQU07SUFFSixLQUFLLENBQUMsTUFBTTtRQUNWLElBQUksQ0FBQztZQUNILE9BQU8sTUFBTSxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDNUIsQ0FBQztRQUFDLE9BQU8sS0FBSyxFQUFFLENBQUM7WUFDZixNQUFNLElBQUksZUFBZSxDQUFDLHlCQUF5QixFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQzVELENBQUM7SUFDSCxDQUFDO0lBRUgsd0RBQXdEO0lBQ3hELFlBQVk7SUFDWixnREFBZ0Q7SUFDaEQsc0JBQXNCO0lBQ3RCLHFFQUFxRTtJQUNyRSxVQUFVO0lBQ1YsNkJBQTZCO0lBQzdCLHdCQUF3QjtJQUN4QixtRUFBbUU7SUFDbkUsUUFBUTtJQUNSLE1BQU07SUFFTiw4RUFBOEU7SUFDOUUsWUFBWTtJQUNaLHVFQUF1RTtJQUN2RSxxQkFBcUI7SUFDckIsWUFBWTtJQUNaLDZCQUE2QjtJQUM3QixxRUFBcUU7SUFDckUsVUFBVTtJQUNWLGdDQUFnQztJQUNoQyx3QkFBd0I7SUFDeEIsbUVBQW1FO0lBQ25FLFFBQVE7SUFDUixNQUFNO0lBRUosS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFVO1FBQ3JCLElBQUksQ0FBQztZQUNILE1BQU0sTUFBTSxHQUFHLE1BQU0sS0FBSyxDQUFDLGlCQUFpQixDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2pELElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFDWixNQUFNLElBQUksZUFBZSxDQUFDLDBCQUEwQixFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQzdELENBQUM7WUFFRCxNQUFNLE9BQU8sR0FBRyxTQUFTLEVBQUUsbUJBQW1CLENBQUM7WUFFL0MsT0FBTyxPQUFPLENBQUM7UUFDakIsQ0FBQztRQUFDLE9BQU8sS0FBSyxFQUFFLENBQUM7WUFDZixNQUFNLEtBQUssQ0FBQztRQUNkLENBQUM7SUFDSCxDQUFDO0NBQ0YifQ==