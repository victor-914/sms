import { NextFunction } from "express";

// performanceLogger.js
function performanceLogger( next: () => void) {
  // Get memory usage
  const memoryUsage = process.memoryUsage();

  // Get CPU usage
  const cpuUsage = process.cpuUsage();

  // Log the performance in MB and readable format
  console.log(`
      Memory Usage:
      -------------
      - RSS (Resident Set Size): ${(memoryUsage.rss / (1024 * 1024)).toFixed(
        2
      )} MB
      - Heap Total: ${(memoryUsage.heapTotal / (1024 * 1024)).toFixed(2)} MB
      - Heap Used: ${(memoryUsage.heapUsed / (1024 * 1024)).toFixed(2)} MB
      - External: ${(memoryUsage.external / (1024 * 1024)).toFixed(2)} MB
      - Array Buffers: ${(memoryUsage.arrayBuffers / (1024 * 1024)).toFixed(
        2
      )} MB
  
      CPU Usage:
      ----------
      - User: ${(cpuUsage.user / 1e6).toFixed(2)} seconds
      - System: ${(cpuUsage.system / 1e6).toFixed(2)} seconds
    `);

  next(); // Pass control to the next middleware/route handler
}

export default  performanceLogger;
