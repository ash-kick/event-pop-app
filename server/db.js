const mongoose = require("mongoose");

const connectDB = async () => {

          // Skip connection in test environment (tests will handle their own connection)
          if (process.env.NODE_ENV === "test") {
               return;
          }
     try {
          const connect = await mongoose.connect(process.env.MONGODB_URI);
          console.log(`Mongo DB connected: ${connect.connection.host}`);
     } catch (error) {
          console.error("Error connecting to db", error);
     }
};

module.exports = connectDB;
