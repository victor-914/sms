import { Router } from 'express';
import ClassController from './class.controller.js';
import { authenticationMDW } from '../../middlewares/auth.middleware.js';
const router = Router();
// Create a class
router.post('/classes', authenticationMDW, ClassController.createClass);
// Get all classes
router.get('/classes', authenticationMDW, ClassController.getAllClasses);
// Get a class by ID
router.get('/classes/:id', ClassController.getClassById);
// Update a class by ID
router.put('/classes/:id', ClassController.updateClass);
// Delete a class by ID
router.delete('/classes/:id', ClassController.deleteClass);
export default router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xhc3Mucm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZW50aXRpZXMvY2xhc3MvY2xhc3Mucm91dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUNqQyxPQUFPLGVBQWUsTUFBTSx1QkFBdUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUV6RSxNQUFNLE1BQU0sR0FBRyxNQUFNLEVBQUUsQ0FBQztBQUV4QixpQkFBaUI7QUFDakIsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsaUJBQWlCLEVBQUcsZUFBZSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBRXpFLGtCQUFrQjtBQUNsQixNQUFNLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSxlQUFlLENBQUMsYUFBYSxDQUFDLENBQUM7QUFFekUsb0JBQW9CO0FBQ3BCLE1BQU0sQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLGVBQWUsQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUV6RCx1QkFBdUI7QUFDdkIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsZUFBZSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBRXhELHVCQUF1QjtBQUN2QixNQUFNLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxlQUFlLENBQUMsV0FBVyxDQUFDLENBQUM7QUFFM0QsZUFBZSxNQUFNLENBQUMifQ==