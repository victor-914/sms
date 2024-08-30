import mongoose from "mongoose";

const classSchema = new mongoose.Schema({
    name: { type: String, required: true },
    school: { type: mongoose.Schema.Types.ObjectId, ref: 'School', required: true },
    grade: { type: mongoose.Schema.Types.ObjectId, ref: 'Grade', required: true },
    students: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Student' }],
    teachers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Teacher' }]
  });
  
  const Class = mongoose.model('Class', classSchema);
  