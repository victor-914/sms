import AssessingFormat from "./assessment.model.js";
class AssessingFormatService {
    async createAssessingFormat(data) {
        const gradeFormat = new AssessingFormat(data);
        gradeFormat.schoolId = data.user.schoolId;
        return await gradeFormat.save();
    }
    async getAssessingFormats() {
        return await AssessingFormat.find();
    }
    async getAssessingFormatById(id) {
        return await AssessingFormat.findById(id);
    }
    async updateAssessingFormat(id, scaleData) {
        return await AssessingFormat.findByIdAndUpdate(id, scaleData, { new: true });
    }
    async deleteAssessingFormat(id) {
        return await AssessingFormat.findByIdAndDelete(id);
    }
}
export default AssessingFormatService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXNzbWVudC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2VudGl0aWVzL2Fzc2Vzc21lbnQvYXNzZXNzbWVudC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sZUFBZSxNQUFNLHVCQUF1QixDQUFDO0FBRXBELE1BQU0sc0JBQXNCO0lBQzFCLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxJQUFTO1FBQ25DLE1BQU0sV0FBVyxHQUFHLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQzdDLFdBQVcsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUE7UUFDekMsT0FBTyxNQUFNLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBRUQsS0FBSyxDQUFDLG1CQUFtQjtRQUN2QixPQUFPLE1BQU0sZUFBZSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3RDLENBQUM7SUFFRCxLQUFLLENBQUMsc0JBQXNCLENBQUMsRUFBVTtRQUNyQyxPQUFPLE1BQU0sZUFBZSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQsS0FBSyxDQUFDLHFCQUFxQixDQUFDLEVBQVUsRUFBRSxTQUFjO1FBQ3BELE9BQU8sTUFBTSxlQUFlLENBQUMsaUJBQWlCLENBQUMsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQy9FLENBQUM7SUFFRCxLQUFLLENBQUMscUJBQXFCLENBQUMsRUFBVTtRQUNwQyxPQUFPLE1BQU0sZUFBZSxDQUFDLGlCQUFpQixDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3JELENBQUM7Q0FDRjtBQUVELGVBQWUsc0JBQXNCLENBQUMifQ==