import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import dotenv from "dotenv"
dotenv.config()
const secretKey = process.env.JWT_SECRET as string;

interface CustomRequest extends Request {
  user?: any; // Customize this type to match your user schema
}

export const authenticateToken = (req: CustomRequest, res: Response, next: NextFunction) => {
  const token = req.headers['authorization']?.split(' ')[1]; 

  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  try {
    const decoded = jwt.verify(token, secretKey);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(403).json({ message: 'Invalid token.' });
  }
};
