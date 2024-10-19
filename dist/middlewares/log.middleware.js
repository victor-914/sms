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
const apiCountPerDay = {};
// Middleware function to log requests and track API counts
export const loggerMiddleware = (req, res, next) => {
    const start = Date.now();
    res.on("finish", () => {
        const duration = Date.now() - start;
        const currentDate = new Date().toISOString().slice(0, 10); // Format: YYYY-MM-DD
        // Increment total API count
        totalApiCount++;
        // Increment per-day API count
        if (apiCountPerDay[currentDate]) {
            apiCountPerDay[currentDate]++;
        }
        else {
            apiCountPerDay[currentDate] = 1;
        }
        // Log the request details
        const logMessage = `${new Date().toISOString()} - ${req.method} ${req.originalUrl} ${res.statusCode} - ${duration}ms - Total API Calls: ${totalApiCount} - API Calls Today: ${apiCountPerDay[currentDate]}\n`;
        console.log(logMessage);
        // Write log to the file
        fs.appendFileSync(logFilePath, logMessage);
    });
    next();
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nLm1pZGRsZXdhcmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbWlkZGxld2FyZXMvbG9nLm1pZGRsZXdhcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLE1BQU0sSUFBSSxDQUFDO0FBQ3BCLE9BQU8sSUFBSSxNQUFNLE1BQU0sQ0FBQztBQUN4QixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sS0FBSyxDQUFDO0FBRXBDLHlEQUF5RDtBQUN6RCxNQUFNLFVBQVUsR0FBRyxhQUFhLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNsRCxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBRTNDLHFCQUFxQjtBQUNyQixNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQztBQUVwRCx3REFBd0Q7QUFDeEQsSUFBSSxhQUFhLEdBQUcsQ0FBQyxDQUFDO0FBQ3RCLE1BQU0sY0FBYyxHQUEyQixFQUFFLENBQUM7QUFFbEQsMkRBQTJEO0FBQzNELE1BQU0sQ0FBQyxNQUFNLGdCQUFnQixHQUFHLENBQzlCLEdBQVksRUFDWixHQUFhLEVBQ2IsSUFBa0IsRUFDbEIsRUFBRTtJQUNGLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUN6QixHQUFHLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUU7UUFDcEIsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLEtBQUssQ0FBQztRQUNwQyxNQUFNLFdBQVcsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxxQkFBcUI7UUFFaEYsNEJBQTRCO1FBQzVCLGFBQWEsRUFBRSxDQUFDO1FBRWhCLDhCQUE4QjtRQUM5QixJQUFJLGNBQWMsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDO1lBQ2hDLGNBQWMsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDO1FBQ2hDLENBQUM7YUFBTSxDQUFDO1lBQ04sY0FBYyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNsQyxDQUFDO1FBRUQsMEJBQTBCO1FBQzFCLE1BQU0sVUFBVSxHQUFHLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxXQUFXLEVBQUUsTUFBTSxHQUFHLENBQUMsTUFBTSxJQUM1RCxHQUFHLENBQUMsV0FDTixJQUNFLEdBQUcsQ0FBQyxVQUNOLE1BQU0sUUFBUSx5QkFBeUIsYUFBYSx1QkFDbEQsY0FBYyxDQUFDLFdBQVcsQ0FDNUIsSUFBSSxDQUFDO1FBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUV4Qix3QkFBd0I7UUFDeEIsRUFBRSxDQUFDLGNBQWMsQ0FBQyxXQUFXLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDN0MsQ0FBQyxDQUFDLENBQUM7SUFDSCxJQUFJLEVBQUUsQ0FBQztBQUNULENBQUMsQ0FBQyJ9