import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import dotenv from "dotenv"
dotenv.config()
// const secretKey = process.env.JWT_SECRET as string;

interface CustomRequest extends Request {
  user?: any; 
}

export const authenticationMDW = (req: CustomRequest, res: Response, next: NextFunction) => {
  // console.log(req,"req")
  const token = req.headers.authorization
  // console.log("🚀 ~ authenticationMDW ~ token:", token)

  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  try {
    const decoded = jwt.verify(token,  process.env.JWT_SECRET as string);
    req.body.user = decoded;
    next();
  } catch (err) {
    res.status(403).json({ message: 'Invalid token.' });
  }
};
