import mongoose, { Schema, Document } from "mongoose";

interface IAssess extends Document {
  name: string;
  minNumber:number;
  maxNumber:number;
}

const Assess = new Schema({
  name: {
    type: String,
  },
  minNumber: {
    type: Number,
  },
  maxNumber: {
    type: Number,
  },
});

interface IAssessFormat {
 schoolId:string;
  grade: IAssess[];
}

// Grading Scale Schema
const AssessFormatSchema: Schema = new Schema({
  schoolId: { type: Schema.Types.ObjectId },
  assessment: [Assess],
});

const AssessingFormat = mongoose.model<IAssessFormat>(
  "AssessingFormat",
  AssessFormatSchema
);
export default AssessingFormat;
