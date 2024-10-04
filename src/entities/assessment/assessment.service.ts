import AssessingFormat from "./assessment.model.js";

class AssessingFormatService {
  async createAssessingFormat(data: any) {
    const gradeFormat = new AssessingFormat(data)
    gradeFormat.schoolId = data.user.schoolId
    return await gradeFormat.save();
  }

  async getAssessingFormats() {
    return await AssessingFormat.find();
  }

  async getAssessingFormatById(id: string) {
    return await AssessingFormat.findById(id);
  }

  async updateAssessingFormat(id: string, scaleData: any) {
    return await AssessingFormat.findByIdAndUpdate(id, scaleData, { new: true });
  }

  async deleteAssessingFormat(id: string) {
    return await AssessingFormat.findByIdAndDelete(id);
  }
}

export default AssessingFormatService;
