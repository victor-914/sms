import mongoose, { Schema } from "mongoose";
const teacherSchema = new mongoose.Schema({
    staffId: { type: String, unique: true, required: true },
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    schoolId: {
        type: Schema.Types.ObjectId,
        ref: "School",
        required: true,
    },
    hireDate: { type: Date, default: Date.now },
    // subjectSpecialization: [{ type: String, required: true }],
    // classesAssigned: [{ type: Schema.ObjectId }],
    qualifications: [{ degree: String, institution: String, year: Number }],
    experienceYears: { type: Number },
    // salary: { type: Number, required: true },
    // department: { type: String, required: true },
    // mentoringGroup: [{ type: mongoose.Schema.Types.ObjectId, ref: "Student" }],
    // teacherRating: { type: Number, min: 1, max: 5, default: 3 },
    // officeHours: { type: String },
    // certifications: [{ type: String }],
});
const Teacher = mongoose.model("Teacher", teacherSchema);
export default Teacher;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVhY2hlci5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbnRpdGllcy90ZWFjaGVyL3RlYWNoZXIubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxRQUFRLEVBQUUsRUFBRSxNQUFNLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFFNUMsTUFBTSxhQUFhLEdBQUcsSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDO0lBQ3hDLE9BQU8sRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFO0lBQ3ZELE1BQU0sRUFBRTtRQUNOLElBQUksRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVE7UUFDM0IsR0FBRyxFQUFFLE1BQU07UUFDWCxRQUFRLEVBQUUsSUFBSTtLQUNmO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsSUFBSSxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUTtRQUMzQixHQUFHLEVBQUUsUUFBUTtRQUNiLFFBQVEsRUFBRSxJQUFJO0tBQ2Y7SUFDRCxRQUFRLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFO0lBQzNDLDZEQUE2RDtJQUM3RCxnREFBZ0Q7SUFDaEQsY0FBYyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxDQUFDO0lBQ3ZFLGVBQWUsRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUU7SUFDakMsNENBQTRDO0lBQzVDLGdEQUFnRDtJQUNoRCw4RUFBOEU7SUFDOUUsK0RBQStEO0lBQy9ELGlDQUFpQztJQUNqQyxzQ0FBc0M7Q0FDdkMsQ0FBQyxDQUFDO0FBRUgsTUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsYUFBYSxDQUFDLENBQUM7QUFFekQsZUFBZSxPQUFPLENBQUMifQ==