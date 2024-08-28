import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User, { IUser } from "../userAuth/userAuth.model.js";
import { sendEmail } from "../utils/email.js";

export class AuthService {
  async register(email: string, password: string) {
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = new User({
        email,
        password: hashedPassword,
        verified: false,
        verificationToken: jwt.sign({ email }, "secret", { expiresIn: "1h" }),
      });

      console.log("🚀 ~ AuthService ~ register ~ user:", user);

      // await user.save();
      await sendEmail(
        user.email,
        "Verify your email",
        `verification link: ${user.verificationToken}`
      );

      return user;
    } catch (err) {
      console.log("🚀 ~ AuthService ~ register ~ err:", err);
    }
  }

  async login(email: string, password: string) {
    try {
      const user = await User.findOne({ email });
      if (!user) throw new Error("User not found");

      const valid = await bcrypt.compare(password, user?.password);
      if (!valid) throw new Error("Invalid password");

      if (!user.verified) throw new Error("Email not verified");

      const token = jwt.sign({ id: user.id, email: user.email }, "secret", {
        expiresIn: "1h",
      });

      return { user, token };
    } catch (err) {
      console.log("🚀 ~ AuthService ~ login ~ err:", err);
    }
  }

  // async verifyEmail(token: string) {
  //   const payload = jwt.verify(token, "secret");
  //   const user = await User.findOne({payload?.email});

  //   // if(user.email !== payload.email){
  //   //   if (!user) throw new Error("Invalid token");
  //   // }
  //   // const user = this.users.find((u: User) => u.email === payload.email);

  // //  user && user.verified = true;
  //   return user;
  // }

  // async forgetPassword(email: string) {
  //   const user = await User.findOne({ email });
  //   if (!user) throw new Error("User not found");

  //   user.resetToken = jwt.sign({ email }, "secret", { expiresIn: "1h" });
  //   await sendEmail(
  //     user.email,
  //     "Reset your password",
  //     `Reset token: ${user.resetToken}`
  //   );

  //   console.log(
  //     user.email,
  //     "Reset your password",
  //     `Reset token: ${user.resetToken}`
  //   );
  // }

  // async resetPassword(token: string, newPassword: string) {
  //   const user = await User.findOne({ email });
  //   const payload = jwt.verify(token, "secret") as { email: string };
  //   const user = this.users.find((u: User) => u.email === payload.email);

  //    if(user.)
  //   if (!user) throw new Error("Invalid token");

  //   user.password = await bcrypt.hash(newPassword, 10);
  //   delete user.resetToken;
  //   return user;
  // }
}
