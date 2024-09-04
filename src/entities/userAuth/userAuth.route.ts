import { Router } from "express";
import { UserAuth } from "./userAuth.controller.js";

const router = Router();
const userAuth = new UserAuth();

router.post("/register", userAuth.register);
router.post("/login", userAuth.login);
router.get('/verify-email', userAuth.verifyEmail);
router.post('/forget-password', userAuth.forgetPassword);
router.post('/reset-password', userAuth.resetPassword);

export default router;
