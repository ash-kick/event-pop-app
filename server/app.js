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
app.use(cors());
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
