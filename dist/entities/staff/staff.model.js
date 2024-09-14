import mongoose, { Schema } from "mongoose";
const staffSchema = new mongoose.Schema({
    roleId: { type: Schema.Types.ObjectId, refPath: "Role" },
    userId: { type: Schema.Types.ObjectId, ref: "User" },
    schoolId: { type: Schema.Types.ObjectId, ref: "SchoolId" },
    // dateOfBirth: { type: Date, required: true },
    // gender: { type: String, enum: ["Male", "Female"], required: true },
    hireDate: { type: Date, default: Date.now },
    // department: { type: String, required: true },
    // salary: { type: Number, required: true },
    // attendance: [{ date: Date, status: { type: String, enum: ['Present', 'Absent', 'Late'] } }],
    // shiftTimings: { type: String, required: true },
    emergencyContact: {
        name: String,
        relation: String,
        contactNumber: String,
    },
    // staffType:{ type: String, enum: ["ACADEMIC", "NON-ACADEMIC"], required: true },
    // workExperience: { type: Number, required: true },
    benefits: [{ type: String }],
    performanceReview: [{ date: Date, remarks: String }],
});
const Staff = mongoose.model("Staff", staffSchema);
export default Staff;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhZmYubW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZW50aXRpZXMvc3RhZmYvc3RhZmYubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxRQUFRLEVBQUcsRUFBRSxNQUFNLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFFN0MsTUFBTSxXQUFXLEdBQUcsSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDO0lBQ3RDLE1BQU0sRUFBQyxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFO0lBQ3ZELE1BQU0sRUFBQyxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFO0lBQ25ELFFBQVEsRUFBQyxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFO0lBRXpELCtDQUErQztJQUMvQyxzRUFBc0U7SUFDdEUsUUFBUSxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRTtJQUMzQyxnREFBZ0Q7SUFDaEQsNENBQTRDO0lBQzVDLCtGQUErRjtJQUMvRixrREFBa0Q7SUFDbEQsZ0JBQWdCLEVBQUU7UUFDaEIsSUFBSSxFQUFFLE1BQU07UUFDWixRQUFRLEVBQUUsTUFBTTtRQUNoQixhQUFhLEVBQUUsTUFBTTtLQUN0QjtJQUNELGtGQUFrRjtJQUNsRixvREFBb0Q7SUFDcEQsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLENBQUM7SUFDNUIsaUJBQWlCLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxDQUFDO0NBQ3JELENBQUMsQ0FBQztBQUVILE1BQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0FBR25ELGVBQWUsS0FBSyxDQUFBIn0=