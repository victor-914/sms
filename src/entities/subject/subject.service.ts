// src/services/subjectService.ts
import Subject from './subject.model.js'

export const createSubject = async (data:any) => {
  const subject = new Subject(data);
  subject.schoolId = data.user.schoolId
  await subject.save();
  return subject;
};

export const getAllSubjects = async () => {
  return await Subject.find();
};

export const getSubjectById = async (id: string) => {
  return await Subject.findById(id);
};

export const updateSubject = async (id: string, subjectData:any) => {
  return await Subject.findByIdAndUpdate(id, subjectData, { new: true });
};

export const deleteSubject = async (id: string) => {
  return await Subject.findByIdAndDelete(id);
};
