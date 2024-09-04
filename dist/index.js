import express from "express";
import authRoutes from "../src/entities/userAuth/userAuth.route";
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
    // Paths to files containing OpenAPI definitions
    apis: ["./src/entities/*/*.ts"],
};
const swaggerSpec = swaggerJSDoc(options);
const app = express();
app.use(express.json());
const uri = process.env.DATABASE_URL;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxPQUFPLE1BQU0sU0FBUyxDQUFDO0FBQzlCLE9BQU8sVUFBVSxNQUFNLHlDQUF5QyxDQUFDO0FBQ2pFLE9BQU8sUUFBUSxNQUFNLFVBQVUsQ0FBQztBQUNoQyxPQUFPLFlBQVksTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxTQUFTLE1BQU0sb0JBQW9CLENBQUM7QUFDM0MsT0FBTyxNQUFNLE1BQU0sUUFBUSxDQUFDO0FBQzVCLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUVoQixNQUFNLGlCQUFpQixHQUFHO0lBQ3hCLE9BQU8sRUFBRSxPQUFPO0lBQ2hCLElBQUksRUFBRTtRQUNKLEtBQUssRUFBRSxrQ0FBa0M7UUFDekMsT0FBTyxFQUFFLE9BQU87UUFDaEIsV0FBVyxFQUNULHFGQUFxRjtRQUN2RixPQUFPLEVBQUU7WUFDUCxJQUFJLEVBQUUsb0JBQW9CO1lBQzFCLEdBQUcsRUFBRSxvQ0FBb0M7U0FDMUM7UUFDRCxPQUFPLEVBQUU7WUFDUCxJQUFJLEVBQUUsU0FBUztZQUNmLEdBQUcsRUFBRSxvQkFBb0I7U0FDMUI7S0FDRjtJQUNELE9BQU8sRUFBRTtRQUNQO1lBQ0UsR0FBRyxFQUFHLHVCQUF1QjtZQUM3QixXQUFXLEVBQUUsb0JBQW9CO1NBQ2xDO0tBQ0Y7Q0FDRixDQUFDO0FBRUYsTUFBTSxPQUFPLEdBQUc7SUFDZCxpQkFBaUI7SUFDakIsZ0RBQWdEO0lBQ2hELElBQUksRUFBRSxDQUFDLHVCQUF1QixDQUFDO0NBQ2hDLENBQUM7QUFFRixNQUFNLFdBQVcsR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7QUFHMUMsTUFBTSxHQUFHLEdBQUcsT0FBTyxFQUFFLENBQUM7QUFFdEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUV4QixNQUFNLEdBQUcsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQXNCLENBQUM7QUFDL0MsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDO0FBRXRDLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0FBRWpDLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxLQUFLLEVBQUUsU0FBUyxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0FBRWhFLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRTtJQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLDZCQUE2QixJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ2pELFFBQVE7U0FDTCxPQUFPLENBQUMsR0FBRyxDQUFDO1NBQ1osSUFBSSxDQUFDLEdBQUcsRUFBRTtRQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMseUNBQXlDLENBQUMsQ0FBQztJQUN6RCxDQUFDLENBQUM7U0FDRCxLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtRQUNiLE9BQU8sQ0FBQyxLQUFLLENBQUMscUNBQXFDLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDNUQsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUMsQ0FBQyJ9