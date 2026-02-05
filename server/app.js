require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./db");
const userRoutes = require("./routes/userRoutes");
const errorHandler = require("./middlewares/errorHandler");
const eventPreferenceRoutes = require("./routes/eventPreferenceRoutes");
const eventRoutes = require("./routes/eventRoutes");
const syncRoutes = require("./routes/syncRoutes");
const notificationRoutes = require("./routes/notificationRoutes");

// Define port usring .env file
const PORT = process.env.PORT || 3000;

// Define app with express
const app = express();

// Middlewear
// Cors set up
const allowedOrigins = [
     "http://localhost:5173",
     process.env.FRONTEND_URL,
   ].filter(Boolean);
   
   app.use(cors({
     origin: allowedOrigins,
     allowedHeaders: ["Content-Type", "Authorization"],
     methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
   }));
   
// Express set up
app.use(express.json());

// Connect to db
connectDB();

// Use the following routes for the app
app.use("/api/user", userRoutes);
app.use("/api/event-preferences", eventPreferenceRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/sync", syncRoutes);
app.use("/api/notifications", notificationRoutes);

// Use error handler
app.use(errorHandler);

// Start server

if (process.env.NODE_ENV !== "test"){
app.listen(PORT, () => {
     console.log(`Server running on port ${PORT}`);
});
}

module.exports = app;
