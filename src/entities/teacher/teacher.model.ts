import mongoose, { Schema, Types } from "mongoose";

export interface ITeacher {
  staffId:Types.ObjectId,
  userId:Types.ObjectId,
  schoolId:Types.ObjectId,
  hireDate?:string,
  experience?:string | null,
}

// 1.  route create staff, type "teacher" 
// 1b. send email token to "teacher/staff email"
// 2. route = register as user = validate for verification token 

const teacherSchema = new mongoose.Schema({
  staffId:{
    type: Schema.Types.ObjectId,
    ref: "Staff",
    required: true,
  },
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
  // qualifications: [{ degree: String, institution: String, year: Number }],
  experience: { type: Number },
  // salary: { type: Number, required: true },
  // department: { type: String, required: true },
  // mentoringGroup: [{ type: mongoose.Schema.Types.ObjectId, ref: "Student" }],
  // teacherRating: { type: Number, min: 1, max: 5, default: 3 },
  // officeHours: { type: String },
  // certifications: [{ type: String }],
});

const Teacher = mongoose.model("Teacher", teacherSchema);

export default Teacher;
