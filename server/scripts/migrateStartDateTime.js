require("dotenv").config({ path: require("path").resolve(__dirname, "../../.env") });
const mongoose = require("mongoose");

const run = async () => {
     try {
          await mongoose.connect(process.env.MONGODB_URI);
          console.log("Connected to MongoDB");

          const result = await mongoose.connection.collection("events").updateMany(
               { startDateTimeUTC: { $exists: true, $ne: null } },
               [{ $set: { startDateTime: { $toDate: "$startDateTimeUTC" } } }]
          );

          console.log(`Migration complete: ${result.modifiedCount} events updated out of ${result.matchedCount} matched`);
     } catch (error) {
          console.error("Migration failed:", error);
     } finally {
          await mongoose.disconnect();
     }
};

run();
