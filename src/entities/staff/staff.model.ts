import mongoose, { Schema, Types } from "mongoose";

export enum StaffTypeEnum {
  acad = "ACADEMIC",
  nacad = "NON-ACADEMIC",
}

interface StaffAttendance {
  date: Date;
  status: "Present" | "Absent" | "Late";
}

interface StaffPerformanceReview {
  date: Date;
  remarks: string;
  rating: 1 | 2 | 3 | 4 | 5;
}

export interface IStaff {
  roleId: Types.ObjectId;
  userId: Types.ObjectId;
  gender: "Male" | "Female";
  schoolId: Types.ObjectId;
  dateOfBirth: Date;
  hireDate?: Date;
  department: string;
  salary?: number;
  staffType: StaffTypeEnum;
  attendance: StaffAttendance[];
  onLeave?: boolean;
  leaveDuration?: number;
  workExperience?: number;
  benefits?: string[];
  performanceReview: StaffPerformanceReview[];
}

const staffSchema = new mongoose.Schema({
  roleId: { type: Schema.Types.ObjectId, refPath: "Role" },
  userId: { type: Schema.Types.ObjectId, ref: "User" },
  gender: { type: String, enum: ["Male", "Female"] },
  schoolId: { type: Schema.Types.ObjectId, ref: "School" },
  dateOfBirth: { type: Date, },
  hireDate: { type: Date, default: Date.now },
  department: { type: String, },
  salary: { type: Number },
  staffType: {
    type: String,
    enum: Object.values(StaffTypeEnum),
  },
  attendance: [
    {
      date: Date,
      status: { type: String, enum: ["Present", "Absent", "Late"] },
    },
  ],
  onLeave: { type: Boolean, default: false },
  leaveDuration: { type: Number },
  workExperience: { type: Number },
  benefits: [{ type: String }],
  performanceReview: [{ date: Date, remarks: String }],
});

const Staff = mongoose.model("Staff", staffSchema);

export default Staff;
