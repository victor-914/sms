import { Schema, model } from "mongoose";
// role schema
export var UserRole;
(function (UserRole) {
    UserRole["Student"] = "STUDENT";
    UserRole["Teacher"] = "TEACHER";
    UserRole["Principal"] = "PRINCIPAL";
})(UserRole || (UserRole = {}));
//  role schema
const roleSchema = new Schema({
    _id: { type: Schema.Types.ObjectId },
    schoolId: { type: Schema.Types.ObjectId, ref: "School" },
    userId: { type: Schema.Types.ObjectId, ref: "User" },
    role: {
        type: String,
        enum: Object.values(UserRole),
        required: true,
    },
    staffId: { type: Schema.Types.ObjectId, ref: "Staff" }
});
const Role = model("Role", roleSchema);
export default Role;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9sZS5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9nbG9iYWwvcm9sZS5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUV6QyxjQUFjO0FBQ2QsTUFBTSxDQUFOLElBQVksUUFJWDtBQUpELFdBQVksUUFBUTtJQUNsQiwrQkFBbUIsQ0FBQTtJQUNuQiwrQkFBbUIsQ0FBQTtJQUNuQixtQ0FBdUIsQ0FBQTtBQUN6QixDQUFDLEVBSlcsUUFBUSxLQUFSLFFBQVEsUUFJbkI7QUFXRCxlQUFlO0FBQ2YsTUFBTSxVQUFVLEdBQUcsSUFBSSxNQUFNLENBQUM7SUFDNUIsR0FBRyxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFO0lBQ3BDLFFBQVEsRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFO0lBQ3hELE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFO0lBQ3BELElBQUksRUFBRTtRQUNKLElBQUksRUFBRSxNQUFNO1FBQ1osSUFBSSxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDO1FBQzdCLFFBQVEsRUFBRSxJQUFJO0tBQ2Y7SUFDRCxPQUFPLEVBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRTtDQUN0RCxDQUFDLENBQUM7QUFFRixNQUFNLElBQUksR0FBRyxLQUFLLENBQVEsTUFBTSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0FBRTlDLGVBQWUsSUFBSSxDQUFBIn0=