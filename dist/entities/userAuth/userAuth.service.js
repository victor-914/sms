import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "./userAuth.model.js";
import { sendEmail } from "../../utils/email.js";
import { ValidationError } from "../../errorSchema/ErrorSchema.js";
import dotenv from "dotenv";
import Staff from "../staff/staff.model.js";
import { createUserAndRole } from "../../helperFunctions/role.helper.js";
dotenv.config();
export class AuthService {
    async register(data) {
        try {
            const hashedPassword = await bcrypt.hash(data?.password, 10);
            const existingUser = await User.findOne({ email: data?.email });
            if (existingUser) {
                throw new ValidationError("Email already exists", 400);
            }
            const token = jwt.sign({ email: data?.email }, "secret", {
                expiresIn: 3600,
            });
            // create user
            let user = new User({
                ...data,
                password: hashedPassword,
                verified: false,
                verificationToken: token,
                schoolId: data.schoolId,
            });
            // create staff
            const staff = new Staff({
                userId: user._id,
                schoolId: data.schoolId,
            });
            // create varied role.
            const role = await createUserAndRole(data.role, user._id, data.schoolId, staff._id);
            //  linking
            user.roleId = role._id;
            user.password = "";
            // add role
            if (data.role === "teacher" || data.role === "principal") {
                staff.roleId = role._id;
                user.staffId = staff._id;
            }
            await user.save();
            await staff.save();
            await role.save();
            await sendEmail("verify", user.firstName, user.email, "Email Verification from Schease", `${process.env.API_URL}/verify-email?verify_token=${user.verificationToken}`);
            return {
                user,
                message: "Verification email sent",
            };
        }
        catch (err) {
            console.log("🚀 ~ AuthService ~ register ~ err:", err);
            throw err;
        }
    }
    async login(email, password) {
        try {
            const user = await User.findOne({ email });
            if (!user)
                throw new ValidationError("User not found", 404);
            const valid = await bcrypt.compare(password, user?.password);
            if (!valid)
                throw new ValidationError("Invalid password", 403);
            if (!user.verified)
                throw new ValidationError("Email not verified", 412);
            const token = jwt.sign({ id: user._id, email: user.email }, "secret", {
                expiresIn: "1h",
            });
            user.password = "";
            return { user, token };
        }
        catch (err) {
            throw err;
        }
    }
    async verifyEmail(token) {
        try {
            const payload = jwt.verify(token, "secret");
            const { email } = payload;
            const user = await User.findOne({ email: email });
            if (!user || user?.email !== email) {
                if (!user)
                    throw new ValidationError("Invalid token", 404);
            }
            user.verified = true;
            user.password = "";
            return user;
        }
        catch (error) {
            throw error;
        }
    }
    async forgetPassword(email) {
        try {
            const user = await User.findOne({ email });
            if (!user)
                throw new ValidationError("User not found", 404);
            user.resetToken = jwt.sign({ email }, "secret", { expiresIn: "1h" });
            await sendEmail("forgot", user.firstName, user.email, "Reset your password", `${process.env.API_URL}?reset_token=${user.resetToken}`);
        }
        catch (error) {
            throw error;
        }
    }
    async resetPassword(token, newPassword) {
        try {
            const payload = jwt.verify(token, "secret");
            const user = await User.findOne({ email: payload.email });
            if (!user)
                throw new ValidationError("user not found", 404);
            user.password = await bcrypt.hash(newPassword, 10);
            user.resetToken = "";
            user.password = "";
            return user;
        }
        catch (error) {
            throw error;
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlckF1dGguc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbnRpdGllcy91c2VyQXV0aC91c2VyQXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sTUFBTSxNQUFNLFVBQVUsQ0FBQztBQUM5QixPQUFPLEdBQUcsTUFBTSxjQUFjLENBQUM7QUFDL0IsT0FBTyxJQUFlLE1BQU0scUJBQXFCLENBQUM7QUFDbEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNuRSxPQUFPLE1BQU0sTUFBTSxRQUFRLENBQUM7QUFHNUIsT0FBTyxLQUFLLE1BQU0seUJBQXlCLENBQUM7QUFDNUMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFFekUsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQ2hCLE1BQU0sT0FBTyxXQUFXO0lBQ3RCLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBVztRQUN4QixJQUFJLENBQUM7WUFDSCxNQUFNLGNBQWMsR0FBRyxNQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUU3RCxNQUFNLFlBQVksR0FBRyxNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7WUFDaEUsSUFBSSxZQUFZLEVBQUUsQ0FBQztnQkFDakIsTUFBTSxJQUFJLGVBQWUsQ0FBQyxzQkFBc0IsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUN6RCxDQUFDO1lBRUQsTUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUUsUUFBUSxFQUFFO2dCQUN2RCxTQUFTLEVBQUUsSUFBSTthQUNoQixDQUFDLENBQUM7WUFFSCxjQUFjO1lBQ2QsSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUM7Z0JBQ2xCLEdBQUcsSUFBSTtnQkFDUCxRQUFRLEVBQUUsY0FBYztnQkFDeEIsUUFBUSxFQUFFLEtBQUs7Z0JBQ2YsaUJBQWlCLEVBQUUsS0FBSztnQkFDeEIsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO2FBQ3hCLENBQUMsQ0FBQztZQUVILGVBQWU7WUFDZixNQUFNLEtBQUssR0FBRyxJQUFJLEtBQUssQ0FBQztnQkFDdEIsTUFBTSxFQUFFLElBQUksQ0FBQyxHQUFHO2dCQUNoQixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7YUFDeEIsQ0FBQyxDQUFDO1lBRUgsc0JBQXNCO1lBQ3RCLE1BQU0sSUFBSSxHQUFHLE1BQU0saUJBQWlCLENBQ2xDLElBQUksQ0FBQyxJQUFJLEVBQ1QsSUFBSSxDQUFDLEdBQUcsRUFDUixJQUFJLENBQUMsUUFBUSxFQUNiLEtBQUssQ0FBQyxHQUFHLENBQ1YsQ0FBQztZQUVGLFdBQVc7WUFDWCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7WUFDdkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7WUFFbkIsV0FBVztZQUNYLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxTQUFTLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxXQUFXLEVBQUUsQ0FBQztnQkFDekQsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO2dCQUN4QixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUM7WUFDM0IsQ0FBQztZQUVELE1BQU0sSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ2xCLE1BQU0sS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ25CLE1BQU0sSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1lBSWxCLE1BQU0sU0FBUyxDQUNiLFFBQVEsRUFDUixJQUFJLENBQUMsU0FBUyxFQUNkLElBQUksQ0FBQyxLQUFLLEVBQ1YsaUNBQWlDLEVBQ2pDLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLDhCQUE4QixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FDN0UsQ0FBQztZQUVGLE9BQU87Z0JBQ0wsSUFBSTtnQkFDSixPQUFPLEVBQUUseUJBQXlCO2FBQ25DLENBQUM7UUFDSixDQUFDO1FBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztZQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0NBQW9DLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDdkQsTUFBTSxHQUFHLENBQUM7UUFDWixDQUFDO0lBQ0gsQ0FBQztJQUVELEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBYSxFQUFFLFFBQWdCO1FBQ3pDLElBQUksQ0FBQztZQUNILE1BQU0sSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7WUFDM0MsSUFBSSxDQUFDLElBQUk7Z0JBQUUsTUFBTSxJQUFJLGVBQWUsQ0FBQyxnQkFBZ0IsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUM1RCxNQUFNLEtBQUssR0FBRyxNQUFNLE1BQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztZQUM3RCxJQUFJLENBQUMsS0FBSztnQkFBRSxNQUFNLElBQUksZUFBZSxDQUFDLGtCQUFrQixFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBRS9ELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUTtnQkFBRSxNQUFNLElBQUksZUFBZSxDQUFDLG9CQUFvQixFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBRXpFLE1BQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxFQUFFLFFBQVEsRUFBRTtnQkFDcEUsU0FBUyxFQUFFLElBQUk7YUFDaEIsQ0FBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7WUFDbkIsT0FBTyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQztRQUN6QixDQUFDO1FBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztZQUNiLE1BQU0sR0FBRyxDQUFDO1FBQ1osQ0FBQztJQUNILENBQUM7SUFFRCxLQUFLLENBQUMsV0FBVyxDQUFDLEtBQWE7UUFDN0IsSUFBSSxDQUFDO1lBQ0gsTUFBTSxPQUFPLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUV6QyxDQUFDO1lBQ0YsTUFBTSxFQUFFLEtBQUssRUFBRSxHQUFHLE9BQU8sQ0FBQztZQUMxQixNQUFNLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztZQUNsRCxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksRUFBRSxLQUFLLEtBQUssS0FBSyxFQUFFLENBQUM7Z0JBQ25DLElBQUksQ0FBQyxJQUFJO29CQUFFLE1BQU0sSUFBSSxlQUFlLENBQUMsZUFBZSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQzdELENBQUM7WUFFRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztZQUNyQixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztZQUNuQixPQUFPLElBQUksQ0FBQztRQUNkLENBQUM7UUFBQyxPQUFPLEtBQUssRUFBRSxDQUFDO1lBQ2YsTUFBTSxLQUFLLENBQUM7UUFDZCxDQUFDO0lBQ0gsQ0FBQztJQUVELEtBQUssQ0FBQyxjQUFjLENBQUMsS0FBYTtRQUNoQyxJQUFJLENBQUM7WUFDSCxNQUFNLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1lBQzNDLElBQUksQ0FBQyxJQUFJO2dCQUFFLE1BQU0sSUFBSSxlQUFlLENBQUMsZ0JBQWdCLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFFNUQsSUFBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7WUFDckUsTUFBTSxTQUFTLENBQ2IsUUFBUSxFQUNSLElBQUksQ0FBQyxTQUFTLEVBQ2QsSUFBSSxDQUFDLEtBQUssRUFDVixxQkFBcUIsRUFDckIsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sZ0JBQWdCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FDeEQsQ0FBQztRQUNKLENBQUM7UUFBQyxPQUFPLEtBQUssRUFBRSxDQUFDO1lBQ2YsTUFBTSxLQUFLLENBQUM7UUFDZCxDQUFDO0lBQ0gsQ0FBQztJQUVELEtBQUssQ0FBQyxhQUFhLENBQUMsS0FBVSxFQUFFLFdBQW1CO1FBQ2pELElBQUksQ0FBQztZQUNILE1BQU0sT0FBTyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBc0IsQ0FBQztZQUNqRSxNQUFNLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxLQUFLLEVBQUUsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7WUFFMUQsSUFBSSxDQUFDLElBQUk7Z0JBQUUsTUFBTSxJQUFJLGVBQWUsQ0FBQyxnQkFBZ0IsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUU1RCxJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDbkQsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7WUFDckIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7WUFDbkIsT0FBTyxJQUFJLENBQUM7UUFDZCxDQUFDO1FBQUMsT0FBTyxLQUFLLEVBQUUsQ0FBQztZQUNmLE1BQU0sS0FBSyxDQUFDO1FBQ2QsQ0FBQztJQUNILENBQUM7Q0FDRiJ9