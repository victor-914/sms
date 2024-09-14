import mongoose from "mongoose";


const parentSchema = new mongoose.Schema({
    userId: [{ type: mongoose.Schema.Types.ObjectId, ref: 'UserId' }],
    schoolId: [{ type: mongoose.Schema.Types.ObjectId, ref: 'SchoolId' }],
    roleId: [{ type: mongoose.Schema.Types.ObjectId, refPath: 'Role' }],
   
    occupation: { type: String },
    wards: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Student' }], // List of children linked to the parent
    emergencyContact: {
      name: String,
      relation: String,
      contactNumber: String
    },
  
  });
  
  const Parent = mongoose.model('Parent', parentSchema);
  

  export default Parent