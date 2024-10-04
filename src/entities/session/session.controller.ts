import { Request, Response } from 'express';
import { SessionService } from './session.service.js';

const sessionService = new SessionService();

export class SessionController {
  async createSession(req: Request, res: Response): Promise<void> {
    try {
      const session = await sessionService.createSession(req.body);
      res.status(201).json(session);
    } catch (error) {
      res.status(500).json({ message: 'Error creating session', error });
    }
  }

  async getAllSessions(req: Request, res: Response): Promise<void> {
    try {
      const sessions = await sessionService.getAllSessions();
      res.status(200).json(sessions);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching sessions', error });
    }
  }

  async getSessionById(req: Request, res: Response): Promise<void> {
    try {
      const session = await sessionService.getSessionById(req.params.id);
      if (session) {
        res.status(200).json(session);
      } else {
        res.status(404).json({ message: 'Session not found' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error fetching session', error });
    }
  }

  async updateSession(req: Request, res: Response): Promise<void> {
    try {
      const session = await sessionService.updateSession(req.params.id, req.body);
      if (session) {
        res.status(200).json(session);
      } else {
        res.status(404).json({ message: 'Session not found' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error updating session', error });
    }
  }

  async deleteSession(req: Request, res: Response): Promise<void> {
    try {
      const session = await sessionService.deleteSession(req.params.id);
      if (session) {
        res.status(200).json({ message: 'Session deleted successfully' });
      } else {
        res.status(404).json({ message: 'Session not found' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error deleting session', error });
    }
  }

  async toggleSessionStatus(req: Request, res: Response): Promise<void> {
    try {
      const { isActive } = req.body;
      const session = await sessionService.toggleSessionStatus(req.params.id, isActive);
      if (session) {
        res.status(200).json(session);
      } else {
        res.status(404).json({ message: 'Session not found' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error toggling session status', error });
    }
  }
}
