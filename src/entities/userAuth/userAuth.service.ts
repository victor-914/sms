import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User, { IUser } from "./userAuth.model.js";
import { sendEmail } from "../../utils/email.js";
import { ValidationError } from "../../errorSchema/ErrorSchema.js";
import dotenv from "dotenv";
import Staff from "../staff/staff.model.js";
import { createUserAndRole } from "../../helperFunctions/role.helper.js";
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

      user.roleId = role._id;

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

      user.password = "";

      return {
        user,
        message: "Verification email sent",
      };
    } catch (err) {
      throw err;
    }
  }

  async login(email: string, password: string) {
    try {
      const user = await User.findOne({ email });
      if (!user) throw new ValidationError("User not found", 404);
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
      if (!valid) throw new ValidationError("Invalid password", 403);

      if (!user.verified) throw new ValidationError("Email not verified", 412);

      const accessToken = jwt.sign(payload, process.env.JWT_SECRET as string, {
        expiresIn: "4h",
      });
      user.password = "";
      return { user, accessToken };
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

      await user.save();

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

      user.resetToken = jwt.sign({ email }, process.env.JWT_SECRET as string, {
        expiresIn: "1h",
      });
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
