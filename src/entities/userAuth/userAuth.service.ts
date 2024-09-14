import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User, { IUser } from "./userAuth.model.js";
import { sendEmail } from "../../utils/email.js";
import { ValidationError } from "../../errorSchema/ErrorSchema.js";
import dotenv from "dotenv";
import Teacher from "../teacher/teacher.model.js";
import Student from "../student/student.model.js";
import Staff from "../staff/staff.model.js";
import { createUserAndRole } from "../../helperFunctions/role.helper.js";
import Principal from "../principal/principal.model.js";
dotenv.config();
export class AuthService {
  async register(data: IUser) {
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
      const role = await createUserAndRole(
        data.role,
        user._id,
        data.schoolId,
        staff._id
      );

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

      

      await sendEmail(
        "verify",
        user.firstName,
        user.email,
        "Email Verification from Schease",
        `${process.env.API_URL}/verify-email?verify_token=${user.verificationToken}`
      );

      return {
        user,
        message: "Verification email sent",
      };
    } catch (err) {
      console.log("🚀 ~ AuthService ~ register ~ err:", err);
      throw err;
    }
  }

  async login(email: string, password: string) {
    try {
      const user = await User.findOne({ email });
      if (!user) throw new ValidationError("User not found", 404);
      const valid = await bcrypt.compare(password, user?.password);
      if (!valid) throw new ValidationError("Invalid password", 403);

      if (!user.verified) throw new ValidationError("Email not verified", 412);

      const token = jwt.sign({ id: user._id, email: user.email }, "secret", {
        expiresIn: "1h",
      });
      user.password = "";
      return { user, token };
    } catch (err) {
      throw err;
    }
  }

  async verifyEmail(token: string) {
    try {
      const payload = jwt.verify(token, "secret") as {
        email: string;
      };
      const { email } = payload;
      const user = await User.findOne({ email: email });
      if (!user || user?.email !== email) {
        if (!user) throw new ValidationError("Invalid token", 404);
      }

      user.verified = true;
      user.password = "";
      return user;
    } catch (error) {
      throw error;
    }
  }

  async forgetPassword(email: string) {
    try {
      const user = await User.findOne({ email });
      if (!user) throw new ValidationError("User not found", 404);

      user.resetToken = jwt.sign({ email }, "secret", { expiresIn: "1h" });
      await sendEmail(
        "forgot",
        user.firstName,
        user.email,
        "Reset your password",
        `${process.env.API_URL}?reset_token=${user.resetToken}`
      );
    } catch (error) {
      throw error;
    }
  }

  async resetPassword(token: any, newPassword: string) {
    try {
      const payload = jwt.verify(token, "secret") as { email: string };
      const user = await User.findOne({ email: payload.email });

      if (!user) throw new ValidationError("user not found", 404);

      user.password = await bcrypt.hash(newPassword, 10);
      user.resetToken = "";
      user.password = "";
      return user;
    } catch (error) {
      throw error;
    }
  }
}
