// require("dotenv").config();
// const connectDB = require("../db");
// const { fetchEventsForCity } = require("./ticketmasterSyncService");
// const { SUPPORTED_CITIES } = require("../constants/supportedCities");

// (async () => {
//      await connectDB();
//      console.log("Database connected, starting sync...");
//      for (const cityName of SUPPORTED_CITIES) {
//           await fetchEventsForCity(cityName);
//           await new Promise((resolve) => setTimeout(resolve, 100));
//      }
//      console.log("Sync complete!");
//      process.exit(0);
// })();

// this is my test script for loading mongo db initially, not to be used long term
