import { Router } from 'express';
import { SessionController } from './session.controller.js';

const router: Router = Router();
const sessionController = new SessionController();

// Routes for session management
router.post('/sessions', sessionController.createSession);
router.get('/sessions', sessionController.getAllSessions);
router.get('/sessions/:id', sessionController.getSessionById);
router.put('/sessions/:id', sessionController.updateSession);
router.delete('/sessions/:id', sessionController.deleteSession);
router.patch('/sessions/:id/toggle', sessionController.toggleSessionStatus);

export default router;
