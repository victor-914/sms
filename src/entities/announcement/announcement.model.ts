const announcementSchema = new mongoose.Schema({
    school: { type: mongoose.Schema.Types.ObjectId, ref: 'School', required: true },
    title: { type: String, required: true },
    message: { type: String, required: true },
    date: { type: Date, default: Date.now }
  });
  
  const Announcement = mongoose.model('Announcement', announcementSchema);
  