import { Schema, model } from "mongoose";

// role schema
export enum UserRole {
  Student = "STUDENT",
  Teacher = "TEACHER",
  Principal = "PRINCIPAL",
}

//  role interface
interface IRole {
  _id: Schema.Types.ObjectId;
  schoolId: { type: Schema.Types.ObjectId; ref: "School" };
  userId: { type: Schema.Types.ObjectId; ref: "User" };
  roleType: UserRole;
  staffId:{ type: Schema.Types.ObjectId; ref: "Staff" }
}

//  role schema
const roleSchema = new Schema({
  _id: { type: Schema.Types.ObjectId },
  schoolId: { type: Schema.Types.ObjectId, ref: "School" },
  userId: { type: Schema.Types.ObjectId, ref: "User" },
  role: {
    type: String,
    enum: Object.values(UserRole),
    required: true,
  },
  staffId:{ type: Schema.Types.ObjectId, ref: "Staff" }
});

 const Role = model<IRole>("Role", roleSchema);

 export default Role
