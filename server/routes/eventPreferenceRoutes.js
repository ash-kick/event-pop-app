const express = require("express");
const router = express.Router();
const EventPreference = require("../models/eventPreference");
const eventPreferenceController = require("../controllers/eventPreferenceController");
const authTokenCheck = require("../middlewares/authTokenCheck");

// ALL ROUTES RELATED TO EVENT PREFERENCE DATA

router.use(authTokenCheck);

// note that create preference is handled by the user route create user

//PATCH update event preferences for user
router.patch("/", eventPreferenceController.updatePreference);

//GET display event preferenes for a user
router.get("/", eventPreferenceController.displayPreference);

module.exports = router;
