const mongoose = require("mongoose");

const getEightWeeksOut = () => {
     let today = new Date();
     let eightWeeksOut = new Date(today);
     eightWeeksOut.setDate(today.getDate() + 56);
     return eightWeeksOut;
};

// THIS SCHEMA WILL STORE USER PREFERENCES FOR EVENTS
const eventPreferenceSchema = new mongoose.Schema({
     userId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
          required: true,
          index: true,
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
          type: String,
          required: true,
     },
     eventStartDatePreference: {
          type: Date,
          default: Date.now,
     },
     eventEndDatePreference: {
          type: Date,
          default: getEightWeeksOut,
     },
     // FOR A FUTURE VERSION OF THE APP
     alertsOn: {
          type: Boolean,
          default: false,
          required: true,
          index: true,
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
