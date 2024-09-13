import mongoose, { model } from "mongoose";
export interface ISchool {
  name: string;
  owner: string;
  ownerContact: {
    phone: string;
    email: string;
  };
  abbreviation: string;
  type: "Public" | "Private" | "Charter" | "International";
  address: {
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
    province: string;
  };
  companyRegistrationId: string;
  phoneNumber: string;
  email: string;
  classes: string[];
  sessions: string[];
  terms: string[];
  gradeFormat: string;
  assessmentFormat: string;
  staff: string[];
  teachers: string[];
  students: string[];
  principals: string[];
}

// Define the School Schema
const schoolSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    owner: {
      type: String,
      required: true,
      trim: true,
    },
    ownerContact: {
      phone: {
        type: String,
        required: true,
        trim: true,
      },
      email: {
        type: String,
        required: true,
        trim: true,
        match: [/^\S+@\S+\.\S+$/, "Please use a valid email address."],
      },
    },
    abbreviation: {
      type: String,
      required: true,
      trim: true,
      maxlength: 10,
    },
    type: {
      type: String,
      enum: ["Public", "Private", "Charter", "International"],
      required: true,
    },
    address: {
      street: {
        type: String,
        required: true,
        trim: true,
      },
      city: {
        type: String,
        required: true,
        trim: true,
      },
      state: {
        type: String,
        required: true,
        trim: true,
      },
      postalCode: {
        type: String,
        required: true,
        trim: true,
      },
      country: {
        type: String,
        required: true,
        trim: true,
      },
      province: {
        type: String,
        required: true,
        trim: true,
      },
    },
    companyRegistrationId: {
      type: String,
      required: true,
      trim: true,
    },
    phoneNumber: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, "Please use a valid email address."],
    },
    country: {
      type: String,
      required: true,
      trim: true,
    },
    classes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Class",
      },
    ],
    sessions: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Session",
      },
    ],
    terms: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Term",
      },
    ],
    gradeFormat: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "GradeFormat",
    },
    assessmentFormat: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "AssessmentFormat",
    },
    staff: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Staff",
      },
    ],
    teachers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Teacher",
      },
    ],
    students: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student",
      },
    ],
    principals: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Principal",
      },
    ],
  },
  {
    timestamps: true,
  }
);

// Export the School model
export const School = model<ISchool>("School", schoolSchema);
