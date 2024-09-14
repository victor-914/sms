import { Schema, model } from "mongoose";

export enum UserRole {
  Student = "student",
  Teacher = "teacher",
  Principal = "principal",
}


export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  verified: boolean;
  refreshToken?: string;
  accessToken: string;
  verificationToken?: string;
  phoneNumber: string;
  schoolId: string;
  resetToken: string | null;
  staffId: any ;
  roleId: string;
  role: UserRole;
  gender: { type: String, enum: ['Male', 'Female'], required: true },
  address: {
    street: String,
    city: String,
    state: String,
    postalCode: String,
    country: String
  },

}

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    verified: {
      type: Boolean,
      default: false,
    },
    refreshToken: {
      type: String,
    },
    accessToken: {
      type: String,
    },
    verificationToken: {
      type: String,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    roleId: {
      type: Schema.Types.ObjectId,
      refPath: "role",
      required: true,
    },
    staffId: {
      type: Schema.Types.ObjectId,
      refPath: "role",
      required: true,
    },
    role: {
      type: String,
      enum: Object.values(UserRole),
      required: true,
    },
    schoolId: {
      type: Schema.Types.ObjectId,
      ref:"School",
      required: true,
    },
    resetToken: {
      type: String,
    },
    address: {
      street: String,
      city: String,
      state: String,
      postalCode: String,
      country: String
    },
  },
  {
    timestamps: true,
  }
);

const User = model<IUser>("User", userSchema);

export default User;
