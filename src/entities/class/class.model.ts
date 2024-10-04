import mongoose, { Schema, Document } from "mongoose";

export interface IClass extends Document {
  name: string;
//   description: string;
  schoolId: string;
  abbr: string;
}

const ClassSchema: Schema = new Schema({
  name: { type: String, required: true },
  // description: { type: String },
  schoolId: { type: Schema.Types.ObjectId },
  abbr: { type: String },
});

export default mongoose.model<IClass>("Class", ClassSchema);
