// src/routes/subjectRoutes.ts
import { Router } from 'express';
import {
  createSubjectController,
  getAllSubjectsController,
  getSubjectByIdController,
  updateSubjectController,
  deleteSubjectController,
} from './subject.controller.js';

const router = Router();

router.post('/', createSubjectController);
router.get('/', getAllSubjectsController);
router.get('/:id', getSubjectByIdController);
router.put('/:id', updateSubjectController);
router.delete('/:id', deleteSubjectController);

export default router;
