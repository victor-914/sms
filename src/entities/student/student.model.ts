const studentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    class: { type: mongoose.Schema.Types.ObjectId, ref: 'Class' },
    school: { type: mongoose.Schema.Types.ObjectId, ref: 'School', required: true }
  });
  
  const Student = mongoose.model('Student', studentSchema);
  