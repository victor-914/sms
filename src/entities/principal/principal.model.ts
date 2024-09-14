import mongoose from "mongoose";

const principalSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId },
  schoolId: { type: String,   ref: "School" },
  userId: { type: String, unique: true,  ref: "User" },
  staffManaged: [{ type: mongoose.Schema.Types.ObjectId, ref: "Staff" }],
  teachersManaged: [{ type: mongoose.Schema.Types.ObjectId, ref: "Teacher" }],
});

const Principal = mongoose.model("Principal", principalSchema);

export default Principal;


// how to create a principal 
// 1. register as user. role as principal with school id 
// 2. 