const express = require("express");
const router = express.Router();
const syncController = require("../controllers/syncController");

// ADD SYNC EVENTS ROUTE -- note: currently no authentication here
router.post("/all-cities", syncController.syncAllCities);

module.exports = router;
