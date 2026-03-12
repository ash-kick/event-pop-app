const express = require("express");
const router = express.Router();
const healthController = require("../controllers/healthController");

// ALL ROUTES RELATED TO APP HEALTH

//POST wake up db
router.get("/wake-up", healthController.wakeUpDb);

module.exports = router;
