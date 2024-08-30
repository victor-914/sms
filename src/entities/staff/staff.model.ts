const staffSchema = new mongoose.Schema({
    name: { type: String, required: true },
    role: { type: String, required: true },
    school: { type: mongoose.Schema.Types.ObjectId, ref: 'School', required: true },
    contact: { type: String }
  });
  
  const Staff = mongoose.model('Staff', staffSchema);
  