import ClassModel, { IClass } from "./class.model.js";

class ClassService {
  public async createClass(classData:any) {
    const newClass = new ClassModel(classData);
    newClass.schoolId = classData?.user?.schoolId;
    return await newClass.save();
  }

  public async getAllClasses(): Promise<IClass[]> {
    return await ClassModel.find();
  }

  public async getClassById(classId: string): Promise<IClass | null> {
    return await ClassModel.findById(classId);
  }

  public async updateClass(
    classId: string,
    updateData: Partial<IClass>
  ): Promise<IClass | null> {
    return await ClassModel.findByIdAndUpdate(classId, updateData, {
      new: true,
    });
  }

  public async deleteClass(classId: string): Promise<IClass | null> {
    return await ClassModel.findByIdAndDelete(classId);
  }
}

export default new ClassService();
