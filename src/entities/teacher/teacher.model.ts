import mongoose, { Schema } from "mongoose";

const teacherSchema = new mongoose.Schema({
  staffId: { type: String, unique: true, required: true },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  schoolId: {
    type: Schema.Types.ObjectId,
    ref: "School",
    required: true,
  },
  hireDate: { type: Date, default: Date.now },
  // subjectSpecialization: [{ type: String, required: true }],
  // classesAssigned: [{ type: Schema.ObjectId }],
  qualifications: [{ degree: String, institution: String, year: Number }],
  experienceYears: { type: Number },
  // salary: { type: Number, required: true },
  // department: { type: String, required: true },
  // mentoringGroup: [{ type: mongoose.Schema.Types.ObjectId, ref: "Student" }],
  // teacherRating: { type: Number, min: 1, max: 5, default: 3 },
  // officeHours: { type: String },
  // certifications: [{ type: String }],
});

const Teacher = mongoose.model("Teacher", teacherSchema);

export default Teacher;
