const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
     // TO BE USED IN MVP FOR APP
     userName: {
          type: String,
          required: true,
          unique: true,
     },
     password: {
          type: String,
          required: true,
     },
     email: {
          type: String,
          required: true,
          unique: true,
     },
     userCity: {
          type: String,
          required: true,
          default: "San Francisco",
     },
     eventPreferencesId: { type: String },

     // FREINDS AND ALERTS FEATURES TO BE ADDED LATER, JUST FRIENDS PLACEHOLDER FOR NOW

     friends: {
          type: [
               {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "User",
               },
          ],
          default: [],
     },

     createdAt: {
          type: Date,
          default: Date.now,
     },
     editedAt: {
          type: Date,
     },
});

module.exports = mongoose.model("User", userSchema);
