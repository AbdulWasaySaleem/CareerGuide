import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js"; // Import the database connection
import questionRoute from "./routes/questionRoute.js"; // Import the question route
import userRoutes from "./routes/userRoute.js";
import careerRoute from "./routes/careerRoute.js"; // Import the career route
import { insertQuestions } from "./scripts/insertQuestion.js";
import { insertCareerData } from "./scripts/careerdata.js";

dotenv.config();

// Connect to the database
connectDB();

// Initialize express
const app = express();

// Middleware to parse JSON requests and allow cross-origin requests
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/questions", questionRoute);
app.use("/api/users", userRoutes);
app.use("/api/career", careerRoute);


//insertQuestions()
//insertCareerData()

// Health check route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Set the port from environment variables or default to 3000
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
