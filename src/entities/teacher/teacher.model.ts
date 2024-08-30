const teacherSchema = new mongoose.Schema({
    name: { type: String, required: true },
    subject: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Subject' }],
    yearsOfExperience: { type: Number },
    school: { type: mongoose.Schema.Types.ObjectId, ref: 'School', required: true }
  });
  
  const Teacher = mongoose.model('Teacher', teacherSchema);
  