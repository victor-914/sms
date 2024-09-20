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
            user.roleId = role._id;
            // add role
            if (data.role === "teacher" || data.role === "principal") {
                staff.roleId = role._id;
                user.staffId = staff._id;
            }
            await user.save();
            await staff.save();
            await role.save();
            await sendEmail("verify", user.firstName, user.email, "Email Verification from Schease", `${process.env.API_URL}/verify-email?verify_token=${user.verificationToken}`);
            user.password = "";
            return {
                user,
                message: "Verification email sent",
            };
        }
        catch (err) {
            throw err;
        }
    }
    async login(email, password) {
        try {
            const user = await User.findOne({ email });
            if (!user)
                throw new ValidationError("User not found", 404);
            const valid = await bcrypt.compare(password, user?.password);
            const payload = {
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                role: user.role,
                schoolId: user.schoolId,
                id: user._id,
                roleId: user.roleId,
                _role: user.role,
                staffId: user.staffId,
            };
            if (!valid)
                throw new ValidationError("Invalid password", 403);
            if (!user.verified)
                throw new ValidationError("Email not verified", 412);
            const accessToken = jwt.sign(payload, process.env.JWT_SECRET, {
                expiresIn: "4h",
            });
            user.password = "";
            return { user, accessToken };
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
            await user.save();
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
            user.resetToken = jwt.sign({ email }, process.env.JWT_SECRET, {
                expiresIn: "1h",
            });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlckF1dGguc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbnRpdGllcy91c2VyQXV0aC91c2VyQXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sTUFBTSxNQUFNLFVBQVUsQ0FBQztBQUM5QixPQUFPLEdBQUcsTUFBTSxjQUFjLENBQUM7QUFDL0IsT0FBTyxJQUFlLE1BQU0scUJBQXFCLENBQUM7QUFDbEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNuRSxPQUFPLE1BQU0sTUFBTSxRQUFRLENBQUM7QUFDNUIsT0FBTyxLQUFLLE1BQU0seUJBQXlCLENBQUM7QUFDNUMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDekUsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQ2hCLE1BQU0sT0FBTyxXQUFXO0lBQ3RCLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBVztRQUN4QixJQUFJLENBQUM7WUFDSCxNQUFNLGNBQWMsR0FBRyxNQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUU3RCxNQUFNLFlBQVksR0FBRyxNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7WUFDaEUsSUFBSSxZQUFZLEVBQUUsQ0FBQztnQkFDakIsTUFBTSxJQUFJLGVBQWUsQ0FBQyxzQkFBc0IsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUN6RCxDQUFDO1lBRUQsTUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUUsUUFBUSxFQUFFO2dCQUN2RCxTQUFTLEVBQUUsSUFBSTthQUNoQixDQUFDLENBQUM7WUFFSCxjQUFjO1lBQ2QsSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUM7Z0JBQ2xCLEdBQUcsSUFBSTtnQkFDUCxRQUFRLEVBQUUsY0FBYztnQkFDeEIsUUFBUSxFQUFFLEtBQUs7Z0JBQ2YsaUJBQWlCLEVBQUUsS0FBSztnQkFDeEIsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO2FBQ3hCLENBQUMsQ0FBQztZQUVILGVBQWU7WUFDZixNQUFNLEtBQUssR0FBRyxJQUFJLEtBQUssQ0FBQztnQkFDdEIsTUFBTSxFQUFFLElBQUksQ0FBQyxHQUFHO2dCQUNoQixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7YUFDeEIsQ0FBQyxDQUFDO1lBRUgsc0JBQXNCO1lBQ3RCLE1BQU0sSUFBSSxHQUFHLE1BQU0saUJBQWlCLENBQ2xDLElBQUksQ0FBQyxJQUFJLEVBQ1QsSUFBSSxDQUFDLEdBQUcsRUFDUixJQUFJLENBQUMsUUFBUSxFQUNiLEtBQUssQ0FBQyxHQUFHLENBQ1YsQ0FBQztZQUVGLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztZQUV2QixXQUFXO1lBQ1gsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLFNBQVMsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLFdBQVcsRUFBRSxDQUFDO2dCQUN6RCxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7Z0JBQ3hCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQztZQUMzQixDQUFDO1lBRUQsTUFBTSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDbEIsTUFBTSxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDbkIsTUFBTSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7WUFFbEIsTUFBTSxTQUFTLENBQ2IsUUFBUSxFQUNSLElBQUksQ0FBQyxTQUFTLEVBQ2QsSUFBSSxDQUFDLEtBQUssRUFDVixpQ0FBaUMsRUFDakMsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sOEJBQThCLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUM3RSxDQUFDO1lBRUYsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7WUFFbkIsT0FBTztnQkFDTCxJQUFJO2dCQUNKLE9BQU8sRUFBRSx5QkFBeUI7YUFDbkMsQ0FBQztRQUNKLENBQUM7UUFBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1lBQ2IsTUFBTSxHQUFHLENBQUM7UUFDWixDQUFDO0lBQ0gsQ0FBQztJQUVELEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBYSxFQUFFLFFBQWdCO1FBQ3pDLElBQUksQ0FBQztZQUNILE1BQU0sSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7WUFDM0MsSUFBSSxDQUFDLElBQUk7Z0JBQUUsTUFBTSxJQUFJLGVBQWUsQ0FBQyxnQkFBZ0IsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUM1RCxNQUFNLEtBQUssR0FBRyxNQUFNLE1BQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztZQUU3RCxNQUFNLE9BQU8sR0FBRztnQkFDZCxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7Z0JBQ3pCLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtnQkFDdkIsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO2dCQUNqQixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7Z0JBQ2YsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO2dCQUN2QixFQUFFLEVBQUUsSUFBSSxDQUFDLEdBQUc7Z0JBQ1osTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO2dCQUNuQixLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUk7Z0JBQ2hCLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTzthQUN0QixDQUFDO1lBQ0YsSUFBSSxDQUFDLEtBQUs7Z0JBQUUsTUFBTSxJQUFJLGVBQWUsQ0FBQyxrQkFBa0IsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUUvRCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVE7Z0JBQUUsTUFBTSxJQUFJLGVBQWUsQ0FBQyxvQkFBb0IsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUV6RSxNQUFNLFdBQVcsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQW9CLEVBQUU7Z0JBQ3RFLFNBQVMsRUFBRSxJQUFJO2FBQ2hCLENBQUMsQ0FBQztZQUNILElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1lBQ25CLE9BQU8sRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLENBQUM7UUFDL0IsQ0FBQztRQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7WUFDYixNQUFNLEdBQUcsQ0FBQztRQUNaLENBQUM7SUFDSCxDQUFDO0lBRUQsS0FBSyxDQUFDLFdBQVcsQ0FBQyxLQUFhO1FBQzdCLElBQUksQ0FBQztZQUNILE1BQU0sT0FBTyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FFekMsQ0FBQztZQUNGLE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxPQUFPLENBQUM7WUFDMUIsTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7WUFDbEQsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLEVBQUUsS0FBSyxLQUFLLEtBQUssRUFBRSxDQUFDO2dCQUNuQyxJQUFJLENBQUMsSUFBSTtvQkFBRSxNQUFNLElBQUksZUFBZSxDQUFDLGVBQWUsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUM3RCxDQUFDO1lBRUQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFFckIsTUFBTSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7WUFFbEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7WUFDbkIsT0FBTyxJQUFJLENBQUM7UUFDZCxDQUFDO1FBQUMsT0FBTyxLQUFLLEVBQUUsQ0FBQztZQUNmLE1BQU0sS0FBSyxDQUFDO1FBQ2QsQ0FBQztJQUNILENBQUM7SUFFRCxLQUFLLENBQUMsY0FBYyxDQUFDLEtBQWE7UUFDaEMsSUFBSSxDQUFDO1lBQ0gsTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztZQUMzQyxJQUFJLENBQUMsSUFBSTtnQkFBRSxNQUFNLElBQUksZUFBZSxDQUFDLGdCQUFnQixFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBRTVELElBQUksQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBb0IsRUFBRTtnQkFDdEUsU0FBUyxFQUFFLElBQUk7YUFDaEIsQ0FBQyxDQUFDO1lBQ0gsTUFBTSxTQUFTLENBQ2IsUUFBUSxFQUNSLElBQUksQ0FBQyxTQUFTLEVBQ2QsSUFBSSxDQUFDLEtBQUssRUFDVixxQkFBcUIsRUFDckIsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sZ0JBQWdCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FDeEQsQ0FBQztRQUNKLENBQUM7UUFBQyxPQUFPLEtBQUssRUFBRSxDQUFDO1lBQ2YsTUFBTSxLQUFLLENBQUM7UUFDZCxDQUFDO0lBQ0gsQ0FBQztJQUVELEtBQUssQ0FBQyxhQUFhLENBQUMsS0FBVSxFQUFFLFdBQW1CO1FBQ2pELElBQUksQ0FBQztZQUNILE1BQU0sT0FBTyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBc0IsQ0FBQztZQUNqRSxNQUFNLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxLQUFLLEVBQUUsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7WUFFMUQsSUFBSSxDQUFDLElBQUk7Z0JBQUUsTUFBTSxJQUFJLGVBQWUsQ0FBQyxnQkFBZ0IsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUU1RCxJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDbkQsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7WUFDckIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7WUFDbkIsT0FBTyxJQUFJLENBQUM7UUFDZCxDQUFDO1FBQUMsT0FBTyxLQUFLLEVBQUUsQ0FBQztZQUNmLE1BQU0sS0FBSyxDQUFDO1FBQ2QsQ0FBQztJQUNILENBQUM7Q0FDRiJ9