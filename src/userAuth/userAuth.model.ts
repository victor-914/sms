import  { Schema, model } from "mongoose";

export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  verified: boolean;
  refreshToken?: string;
  accessToken:string;
  verificationToken?: string;
  phoneNumber: string;
  roleID: string;
  roleName: string;
  schoolID: string;
}

const userSchema = new Schema(
  {
    _id: {
      type: String,
      required: true,
    },
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
      unique: true,
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
    roleID: {
      type: String,
      required: true,
    },
    roleName: {
      type: String,
      required: true,
    },
    schoolID: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const User = model<IUser>("User", userSchema);

export default User;
