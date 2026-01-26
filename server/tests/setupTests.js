// THIS FILE IS MEANT TO RUN BEFORE ALL TESTS

// Set the node env to test before anything else
process.env.NODE_ENV = "test";
// Load environment variables
require("dotenv").config();
const mongoose = require("mongoose");
const User = require("../models/user");
const EventPreference = require("../models/eventPreference");

// Connect to test database before all tests
beforeAll(async () => {
     const testDbUri = process.env.MONGODB_URI_TEST;
     // Check if the test db uri exists, throw error if not
     if (!testDbUri) {
          throw new Error("Could not connect to MONGODB_URI_TEST, check that it is set in .env file");
     }
     
     // Disconnect if already connected
     if (mongoose.connection.readyState !== 0) {
          await mongoose.disconnect();
     }
     
     await mongoose.connect(testDbUri);
     console.log("Connected successfully to test database!");
});

// After all tests have run close the db connection
afterAll(async () => {
    if (mongoose.connection.readyState !== 0) {
         await mongoose.connection.close();
         console.log("Test database connection closed");
    }
});