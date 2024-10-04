import mongoose, { Schema, Document } from "mongoose";

interface IGrade extends Document {
  name: string;
  symbol: string;
  minNumber: number;
  maxNumber: number;
}

const Grade = new Schema({
  name: {
    type: String,
  },
  symbol: {
    type: String,
  },
  minNumber: {
    type: Number,
  },
  maxNumber: {
    type: Number,
  },
});

interface IGradeFormat {
 schoolId:string;
  grade: IGrade[];
  level:string;
}
// Grading Scale Schema
const GradeFormatSchema: Schema = new Schema({
  schoolId: { type: Schema.Types.ObjectId },
  grade: [Grade],
  level: { type: String }
});

const GradingFormat = mongoose.model<IGradeFormat>(
  "GradingFormat",
  GradeFormatSchema
);
export default GradingFormat;
