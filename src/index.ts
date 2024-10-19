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
import gradeRoutes from "./entities/grade/grade.route.js"
import sessionRoutes from "./entities/session/session.route.js"
import { loggerMiddleware } from "./middlewares/log.middleware.js";
import subjectRoutes from "./entities/subject/subject.route.js"
import performanceLogger from "./middlewares/performance.js"
dotenv.config();
import { fileURLToPath } from 'url';

// Get the equivalent of __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import  path from 'path';
import Leads from "./views/leads.model.js";



const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "API for School management system",
    version: "1.0.0",
    description:
      "This is a REST API application made with Express. An interface for managing school.",
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
app.use(loggerMiddleware)
// app.use(performanceLogger)
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));


// env
const uri = process.env.DATABASE_URL as string;
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
app.set('views', path.join(__dirname,'views'));






app.get('/', (req, res) => {

    res.render('index.ejs');
});


app.post('/submit', async (req, res) => {
  try {
    const user = new Leads({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      subject:req.body.subject,
      message: req.body.message
    });


    await user.save();


    res.send('Thank you');
  } catch (error) {
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
