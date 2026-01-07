const { fetchEventsForCity } = require("../services/ticketmasterSyncService");
const { SUPPORTED_CITIES } = require("../constants/supportedCities");
const { matchEventsToPreferences } = require("../services/notificationService");

exports.syncAllCities = async (req, res, next) => {
     try {
          // creating constants for storing outputs/results
          const allNewEventIds = [];
          const syncResults = [];

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
