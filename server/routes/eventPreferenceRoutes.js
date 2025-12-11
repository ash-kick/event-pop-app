const express = require("express");
const router = express.Router();
const EventPreference = require("../models/eventPreference");
const eventPreferenceController = require("../controllers/eventPreferenceController");

// ALL ROUTES RELATED TO EVENT PREFERENCE DATA

// note that create preference is handled by the user route create user

//POST update event preferences for user
router.post("/update", eventPreferenceController.updatePreference);

module.exports = router;
