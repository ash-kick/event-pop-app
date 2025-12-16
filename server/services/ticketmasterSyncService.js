const mongoose = require("mongoose");
const Event = require("../models/event");
const axios = require("axios");
const { zonedTimeToUtc } = require("date-fns-tz");
const { CITY_TIMEZONES } = require("../constants/supportedCities");

const TICKETMASTER_EVENTS_BASE_URL = "https://app.ticketmaster.com/discovery/v2/events.json?";
const TICKETMASTER_API_KEY = process.env.TICKETMASTER_API_KEY;

const today = new Date();

// fetch events for a particular city filter
const fetchEventsForCity = async (cityName) => {
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
               // create page related variables for looping through api response pages
               let pageNumber = 0;
               let hasMorePagesLeft = true;

               // pagination loop
               while (hasMorePagesLeft) {
                    // ticket master api call full url inclues start date time
                    let URL = `${TICKETMASTER_EVENTS_BASE_URL}apikey=${TICKETMASTER_API_KEY}&startDateTime=${dateRange.start}&endDateTime=${dateRange.end}&city=${cityName}&page=${pageNumber}&size=20`;
                    const response = await axios.get(URL);
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
                                                  event.images.find((image) => image.height > 600 && image.height < 800)?.url || event.images[0]?.url,
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
                    if (response.data._links?.next && pageNumber < response.data.page.totalPages - 1) {
                         hasMorePagesLeft = true;
                         pageNumber++;
                    } else {
                         hasMorePagesLeft = false;
                    }

                    // add a little pause between requests
                    await new Promise((resolve) => setTimeout(resolve, 200));
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
          // call bulk operations to run upserting and deleting
          await Event.bulkWrite(bulkOperations);
          console.log(`Sync complete for ${cityName}: ${allEventIds.length} events have been processed!`);

          // catch any errors next
     } catch (error) {
          console.log("Error fetching data...");
          console.log("Full error response:", error.response?.data || error);
     }
};

module.exports = { fetchEventsForCity };
