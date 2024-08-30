const timetableSchema = new mongoose.Schema({
    class: { type: mongoose.Schema.Types.ObjectId, ref: 'Class', required: true },
    day: { type: String, required: true },  // e.g., "Monday"
    subjects: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Subject' }]
  });
  
  const Timetable = mongoose.model('Timetable', timetableSchema);

  