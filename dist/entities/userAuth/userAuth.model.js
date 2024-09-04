import { Schema, model } from "mongoose";
export var UserRole;
(function (UserRole) {
    UserRole["Student"] = "STUDENT";
    UserRole["Teacher"] = "TEACHER";
    UserRole["Principal"] = "PRINCIPAL";
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
    role: {
        type: String,
        enum: Object.values(UserRole),
        required: true,
    },
    schoolId: {
        type: String,
        required: true,
    },
    resetToken: {
        type: String,
    }
}, {
    timestamps: true,
});
const User = model("User", userSchema);
export default User;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlckF1dGgubW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZW50aXRpZXMvdXNlckF1dGgvdXNlckF1dGgubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBUSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFFMUMsTUFBTSxDQUFOLElBQVksUUFJWDtBQUpELFdBQVksUUFBUTtJQUNsQiwrQkFBbUIsQ0FBQTtJQUNuQiwrQkFBbUIsQ0FBQTtJQUNuQixtQ0FBdUIsQ0FBQTtBQUN6QixDQUFDLEVBSlcsUUFBUSxLQUFSLFFBQVEsUUFJbkI7QUFtQkQsTUFBTSxVQUFVLEdBQUcsSUFBSSxNQUFNLENBQzNCO0lBRUUsU0FBUyxFQUFFO1FBQ1QsSUFBSSxFQUFFLE1BQU07UUFDWixRQUFRLEVBQUUsSUFBSTtLQUNmO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsSUFBSSxFQUFFLE1BQU07UUFDWixRQUFRLEVBQUUsSUFBSTtLQUNmO0lBQ0QsS0FBSyxFQUFFO1FBQ0wsSUFBSSxFQUFFLE1BQU07UUFDWixRQUFRLEVBQUUsSUFBSTtLQUNmO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsSUFBSSxFQUFFLE1BQU07UUFDWixRQUFRLEVBQUUsSUFBSTtLQUNmO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsSUFBSSxFQUFFLE9BQU87UUFDYixPQUFPLEVBQUUsS0FBSztLQUNmO0lBQ0QsWUFBWSxFQUFFO1FBQ1osSUFBSSxFQUFFLE1BQU07S0FDYjtJQUNELFdBQVcsRUFBRTtRQUNYLElBQUksRUFBRSxNQUFNO0tBQ2I7SUFDRCxpQkFBaUIsRUFBRTtRQUNqQixJQUFJLEVBQUUsTUFBTTtLQUNiO0lBQ0QsV0FBVyxFQUFFO1FBQ1gsSUFBSSxFQUFFLE1BQU07UUFDWixRQUFRLEVBQUUsSUFBSTtLQUNmO0lBQ0QsSUFBSSxFQUFFO1FBQ0osSUFBSSxFQUFFLE1BQU07UUFDWixJQUFJLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7UUFDN0IsUUFBUSxFQUFFLElBQUk7S0FDZjtJQUNELFFBQVEsRUFBRTtRQUNSLElBQUksRUFBRSxNQUFNO1FBQ1osUUFBUSxFQUFFLElBQUk7S0FDZjtJQUNELFVBQVUsRUFBQztRQUNULElBQUksRUFBQyxNQUFNO0tBQ1o7Q0FDRixFQUNEO0lBQ0UsVUFBVSxFQUFFLElBQUk7Q0FDakIsQ0FDRixDQUFDO0FBRUYsTUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFRLE1BQU0sRUFBRSxVQUFVLENBQUMsQ0FBQztBQUU5QyxlQUFlLElBQUksQ0FBQyJ9