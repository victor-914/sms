import { Request, Response } from "express";
import { AuthService } from "../userAuth/userAuth.service.js";

export class UserAuth {
  private authService = new AuthService();
  register = async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;
      const user = await this.authService.register(email, password);

      res.status(201).json(user);
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error occurred";
      res.status(400).json({ error: errorMessage });
    }
  };

  login = async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;
      const data = await this.authService.login(email, password);
      // console.log("🚀 ~ UserAuth ~ login= ~ data:", data);
      res.json({ data });
    } catch (error) {
      // console.log("🚀 ~ UserAuth ~ login= ~ error:", error);
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error occurred";
      res.status(400).json({ error: errorMessage });
    }
  };

  // verifyEmail = async (req: Request, res: Response) => {
  //   try {
  //     const { token } = req.body;
  //     const user = await this.authService.verifyEmail(token);
  //     res.json(user);
  //   } catch (error) {
  //     const errorMessage =
  //       error instanceof Error ? error.message : "Unknown error occurred";
  //     res.status(400).json({ error: errorMessage });
  //   }
  // };

  // forgetPassword = async (req: Request, res: Response) => {
  //   try {
  //     const { email } = req.body;
  //     await this.authService.forgetPassword(email);
  //     res.json({ message: "Password reset link sent" });
  //   } catch (error) {
  //     const errorMessage =
  //       error instanceof Error ? error.message : "Unknown error occurred";
  //     res.status(400).json({ error: errorMessage });
  //   }
  // };

  // resetPassword = async (req: Request, res: Response) => {
  //   try {
  //     const { token, newPassword } = req.body;
  //     const user = await this.authService.resetPassword(token, newPassword);
  //     res.json(user);
  //   } catch (error) {
  //     const errorMessage =
  //       error instanceof Error ? error.message : "Unknown error occurred";
  //     res.status(400).json({ error: errorMessage });
  //   }
  // };
}
