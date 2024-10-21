import express from "express";
import authRoutes from "./entities/userAuth/userAuth.route.js";
import mongoose from "mongoose";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import dotenv from "dotenv";
import cors from "cors";
import schoolRoutes from "./entities/school/school.route.js";
import staffRoutes from "./entities/staff/staff.route.js";
import classRoutes from "./entities/class/class.route.js";
import gradeRoutes from "./entities/grade/grade.route.js";
import sessionRoutes from "./entities/session/session.route.js";
import { loggerMiddleware } from "./middlewares/log.middleware.js";
import subjectRoutes from "./entities/subject/subject.route.js";
import { data } from "./views/data.js";
dotenv.config();
import { fileURLToPath } from 'url';
// Get the equivalent of __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import path from 'path';
import Leads from "./views/leads.model.js";
const swaggerDefinition = {
    openapi: "3.0.0",
    info: {
        title: "API for School management system",
        version: "1.0.0",
        description: "This is a REST API application made with Express. An interface for managing school.",
        license: {
            name: "Licensed Under MIT",
            url: "https://spdx.org/licenses/MIT.html",
        },
        contact: {
            name: "Schease",
            url: "cognatestudion.com",
        },
    },
    servers: [
        {
            url: "http://localhost:4000",
            description: "Development server",
        },
    ],
};
const options = {
    swaggerDefinition,
    apis: ["./src/entities/*/*.ts"],
};
const swaggerSpec = swaggerJSDoc(options);
const app = express();
const corsOptions = {
    origin: "*",
};
// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));
app.use(loggerMiddleware);
// app.use(performanceLogger)
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
// env
const uri = process.env.DATABASE_URL;
const PORT = process.env.PORT || 5000;
const memoryUsage = process.memoryUsage();
console.log(memoryUsage);
const cpuUsage = process.cpuUsage();
console.log(cpuUsage);
// ONBOARDING
app.use("/api/auth", authRoutes);
app.use("/api/core", schoolRoutes);
app.use("/api/core", classRoutes);
app.use("/api/core", sessionRoutes);
app.use("/api/core", gradeRoutes);
app.use("/api/core", subjectRoutes);
// PRINICIPAL
app.use("/api/core", staffRoutes);
// EJS
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.get('/', (req, res) => {
    res.render('index.ejs', { roles: data.roles });
});
app.post('/submit', async (req, res) => {
    try {
        const user = new Leads({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            subject: req.body.subject,
            message: req.body.message
        });
        await user.save();
        res.send('Thank you');
    }
    catch (error) {
        res.json({ error: error.message });
    }
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    mongoose
        .connect(uri)
        .then(() => {
        console.log("Connected to MongoDB Atlas successfully");
    })
        .catch((err) => {
        console.error("Error connecting to MongoDB Atlas: ", err);
    });
});
// function monitorResources() {
//   const used = process.memoryUsage();
//   console.log(`
//   Memory Usage:
//   ------------
//   RSS: ${Math.round(used.rss / 1024 / 1024 * 100) / 100} MB
//   Heap Total: ${Math.round(used.heapTotal / 1024 / 1024 * 100) / 100} MB
//   Heap Used: ${Math.round(used.heapUsed / 1024 / 1024 * 100) / 100} MB
//   External: ${Math.round(used.external / 1024 / 1024 * 100) / 100} MB
//   `);
//   const cpu = process.cpuUsage();
//   console.log(`
//   CPU Usage:
//   ---------
//   User: ${Math.round(cpu.user / 1000000 * 100) / 100}s
//   System: ${Math.round(cpu.system / 1000000 * 100) / 100}s
//   `);
// }
// // Monitor every 5 minutes
// setInterval(monitorResources, 5 * 60 * 1000);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxPQUFPLE1BQU0sU0FBUyxDQUFDO0FBQzlCLE9BQU8sVUFBVSxNQUFNLHVDQUF1QyxDQUFDO0FBQy9ELE9BQU8sUUFBUSxNQUFNLFVBQVUsQ0FBQztBQUNoQyxPQUFPLFlBQVksTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxTQUFTLE1BQU0sb0JBQW9CLENBQUM7QUFDM0MsT0FBTyxNQUFNLE1BQU0sUUFBUSxDQUFDO0FBQzVCLE9BQU8sSUFBSSxNQUFNLE1BQU0sQ0FBQztBQUN4QixPQUFPLFlBQVksTUFBTSxtQ0FBbUMsQ0FBQztBQUM3RCxPQUFPLFdBQVcsTUFBTSxpQ0FBaUMsQ0FBQztBQUMxRCxPQUFPLFdBQVcsTUFBTSxpQ0FBaUMsQ0FBQztBQUMxRCxPQUFPLFdBQVcsTUFBTSxpQ0FBaUMsQ0FBQTtBQUN6RCxPQUFPLGFBQWEsTUFBTSxxQ0FBcUMsQ0FBQTtBQUMvRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNuRSxPQUFPLGFBQWEsTUFBTSxxQ0FBcUMsQ0FBQTtBQUMvRCxPQUFPLEVBQUMsSUFBSSxFQUFDLE1BQU0saUJBQWlCLENBQUE7QUFFcEMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQ2hCLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxLQUFLLENBQUM7QUFFcEMsZ0RBQWdEO0FBQ2hELE1BQU0sVUFBVSxHQUFHLGFBQWEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ2xELE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7QUFFM0MsT0FBUSxJQUFJLE1BQU0sTUFBTSxDQUFDO0FBQ3pCLE9BQU8sS0FBSyxNQUFNLHdCQUF3QixDQUFDO0FBSTNDLE1BQU0saUJBQWlCLEdBQUc7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