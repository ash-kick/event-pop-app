const mongoose = require("mongoose");

const apiSyncLogSchema = new mongoose.Schema(
     {
          cityName: { type: String, required: true },
          startTime: { type: Date, required: true },
          endTime: Date,
          duration: Number,
          apiCallCount: { type: Number, default: 0 },
          eventsProcessed: { type: Number, default: 0 },
          newEventsCount: { type: Number, default: 0 },
          status: { type: String, enum: ["success", "error"], required: true },
          errorMessage: String,
     },
     { timestamps: true }
);

module.exports = mongoose.model("ApiSyncLog", apiSyncLogSchema);
