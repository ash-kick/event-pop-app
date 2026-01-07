const express = require("express");
const router = express.Router();
const notificationController = require("../controllers/notificationController");
const authTokenCheck = require("../middlewares/authTokenCheck");

router.use(authTokenCheck);
// ALL ROUTES RELATED TO NOTIFICATIONS

//GET all notification data for a particular user
router.get("/", notificationController.getNotifications);

//PATCH update notification to read
router.patch("/:id/read", notificationController.markOneNotificationRead);

//Patch update all unread notifications to read
router.patch("/read-all", notificationController.markAllNotificationsRead);

module.exports = router;
