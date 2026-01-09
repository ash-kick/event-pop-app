const { fetchEventsForCity } = require("../services/ticketmasterSyncService");
const { SUPPORTED_CITIES } = require("../constants/supportedCities");
const { matchEventsToPreferences } = require("../services/notificationService");
const EventPreference = require("../models/eventPreference");
const dayjs = require("dayjs");

exports.syncAllCities = async (req, res, next) => {
     try {
          // creating constants for storing outputs/results
          const allNewEventIds = [];
          const syncResults = [];

          // update preferences where eventThroughPreference is in the past to prevent missing notifications
          const today = new Date();
          today.setHours(0, 0, 0, 0); // Set to midnight for consistent comparison
          const threeMonthsOut = dayjs().add(3, "month").startOf("day").toDate();

          const updateResult = await EventPreference.updateMany(
               { eventThroughPreference: { $lte: today } },
               {
                    $set: {
                         eventThroughPreference: threeMonthsOut,
                         editedAt: new Date(),
                    },
               }
          );
          if (updateResult.modifiedCount > 0) {
               console.log(`Updated ${updateResult.modifiedCount} preferences with expired eventThroughPreference dates`);
          }

          // loop through the supported cities
          for (const cityName of SUPPORTED_CITIES) {
               console.log(`Starting sync for ${cityName}...`);
               // call the sync api service
               const newEventIds = await fetchEventsForCity(cityName);
               // collect all results
               allNewEventIds.push(...newEventIds);
               syncResults.push({
                    city: cityName,
                    newEventsCount: newEventIds.length,
               });
          }

          // trigger notification service using new event ids
          const notificationResults = await matchEventsToPreferences(allNewEventIds);
          // return summary of what happened
          res.status(200).json({
               message: "Sync completed successfully",
               totalNewEvents: allNewEventIds.length,
               cities: syncResults,
               notificationsCreated: notificationResults.notificationsCreated,
               usersNotified: notificationResults.usersNotified,
          });
     } catch (error) {
          next(error);
     }
};
