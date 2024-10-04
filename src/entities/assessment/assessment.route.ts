import express from 'express';
import AssessingFormatsController from './assessment.controller';

const router = express.Router();
 const assessingFormatsController = new  AssessingFormatsController()
// Grading Formats Routes
router.post('/', assessingFormatsController.create);
router.get('/', assessingFormatsController.getAll);
router.get('/:id', assessingFormatsController.getById);
router.put('/:id', assessingFormatsController.update);
router.delete('/:id', assessingFormatsController.delete);

export default router;
