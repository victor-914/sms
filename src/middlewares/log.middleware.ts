import express, { Request, Response, NextFunction } from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// This creates the equivalent of __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// File to store logs
const logFilePath = path.join(__dirname, "api.log");

// Variables to store total API count and per-day counts
let totalApiCount = 0;
const apiCountPerDay: Record<string, number> = {};

// Middleware function to log requests and track API counts
export const loggerMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const start = Date.now();
  res.on("finish", () => {
    const duration = Date.now() - start;
    const currentDate = new Date().toISOString().slice(0, 10); // Format: YYYY-MM-DD

    // Increment total API count
    totalApiCount++;

    // Increment per-day API count
    if (apiCountPerDay[currentDate]) {
      apiCountPerDay[currentDate]++;
    } else {
      apiCountPerDay[currentDate] = 1;
    }

    // Log the request details
    const logMessage = `${new Date().toISOString()} - ${req.method} ${
      req.originalUrl
    } ${
      res.statusCode
    } - ${duration}ms - Total API Calls: ${totalApiCount} - API Calls Today: ${
      apiCountPerDay[currentDate]
    }\n`;
    console.log(logMessage);

    // Write log to the file
    fs.appendFileSync(logFilePath, logMessage);
  });
  next();
};
