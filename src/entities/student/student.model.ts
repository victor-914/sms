import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  currentClassId: [{ type: mongoose.Schema.Types.ObjectId }],
  section: { type: String },
  subject: { type: mongoose.Schema.Types.ObjectId, ref: "Subject" },
  parent: { type: mongoose.Schema.Types.ObjectId, ref: "Parent" },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  feeId: { type: mongoose.Schema.Types.ObjectId, ref: "Fee", required: true },
  admissionDate: { type: Date, default: Date.now },
  attendance: [
    {
      date: Date,
      status: { type: String, enum: ["Present", "Absent", "Late"] },
    },
  ],
  marks: [{ subject: String, score: Number }],
  extraCurricularActivities: [{ type: String }],
  healthIssues: [{ type: String }],
  transportMode: { type: String, enum: ["Bus", "Walk"], default: "Walk" },
  performanceLevel: {
    type: String,
    enum: ["Excellent", "Good", "Average", "Below Average"],
    default: "Average",
  },
  enrollmentStatus: {
    type: String,
    enum: ["Enrolled", "Withdrawn", "Graduated"],
    default: "Enrolled",
  },
});

const Student = mongoose.model("Student", studentSchema);

export default Student;
