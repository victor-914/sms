import mongoose, { Schema } from "mongoose";
// 1.  route create staff, type "teacher" 
// 1b. send email token to "teacher/staff email"
// 2. route = register as user = validate for verification token 
const teacherSchema = new mongoose.Schema({
    staffId: {
        type: Schema.Types.ObjectId,
        ref: "Staff",
        required: true,
    },
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
    // qualifications: [{ degree: String, institution: String, year: Number }],
    experience: { type: Number },
    // salary: { type: Number, required: true },
    // department: { type: String, required: true },
    // mentoringGroup: [{ type: mongoose.Schema.Types.ObjectId, ref: "Student" }],
    // teacherRating: { type: Number, min: 1, max: 5, default: 3 },
    // officeHours: { type: String },
    // certifications: [{ type: String }],
});
const Teacher = mongoose.model("Teacher", teacherSchema);
export default Teacher;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVhY2hlci5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbnRpdGllcy90ZWFjaGVyL3RlYWNoZXIubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxRQUFRLEVBQUUsRUFBRSxNQUFNLEVBQVMsTUFBTSxVQUFVLENBQUM7QUFVbkQsMENBQTBDO0FBQzFDLGdEQUFnRDtBQUNoRCxpRUFBaUU7QUFFakUsTUFBTSxhQUFhLEdBQUcsSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDO0lBQ3hDLE9BQU8sRUFBQztRQUNOLElBQUksRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVE7UUFDM0IsR0FBRyxFQUFFLE9BQU87UUFDWixRQUFRLEVBQUUsSUFBSTtLQUNmO0lBQ0QsTUFBTSxFQUFFO1FBQ04sSUFBSSxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUTtRQUMzQixHQUFHLEVBQUUsTUFBTTtRQUNYLFFBQVEsRUFBRSxJQUFJO0tBQ2Y7SUFDRCxRQUFRLEVBQUU7UUFDUixJQUFJLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRO1FBQzNCLEdBQUcsRUFBRSxRQUFRO1FBQ2IsUUFBUSxFQUFFLElBQUk7S0FDZjtJQUNELFFBQVEsRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUU7SUFDM0MsNkRBQTZEO0lBQzdELGdEQUFnRDtJQUNoRCwyRUFBMkU7SUFDM0UsVUFBVSxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRTtJQUM1Qiw0Q0FBNEM7SUFDNUMsZ0RBQWdEO0lBQ2hELDhFQUE4RTtJQUM5RSwrREFBK0Q7SUFDL0QsaUNBQWlDO0lBQ2pDLHNDQUFzQztDQUN2QyxDQUFDLENBQUM7QUFFSCxNQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxhQUFhLENBQUMsQ0FBQztBQUV6RCxlQUFlLE9BQU8sQ0FBQyJ9