import { Request, Response, NextFunction } from 'express';

interface CustomRequest extends Request {
  user?: any; 
}

export const authorizeRoles = (...roles: string[]) => {
  return (req: CustomRequest, res: Response, next: NextFunction) => {
    if (!req.body.user || !roles.includes(req.body.user._role)) {
      return res.status(403).json({ message: 'Access denied. Insufficient permissions.' });
    }
    next();
  };
};
