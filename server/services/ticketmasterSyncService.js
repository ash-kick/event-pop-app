const Event = require("../models/event");
const ApiSyncLog = require("../models/apiSyncLog");
const axios = require("axios");
const { zonedTimeToUtc } = require("date-fns-tz");
const { CITY_TIMEZONES } = require("../constants/supportedCities");

const TICKETMASTER_EVENTS_BASE_URL = "https://app.ticketmaster.com/discovery/v2/events.json?";
const TICKETMASTER_API_KEY = process.env.TICKETMASTER_API_KEY;
const MAX_ITEMS_LIMIT = 1000;
const PAGE_SIZE = 20;
const MAX_PAGE = Math.floor((MAX_ITEMS_LIMIT - 1) / PAGE_SIZE);

const today = new Date();

// fetch events for a particular city filter
const fetchEventsForCity = async (cityName) => {
     // create sync log for this api call
     const syncStartTime = new Date();
     let apiCallCount = 0;
     const syncLog = new ApiSyncLog({
          cityName: cityName,
          startTime: syncStartTime,
          status: "success", // default value can update this later if it fails instead
     });
     await syncLog.save();

     // pull the correct UTC version of today's date by timezone for the city
     const cityTimezone = CITY_TIMEZONES[cityName];
     const cityDateStr = new Date().toLocaleDateString("en-CA", { timeZone: cityTimezone });
     const cityMidnight = new Date(`${cityDateStr}T00:00:00`);
     const cityTodayUTC = zonedTimeToUtc(cityMidnight, cityTimezone);

     // adding date range definitions to later limit the number of API results to be less than 1000 will start with 3 months
     const dateRanges = Array.from({ length: 3 }, (_, i) => {
          const start = new Date(cityTodayUTC);
          // Set to first of the month, then add months to avoid end of month date descrepancies
          start.setDate(1);
          start.setMonth(start.getMonth() + i);
          const end = new Date(start);
          end.setMonth(end.getMonth() + 1);
          return {
               start: start.toISOString().split(".")[0] + "Z",
               end: end.toISOString().split(".")[0] + "Z",
          };
     });

     // fetch events
     try {
          // creating bulk operations array for use later
          const bulkOperations = [];

          // create array to hold all event ids in preparation for delete function
          const allEventIds = [];

          for (const dateRange of dateRanges) {
               console.log(`Starting sync for city: ${cityName} for date range: ${dateRange.start} to ${dateRange.end}`);
               // create page related variables for looping through api response pages
               let pageNumber = 0;
               let hasMorePagesLeft = true;
               let hitItemLimit = false;

               // pagination loop
               while (hasMorePagesLeft && !hitItemLimit) {
                    // check if next page would go over ticketmaster item limit
                    const currentItemCount = PAGE_SIZE * pageNumber;
                    if (currentItemCount >= MAX_ITEMS_LIMIT) {
                         console.log(
                              `Reached ticketmaster API item limit ${MAX_ITEMS_LIMIT} for ${cityName} with date range ${dateRange.start} to ${dateRange.end}`
                         );
                         hitItemLimit = true;
                         break;
                    }
                    // check if next page would go over ticket master page limit
                    if (pageNumber > MAX_PAGE) {
                         console.log(
                              `Reached ticketmaster API page limit ${MAX_PAGE} for ${cityName} with date range ${dateRange.start} to ${dateRange.end}`
                         );
                         hitItemLimit = true;
                         break;
                    }

                    // ticket master api call full url inclues start date time
                    try {
                         let URL = `${TICKETMASTER_EVENTS_BASE_URL}apikey=${TICKETMASTER_API_KEY}&startDateTime=${dateRange.start}&endDateTime=${dateRange.end}&city=${cityName}&page=${pageNumber}&size=${PAGE_SIZE}`;
                         const response = await axios.get(URL);
                         // track current api call, increment api call count value by one for sync log
                         apiCallCount++;
                         console.log("Pagination info:", {
                              page: response.data.page.number,
                              size: response.data.page.size,
                              totalElements: response.data.page.totalElements,
                              totalPages: response.data.page.totalPages,
                              hasNext: !!response.data._links?.next,
                         });
                         console.log("Events in this page:", cityName, response.data._embedded.events.length);

                         // add these events to the data base
                         const ticketMasterEvents = response.data._embedded.events;

                         // add all event ids to the event id array
                         allEventIds.push(...ticketMasterEvents.map((event) => event.id));

                         // using bulk write for upserts and deletes
                         // upsert logic
                         for (const event of ticketMasterEvents) {
                              // check for valid event date if there is none skip the event
                              let eventDate = null;
                              if (event.dates.start.localDate && event.dates.start.localTime) {
                                   eventDate = new Date(`${event.dates.start.localDate}T${event.dates.start.localTime}`);
                              } else if (event.dates.start.dateTime) {
                                   eventDate = new Date(event.dates.start.dateTime);
                              }
                              // if the date is invalid skip to next event; note that isNaN(eventDate) is meant to check if a bad date was passed
                              if (!eventDate || isNaN(eventDate)) {
                                   console.log(`Skipping event ${event.id} - no valid date found`);
                                   continue;
                              }

                              bulkOperations.push({
                                   updateOne: {
                                        filter: { ticketMasterEventId: event.id },
                                        update: {
                                             $set: {
                                                  ticketMasterEventId: event.id,
                                                  eventName: event.name,
                                                  ticketMasterUrl: event.url,
                                                  eventImageUrl:
                                                       event.images.find((image) => image.height > 600 && image.height < 800)?.url ||
                                                       event.images[0]?.url,
                                                  eventTypeId: event.classifications?.[0]?.segment?.id,
                                                  eventTypeName: event.classifications?.[0]?.segment?.name,
                                                  venueId: event._embedded.venues[0].id,
                                                  venueName: event._embedded.venues[0].name,
                                                  venueAddress: `${event._embedded.venues[0].address?.line1 || ""}${
                                                       event._embedded.venues[0].address?.line2 ? ", " + event._embedded.venues[0].address.line2 : ""
                                                  }, ${event._embedded.venues[0].city?.name}, ${event._embedded.venues[0].state?.stateCode}, ${
                                                       event._embedded.venues[0].country?.countryCode
                                                  }`,
                                                  startDateTimeUTC: event.dates.start.dateTime,
                                                  startDateTime: eventDate,
                                                  eventStatusCode: event.dates.status.code,
                                                  cityName: event._embedded.venues[0].city.name,
                                                  stateCode: event._embedded.venues[0].state.stateCode,
                                                  countryCode: event._embedded.venues[0].country.countryCode,
                                                  genreId: event.classifications?.[0]?.genre?.id,
                                                  genreName: event.classifications?.[0]?.genre?.name,
                                                  subGenreId: event.classifications?.[0]?.subGenre?.id,
                                                  subGenreName: event.classifications?.[0]?.subGenre?.name,
                                                  editedAt: today,
                                             },
                                             $setOnInsert: {
                                                  createdAt: today,
                                             },
                                        },
                                        upsert: true,
                                   },
                              });
                         }

                         // after bulk operations are added go ahead and set hasMorePagesLeft to be true or false
                         const nextPageItemCount = PAGE_SIZE * (pageNumber + 1);
                         if (!response.data._links?.next || pageNumber >= response.data.page.totalPages - 1 || nextPageItemCount >= MAX_ITEMS_LIMIT) {
                              hasMorePagesLeft = false;
                              if (nextPageItemCount >= MAX_ITEMS_LIMIT) {
                                   console.log(`Next page would exceed item limit. Stopping at page ${pageNumber} for ${cityName}`);
                              }
                         } else {
                              pageNumber++;
                         }
                    } catch (apiError) {
                         if (apiError.response?.status === 400 && apiError.response?.data?.fault?.faultstring?.includes("page")) {
                              console.log(`API error: Page ${pageNumber} exceeds limit for ${cityName}.`);
                              hitItemLimit = true;
                              break;
                         } else {
                              //rethrow other errors to be caught by outer try/catch block
                              throw apiError;
                         }
                    }
                    // add a little pause between requests
                    await new Promise((resolve) => setTimeout(resolve, 200));
               }
               // add warning if a limit has been hit and it's impacted the data pull
               if (hitItemLimit) {
                    console.log(
                         `Warning: Some events may have been skipped for ${cityName} in date range ${dateRange.start} to ${dateRange.end} due to API limits.`
                    );
               }
          }

          // delete logic
          const futureEventsToDelete = await Event.find({
               cityName: cityName,
               ticketMasterEventId: { $nin: allEventIds },
               startDateTime: { $gte: cityTodayUTC },
          });
          for (const event of futureEventsToDelete) {
               bulkOperations.push({
                    deleteOne: {
                         filter: { ticketMasterEventId: event.ticketMasterEventId },
                    },
               });
          }
          // the following will be used for notificaitons
          // query existing events to see which are new
          const existingEvents = await Event.find({
               ticketMasterEventId: { $in: allEventIds },
          })
               .select("ticketMasterEventId")
               .lean();
          // create a set with existing ids
          const existingIdsSet = new Set(existingEvents.map((e) => e.ticketMasterEventId));
          // filter down to anything not in the existing id set
          const newTicketMasterEventIds = allEventIds.filter((id) => !existingIdsSet.has(id));

          // call bulk operations to run upserting and deleting
          await Event.bulkWrite(bulkOperations);
          console.log(`Sync complete for ${cityName}: ${allEventIds.length} events have been processed!`);

          // get mongodb ids for the new events now that write is complete
          const newEvents = await Event.find({
               ticketMasterEventId: { $in: newTicketMasterEventIds },
          })
               .select("_id")
               .lean();

          // create constant to hold new event ids in the mongo db format
          const newEventIds = newEvents.map((e) => e._id);
          console.log(`New events created: ${newEventIds.length} out of ${allEventIds.length} total events`);

          // update log post successful call
          const syncEndTime = new Date();
          await ApiSyncLog.findByIdAndUpdate(syncLog._id, {
               endTime: syncEndTime,
               duration: syncEndTime - syncStartTime,
               apiCallCount: apiCallCount,
               eventsProcessed: allEventIds.length,
               newEventsCount: newEventIds.length,
               status: "success",
          });

          // return the new event IDs (MongoDB _ids) for notification matching
          return newEventIds;
     } catch (error) {
          console.log("Error fetching data...");
          console.log("Full error response:", error.response?.data || error);

          // update sync log with error post call fail
          await ApiSyncLog.findByIdAndUpdate(syncLog._id, {
               endTime: new Date(),
               duration: new Date() - syncStartTime,
               apiCallCount: apiCallCount,
               eventsProcessed: allEventIds?.length || 0,
               status: "error",
               errorMessage: error.message || "Unknown error",
          });
          // return empty array, no new events for notifications
          return [];
     }
};

module.exports = { fetchEventsForCity };
