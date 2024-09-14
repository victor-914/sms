import { ValidationError } from "../../errorSchema/ErrorSchema.js";
import { School } from "./school.model.js";
export class SchoolService {
    async create(data) {
        try {
            const school = new School(data);
            return await school.save();
        }
        catch (error) {
            throw new ValidationError("Internal server error: ", 500);
        }
    }
    async getAll() {
        try {
            return await School.find();
        }
        catch (error) {
            throw new ValidationError("Internal server error: ", 500);
        }
    }
    async getById(id) {
        try {
            const school = await School.findById(id);
            if (!school) {
                throw new ValidationError("Internal server error: ", 500);
            }
            return school;
        }
        catch (error) {
            throw new ValidationError("Internal server error: ", 500);
        }
    }
    async update(id, data) {
        try {
            const updatedSchool = await School.findByIdAndUpdate(id, data, {
                new: true,
            });
            if (!updatedSchool) {
                throw new ValidationError("Internal server error: ", 500);
            }
            return updatedSchool;
        }
        catch (error) {
            throw new ValidationError("Internal server error: ", 500);
        }
    }
    async delete(id) {
        try {
            const result = await School.findByIdAndDelete(id);
            if (!result) {
                throw new ValidationError("school resource not found", 404);
            }
            const message = `school ${id} resource deleted`;
            return message;
        }
        catch (error) {
            throw error;
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nob29sLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZW50aXRpZXMvc2Nob29sL3NjaG9vbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNuRSxPQUFPLEVBQVcsTUFBTSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFcEQsTUFBTSxPQUFPLGFBQWE7SUFDeEIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFhO1FBQ3hCLElBQUksQ0FBQztZQUNILE1BQU0sTUFBTSxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2hDLE9BQU8sTUFBTSxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDN0IsQ0FBQztRQUFDLE9BQU8sS0FBSyxFQUFFLENBQUM7WUFDZixNQUFNLElBQUksZUFBZSxDQUFDLHlCQUF5QixFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQzVELENBQUM7SUFDSCxDQUFDO0lBRUQsS0FBSyxDQUFDLE1BQU07UUFDVixJQUFJLENBQUM7WUFDSCxPQUFPLE1BQU0sTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzdCLENBQUM7UUFBQyxPQUFPLEtBQUssRUFBRSxDQUFDO1lBQ2YsTUFBTSxJQUFJLGVBQWUsQ0FBQyx5QkFBeUIsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUM1RCxDQUFDO0lBQ0gsQ0FBQztJQUVELEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBVTtRQUN0QixJQUFJLENBQUM7WUFDSCxNQUFNLE1BQU0sR0FBRyxNQUFNLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDekMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUNaLE1BQU0sSUFBSSxlQUFlLENBQUMseUJBQXlCLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDNUQsQ0FBQztZQUNELE9BQU8sTUFBTSxDQUFDO1FBQ2hCLENBQUM7UUFBQyxPQUFPLEtBQUssRUFBRSxDQUFDO1lBQ2YsTUFBTSxJQUFJLGVBQWUsQ0FBQyx5QkFBeUIsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUM1RCxDQUFDO0lBQ0gsQ0FBQztJQUVELEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBVSxFQUFFLElBQXNCO1FBQzdDLElBQUksQ0FBQztZQUNILE1BQU0sYUFBYSxHQUFHLE1BQU0sTUFBTSxDQUFDLGlCQUFpQixDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUU7Z0JBQzdELEdBQUcsRUFBRSxJQUFJO2FBQ1YsQ0FBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO2dCQUNuQixNQUFNLElBQUksZUFBZSxDQUFDLHlCQUF5QixFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQzVELENBQUM7WUFDRCxPQUFPLGFBQWEsQ0FBQztRQUN2QixDQUFDO1FBQUMsT0FBTyxLQUFLLEVBQUUsQ0FBQztZQUNmLE1BQU0sSUFBSSxlQUFlLENBQUMseUJBQXlCLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDNUQsQ0FBQztJQUNILENBQUM7SUFFRCxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQVU7UUFDckIsSUFBSSxDQUFDO1lBQ0gsTUFBTSxNQUFNLEdBQUcsTUFBTSxNQUFNLENBQUMsaUJBQWlCLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDbEQsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUNaLE1BQU0sSUFBSSxlQUFlLENBQUMsMkJBQTJCLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDOUQsQ0FBQztZQUVELE1BQU0sT0FBTyxHQUFHLFVBQVUsRUFBRSxtQkFBbUIsQ0FBQztZQUVoRCxPQUFPLE9BQU8sQ0FBQztRQUNqQixDQUFDO1FBQUMsT0FBTyxLQUFLLEVBQUUsQ0FBQztZQUNmLE1BQU0sS0FBSyxDQUFDO1FBQ2QsQ0FBQztJQUNILENBQUM7Q0FDRiJ9