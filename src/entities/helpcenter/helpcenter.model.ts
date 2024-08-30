const helpCenterSchema = new mongoose.Schema({
    school: { type: mongoose.Schema.Types.ObjectId, ref: 'School', required: true },
    query: { type: String, required: true },
    response: { type: String },
    status: { type: String, enum: ['Open', 'Closed'], default: 'Open' },
    dateCreated: { type: Date, default: Date.now }
  });
  
  const HelpCenter = mongoose.model('HelpCenter', helpCenterSchema);
  