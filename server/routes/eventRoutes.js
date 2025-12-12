const express = require("express");
const router = express.Router();
const eventController = require("../controllers/eventController");
const authTokenCheck = require("../middlewares/authTokenCheck");

router.use(authTokenCheck);

//SAVED EVENT ROUTES

// add saved event
router.post("/saved-event", eventController.addSavedEvent);

// delete saved event
router.delete("/saved-event", eventController.deleteSavedEvent);

// display saved event
router.get("/saved-event", eventController.getSavedEvents);

//SEARCH EVENT ROUTES

router.get("/search", eventController.getSearchedEvents);

// UPCOMING EVENT ROUTES

// get upcoming events based on user location and current date

module.exports = router;
