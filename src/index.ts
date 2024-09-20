import express from "express";
import authRoutes from "./entities/userAuth/userAuth.route.js";
import mongoose from "mongoose";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import dotenv from "dotenv";
import cors from "cors";
import schoolRoutes from "./entities/school/school.route.js";
dotenv.config();

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

app.use(cors(corsOptions));

app.use(express.json());

const uri = process.env.DATABASE_URL as string;
const PORT = process.env.PORT || 5000;

app.use("/api/auth", authRoutes);
app.use("/api/core", schoolRoutes);

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

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
