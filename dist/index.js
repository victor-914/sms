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
app.use(cors(corsOptions));
app.use(express.json());
const uri = process.env.DATABASE_URL;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxPQUFPLE1BQU0sU0FBUyxDQUFDO0FBQzlCLE9BQU8sVUFBVSxNQUFNLHVDQUF1QyxDQUFDO0FBQy9ELE9BQU8sUUFBUSxNQUFNLFVBQVUsQ0FBQztBQUNoQyxPQUFPLFlBQVksTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxTQUFTLE1BQU0sb0JBQW9CLENBQUM7QUFDM0MsT0FBTyxNQUFNLE1BQU0sUUFBUSxDQUFDO0FBQzVCLE9BQU8sSUFBSSxNQUFNLE1BQU0sQ0FBQztBQUN4QixPQUFPLFlBQVksTUFBTSxtQ0FBbUMsQ0FBQztBQUM3RCxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFaEIsTUFBTSxpQkFBaUIsR0FBRztJQUN4QixPQUFPLEVBQUUsT0FBTztJQUNoQixJQUFJLEVBQUU7UUFDSixLQUFLLEVBQUUsa0NBQWtDO1FBQ3pDLE9BQU8sRUFBRSxPQUFPO1FBQ2hCLFdBQVcsRUFDVCxxRkFBcUY7UUFDdkYsT0FBTyxFQUFFO1lBQ1AsSUFBSSxFQUFFLG9CQUFvQjtZQUMxQixHQUFHLEVBQUUsb0NBQW9DO1NBQzFDO1FBQ0QsT0FBTyxFQUFFO1lBQ1AsSUFBSSxFQUFFLFNBQVM7WUFDZixHQUFHLEVBQUUsb0JBQW9CO1NBQzFCO0tBQ0Y7SUFDRCxPQUFPLEVBQUU7UUFDUDtZQUNFLEdBQUcsRUFBRSx1QkFBdUI7WUFDNUIsV0FBVyxFQUFFLG9CQUFvQjtTQUNsQztLQUNGO0NBQ0YsQ0FBQztBQUVGLE1BQU0sT0FBTyxHQUFHO0lBQ2QsaUJBQWlCO0lBQ2pCLElBQUksRUFBRSxDQUFDLHVCQUF1QixDQUFDO0NBQ2hDLENBQUM7QUFFRixNQUFNLFdBQVcsR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7QUFFMUMsTUFBTSxHQUFHLEdBQUcsT0FBTyxFQUFFLENBQUM7QUFDdEIsTUFBTSxXQUFXLEdBQUc7SUFDbEIsTUFBTSxFQUFFLEdBQUc7Q0FDWixDQUFDO0FBRUYsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztBQUUzQixHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBRXhCLE1BQU0sR0FBRyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBc0IsQ0FBQztBQUMvQyxNQUFNLElBQUksR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUM7QUFFdEMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsVUFBVSxDQUFDLENBQUM7QUFDakMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsWUFBWSxDQUFDLENBQUM7QUFFbkMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLEtBQUssRUFBRSxTQUFTLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7QUFFaEUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTZCLElBQUksRUFBRSxDQUFDLENBQUM7SUFDakQsUUFBUTtTQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUM7U0FDWixJQUFJLENBQUMsR0FBRyxFQUFFO1FBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDO0lBQ3pELENBQUMsQ0FBQztTQUNELEtBQUssQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO1FBQ2IsT0FBTyxDQUFDLEtBQUssQ0FBQyxxQ0FBcUMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUM1RCxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxDQUFDIn0=