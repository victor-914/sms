import express from "express";
import authRoutes from "./entities/userAuth/userAuth.route.js";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxPQUFPLE1BQU0sU0FBUyxDQUFDO0FBQzlCLE9BQU8sVUFBVSxNQUFNLHVDQUF1QyxDQUFDO0FBQy9ELE9BQU8sUUFBUSxNQUFNLFVBQVUsQ0FBQztBQUNoQyxPQUFPLFlBQVksTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxTQUFTLE1BQU0sb0JBQW9CLENBQUM7QUFDM0MsT0FBTyxNQUFNLE1BQU0sUUFBUSxDQUFDO0FBQzVCLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUVoQixNQUFNLGlCQUFpQixHQUFHO0lBQ3hCLE9BQU8sRUFBRSxPQUFPO0lBQ2hCLElBQUksRUFBRTtRQUNKLEtBQUssRUFBRSxrQ0FBa0M7UUFDekMsT0FBTyxFQUFFLE9BQU87UUFDaEIsV0FBVyxFQUNULHFGQUFxRjtRQUN2RixPQUFPLEVBQUU7WUFDUCxJQUFJLEVBQUUsb0JBQW9CO1lBQzFCLEdBQUcsRUFBRSxvQ0FBb0M7U0FDMUM7UUFDRCxPQUFPLEVBQUU7WUFDUCxJQUFJLEVBQUUsU0FBUztZQUNmLEdBQUcsRUFBRSxvQkFBb0I7U0FDMUI7S0FDRjtJQUNELE9BQU8sRUFBRTtRQUNQO1lBQ0UsR0FBRyxFQUFHLHVCQUF1QjtZQUM3QixXQUFXLEVBQUUsb0JBQW9CO1NBQ2xDO0tBQ0Y7Q0FDRixDQUFDO0FBRUYsTUFBTSxPQUFPLEdBQUc7SUFDZCxpQkFBaUI7SUFDakIsSUFBSSxFQUFFLENBQUMsdUJBQXVCLENBQUM7Q0FDaEMsQ0FBQztBQUVGLE1BQU0sV0FBVyxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUcxQyxNQUFNLEdBQUcsR0FBRyxPQUFPLEVBQUUsQ0FBQztBQUV0QixHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBRXhCLE1BQU0sR0FBRyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBc0IsQ0FBQztBQUMvQyxNQUFNLElBQUksR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUM7QUFJdEMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsVUFBVSxDQUFDLENBQUM7QUFFakMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLEtBQUssRUFBRSxTQUFTLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7QUFFaEUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTZCLElBQUksRUFBRSxDQUFDLENBQUM7SUFDakQsUUFBUTtTQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUM7U0FDWixJQUFJLENBQUMsR0FBRyxFQUFFO1FBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDO0lBQ3pELENBQUMsQ0FBQztTQUNELEtBQUssQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO1FBQ2IsT0FBTyxDQUFDLEtBQUssQ0FBQyxxQ0FBcUMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUM1RCxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxDQUFDIn0=