const mongoose = require('mongoose');

const schoolSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  principal: { type: mongoose.Schema.Types.ObjectId, ref: 'Principal' },
  contactDetails: { type: String },
  establishedYear: { type: Number },
});

const School = mongoose.model('School', schoolSchema);
