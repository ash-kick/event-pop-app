const mongoose = require("mongoose");

// THIS SCHEMA WILL STORE ALL LOCATION OPTION DATA FOR APP CURRENTLY
const locationSchema = new mongoose.Schema({
     locationName: {
          type: String,
          required: true,
     },
     locationCity: {
          type: String,
          required: true,
     },
     locationState: {
          type: String,
          required: true,
     },
     createdAt: {
          type: Date,
          default: Date.now,
     },
     editedAt: {
          type: Date,
     },
});

module.exports = mongoose.model("Location", locationSchema);
