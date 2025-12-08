const mongoose = require("mongoose");

// THIS SCHEMA WILL STORE ALL EVENTS
const eventSchema = new mongoose.Schema({
     eventName: {
          type: String,
          required: true,
          index: true, // adding index here for searching by name
     },
     ticketMasterEventId: {
          type: String,
          required: true,
          unique: true,
     },
     ticketMasterUrl: {
          type: String,
          required: true,
     },
     eventImageUrl: {
          type: String,
     },
     // The following two fields are called segment not event type by TM
     eventTypeId: {
          type: String,
          index: true,
     },
     eventTypeName: {
          type: String,
     },
     venueId: {
          type: String,
          index: true,
     },
     venueName: {
          type: String,
     },
     venueAddress: {
          type: String,
     },
     startDateTime: {
          type: Date,
     },
     endDateTime: {
          type: Date,
     },
     onsaleOnStartDate: {
          type: Date,
     },
     preSaleDateTime: {
          type: Date,
     },
     stateCode: {
          type: String,
          index: true,
     },
     cityName: {
          type: String,
          index: true,
     },
     countryCode: {
          type: String,
     },
     genreId: {
          type: String,
     },
     genreName: {
          type: String,
     },
     subGenreId: {
          type: String,
     },
     subGenreName: {
          type: String,
     },
     createdAt: {
          type: Date,
          default: Date.now,
     },
     editedAt: {
          type: Date,
     },
});

module.exports = mongoose.model("Event", eventSchema);
