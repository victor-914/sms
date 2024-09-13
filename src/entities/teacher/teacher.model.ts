const teacherSchema = new mongoose.Schema({
  staffId: { type: String, unique: true, required: true },
  hireDate: { type: Date, default: Date.now },
  subjectSpecialization: [{ type: String, required: true }], 
  classesAssigned: [{ type: String }], 
  qualifications: [{ degree: String, institution: String, year: Number }],
  experienceYears: { type: Number },
  salary: { type: Number, required: true },
  attendance: [
    {
      date: Date,
      status: { type: String, enum: ["Present", "Absent", "Late"] },
    },
  ],
  department: { type: String, required: true },
  mentoringGroup: [{ type: mongoose.Schema.Types.ObjectId, ref: "Student" }], 
  teacherRating: { type: Number, min: 1, max: 5, default: 3 }, 
  officeHours: { type: String }, 
  certifications: [{ type: String }], 
});

const Teacher = mongoose.model("Teacher", teacherSchema);

export default Teacher;
