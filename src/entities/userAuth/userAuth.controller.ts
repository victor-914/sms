import { Request, Response } from "express";
import { AuthService } from "./userAuth.service.js";

export class UserAuth {
  private authService = new AuthService();
  register = async (req: Request, res: Response) => {
    try {
      const user = await this.authService.register(req.body);
      res.status(201).json(user);
    } catch (error) {
      if (error.status && error.message) {
        return res.status(error.status).json({ error: error.message });
      }

      return res.status(500).json("Internal server error");
    }
  };

  login = async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;
      console.log(req.body,"reqbody")
      const data = await this.authService.login(email, password);
      res.json({ data });
    } catch (error) {
      if (error.status && error.message) {
        return res.status(error.status).json({ error: error.message });
      }

      return res.status(500).json("Internal server error");
    }
  };

  verifyEmail = async (req: Request, res: Response) => {
    try {
      const token = req?.query.verify_token;
      if (!token) {
        res.status(404).json({
          error: "Verification Token not Found",
        });
      }
      const user = await this.authService.verifyEmail(token as string);
      res.json(user);
    } catch (error) {
      if (error.status && error.message) {
        return res.status(error.status).json({ error: error.message });
      }

      return res.status(500).json("Internal server error");
    }
  };

  forgetPassword = async (req: Request, res: Response) => {
    try {
      const { email } = req.body;
      await this.authService.forgetPassword(email);
      res.json({ message: "Password reset link sent" });
    } catch (error) {
      if (error.status && error.message) {
        return res.status(error.status).json({ error: error.message });
      }

      return res.status(500).json("Internal server error");
    }
  };

  resetPassword = async (req: Request, res: Response) => {
    try {
      const token = req?.query?.reset_token;
      await this.authService.resetPassword(token, req.body?.newPassword);
      res.status(200).json({ message: "reset successful" });
    } catch (error) {
      if (error.status && error.message) {
        return res.status(error.status).json({ error: error.message });
      }

      return res.status(500).json("Internal server error");
    }
  };
}
