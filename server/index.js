require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./db");

const app = express();

// Middlewear
app.use(cors());
app.use(express.json());

// Connect to db
connectDB();

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
     console.log(`Server running on port ${PORT}`);
});
