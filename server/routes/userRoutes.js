const express = require("express");
const router = express.Router();
const User = require("../models/user");
const userController = require("../controllers/userController");

// ALL ROUTES RELATED TO USER DATA

//POST create an account (user)
router.post("/register", userController.registerUser);

module.exports = router;
