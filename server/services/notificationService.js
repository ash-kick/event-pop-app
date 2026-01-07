const Notification = require("../models/notifications");
const EventPreference = require("../models/eventPreference");
const Event = require("../models/event");

// LEFT OFF HERE, NEED TO ADD NOTIFICATION SERVICE LOGIC

const matchEventsToPreferences = async (newEventIds) => {
     if (!newEventIds || newEventIds.length === 0) {
          console.log("No new events to match for notifications.");
          return { notificationsCreated: 0, usersNotified: 0 };
     }

     try {
          // FIND ALL USERS WHO HAVE ALERTS SET TO TRUE IN THEIR EVENT PREFERENCES
          const usersWithAlerts = await EventPreference.find({ alertsOn: true }).populate("userId");
          if (usersWithAlerts.length === 0) {
               console.log("No users have alerts enabled!");
               return { notificationsCreated: 0, usersNotified: 0 };
          }
          // GET ALL NEW EVENTS AND THEIR DETAILS
          const newEvents = await Event.find({ _id: { $in: newEventIds } });
          if (newEvents.length === 0) {
               console.log("No events found for provided IDs");
               return { notificationsCreated: 0, usersNotified: 0 };
          }
          // CREATE VARIABLES FOR TRACKING NOTIFICATIONS
          const notificationsToCreate = [];
          let usersNotifiedCount = 0;
          // COMPARE PREFERENCES TO EVENTS AND CREATE A NOTIFICATION FOR THAT USER
          for (const preference of usersWithAlerts) {
               const userId = preference.userId;
               let userHasMatches = false;

               for (const event of newEvents) {
                    if (doesEventMatchPreferences(event, preference)) {
                         notificationsToCreate.push({
                              userId: userId,
                              eventId: event._id,
                         });
                         userHasMatches = true;
                    }
               }
               if (userHasMatches) {
                    usersNotifiedCount++;
               }
          }
          if (notificationsToCreate.length > 0) {
               await Notification.insertMany(notificationsToCreate);
               console.log(`Created ${notificationsToCreate.length} notifications for ${usersNotifiedCount} users.`);
          } else {
               console.log("No events matched any user preferences.");
          }
          return {
               notificationsCreated: notificationsToCreate.length,
               usersNotified: usersNotifiedCount,
          };
     } catch (err) {
          console.error("Error matchnig events to preferences", err);
          throw err;
     }
};
