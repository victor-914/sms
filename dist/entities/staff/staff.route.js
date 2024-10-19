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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhZmYucm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZW50aXRpZXMvc3RhZmYvc3RhZmYucm91dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUNqQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDekUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQzNFLE1BQU0sTUFBTSxHQUFHLE1BQU0sRUFBRSxDQUFDO0FBRXhCLE1BQU0sZUFBZSxHQUFHLElBQUksZUFBZSxFQUFFLENBQUM7QUFFOUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsZUFBZSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ3BFLDhFQUE4RTtBQUM5RSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxjQUFjLENBQUMsT0FBTyxFQUFFLFdBQVcsQ0FBQyxFQUFFLGVBQWUsQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUM3Ryw2RUFBNkU7QUFDN0UsZ0ZBQWdGO0FBRWhGLGVBQWUsTUFBTSxDQUFDIn0=