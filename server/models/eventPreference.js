const mongoose = require("mongoose");

const getTomorrow = () => {
     let today = Date.now;
};

// THIS SCHEMA WILL STORE ALL EVENT TYPES (concerts, sprots, arts-theatre, family)
const eventPreferenceSchema = new mongoose.Schema({
     userId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
          required: true,
     },
     eventTypePreference: {
          type: [String],
          default: [],
     },
     eventTypeGenrePreference: {
          type: [String],
          default: [],
     },
     eventLocationPreference: {
          type: [String],
          default: [],
     },
     eventStartDatePreference: {
          type: Date,
          default: Date.now,
     },
     eventEndDatePreference: {
          type: Date,
          default: Date.now,
     },
     // FOR A FUTURE VERSION OF THE APP
     alertsOn: {
          type: Boolean,
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

module.exports = mongoose.model("EventPreference", eventPreferenceSchema);
