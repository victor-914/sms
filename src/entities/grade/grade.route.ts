import express from 'express';
import gradingFormatsController from './grade.controller.js';

const router = express.Router();

// Grading Formats Routes
router.post('/', gradingFormatsController.create);
router.get('/', gradingFormatsController.getAll);
router.get('/:id', gradingFormatsController.getById);
router.put('/:id', gradingFormatsController.update);
router.delete('/:id', gradingFormatsController.delete);

export default router;
