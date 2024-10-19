import ClassModel from "./class.model.js";
class ClassService {
    async createClass(classData) {
        const newClass = new ClassModel(classData);
        newClass.schoolId = classData?.user?.schoolId;
        return await newClass.save();
    }
    async getAllClasses() {
        return await ClassModel.find();
    }
    async getClassById(classId) {
        return await ClassModel.findById(classId);
    }
    async updateClass(classId, updateData) {
        return await ClassModel.findByIdAndUpdate(classId, updateData, {
            new: true,
        });
    }
    async deleteClass(classId) {
        return await ClassModel.findByIdAndDelete(classId);
    }
}
export default new ClassService();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xhc3Muc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbnRpdGllcy9jbGFzcy9jbGFzcy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sVUFBc0IsTUFBTSxrQkFBa0IsQ0FBQztBQUV0RCxNQUFNLFlBQVk7SUFDVCxLQUFLLENBQUMsV0FBVyxDQUFDLFNBQWE7UUFDcEMsTUFBTSxRQUFRLEdBQUcsSUFBSSxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDM0MsUUFBUSxDQUFDLFFBQVEsR0FBRyxTQUFTLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQztRQUM5QyxPQUFPLE1BQU0sUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQy9CLENBQUM7SUFFTSxLQUFLLENBQUMsYUFBYTtRQUN4QixPQUFPLE1BQU0sVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2pDLENBQUM7SUFFTSxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQWU7UUFDdkMsT0FBTyxNQUFNLFVBQVUsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVNLEtBQUssQ0FBQyxXQUFXLENBQ3RCLE9BQWUsRUFDZixVQUEyQjtRQUUzQixPQUFPLE1BQU0sVUFBVSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sRUFBRSxVQUFVLEVBQUU7WUFDN0QsR0FBRyxFQUFFLElBQUk7U0FDVixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU0sS0FBSyxDQUFDLFdBQVcsQ0FBQyxPQUFlO1FBQ3RDLE9BQU8sTUFBTSxVQUFVLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDckQsQ0FBQztDQUNGO0FBRUQsZUFBZSxJQUFJLFlBQVksRUFBRSxDQUFDIn0=