const Notification = require("../models/notifications");

// GET NOTIFICATIONS FOR A PARTICULAR USER
exports.getNotifications = async (req, res, next) => {
     try {
          // get notifications for user and populate event info -- note: planning to filter on the front end for read vs unread
          const userNotifications = await Notification.find({ userId: req.user.id }).populate("eventId").sort({ createdAt: -1 });
          // if there are no notifications return empty notifications and message stating this
          if (userNotifications.length === 0) {
               return res.status(200).json({
                    notifications: [],
                    message: "No notifications found",
               });
          }
          // if there are notificaitions return them
          return res.status(200).json({
               notifications: userNotifications,
          });
     } catch (err) {
          console.log("Could not retrieve notifications.");
          next(err);
     }
};

// MARK A SINGLE NOTIFICATION AS READ
exports.markOneNotificationRead = async (req, res, next) => {
     try {
          const targetNotification = await Notification.findOneAndUpdate(
               { _id: req.params.id, userId: req.user.id },
               { read: true, updatedAt: new Date() },
               { new: true }
          );
          if (!targetNotification) {
               return res.status(404).json({ message: "Notification not found" });
          }

          res.status(200).json({ message: "Notification marked as read", notification: targetNotification });
     } catch (err) {
          next(err);
     }
};
// MARK ALL NOTIFICATIONS AS READ
exports.markAllNotificationsRead = async (req, res, next) => {
     try {
          const allNotifications = await Notification.updateMany({ userId: req.user.id, read: false }, { read: true, updatedAt: new Date() });
          res.status(200).json({
               message: "All notifications marked as read",
               updatedCount: allNotifications.modifiedCount,
          });
     } catch (err) {
          next(err);
     }
};
