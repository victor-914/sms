import { Schema, model } from "mongoose";
export var UserRole;
(function (UserRole) {
    UserRole["Student"] = "student";
    UserRole["Teacher"] = "teacher";
    UserRole["Principal"] = "principal";
})(UserRole || (UserRole = {}));
const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    verified: {
        type: Boolean,
        default: false,
    },
    refreshToken: {
        type: String,
    },
    accessToken: {
        type: String,
    },
    verificationToken: {
        type: String,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    roleId: {
        type: Schema.Types.ObjectId,
        refPath: "role",
        required: true,
    },
    staffId: {
        type: Schema.Types.ObjectId,
        refPath: "role",
        required: true,
    },
    role: {
        type: String,
        enum: Object.values(UserRole),
        required: true,
    },
    schoolId: {
        type: Schema.Types.ObjectId,
        ref: "School",
        required: true,
    },
    resetToken: {
        type: String,
    },
    address: {
        street: String,
        city: String,
        state: String,
        postalCode: String,
        country: String
    },
}, {
    timestamps: true,
});
const User = model("User", userSchema);
export default User;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlckF1dGgubW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZW50aXRpZXMvdXNlckF1dGgvdXNlckF1dGgubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFFekMsTUFBTSxDQUFOLElBQVksUUFJWDtBQUpELFdBQVksUUFBUTtJQUNsQiwrQkFBbUIsQ0FBQTtJQUNuQiwrQkFBbUIsQ0FBQTtJQUNuQixtQ0FBdUIsQ0FBQTtBQUN6QixDQUFDLEVBSlcsUUFBUSxLQUFSLFFBQVEsUUFJbkI7QUE4QkQsTUFBTSxVQUFVLEdBQUcsSUFBSSxNQUFNLENBQzNCO0lBQ0UsU0FBUyxFQUFFO1FBQ1QsSUFBSSxFQUFFLE1BQU07UUFDWixRQUFRLEVBQUUsSUFBSTtLQUNmO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsSUFBSSxFQUFFLE1BQU07UUFDWixRQUFRLEVBQUUsSUFBSTtLQUNmO0lBQ0QsS0FBSyxFQUFFO1FBQ0wsSUFBSSxFQUFFLE1BQU07UUFDWixRQUFRLEVBQUUsSUFBSTtLQUNmO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsSUFBSSxFQUFFLE1BQU07UUFDWixRQUFRLEVBQUUsSUFBSTtLQUNmO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsSUFBSSxFQUFFLE9BQU87UUFDYixPQUFPLEVBQUUsS0FBSztLQUNmO0lBQ0QsWUFBWSxFQUFFO1FBQ1osSUFBSSxFQUFFLE1BQU07S0FDYjtJQUNELFdBQVcsRUFBRTtRQUNYLElBQUksRUFBRSxNQUFNO0tBQ2I7SUFDRCxpQkFBaUIsRUFBRTtRQUNqQixJQUFJLEVBQUUsTUFBTTtLQUNiO0lBQ0QsV0FBVyxFQUFFO1FBQ1gsSUFBSSxFQUFFLE1BQU07UUFDWixRQUFRLEVBQUUsSUFBSTtLQUNmO0lBQ0QsTUFBTSxFQUFFO1FBQ04sSUFBSSxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUTtRQUMzQixPQUFPLEVBQUUsTUFBTTtRQUNmLFFBQVEsRUFBRSxJQUFJO0tBQ2Y7SUFDRCxPQUFPLEVBQUU7UUFDUCxJQUFJLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRO1FBQzNCLE9BQU8sRUFBRSxNQUFNO1FBQ2YsUUFBUSxFQUFFLElBQUk7S0FDZjtJQUNELElBQUksRUFBRTtRQUNKLElBQUksRUFBRSxNQUFNO1FBQ1osSUFBSSxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDO1FBQzdCLFFBQVEsRUFBRSxJQUFJO0tBQ2Y7SUFDRCxRQUFRLEVBQUU7UUFDUixJQUFJLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRO1FBQzNCLEdBQUcsRUFBQyxRQUFRO1FBQ1osUUFBUSxFQUFFLElBQUk7S0FDZjtJQUNELFVBQVUsRUFBRTtRQUNWLElBQUksRUFBRSxNQUFNO0tBQ2I7SUFDRCxPQUFPLEVBQUU7UUFDUCxNQUFNLEVBQUUsTUFBTTtRQUNkLElBQUksRUFBRSxNQUFNO1FBQ1osS0FBSyxFQUFFLE1BQU07UUFDYixVQUFVLEVBQUUsTUFBTTtRQUNsQixPQUFPLEVBQUUsTUFBTTtLQUNoQjtDQUNGLEVBQ0Q7SUFDRSxVQUFVLEVBQUUsSUFBSTtDQUNqQixDQUNGLENBQUM7QUFFRixNQUFNLElBQUksR0FBRyxLQUFLLENBQVEsTUFBTSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0FBRTlDLGVBQWUsSUFBSSxDQUFDIn0=