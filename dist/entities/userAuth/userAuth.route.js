import { Router } from "express";
import { UserAuth } from "./userAuth.controller.js";
// import { authenticationMDW } from "../../middlewares/auth.middleware.js";
const router = Router();
const userAuth = new UserAuth();
router.post("/register", userAuth.register); //nil
router.post("/login", userAuth.login);
router.get("/verify-email", userAuth.verifyEmail); //nil
router.post("/forget-password", userAuth.forgetPassword);
router.post("/reset-password", userAuth.resetPassword);
// router.post("/settings/edit-user", userAuth.resetPassword);
export default router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlckF1dGgucm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZW50aXRpZXMvdXNlckF1dGgvdXNlckF1dGgucm91dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUNqQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDcEQsNEVBQTRFO0FBQzVFLE1BQU0sTUFBTSxHQUFHLE1BQU0sRUFBRSxDQUFDO0FBQ3hCLE1BQU0sUUFBUSxHQUFHLElBQUksUUFBUSxFQUFFLENBQUM7QUFFaEMsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSztBQUNsRCxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDckMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsS0FBSztBQUN4RCxNQUFNLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLFFBQVEsQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUN6RCxNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUN2RCw4REFBOEQ7QUFDOUQsZUFBZSxNQUFNLENBQUMifQ==