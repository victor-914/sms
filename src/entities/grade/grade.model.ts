const gradeSchema = new mongoose.Schema({
    name: { type: String, required: true },  // e.g., "Grade 1"
    school: { type: mongoose.Schema.Types.ObjectId, ref: 'School', required: true },
    minMarks: { type: Number, required: true },
    maxMarks: { type: Number, required: true }
  });
  
  const Grade = mongoose.model('Grade', gradeSchema);
  