require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./db");
const userRoutes = require("./routes/userRoutes");
const errorHandler = require("./middlewares/errorHandler");
const eventPreferenceRoutes = require("./routes/eventPreferenceRoutes");

// Define port usring .env file
const PORT = process.env.PORT || 3000;

// Define app with express
const app = express();

// Middlewear
app.use(cors());
app.use(express.json());
app.use(errorHandler);

// Connect to db
connectDB();

// Use the following routes for the app
app.use("/api/user", userRoutes);
app.use("/api/event-preferences", eventPreferenceRoutes);

// Start server
app.listen(PORT, () => {
     console.log(`Server running on port ${PORT}`);
});

module.exports = app;
