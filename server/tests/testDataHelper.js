const Event = require("../models/event");
const request = require("supertest");
const app = require("../app")


async function createTestEvents(){
const testEventData = [
    {
      eventName: "Odesza: The Last Goodbye Tour",
      ticketMasterEventId: "TM_TEST_001",
      ticketMasterUrl: "https://www.ticketmaster.com/event/TM_TEST_001",
      eventImageUrl: "https://example.com/images/odesza.jpg",
      eventTypeId: "KZFzniwnSyZfZ7v7nJ",
      eventTypeName: "Music",
      venueId: "VENUE_001",
      venueName: "Chase Center",
      venueAddress: "1 Warriors Way",
      startDateTimeUTC: new Date("2026-03-15T03:00:00Z"),
      startDateTime: new Date("2026-03-14T20:00:00-07:00"),
      eventStatusCode: "onsale",
      cityName: "San Francisco",
      stateCode: "CA",
      countryCode: "US",
      genreId: "KnvZfZ7vAvF",
      genreName: "Electronic",
      subGenreId: "KZazBEonSMnZfZ7vAvF",
      subGenreName: "Dance / Electronic"
    },
    {
      eventName: "Golden State Warriors vs LA Lakers",
      ticketMasterEventId: "TM_TEST_002",
      ticketMasterUrl: "https://www.ticketmaster.com/event/TM_TEST_002",
      eventImageUrl: "https://example.com/images/warriors-lakers.jpg",
      eventTypeId: "KZFzniwnSyZfZ7v7nE",
      eventTypeName: "Sports",
      venueId: "VENUE_002",
      venueName: "Chase Center",
      venueAddress: "1 Warriors Way",
      startDateTimeUTC: new Date("2026-02-10T03:30:00Z"),
      startDateTime: new Date("2026-02-09T19:30:00-08:00"),
      eventStatusCode: "onsale",
      cityName: "San Francisco",
      stateCode: "CA",
      countryCode: "US",
      genreId: "KnvZfZ7vAdI",
      genreName: "Basketball",
      subGenreId: "KZazBEonSMnZfZ7vAdI",
      subGenreName: "NBA"
    },
    {
      eventName: "Outside Lands Music & Arts Festival - Day 1",
      ticketMasterEventId: "TM_TEST_003",
      ticketMasterUrl: "https://www.ticketmaster.com/event/TM_TEST_003",
      eventImageUrl: "https://example.com/images/outsidelands.jpg",
      eventTypeId: "KZFzniwnSyZfZ7v7nJ",
      eventTypeName: "Music",
      venueId: "VENUE_003",
      venueName: "Golden Gate Park",
      venueAddress: "501 Stanyan St",
      startDateTimeUTC: new Date("2026-08-08T19:00:00Z"),
      startDateTime: new Date("2026-08-08T12:00:00-07:00"),
      eventStatusCode: "onsale",
      cityName: "San Francisco",
      stateCode: "CA",
      countryCode: "US",
      genreId: "KnvZfZ7vAvl",
      genreName: "Rock",
      subGenreId: "KZazBEonSMnZfZ7vAvl",
      subGenreName: "Alternative Rock"
    },
    {
        eventName: "Taylor Swift | The Eras Tour",
        ticketMasterEventId: "TM_TEST_LA_001",
        ticketMasterUrl: "https://www.ticketmaster.com/event/TM_TEST_LA_001",
        eventImageUrl: "https://example.com/images/taylor-swift-eras.jpg",
        eventTypeId: "KZFzniwnSyZfZ7v7nJ",
        eventTypeName: "Music",
        venueId: "VENUE_LA_001",
        venueName: "SoFi Stadium",
        venueAddress: "1001 Stadium Dr",
        startDateTimeUTC: new Date("2026-07-26T03:00:00Z"),
        startDateTime: new Date("2026-07-25T20:00:00-07:00"),
        eventStatusCode: "onsale",
        cityName: "Los Angeles",
        stateCode: "CA",
        countryCode: "US",
        genreId: "KnvZfZ7vAeA",
        genreName: "Pop",
        subGenreId: "KZazBEonSMnZfZ7vAeA",
        subGenreName: "Pop"
      },
      {
        eventName: "Los Angeles Dodgers vs San Diego Padres",
        ticketMasterEventId: "TM_TEST_LA_002",
        ticketMasterUrl: "https://www.ticketmaster.com/event/TM_TEST_LA_002",
        eventImageUrl: "https://example.com/images/dodgers-padres.jpg",
        eventTypeId: "KZFzniwnSyZfZ7v7nE",
        eventTypeName: "Sports",
        venueId: "VENUE_LA_002",
        venueName: "Dodger Stadium",
        venueAddress: "1000 Vin Scully Ave",
        startDateTimeUTC: new Date("2026-06-05T02:10:00Z"),
        startDateTime: new Date("2026-06-04T19:10:00-07:00"),
        eventStatusCode: "onsale",
        cityName: "Los Angeles",
        stateCode: "CA",
        countryCode: "US",
        genreId: "KnvZfZ7vAdE",
        genreName: "Baseball",
        subGenreId: "KZazBEonSMnZfZ7vAdE",
        subGenreName: "MLB"
      },
      {
        eventName: "The Weeknd After Hours Til Dawn Tour",
        ticketMasterEventId: "TM_TEST_LA_003",
        ticketMasterUrl: "https://www.ticketmaster.com/event/TM_TEST_LA_003",
        eventImageUrl: "https://example.com/images/the-weeknd.jpg",
        eventTypeId: "KZFzniwnSyZfZ7v7nJ",
        eventTypeName: "Music",
        venueId: "VENUE_LA_003",
        venueName: "Crypto.com Arena",
        venueAddress: "1111 S Figueroa St",
        startDateTimeUTC: new Date("2026-04-18T03:30:00Z"),
        startDateTime: new Date("2026-04-17T20:30:00-07:00"),
        eventStatusCode: "offsale",
        cityName: "Los Angeles",
        stateCode: "CA",
        countryCode: "US",
        genreId: "KnvZfZ7vAee",
        genreName: "R&B",
        subGenreId: "KZazBEonSMnZfZ7vAee",
        subGenreName: "Contemporary R&B"
      }
  ]

  const createdTestEvents = await Event.insertMany(testEventData);

  return {
    events: createdTestEvents,
    eventIds: createdTestEvents.map(event => event._id.toString()),
    event0: createdTestEvents[0],
    event1: createdTestEvents[1],
    event2: createdTestEvents[2],
    event3: createdTestEvents[3],
    event4: createdTestEvents[4],
    event5: createdTestEvents[5]
  }

}

module.exports = {
    createTestEvents
}