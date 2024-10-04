import GradingFormat from "./grade.model.js";

class GradeFormatService {
  async createGradingFormat(data: any) {
    const gradeFormat = new GradingFormat(data)
    gradeFormat.schoolId = data.user.schoolId
    return await gradeFormat.save();
  }

  async getGradingFormats() {
    return await GradingFormat.find();
  }

  async getGradingFormatById(id: string) {
    return await GradingFormat.findById(id);
  }

  async updateGradingFormat(id: string, scaleData: any) {
    return await GradingFormat.findByIdAndUpdate(id, scaleData, { new: true });
  }

  async deleteGradingFormat(id: string) {
    return await GradingFormat.findByIdAndDelete(id);
  }
}

export default  GradeFormatService;
