import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../userAuth/userAuth.model.js";
import { sendEmail } from "../utils/email.js";
import { ValidationError } from "../errorSchema/ErrorSchema.js";
import dotenv from "dotenv";
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
            const user = new User({
                ...data,
                password: hashedPassword,
                verified: false,
                verificationToken: token,
            });
            await sendEmail("verify", user.firstName, user.email, "Email Verification from Schease", `${process.env.API_URL}/verify-email%{}?verify_token=${user.verificationToken}`);
            await user.save();
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
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlckF1dGguc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91c2VyQXV0aC91c2VyQXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sTUFBTSxNQUFNLFVBQVUsQ0FBQztBQUM5QixPQUFPLEdBQUcsTUFBTSxjQUFjLENBQUM7QUFDL0IsT0FBTyxJQUFlLE1BQU0sK0JBQStCLENBQUM7QUFDNUQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNoRSxPQUFPLE1BQU0sTUFBTSxRQUFRLENBQUM7QUFDNUIsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQ2hCLE1BQU0sT0FBTyxXQUFXO0lBQ3RCLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBVztRQUN4QixJQUFJLENBQUM7WUFDSCxNQUFNLGNBQWMsR0FBRyxNQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUU3RCxNQUFNLFlBQVksR0FBRyxNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7WUFDaEUsSUFBSSxZQUFZLEVBQUUsQ0FBQztnQkFDakIsTUFBTSxJQUFJLGVBQWUsQ0FBQyxzQkFBc0IsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUN6RCxDQUFDO1lBRUQsTUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUUsUUFBUSxFQUFFO2dCQUN2RCxTQUFTLEVBQUUsSUFBSTthQUNoQixDQUFDLENBQUM7WUFFSCxNQUFNLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQztnQkFDcEIsR0FBRyxJQUFJO2dCQUNQLFFBQVEsRUFB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