import express from "express";
import authRoutes from "./userAuth/userAuth.route.js";
import mongoose from "mongoose";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import dotenv from "dotenv";
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
      url: `${process.env.NODE_ENV} === "production" ? ${process.env.API_URL} : "http://localhost:5000"}`,
      description: "Development server",
    },
  ],
};

const options = {
  swaggerDefinition,
  // Paths to files containing OpenAPI definitions
  apis: ["./src/*/*.ts"],
};

const swaggerSpec = swaggerJSDoc(options);

const app = express();

app.use(express.json());

const uri = process.env.DATABASE_URL as string;
const PORT = process.env.PORT || 5000;

app.use("/api/auth", authRoutes);

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
