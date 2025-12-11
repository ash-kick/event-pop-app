require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./db");
const userRoutes = require("./routes/userRoutes");

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
app.use("/api/users", userRoutes);

// Start server
app.listen(PORT, () => {
     console.log(`Server running on port ${PORT}`);
});

module.exports = app;
