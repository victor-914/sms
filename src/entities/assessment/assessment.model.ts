const assessmentSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    class: { type: mongoose.Schema.Types.ObjectId, ref: 'Class', required: true },
    subject: { type: mongoose.Schema.Types.ObjectId, ref: 'Subject', required: true },
    date: { type: Date, required: true }
  });
  
const Assessment = mongoose.model('Assessment', assessmentSchema);
  