const { ObjectId } = require("mongoose").Types;
const { userId1, userId2, userId3, userId4 } = require("./users");

const testPreferences = [
     {
          _id: new ObjectId(),
          userId: userId1,
          eventTypes: [eventTypeId1, eventTypeId2],
          locations: [locationId1, locationId2],
          musicPreferences: {
               musicGenres: [musicGenreId1, musicGenreId2],
               musicVenues: [musicVenueId1, musicVenueId2],
          },
          dateSpanStart: new Date("2024-11-20"),
          dateSpanEnd: new Date("2025-12-31"),
          createdAt: new Date("2024-01-15"),
          editedAt: new Date("2024-11-20"),
     },
     {
          _id: new ObjectId(),
          userId: userId2,
          eventTypes: [eventTypeId1, eventTypeId3],
          locations: [locationId2, locationId3],
          musicPreferences: {
               musicGenres: [musicGenreId2, musicGenreId3],
               musicVenues: [musicVenueId2, musicVenueId3],
          },
          dateSpanStart: new Date("2024-12-01"),
          dateSpanEnd: new Date("2025-06-30"),
          createdAt: new Date("2024-02-10"),
          editedAt: new Date("2024-11-18"),
     },
     {
          _id: new ObjectId(),
          userId: userId3,
          eventTypes: [eventTypeId2],
          locations: [locationId1],
          musicPreferences: {
               musicGenres: [musicGenreId1, musicGenreId4],
               musicVenues: [musicVenueId1],
          },
          dateSpanStart: new Date("2024-11-25"),
          dateSpanEnd: new Date("2025-03-31"),
          createdAt: new Date("2024-03-05"),
          editedAt: new Date("2024-11-15"),
     },
];
