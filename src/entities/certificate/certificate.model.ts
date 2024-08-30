const certificateSchema = new mongoose.Schema({
    student: { type: mongoose.Schema.Types.ObjectId, ref: 'Student', required: true },
    type: { type: String, required: true },  // e.g., "Completion", "Excellence"
    issueDate: { type: Date, default: Date.now },
    description: { type: String }
  });
  
  const Certificate = mongoose.model('Certificate', certificateSchema);
  