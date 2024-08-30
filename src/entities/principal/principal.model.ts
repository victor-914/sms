const principalSchema = new mongoose.Schema({
    name: { type: String, required: true },
    school: { type: mongoose.Schema.Types.ObjectId, ref: 'School', required: true },
    experience: { type: Number, required: true }
  });
  
  const Principal = mongoose.model('Principal', principalSchema);
  