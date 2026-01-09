const mongoose = require("mongoose");
const dayjs = require("dayjs");

const getThreeMonthsOut = () => {
     return dayjs().add(3, "month").startOf("day").toDate();
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
     eventThroughPreference: {
          type: Date,
          default: getThreeMonthsOut,
     },
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
