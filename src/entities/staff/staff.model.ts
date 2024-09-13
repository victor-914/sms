import { Schema } from "mongoose";

const staffSchema = new mongoose.Schema({
  roleId:{ type: Schema.Types.ObjectId, ref: "Role" },
  dateOfBirth: { type: Date, required: true },
  gender: { type: String, enum: ["Male", "Female"], required: true },
  hireDate: { type: Date, default: Date.now },
  department: { type: String, required: true },
  salary: { type: Number, required: true },
  // attendance: [{ date: Date, status: { type: String, enum: ['Present', 'Absent', 'Late'] } }],
  shiftTimings: { type: String, required: true },
  emergencyContact: {
    name: String,
    relation: String,
    contactNumber: String,
  },
  staffType:{ type: String, enum: ["ACADEMIC", "NON-ACADEMIC"], required: true },
  workExperience: { type: Number, required: true },
  benefits: [{ type: String }],
  performanceReview: [{ date: Date, remarks: String }],
});

const Staff = mongoose.model("Staff", staffSchema);


export default Staff
