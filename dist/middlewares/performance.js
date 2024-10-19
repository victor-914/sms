// performanceLogger.js
function performanceLogger(next) {
    // Get memory usage
    const memoryUsage = process.memoryUsage();
    // Get CPU usage
    const cpuUsage = process.cpuUsage();
    // Log the performance in MB and readable format
    console.log(`
      Memory Usage:
      -------------
      - RSS (Resident Set Size): ${(memoryUsage.rss / (1024 * 1024)).toFixed(2)} MB
      - Heap Total: ${(memoryUsage.heapTotal / (1024 * 1024)).toFixed(2)} MB
      - Heap Used: ${(memoryUsage.heapUsed / (1024 * 1024)).toFixed(2)} MB
      - External: ${(memoryUsage.external / (1024 * 1024)).toFixed(2)} MB
      - Array Buffers: ${(memoryUsage.arrayBuffers / (1024 * 1024)).toFixed(2)} MB
  
      CPU Usage:
      ----------
      - User: ${(cpuUsage.user / 1e6).toFixed(2)} seconds
      - System: ${(cpuUsage.system / 1e6).toFixed(2)} seconds
    `);
    next(); // Pass control to the next middleware/route handler
}
export default performanceLogger;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyZm9ybWFuY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbWlkZGxld2FyZXMvcGVyZm9ybWFuY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsdUJBQXVCO0FBQ3ZCLFNBQVMsaUJBQWlCLENBQUUsSUFBZ0I7SUFDMUMsbUJBQW1CO0lBQ25CLE1BQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUUxQyxnQkFBZ0I7SUFDaEIsTUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBRXBDLGdEQUFnRDtJQUNoRCxPQUFPLENBQUMsR0FBRyxDQUFDOzs7bUNBR3FCLENBQUMsV0FBVyxDQUFDLEdBQUcsR0FBRyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FDcEUsQ0FBQyxDQUNGO3NCQUNlLENBQUMsV0FBVyxDQUFDLFNBQVMsR0FBRyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7cUJBQ25ELENBQUMsV0FBVyxDQUFDLFFBQVEsR0FBRyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7b0JBQ2xELENBQUMsV0FBVyxDQUFDLFFBQVEsR0FBRyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7eUJBQzVDLENBQUMsV0FBVyxDQUFDLFlBQVksR0FBRyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FDbkUsQ0FBQyxDQUNGOzs7O2dCQUlTLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2tCQUM5QixDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztLQUMvQyxDQUFDLENBQUM7SUFFTCxJQUFJLEVBQUUsQ0FBQyxDQUFDLG9EQUFvRDtBQUM5RCxDQUFDO0FBRUQsZUFBZ0IsaUJBQWlCLENBQUMifQ==