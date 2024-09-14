import { Request, Response, NextFunction } from 'express';

interface CustomRequest extends Request {
  user?: any; // Customize this type to match your us
}

export const authorizeRoles = (...roles: string[]) => {
  return (req: CustomRequest, res: Response, next: NextFunction) => {
    if (!req.user || !roles.includes(req.user.role)) {
      return res.status(403).json({ message: 'Access denied. Insufficient permissions.' });
    }
    next();
  };
};
