import mongoose from "mongoose";

const subjectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  schoolId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "School",
    required: true,
  },
  classId: [{ type: mongoose.Schema.Types.ObjectId, ref: "Class" }],
});

 const Subject = mongoose.model("Subject", subjectSchema);


 export default  Subject