const parentSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    contactNumber: { type: String, required: true },
    address: {
      street: String,
      city: String,
      state: String,
      postalCode: String,
      country: String
    },
    occupation: { type: String },
    students: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Student' }], // List of children linked to the parent
    emergencyContact: {
      name: String,
      relation: String,
      contactNumber: String
    },
    parentRating: { type: Number, min: 1, max: 5, default: 3 }, // Rating by the school for involvement
    preferredContactMethod: { type: String, enum: ['Email', 'Phone', 'In-Person'], default: 'Email' },
    membershipType: { type: String, enum: ['Regular', 'VIP'], default: 'Regular' }, // Membership level for school events
    volunteerActivities: [{ type: String }], // List of volunteer activities they are involved in
    communicationPreferences: {
      newsletter: { type: Boolean, default: true },
      notifications: { type: Boolean, default: true }
    },
  });
  
  const Parent = mongoose.model('Parent', parentSchema);
  

  export default Parent