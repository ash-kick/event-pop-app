const mongoose = require("mongoose");

// THIS SCHEMA WILL STORE ALL EVENT TYPES (concerts, sprots, arts-theatre, family)
const eventTypeSchema = new mongoose.Schema({
     eventTypeName: {
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

module.exports = mongoose.model("EventType", eventTypeSchema);
