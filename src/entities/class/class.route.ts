import { Router } from 'express';
import ClassController from './class.controller.js';
import { authenticationMDW } from '../../middlewares/auth.middleware.js';

const router = Router();

// Create a class
router.post('/classes', authenticationMDW,  ClassController.createClass);

// Get all classes
router.get('/classes', authenticationMDW, ClassController.getAllClasses);

// Get a class by ID
router.get('/classes/:id', ClassController.getClassById);

// Update a class by ID
router.put('/classes/:id', ClassController.updateClass);

// Delete a class by ID
router.delete('/classes/:id', ClassController.deleteClass);

export default router;
