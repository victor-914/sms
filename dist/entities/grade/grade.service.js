import GradingFormat from "./grade.model.js";
class GradeFormatService {
    async createGradingFormat(data) {
        const gradeFormat = new GradingFormat(data);
        gradeFormat.schoolId = data.user.schoolId;
        return await gradeFormat.save();
    }
    async getGradingFormats() {
        return await GradingFormat.find();
    }
    async getGradingFormatById(id) {
        return await GradingFormat.findById(id);
    }
    async updateGradingFormat(id, scaleData) {
        return await GradingFormat.findByIdAndUpdate(id, scaleData, { new: true });
    }
    async deleteGradingFormat(id) {
        return await GradingFormat.findByIdAndDelete(id);
    }
}
export default GradeFormatService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JhZGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbnRpdGllcy9ncmFkZS9ncmFkZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sYUFBYSxNQUFNLGtCQUFrQixDQUFDO0FBRTdDLE1BQU0sa0JBQWtCO0lBQ3RCLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxJQUFTO1FBQ2pDLE1BQU0sV0FBVyxHQUFHLElBQUksYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQzNDLFdBQVcsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUE7UUFDekMsT0FBTyxNQUFNLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBRUQsS0FBSyxDQUFDLGlCQUFpQjtRQUNyQixPQUFPLE1BQU0sYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3BDLENBQUM7SUFFRCxLQUFLLENBQUMsb0JBQW9CLENBQUMsRUFBVTtRQUNuQyxPQUFPLE1BQU0sYUFBYSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQsS0FBSyxDQUFDLG1CQUFtQixDQUFDLEVBQVUsRUFBRSxTQUFjO1FBQ2xELE9BQU8sTUFBTSxhQUFhLENBQUMsaUJBQWlCLENBQUMsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQzdFLENBQUM7SUFFRCxLQUFLLENBQUMsbUJBQW1CLENBQUMsRUFBVTtRQUNsQyxPQUFPLE1BQU0sYUFBYSxDQUFDLGlCQUFpQixDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ25ELENBQUM7Q0FDRjtBQUVELGVBQWdCLGtCQUFrQixDQUFDIn0=