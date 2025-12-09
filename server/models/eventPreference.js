const mongoose = require("mongoose");

const getEightWeeksOut = () => {
     let today = new Date();
     let eightWeeksOut = new Date(today);
     eightWeeksOut.setDate(today.getDate() + 56);
     return eightWeeksOut;
};

// THIS SCHEMA WILL STORE ALL EVENT TYPES CALLED SEGMENTS BY TM (concerts, sprots, arts-theatre, family)
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
          default: getEightWeeksOut,
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
