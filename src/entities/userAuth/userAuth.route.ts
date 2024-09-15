import { Router } from "express";
import { UserAuth } from "./userAuth.controller.js";
import { authenticationMDW } from "../../middlewares/auth.middleware.js";
const router = Router();
const userAuth = new UserAuth();

router.post("/register", userAuth.register); //nil
router.post("/login",userAuth.login);
router.get("/verify-email", userAuth.verifyEmail); //nil
router.post("/forget-password", userAuth.forgetPassword);
router.post("/reset-password", userAuth.resetPassword);
// router.post("/settings/edit-user", userAuth.resetPassword);
export default router;
