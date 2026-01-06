const { fetchEventsForCity } = require("../services/ticketmasterSyncService");
const { SUPPORTED_CITIES } = require("../constants/supportedCities");

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

          // NOTE: NEED TO ADD STEP FOR TRIGGER NOTIFICATIONS HERE LATER INCLUDING NOTIFICATION COUNT TO SUMMARY

          // return summary of what happened
          res.status(200).json({
               message: "Sync completed successfully",
               totalNewEvents: allNewEventIds.length,
               cities: syncResults,
          });
     } catch (error) {
          next(error);
     }
};
