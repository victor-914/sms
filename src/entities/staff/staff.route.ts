import { Router } from "express";
import { StaffController } from "./staff.controller.js";
import { authenticationMDW } from "../../middlewares/auth.middleware.js";
import { authorizeRoles } from "../../middlewares/authorisation.middle.js";
const router = Router();

const staffController = new StaffController();

router.get("/staffs", authenticationMDW, staffController.getStaffs);
// router.get("/staffs/:id", authenticationMDW, staffController.getStaffById);
router.post("/staffs", authenticationMDW, authorizeRoles("admin", "principal"), staffController.createStaff);
// router.put("/staffs/:id", authenticationMDW, staffController.updateStaff);
// router.delete("/staffs/:id", authenticationMDW, staffController.deleteStaff);

export default router;
