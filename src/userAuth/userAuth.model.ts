import  { Schema, model } from "mongoose";

export enum UserRole {
  Student = 'STUDENT',
  Teacher = 'TEACHER',
  Principal = 'PRINCIPAL',
}


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
  role: UserRole;
  schoolId: string;
  resetToken: string | null;
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
    role: {
      type: String,
      enum: Object.values(UserRole),
      required: true,
    },
    schoolId: {
      type: String,
      required: true,
    },
    resetToken:{
      type:String,
    }
  },
  {
    timestamps: true,
  }
);

const User = model<IUser>("User", userSchema);

export default User;
