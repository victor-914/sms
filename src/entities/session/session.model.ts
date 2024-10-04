import mongoose, { Document, Schema } from "mongoose";

export interface ITerm extends Document {
  name: string;
  startDate: Date;
  endDate: Date;
  isActive: boolean;
  schoolId: string;
}

export interface ISession extends Document {
  session: ITerm[];
  schoolId:string;
  isActive:boolean;
}

const Term: Schema = new Schema({
  name: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
});

const SessionSchema: Schema = new Schema({
  terms: [Term],
  schoolId: { type: Schema.Types.ObjectId },
  isActive: { type: Boolean, default: false },
});

export const Session = mongoose.model<ISession>("Session", SessionSchema);
