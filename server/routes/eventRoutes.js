const express = require("express");
const router = express.Router();
const eventController = require("../controllers/eventController");
const authTokenCheck = require("../middlewares/authTokenCheck");

router.use(authTokenCheck);

//SAVED EVENT ROUTES

// ADD SAVED EVENTS
router.post("/saved-event", eventController.addSavedEvent);

// DELETE SAVED EVENTS
router.delete("/saved-event", eventController.deleteSavedEvent);

// DISPLAY SAVED EVENTS
router.get("/saved-event", eventController.getSavedEvents);

//SEARCH EVENT ROUTES

router.get("/search", eventController.getSearchedEvents);

// UPCOMING EVENT ROUTES

router.get("/upcoming", eventController.getUpcomingEventsByCity);

module.exports = router;
