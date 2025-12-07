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
     eventPreferencesId: { type: String },

     // FOR FUTURE STATE OF APP TO BE CREATED MODELS
     alertsId: { type: String },
     friendsId: { type: String },

     createdAt: {
          type: Date,
          default: Date.now,
     },
     editedAt: {
          type: Date,
     },
});

module.exports = mongoose.model("User", userSchema);
