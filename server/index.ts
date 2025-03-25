import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/connectDB";
import router from "./routes/index";
import cookieParser from "cookie-parser";

// Load environment variables from .env file
dotenv.config();

// Validate required environment variables
if (
  !process.env.MONGODB_URL ||
  !process.env.FRONTEND_URL ||
  !process.env.PORT
) {
  console.error("Missing required environment variables.");
  process.exit(1);
}

const app = express();

// Middleware
app.use(cors({ origin: process.env.FRONTEND_URL, credentials: true }));
app.use(express.json());
app.use(cookieParser());

const PORT = process.env.PORT || 8080;

// Routes
app.get("/", (req, res) => {
  res.json({ message: `Server running on port ${PORT}` });
});

app.use("/api", router);

// Database connection and server start
connectDB()
  .then(() => {
    const server = app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });

    // Graceful shutdown
    process.on("SIGINT", () => {
      console.log("Shutting down server...");
      server.close(() => {
        console.log("Server closed.");
        process.exit(0);
      });
    });
  })
  .catch((error) => {
    console.error("Failed to connect to the database:", error);
    process.exit(1);
  });
