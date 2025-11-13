const testUser1 = {
     firstName: "Harry",
     lastName: "Potter",
     userName: "hpotter",
     email: "hpotter@hogwarts.com",
     password: "lumos731",
     locationId: "L92123",
};

const ticketMasterRawEventTest = {
     _embedded: {
          events: [
               {
                    name: "Magnitude/ Envision/ Firestarter/ Stand Tall/ Eliminators",
                    type: "event",
                    id: "rZ7HnEZ1AfQ7Fd",
                    test: false,
                    url: "https://www.ticketweb.com/event/magnitude-envision-firestarter-stand-tall-neck-of-the-woods-tickets/14684203",
                    locale: "en-us",
                    images: [
                         {
                              ratio: "3_2",
                              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_RETINA_PORTRAIT_3_2.jpg",
                              width: 640,
                              height: 427,
                              fallback: true,
                         },
                         {
                              ratio: "16_9",
                              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_RETINA_LANDSCAPE_16_9.jpg",
                              width: 1136,
                              height: 639,
                              fallback: true,
                         },
                         {
                              ratio: "3_2",
                              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_TABLET_LANDSCAPE_3_2.jpg",
                              width: 1024,
                              height: 683,
                              fallback: true,
                         },
                         {
                              url: "https://i.ticketweb.com/i/00/13/30/40/83_Edp.jpg?v=3",
                              width: 497,
                              height: 427,
                              fallback: false,
                         },
                         {
                              ratio: "16_9",
                              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                              width: 2048,
                              height: 1152,
                              fallback: true,
                         },
                         {
                              ratio: "16_9",
                              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_EVENT_DETAIL_PAGE_16_9.jpg",
                              width: 205,
                              height: 115,
                              fallback: true,
                         },
                         {
                              ratio: "16_9",
                              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_RETINA_PORTRAIT_16_9.jpg",
                              width: 640,
                              height: 360,
                              fallback: true,
                         },
                         {
                              ratio: "16_9",
                              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_TABLET_LANDSCAPE_16_9.jpg",
                              width: 1024,
                              height: 576,
                              fallback: true,
                         },
                         {
                              ratio: "16_9",
                              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_RECOMENDATION_16_9.jpg",
                              width: 100,
                              height: 56,
                              fallback: true,
                         },
                         {
                              ratio: "4_3",
                              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_CUSTOM.jpg",
                              width: 305,
                              height: 225,
                              fallback: true,
                         },
                         {
                              ratio: "3_2",
                              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_ARTIST_PAGE_3_2.jpg",
                              width: 305,
                              height: 203,
                              fallback: true,
                         },
                    ],
                    sales: {
                         public: {
                              startDateTime: "2025-11-11T18:35:00Z",
                              startTBD: false,
                              startTBA: false,
                              endDateTime: "2026-01-20T03:00:00Z",
                         },
                    },
                    dates: {
                         access: {
                              startDateTime: "2026-01-20T03:00:00Z",
                              startApproximate: false,
                              endApproximate: false,
                         },
                         start: {
                              localDate: "2026-01-19",
                              localTime: "19:30:00",
                              dateTime: "2026-01-20T03:30:00Z",
                              dateTBD: false,
                              dateTBA: false,
                              timeTBA: false,
                              noSpecificTime: false,
                         },
                         end: {
                              approximate: false,
                              noSpecificTime: false,
                         },
                         timezone: "America/Los_Angeles",
                         status: {
                              code: "onsale",
                         },
                         spanMultipleDays: false,
                    },
                    classifications: [
                         {
                              primary: true,
                              segment: {
                                   id: "KZFzniwnSyZfZ7v7nJ",
                                   name: "Music",
                              },
                              genre: {
                                   id: "KnvZfZ7vAeA",
                                   name: "Rock",
                              },
                              subGenre: {
                                   id: "KZazBEonSMnZfZ7v66v",
                                   name: "Hardcore Punk",
                              },
                              type: {
                                   id: "KZAyXgnZfZ7v7nI",
                                   name: "Undefined",
                              },
                              subType: {
                                   id: "KZFzBErXgnZfZ7v7lJ",
                                   name: "Undefined",
                              },
                              family: false,
                         },
                         {
                              primary: false,
                              segment: {
                                   id: "KZFzniwnSyZfZ7v7nJ",
                                   name: "Music",
                              },
                              genre: {
                                   id: "KnvZfZ7vAeA",
                                   name: "Rock",
                              },
                              subGenre: {
                                   id: "KZazBEonSMnZfZ7v66v",
                                   name: "Hardcore Punk",
                              },
                              type: {
                                   id: "KZAyXgnZfZ7v7nI",
                                   name: "Undefined",
                              },
                              subType: {
                                   id: "KZFzBErXgnZfZ7v7lJ",
                                   name: "Undefined",
                              },
                              family: false,
                         },
                         {
                              primary: false,
                              segment: {
                                   id: "KZFzniwnSyZfZ7v7nJ",
                                   name: "Music",
                              },
                              genre: {
                                   id: "KnvZfZ7vAeA",
                                   name: "Rock",
                              },
                              subGenre: {
                                   id: "KZazBEonSMnZfZ7v66v",
                                   name: "Hardcore Punk",
                              },
                              type: {
                                   id: "KZAyXgnZfZ7v7nI",
                                   name: "Undefined",
                              },
                              subType: {
                                   id: "KZFzBErXgnZfZ7v7lJ",
                                   name: "Undefined",
                              },
                              family: false,
                         },
                         {
                              primary: false,
                              segment: {
                                   id: "KZFzniwnSyZfZ7v7nJ",
                                   name: "Music",
                              },
                              genre: {
                                   id: "KnvZfZ7vAeA",
                                   name: "Rock",
                              },
                              subGenre: {
                                   id: "KZazBEonSMnZfZ7v66v",
                                   name: "Hardcore Punk",
                              },
                              type: {
                                   id: "KZAyXgnZfZ7v7nI",
                                   name: "Undefined",
                              },
                              subType: {
                                   id: "KZFzBErXgnZfZ7v7lJ",
                                   name: "Undefined",
                              },
                              family: false,
                         },
                         {
                              primary: false,
                              segment: {
                                   id: "KZFzniwnSyZfZ7v7nJ",
                                   name: "Music",
                              },
                              genre: {
                                   id: "KnvZfZ7vAeA",
                                   name: "Rock",
                              },
                              subGenre: {
                                   id: "KZazBEonSMnZfZ7v66v",
                                   name: "Hardcore Punk",
                              },
                              type: {
                                   id: "KZAyXgnZfZ7v7nI",
                                   name: "Undefined",
                              },
                              subType: {
                                   id: "KZFzBErXgnZfZ7v7lJ",
                                   name: "Undefined",
                              },
                              family: false,
                         },
                    ],
                    info: "RNRG Presents:MagnitudeEnvisionFirestarterStand TallEliminatorsMonday January 19th 2025Neck of the Woods 406 Clement St San Francisco, CA(upstairs)$15 in adv $20 at the doorDoors at 7pmALL AGES",
                    priceRanges: [
                         {
                              type: "standard",
                              currency: "USD",
                              min: 19.0,
                              max: 19.0,
                         },
                    ],
                    _links: {
                         self: {
                              href: "/discovery/v2/events/rZ7HnEZ1AfQ7Fd?locale=en-us",
                         },
                         attractions: [
                              {
                                   href: "/discovery/v2/attractions/K8vZ917QBjV?locale=en-us",
                              },
                         ],
                         venues: [
                              {
                                   href: "/discovery/v2/venues/rZ7HnEZ17f-ug?locale=en-us",
                              },
                         ],
                    },
                    _embedded: {
                         venues: [
                              {
                                   name: "Neck of the Woods",
                                   type: "venue",
                                   id: "rZ7HnEZ17f-ug",
                                   test: false,
                                   url: "https://www.ticketweb.com/venue/neck-of-the-woods-san-francisco-ca/521375",
                                   locale: "en-us",
                                   postalCode: "94118",
                                   timezone: "America/Los_Angeles",
                                   city: {
                                        name: "San Francisco",
                                   },
                                   state: {
                                        name: "California",
                                        stateCode: "CA",
                                   },
                                   country: {
                                        name: "United States Of America",
                                        countryCode: "US",
                                   },
                                   address: {
                                        line1: "406 Clement St",
                                   },
                                   location: {
                                        longitude: "-122.463783",
                                        latitude: "37.783230",
                                   },
                                   upcomingEvents: {
                                        ticketweb: 53,
                                        _total: 53,
                                        _filtered: 0,
                                   },
                                   _links: {
                                        self: {
                                             href: "/discovery/v2/venues/rZ7HnEZ17f-ug?locale=en-us",
                                        },
                                   },
                              },
                         ],
                         attractions: [
                              {
                                   name: "Magnitude",
                                   type: "attraction",
                                   id: "K8vZ917QBjV",
                                   test: false,
                                   url: "https://www.ticketmaster.com/magnitude-tickets/artist/2954322",
                                   locale: "en-us",
                                   images: [
                                        {
                                             ratio: "16_9",
                                             url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_RETINA_LANDSCAPE_16_9.jpg",
                                             width: 1136,
                                             height: 639,
                                             fallback: true,
                                        },
                                        {
                                             ratio: "3_2",
                                             url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_TABLET_LANDSCAPE_3_2.jpg",
                                             width: 1024,
                                             height: 683,
                                             fallback: true,
                                        },
                                        {
                                             ratio: "16_9",
                                             url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                                             width: 2048,
                                             height: 1152,
                                             fallback: true,
                                        },
                                        {
                                             ratio: "16_9",
                                             url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_EVENT_DETAIL_PAGE_16_9.jpg",
                                             width: 205,
                                             height: 115,
                                             fallback: true,
                                        },
                                        {
                                             ratio: "16_9",
                                             url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_RETINA_PORTRAIT_16_9.jpg",
                                             width: 640,
                                             height: 360,
                                             fallback: true,
                                        },
                                        {
                                             ratio: "16_9",
                                             url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_TABLET_LANDSCAPE_16_9.jpg",
                                             width: 1024,
                                             height: 576,
                                             fallback: true,
                                        },
                                        {
                                             ratio: "16_9",
                                             url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_RECOMENDATION_16_9.jpg",
                                             width: 100,
                                             height: 56,
                                             fallback: true,
                                        },
                                        {
                                             ratio: "4_3",
                                             url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_CUSTOM.jpg",
                                             width: 305,
                                             height: 225,
                                             fallback: true,
                                        },
                                        {
                                             ratio: "3_2",
                                             url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_ARTIST_PAGE_3_2.jpg",
                                             width: 305,
                                             height: 203,
                                             fallback: true,
                                        },
                                        {
                                             ratio: "3_2",
                                             url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_RETINA_PORTRAIT_3_2.jpg",
                                             width: 640,
                                             height: 427,
                                             fallback: true,
                                        },
                                   ],
                                   classifications: [
                                        {
                                             primary: true,
                                             segment: {
                                                  id: "KZFzniwnSyZfZ7v7nJ",
                                                  name: "Music",
                                             },
                                             genre: {
                                                  id: "KnvZfZ7vAeA",
                                                  name: "Rock",
                                             },
                                             subGenre: {
                                                  id: "KZazBEonSMnZfZ7v6F1",
                                                  name: "Pop",
                                             },
                                             type: {
                                                  id: "KZAyXgnZfZ7v7l1",
                                                  name: "Group",
                                             },
                                             subType: {
                                                  id: "KZFzBErXgnZfZ7vA71",
                                                  name: "Band",
                                             },
                                             family: false,
                                        },
                                   ],
                                   upcomingEvents: {
                                        ticketweb: 1,
                                        _total: 1,
                                        _filtered: 0,
                                   },
                                   _links: {
                                        self: {
                                             href: "/discovery/v2/attractions/K8vZ917QBjV?locale=en-us",
                                        },
                                   },
                              },
                         ],
                    },
               },
               {
                    name: "Jesse McCartney",
                    type: "event",
                    id: "Z7r9jZ1A7bS7w",
                    test: false,
                    url: "https://www.ticketmaster.com/event/Z7r9jZ1A7bS7w",
                    locale: "en-us",
                    images: [
                         {
                              ratio: "16_9",
                              url: "https://s1.ticketm.net/dam/a/00b/9cb4bd9a-46b3-417e-8fe7-edb3a559100b_SOURCE",
                              width: 2426,
                              height: 1365,
                              fallback: false,
                         },
                         {
                              ratio: "16_9",
                              url: "https://s1.ticketm.net/dam/a/00b/9cb4bd9a-46b3-417e-8fe7-edb3a559100b_EVENT_DETAIL_PAGE_16_9.jpg",
                              width: 205,
                              height: 115,
                              fallback: false,
                         },
                         {
                              ratio: "3_2",
                              url: "https://s1.ticketm.net/dam/a/00b/9cb4bd9a-46b3-417e-8fe7-edb3a559100b_TABLET_LANDSCAPE_3_2.jpg",
                              width: 1024,
                              height: 683,
                              fallback: false,
                         },
                         {
                              ratio: "3_2",
                              url: "https://s1.ticketm.net/dam/a/00b/9cb4bd9a-46b3-417e-8fe7-edb3a559100b_RETINA_PORTRAIT_3_2.jpg",
                              width: 640,
                              height: 427,
                              fallback: false,
                         },
                         {
                              ratio: "16_9",
                              url: "https://s1.ticketm.net/dam/a/00b/9cb4bd9a-46b3-417e-8fe7-edb3a559100b_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                              width: 2048,
                              height: 1152,
                              fallback: false,
                         },
                         {
                              ratio: "4_3",
                              url: "https://s1.ticketm.net/dam/a/00b/9cb4bd9a-46b3-417e-8fe7-edb3a559100b_CUSTOM.jpg",
                              width: 305,
                              height: 225,
                              fallback: false,
                         },
                         {
                              ratio: "16_9",
                              url: "https://s1.ticketm.net/dam/a/00b/9cb4bd9a-46b3-417e-8fe7-edb3a559100b_TABLET_LANDSCAPE_16_9.jpg",
                              width: 1024,
                              height: 576,
                              fallback: false,
                         },
                         {
                              ratio: "16_9",
                              url: "https://s1.ticketm.net/dam/a/00b/9cb4bd9a-46b3-417e-8fe7-edb3a559100b_RETINA_LANDSCAPE_16_9.jpg",
                              width: 1136,
                              height: 639,
                              fallback: false,
                         },
                         {
                              ratio: "3_2",
                              url: "https://s1.ticketm.net/dam/a/00b/9cb4bd9a-46b3-417e-8fe7-edb3a559100b_ARTIST_PAGE_3_2.jpg",
                              width: 305,
                              height: 203,
                              fallback: false,
                         },
                         {
                              ratio: "16_9",
                              url: "https://s1.ticketm.net/dam/a/00b/9cb4bd9a-46b3-417e-8fe7-edb3a559100b_RECOMENDATION_16_9.jpg",
                              width: 100,
                              height: 56,
                              fallback: false,
                         },
                         {
                              ratio: "16_9",
                              url: "https://s1.ticketm.net/dam/a/00b/9cb4bd9a-46b3-417e-8fe7-edb3a559100b_RETINA_PORTRAIT_16_9.jpg",
                              width: 640,
                              height: 360,
                              fallback: false,
                         },
                    ],
                    sales: {
                         public: {
                              startDateTime: "1900-01-01T06:00:00Z",
                              startTBD: false,
                              startTBA: false,
                              endDateTime: "2025-11-16T04:00:00Z",
                         },
                    },
                    dates: {
                         start: {
                              localDate: "2025-11-15",
                              localTime: "20:00:00",
                              dateTime: "2025-11-16T04:00:00Z",
                              dateTBD: false,
                              dateTBA: false,
                              timeTBA: false,
                              noSpecificTime: false,
                         },
                         status: {
                              code: "onsale",
                         },
                         spanMultipleDays: false,
                    },
                    classifications: [
                         {
                              primary: true,
                              segment: {
                                   id: "KZFzniwnSyZfZ7v7nJ",
                                   name: "Music",
                              },
                              genre: {
                                   id: "KnvZfZ7vAev",
                                   name: "Pop",
                              },
                              subGenre: {
                                   id: "KZazBEonSMnZfZ7vkEl",
                                   name: "Pop Rock",
                              },
                              family: false,
                         },
                    ],
                    outlets: [
                         {
                              url: "https://www.thewarfieldtheatre.com/",
                              type: "venueBoxOffice",
                         },
                         {
                              url: "https://www.ticketmaster.com/jesse-mccartney-san-francisco-california-11-15-2025/event/Zu0FM1R0e5FEqFH",
                              type: "tmMarketPlace",
                         },
                    ],
                    seatmap: {
                         staticUrl: "https://content.resale.ticketmaster.com/graphics/TMResale/2/VenueMaps/1847-0-0-0-Warfield71177.png",
                    },
                    ticketing: {
                         allInclusivePricing: {
                              enabled: true,
                         },
                    },
                    nameOrigin: "custom",
                    _links: {
                         self: {
                              href: "/discovery/v2/events/Z7r9jZ1A7bS7w?locale=en-us",
                         },
                         attractions: [
                              {
                                   href: "/discovery/v2/attractions/K8vZ9175YVV?locale=en-us",
                              },
                         ],
                         venues: [
                              {
                                   href: "/discovery/v2/venues/ZFr9jZeaAF?locale=en-us",
                              },
                         ],
                    },
                    _embedded: {
                         venues: [
                              {
                                   name: "Warfield",
                                   type: "venue",
                                   id: "ZFr9jZeaAF",
                                   test: false,
                                   locale: "en-us",
                                   postalCode: "94102",
                                   timezone: "America/Los_Angeles",
                                   city: {
                                        name: "San Francisco",
                                   },
                                   state: {
                                        name: "California",
                                        stateCode: "CA",
                                   },
                                   country: {
                                        name: "United States Of America",
                                        countryCode: "US",
                                   },
                                   address: {
                                        line1: "982 Market St.",
                                   },
                                   location: {
                                        longitude: "-122.419502000",
                                        latitude: "37.779499000",
                                   },
                                   dmas: [
                                        {
                                             id: 382,
                                        },
                                   ],
                                   upcomingEvents: {
                                        tmr: 17,
                                        _total: 17,
                                        _filtered: 0,
                                   },
                                   _links: {
                                        self: {
                                             href: "/discovery/v2/venues/ZFr9jZeaAF?locale=en-us",
                                        },
                                   },
                              },
                         ],
                         attractions: [
                              {
                                   name: "Jesse McCartney",
                                   type: "attraction",
                                   id: "K8vZ9175YVV",
                                   test: false,
                                   url: "https://www.ticketmaster.com/jesse-mccartney-tickets/artist/953905",
                                   locale: "en-us",
                                   externalLinks: {
                                        youtube: [
                                             {
                                                  url: "https://www.youtube.com/user/jessemccartney",
                                             },
                                        ],
                                        twitter: [
                                             {
                                                  url: "https://twitter.com/jessemccartney",
                                             },
                                        ],
                                        itunes: [
                                             {
                                                  url: "https://itunes.apple.com/us/artist/id17554155",
                                             },
                                        ],
                                        lastfm: [
                                             {
                                                  url: "http://www.last.fm/music/Jesse+McCartney",
                                             },
                                        ],
                                        spotify: [
                                             {
                                                  url: "https://open.spotify.com/artist/2Hjj68yyUPiC0HKEOigcEp?si=vJw2p0zMQTe9xCTOJZwK0g&nd=1",
                                             },
                                        ],
                                        wiki: [
                                             {
                                                  url: "https://en.wikipedia.org/wiki/Jesse_McCartney",
                                             },
                                        ],
                                        facebook: [
                                             {
                                                  url: "https://www.facebook.com/JesseMcCartney",
                                             },
                                        ],
                                        musicbrainz: [
                                             {
                                                  id: "9d075d6e-9492-4343-ac95-93a808f61477",
                                                  url: "https://musicbrainz.org/artist/9d075d6e-9492-4343-ac95-93a808f61477",
                                             },
                                        ],
                                        instagram: [
                                             {
                                                  url: "https://instagram.com/jessemccartney/?hl=en",
                                             },
                                        ],
                                        homepage: [
                                             {
                                                  url: "https://www.jessemccartney.com/",
                                             },
                                        ],
                                   },
                                   aliases: ["jesse mcartney", "jesse mccartney", "jessie mccartney"],
                                   images: [
                                        {
                                             ratio: "16_9",
                                             url: "https://s1.ticketm.net/dam/a/00b/9cb4bd9a-46b3-417e-8fe7-edb3a559100b_SOURCE",
                                             width: 2426,
                                             height: 1365,
                                             fallback: false,
                                        },
                                        {
                                             ratio: "16_9",
                                             url: "https://s1.ticketm.net/dam/a/00b/9cb4bd9a-46b3-417e-8fe7-edb3a559100b_EVENT_DETAIL_PAGE_16_9.jpg",
                                             width: 205,
                                             height: 115,
                                             fallback: false,
                                        },
                                        {
                                             ratio: "3_2",
                                             url: "https://s1.ticketm.net/dam/a/00b/9cb4bd9a-46b3-417e-8fe7-edb3a559100b_TABLET_LANDSCAPE_3_2.jpg",
                                             width: 1024,
                                             height: 683,
                                             fallback: false,
                                        },
                                        {
                                             ratio: "3_2",
                                             url: "https://s1.ticketm.net/dam/a/00b/9cb4bd9a-46b3-417e-8fe7-edb3a559100b_RETINA_PORTRAIT_3_2.jpg",
                                             width: 640,
                                             height: 427,
                                             fallback: false,
                                        },
                                        {
                                             ratio: "16_9",
                                             url: "https://s1.ticketm.net/dam/a/00b/9cb4bd9a-46b3-417e-8fe7-edb3a559100b_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                                             width: 2048,
                                             height: 1152,
                                             fallback: false,
                                        },
                                        {
                                             ratio: "4_3",
                                             url: "https://s1.ticketm.net/dam/a/00b/9cb4bd9a-46b3-417e-8fe7-edb3a559100b_CUSTOM.jpg",
                                             width: 305,
                                             height: 225,
                                             fallback: false,
                                        },
                                        {
                                             ratio: "16_9",
                                             url: "https://s1.ticketm.net/dam/a/00b/9cb4bd9a-46b3-417e-8fe7-edb3a559100b_TABLET_LANDSCAPE_16_9.jpg",
                                             width: 1024,
                                             height: 576,
                                             fallback: false,
                                        },
                                        {
                                             ratio: "16_9",
                                             url: "https://s1.ticketm.net/dam/a/00b/9cb4bd9a-46b3-417e-8fe7-edb3a559100b_RETINA_LANDSCAPE_16_9.jpg",
                                             width: 1136,
                                             height: 639,
                                             fallback: false,
                                        },
                                        {
                                             ratio: "3_2",
                                             url: "https://s1.ticketm.net/dam/a/00b/9cb4bd9a-46b3-417e-8fe7-edb3a559100b_ARTIST_PAGE_3_2.jpg",
                                             width: 305,
                                             height: 203,
                                             fallback: false,
                                        },
                                        {
                                             ratio: "16_9",
                                             url: "https://s1.ticketm.net/dam/a/00b/9cb4bd9a-46b3-417e-8fe7-edb3a559100b_RECOMENDATION_16_9.jpg",
                                             width: 100,
                                             height: 56,
                                             fallback: false,
                                        },
                                        {
                                             ratio: "16_9",
                                             url: "https://s1.ticketm.net/dam/a/00b/9cb4bd9a-46b3-417e-8fe7-edb3a559100b_RETINA_PORTRAIT_16_9.jpg",
                                             width: 640,
                                             height: 360,
                                             fallback: false,
                                        },
                                   ],
                                   classifications: [
                                        {
                                             primary: true,
                                             segment: {
                                                  id: "KZFzniwnSyZfZ7v7nJ",
                                                  name: "Music",
                                             },
                                             genre: {
                                                  id: "KnvZfZ7vAeA",
                                                  name: "Rock",
                                             },
                                             subGenre: {
                                                  id: "KZazBEonSMnZfZ7v6F1",
                                                  name: "Pop",
                                             },
                                             type: {
                                                  id: "KZAyXgnZfZ7v7nI",
                                                  name: "Undefined",
                                             },
                                             subType: {
                                                  id: "KZFzBErXgnZfZ7v7lJ",
                                                  name: "Undefined",
                                             },
                                             family: false,
                                        },
                                   ],
                                   upcomingEvents: {
                                        tmr: 2,
                                        ticketmaster: 20,
                                        _total: 22,
                                        _filtered: 0,
                                   },
                                   _links: {
                                        self: {
                                             href: "/discovery/v2/attractions/K8vZ9175YVV?locale=en-us",
                                        },
                                   },
                              },
                         ],
                    },
               },
               {
                    name: "Lucius",
                    type: "event",
                    id: "Z7r9jZ1A7fxvM",
                    test: false,
                    url: "https://www.ticketmaster.com/event/Z7r9jZ1A7fxvM",
                    locale: "en-us",
                    images: [
                         {
                              ratio: "16_9",
                              url: "https://s1.ticketm.net/dam/a/a03/d426c1a6-978c-44fb-a809-2bd1c48fda03_EVENT_DETAIL_PAGE_16_9.jpg",
                              width: 205,
                              height: 115,
                              fallback: false,
                         },
                         {
                              ratio: "16_9",
                              url: "https://s1.ticketm.net/dam/a/a03/d426c1a6-978c-44fb-a809-2bd1c48fda03_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                              width: 2048,
                              height: 1152,
                              fallback: false,
                         },
                         {
                              ratio: "16_9",
                              url: "https://s1.ticketm.net/dam/a/a03/d426c1a6-978c-44fb-a809-2bd1c48fda03_SOURCE",
                              width: 2426,
                              height: 1365,
                              fallback: false,
                         },
                         {
                              ratio: "16_9",
                              url: "https://s1.ticketm.net/dam/a/a03/d426c1a6-978c-44fb-a809-2bd1c48fda03_RETINA_PORTRAIT_16_9.jpg",
                              width: 640,
                              height: 360,
                              fallback: false,
                         },
                         {
                              ratio: "16_9",
                              url: "https://s1.ticketm.net/dam/a/a03/d426c1a6-978c-44fb-a809-2bd1c48fda03_TABLET_LANDSCAPE_16_9.jpg",
                              width: 1024,
                              height: 576,
                              fallback: false,
                         },
                         {
                              ratio: "3_2",
                              url: "https://s1.ticketm.net/dam/a/a03/d426c1a6-978c-44fb-a809-2bd1c48fda03_RETINA_PORTRAIT_3_2.jpg",
                              width: 640,
                              height: 427,
                              fallback: false,
                         },
                         {
                              ratio: "16_9",
                              url: "https://s1.ticketm.net/dam/a/a03/d426c1a6-978c-44fb-a809-2bd1c48fda03_RETINA_LANDSCAPE_16_9.jpg",
                              width: 1136,
                              height: 639,
                              fallback: false,
                         },
                         {
                              ratio: "16_9",
                              url: "https://s1.ticketm.net/dam/a/a03/d426c1a6-978c-44fb-a809-2bd1c48fda03_RECOMENDATION_16_9.jpg",
                              width: 100,
                              height: 56,
                              fallback: false,
                         },
                         {
                              ratio: "3_2",
                              url: "https://s1.ticketm.net/dam/a/a03/d426c1a6-978c-44fb-a809-2bd1c48fda03_TABLET_LANDSCAPE_3_2.jpg",
                              width: 1024,
                              height: 683,
                              fallback: false,
                         },
                         {
                              ratio: "4_3",
                              url: "https://s1.ticketm.net/dam/a/a03/d426c1a6-978c-44fb-a809-2bd1c48fda03_CUSTOM.jpg",
                              width: 305,
                              height: 225,
                              fallback: false,
                         },
                         {
                              ratio: "3_2",
                              url: "https://s1.ticketm.net/dam/a/a03/d426c1a6-978c-44fb-a809-2bd1c48fda03_ARTIST_PAGE_3_2.jpg",
                              width: 305,
                              height: 203,
                              fallback: false,
                         },
                    ],
                    sales: {
                         public: {
                              startDateTime: "1900-01-01T06:00:00Z",
                              startTBD: false,
                              startTBA: false,
                              endDateTime: "2025-11-21T04:00:00Z",
                         },
                    },
                    dates: {
                         start: {
                              localDate: "2025-11-20",
                              localTime: "20:00:00",
                              dateTime: "2025-11-21T04:00:00Z",
                              dateTBD: false,
                              dateTBA: false,
                              timeTBA: false,
                              noSpecificTime: false,
                         },
                         status: {
                              code: "onsale",
                         },
                         spanMultipleDays: false,
                    },
                    classifications: [
                         {
                              primary: true,
                              segment: {
                                   id: "KZFzniwnSyZfZ7v7nJ",
                                   name: "Music",
                              },
                              genre: {
                                   id: "KnvZfZ7vAev",
                                   name: "Pop",
                              },
                              subGenre: {
                                   id: "KZazBEonSMnZfZ7vkEl",
                                   name: "Pop Rock",
                              },
                              family: false,
                         },
                    ],
                    outlets: [
                         {
                              url: "https://www.thewarfieldtheatre.com/",
                              type: "venueBoxOffice",
                         },
                         {
                              url: "https://www.ticketmaster.com/lucius-san-francisco-california-11-20-2025/event/Zu0FM1R0e5FlWD9",
                              type: "tmMarketPlace",
                         },
                    ],
                    seatmap: {
                         staticUrl: "https://content.resale.ticketmaster.com/graphics/TMResale/2/VenueMaps/1847-0-0-0-Warfield71177.png",
                    },
                    ticketing: {
                         allInclusivePricing: {
                              enabled: true,
                         },
                    },
                    nameOrigin: "custom",
                    _links: {
                         self: {
                              href: "/discovery/v2/events/Z7r9jZ1A7fxvM?locale=en-us",
                         },
                         attractions: [
                              {
                                   href: "/discovery/v2/attractions/K8vZ917uCj7?locale=en-us",
                              },
                         ],
                         venues: [
                              {
                                   href: "/discovery/v2/venues/ZFr9jZeaAF?locale=en-us",
                              },
                         ],
                    },
                    _embedded: {
                         venues: [
                              {
                                   name: "Warfield",
                                   type: "venue",
                                   id: "ZFr9jZeaAF",
                                   test: false,
                                   locale: "en-us",
                                   postalCode: "94102",
                                   timezone: "America/Los_Angeles",
                                   city: {
                                        name: "San Francisco",
                                   },
                                   state: {
                                        name: "California",
                                        stateCode: "CA",
                                   },
                                   country: {
                                        name: "United States Of America",
                                        countryCode: "US",
                                   },
                                   address: {
                                        line1: "982 Market St.",
                                   },
                                   location: {
                                        longitude: "-122.419502000",
                                        latitude: "37.779499000",
                                   },
                                   dmas: [
                                        {
                                             id: 382,
                                        },
                                   ],
                                   upcomingEvents: {
                                        tmr: 17,
                                        _total: 17,
                                        _filtered: 0,
                                   },
                                   _links: {
                                        self: {
                                             href: "/discovery/v2/venues/ZFr9jZeaAF?locale=en-us",
                                        },
                                   },
                              },
                         ],
                         attractions: [
                              {
                                   name: "Lucius",
                                   type: "attraction",
                                   id: "K8vZ917uCj7",
                                   test: false,
                                   url: "https://www.ticketmaster.com/lucius-tickets/artist/710520",
                                   locale: "en-us",
                                   externalLinks: {
                                        youtube: [
                                             {
                                                  url: "https://www.youtube.com/user/luciustunes",
                                             },
                                        ],
                                        twitter: [
                                             {
                                                  url: "https://twitter.com/ilovelucius",
                                             },
                                        ],
                                        itunes: [
                                             {
                                                  url: "https://music.apple.com/us/artist/lucius/74481783",
                                             },
                                        ],
                                        spotify: [
                                             {
                                                  url: "https://open.spotify.com/artist/1WrqUPWlHN5FXCRcQgrkas",
                                             },
                                        ],
                                        facebook: [
                                             {
                                                  url: "https://www.facebook.com/ilovelucius",
                                             },
                                        ],
                                        musicbrainz: [
                                             {
                                                  id: "076c2dd4-f412-460d-a93d-997403072cb2",
                                                  url: "https://musicbrainz.org/artist/076c2dd4-f412-460d-a93d-997403072cb2",
                                             },
                                        ],
                                        instagram: [
                                             {
                                                  url: "https://www.instagram.com/ilovelucius",
                                             },
                                        ],
                                        homepage: [
                                             {
                                                  url: "https://www.ilovelucius.com/",
                                             },
                                        ],
                                   },
                                   images: [
                                        {
                                             ratio: "16_9",
                                             url: "https://s1.ticketm.net/dam/a/a03/d426c1a6-978c-44fb-a809-2bd1c48fda03_EVENT_DETAIL_PAGE_16_9.jpg",
                                             width: 205,
                                             height: 115,
                                             fallback: false,
                                        },
                                        {
                                             ratio: "16_9",
                                             url: "https://s1.ticketm.net/dam/a/a03/d426c1a6-978c-44fb-a809-2bd1c48fda03_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                                             width: 2048,
                                             height: 1152,
                                             fallback: false,
                                        },
                                        {
                                             ratio: "16_9",
                                             url: "https://s1.ticketm.net/dam/a/a03/d426c1a6-978c-44fb-a809-2bd1c48fda03_SOURCE",
                                             width: 2426,
                                             height: 1365,
                                             fallback: false,
                                        },
                                        {
                                             ratio: "16_9",
                                             url: "https://s1.ticketm.net/dam/a/a03/d426c1a6-978c-44fb-a809-2bd1c48fda03_RETINA_PORTRAIT_16_9.jpg",
                                             width: 640,
                                             height: 360,
                                             fallback: false,
                                        },
                                        {
                                             ratio: "16_9",
                                             url: "https://s1.ticketm.net/dam/a/a03/d426c1a6-978c-44fb-a809-2bd1c48fda03_TABLET_LANDSCAPE_16_9.jpg",
                                             width: 1024,
                                             height: 576,
                                             fallback: false,
                                        },
                                        {
                                             ratio: "3_2",
                                             url: "https://s1.ticketm.net/dam/a/a03/d426c1a6-978c-44fb-a809-2bd1c48fda03_RETINA_PORTRAIT_3_2.jpg",
                                             width: 640,
                                             height: 427,
                                             fallback: false,
                                        },
                                        {
                                             ratio: "16_9",
                                             url: "https://s1.ticketm.net/dam/a/a03/d426c1a6-978c-44fb-a809-2bd1c48fda03_RETINA_LANDSCAPE_16_9.jpg",
                                             width: 1136,
                                             height: 639,
                                             fallback: false,
                                        },
                                        {
                                             ratio: "16_9",
                                             url: "https://s1.ticketm.net/dam/a/a03/d426c1a6-978c-44fb-a809-2bd1c48fda03_RECOMENDATION_16_9.jpg",
                                             width: 100,
                                             height: 56,
                                             fallback: false,
                                        },
                                        {
                                             ratio: "3_2",
                                             url: "https://s1.ticketm.net/dam/a/a03/d426c1a6-978c-44fb-a809-2bd1c48fda03_TABLET_LANDSCAPE_3_2.jpg",
                                             width: 1024,
                                             height: 683,
                                             fallback: false,
                                        },
                                        {
                                             ratio: "4_3",
                                             url: "https://s1.ticketm.net/dam/a/a03/d426c1a6-978c-44fb-a809-2bd1c48fda03_CUSTOM.jpg",
                                             width: 305,
                                             height: 225,
                                             fallback: false,
                                        },
                                        {
                                             ratio: "3_2",
                                             url: "https://s1.ticketm.net/dam/a/a03/d426c1a6-978c-44fb-a809-2bd1c48fda03_ARTIST_PAGE_3_2.jpg",
                                             width: 305,
                                             height: 203,
                                             fallback: false,
                                        },
                                   ],
                                   classifications: [
                                        {
                                             primary: true,
                                             segment: {
                                                  id: "KZFzniwnSyZfZ7v7nJ",
                                                  name: "Music",
                                             },
                                             genre: {
                                                  id: "KnvZfZ7vAva",
                                                  name: "Folk",
                                             },
                                             subGenre: {
                                                  id: "KZazBEonSMnZfZ7vAn7",
                                                  name: "Folk",
                                             },
                                             type: {
                                                  id: "KZAyXgnZfZ7v7nI",
                                                  name: "Undefined",
                                             },
                                             subType: {
                                                  id: "KZFzBErXgnZfZ7v7lJ",
                                                  name: "Undefined",
                                             },
                                             family: false,
                                        },
                                   ],
                                   upcomingEvents: {
                                        tmr: 5,
                                        ticketweb: 2,
                                        ticketmaster: 2,
                                        _total: 9,
                                        _filtered: 0,
                                   },
                                   _links: {
                                        self: {
                                             href: "/discovery/v2/attractions/K8vZ917uCj7?locale=en-us",
                                        },
                                   },
                              },
                         ],
                    },
               },
               {
                    name: "Super Diamond",
                    type: "event",
                    id: "rZ7HnEZ1Af_wFd",
                    test: false,
                    url: "https://www.ticketweb.com/event/super-diamond-bimbos-365-club-tickets/14672203",
                    locale: "en-us",
                    images: [
                         {
                              ratio: "16_9",
                              url: "https://s1.ticketm.net/dam/a/2aa/7e15a9fe-6f0a-4591-b732-81c2f0fb02aa_EVENT_DETAIL_PAGE_16_9.jpg",
                              width: 205,
                              height: 115,
                              fallback: false,
                         },
                         {
                              ratio: "16_9",
                              url: "https://s1.ticketm.net/dam/a/2aa/7e15a9fe-6f0a-4591-b732-81c2f0fb02aa_RETINA_LANDSCAPE_16_9.jpg",
                              width: 1136,
                              height: 639,
                              fallback: false,
                         },
                         {
                              ratio: "16_9",
                              url: "https://s1.ticketm.net/dam/a/2aa/7e15a9fe-6f0a-4591-b732-81c2f0fb02aa_TABLET_LANDSCAPE_16_9.jpg",
                              width: 1024,
                              height: 576,
                              fallback: false,
                         },
                         {
                              ratio: "16_9",
                              url: "https://s1.ticketm.net/dam/a/2aa/7e15a9fe-6f0a-4591-b732-81c2f0fb02aa_RECOMENDATION_16_9.jpg",
                              width: 100,
                              height: 56,
                              fallback: false,
                         },
                         {
                              ratio: "3_2",
                              url: "https://s1.ticketm.net/dam/a/2aa/7e15a9fe-6f0a-4591-b732-81c2f0fb02aa_SOURCE",
                              width: 2426,
                              height: 1616,
                              fallback: false,
                         },
                         {
                              ratio: "16_9",
                              url: "https://s1.ticketm.net/dam/a/2aa/7e15a9fe-6f0a-4591-b732-81c2f0fb02aa_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                              width: 2048,
                              height: 1152,
                              fallback: false,
                         },
                         {
                              ratio: "4_3",
                              url: "https://s1.ticketm.net/dam/a/2aa/7e15a9fe-6f0a-4591-b732-81c2f0fb02aa_CUSTOM.jpg",
                              width: 305,
                              height: 225,
                              fallback: false,
                         },
                         {
                              ratio: "3_2",
                              url: "https://s1.ticketm.net/dam/a/2aa/7e15a9fe-6f0a-4591-b732-81c2f0fb02aa_ARTIST_PAGE_3_2.jpg",
                              width: 305,
                              height: 203,
                              fallback: false,
                         },
                         {
                              ratio: "3_2",
                              url: "https://i.ticketweb.com/i/00/13/29/31/93_Edp.jpg?v=12",
                              width: 640,
                              height: 427,
                              fallback: false,
                         },
                         {
                              ratio: "3_2",
                              url: "https://s1.ticketm.net/dam/a/2aa/7e15a9fe-6f0a-4591-b732-81c2f0fb02aa_TABLET_LANDSCAPE_3_2.jpg",
                              width: 1024,
                              height: 683,
                              fallback: false,
                         },
                         {
                              ratio: "16_9",
                              url: "https://s1.ticketm.net/dam/a/2aa/7e15a9fe-6f0a-4591-b732-81c2f0fb02aa_RETINA_PORTRAIT_16_9.jpg",
                              width: 640,
                              height: 360,
                              fallback: false,
                         },
                    ],
                    sales: {
                         public: {
                              startDateTime: "2025-11-06T01:00:00Z",
                              startTBD: false,
                              startTBA: false,
                              endDateTime: "2026-01-18T06:00:00Z",
                         },
                    },
                    dates: {
                         access: {
                              startDateTime: "2026-01-18T03:00:00Z",
                              startApproximate: false,
                              endApproximate: false,
                         },
                         start: {
                              localDate: "2026-01-17",
                              localTime: "20:00:00",
                              dateTime: "2026-01-18T04:00:00Z",
                              dateTBD: false,
                              dateTBA: false,
                              timeTBA: false,
                              noSpecificTime: false,
                         },
                         end: {
                              approximate: false,
                              noSpecificTime: false,
                         },
                         timezone: "America/Los_Angeles",
                         status: {
                              code: "onsale",
                         },
                         spanMultipleDays: false,
                    },
                    classifications: [
                         {
                              primary: true,
                              segment: {
                                   id: "KZFzniwnSyZfZ7v7nJ",
                                   name: "Music",
                              },
                              genre: {
                                   id: "KnvZfZ7vAvl",
                                   name: "Other",
                              },
                              type: {
                                   id: "KZAyXgnZfZ7v7nI",
                                   name: "Undefined",
                              },
                              subType: {
                                   id: "KZFzBErXgnZfZ7v7lJ",
                                   name: "Undefined",
                              },
                              family: false,
                         },
                         {
                              primary: false,
                              segment: {
                                   id: "KZFzniwnSyZfZ7v7nJ",
                                   name: "Music",
                              },
                              genre: {
                                   id: "KnvZfZ7vAev",
                                   name: "Pop",
                              },
                              subGenre: {
                                   id: "KZazBEonSMnZfZ7vkEl",
                                   name: "Pop Rock",
                              },
                              type: {
                                   id: "KZAyXgnZfZ7v7nI",
                                   name: "Undefined",
                              },
                              subType: {
                                   id: "KZFzBErXgnZfZ7v7lJ",
                                   name: "Undefined",
                              },
                              family: false,
                         },
                    ],
                    info: "San Franciscos Super Diamond has become one of the most popular live shows at major nightclubs, theaters, ballrooms and public events throughout the United States. For over a decade the band has consistently performed sell-out shows at venues such as Irving Plaza in New York, 930 Club in Washington D.C., Bimbos 365 Club in San Francisco, and House of Blues venues in Chicago, Los Angeles, San Diego, Cleveland and Dallas to name but a few. At these venues Super Diamond has generated an exuberant audience response previously unheard of for a tribute band. Many would say that Super Diamond has transcended the label of tribute band by passionately immersing themselves in Neil Diamonds huge repertoire and delivering a high-octane show of unforgettable classics such as Cracklin Rosie, Sweet Caroline, Forever in Blue Jeans and many others. Super Diamond has also performed at landmark venues and events such as Hollywood Bowl, Taste of Chicago, Fenway Park in Boston, Coors Field in Denver and numerous fairs, festivals and corporate celebrations across the country and overseas.",
                    pleaseNote:
                         "This event is 21 and over. Any ticket holder unable to present valid identification indicating that they are at least 21 years of age will not be admitted to this event, and will not be eligible for a refund.",
                    priceRanges: [
                         {
                              type: "standard",
                              currency: "USD",
                              min: 36.4,
                              max: 36.4,
                         },
                    ],
                    _links: {
                         self: {
                              href: "/discovery/v2/events/rZ7HnEZ1Af_wFd?locale=en-us",
                         },
                         attractions: [
                              {
                                   href: "/discovery/v2/attractions/K8vZ9171__7?locale=en-us",
                              },
                         ],
                         venues: [
                              {
                                   href: "/discovery/v2/venues/rZ7HnEZaeq7?locale=en-us",
                              },
                         ],
                    },
                    _embedded: {
                         venues: [
                              {
                                   name: "Bimbo's 365 Club",
                                   type: "venue",
                                   id: "rZ7HnEZaeq7",
                                   test: false,
                                   url: "https://www.ticketweb.com/venue/bimbos-365-club-san-francisco-ca/10052",
                                   locale: "en-us",
                                   postalCode: "94133",
                                   timezone: "America/Los_Angeles",
                                   city: {
                                        name: "San Francisco",
                                   },
                                   state: {
                                        name: "California",
                                        stateCode: "CA",
                                   },
                                   country: {
                                        name: "United States Of America",
                                        countryCode: "US",
                                   },
                                   address: {
                                        line1: "1025 Columbus Avenue",
                                   },
                                   location: {
                                        longitude: "-122.4178422",
                                        latitude: "37.8037961",
                                   },
                                   upcomingEvents: {
                                        ticketweb: 17,
                                        ticketmaster: 1,
                                        _total: 18,
                                        _filtered: 0,
                                   },
                                   _links: {
                                        self: {
                                             href: "/discovery/v2/venues/rZ7HnEZaeq7?locale=en-us",
                                        },
                                   },
                              },
                         ],
                         attractions: [
                              {
                                   name: "Super Diamond",
                                   type: "attraction",
                                   id: "K8vZ9171__7",
                                   test: false,
                                   url: "https://www.ticketmaster.com/super-diamond-tickets/artist/806193",
                                   locale: "en-us",
                                   externalLinks: {
                                        musicbrainz: [
                                             {
                                                  id: "a616f35a-bbcc-42e4-9b50-0c95252eee2b",
                                                  url: "https://musicbrainz.org/artist/a616f35a-bbcc-42e4-9b50-0c95252eee2b",
                                             },
                                        ],
                                   },
                                   images: [
                                        {
                                             ratio: "16_9",
                                             url: "https://s1.ticketm.net/dam/a/2aa/7e15a9fe-6f0a-4591-b732-81c2f0fb02aa_EVENT_DETAIL_PAGE_16_9.jpg",
                                             width: 205,
                                             height: 115,
                                             fallback: false,
                                        },
                                        {
                                             ratio: "16_9",
                                             url: "https://s1.ticketm.net/dam/a/2aa/7e15a9fe-6f0a-4591-b732-81c2f0fb02aa_RETINA_LANDSCAPE_16_9.jpg",
                                             width: 1136,
                                             height: 639,
                                             fallback: false,
                                        },
                                        {
                                             ratio: "16_9",
                                             url: "https://s1.ticketm.net/dam/a/2aa/7e15a9fe-6f0a-4591-b732-81c2f0fb02aa_TABLET_LANDSCAPE_16_9.jpg",
                                             width: 1024,
                                             height: 576,
                                             fallback: false,
                                        },
                                        {
                                             ratio: "16_9",
                                             url: "https://s1.ticketm.net/dam/a/2aa/7e15a9fe-6f0a-4591-b732-81c2f0fb02aa_RECOMENDATION_16_9.jpg",
                                             width: 100,
                                             height: 56,
                                             fallback: false,
                                        },
                                        {
                                             ratio: "3_2",
                                             url: "https://s1.ticketm.net/dam/a/2aa/7e15a9fe-6f0a-4591-b732-81c2f0fb02aa_RETINA_PORTRAIT_3_2.jpg",
                                             width: 640,
                                             height: 427,
                                             fallback: false,
                                        },
                                        {
                                             ratio: "3_2",
                                             url: "https://s1.ticketm.net/dam/a/2aa/7e15a9fe-6f0a-4591-b732-81c2f0fb02aa_SOURCE",
                                             width: 2426,
                                             height: 1616,
                                             fallback: false,
                                        },
                                        {
                                             ratio: "16_9",
                                             url: "https://s1.ticketm.net/dam/a/2aa/7e15a9fe-6f0a-4591-b732-81c2f0fb02aa_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                                             width: 2048,
                                             height: 1152,
                                             fallback: false,
                                        },
                                        {
                                             ratio: "4_3",
                                             url: "https://s1.ticketm.net/dam/a/2aa/7e15a9fe-6f0a-4591-b732-81c2f0fb02aa_CUSTOM.jpg",
                                             width: 305,
                                             height: 225,
                                             fallback: false,
                                        },
                                        {
                                             ratio: "3_2",
                                             url: "https://s1.ticketm.net/dam/a/2aa/7e15a9fe-6f0a-4591-b732-81c2f0fb02aa_ARTIST_PAGE_3_2.jpg",
                                             width: 305,
                                             height: 203,
                                             fallback: false,
                                        },
                                        {
                                             ratio: "3_2",
                                             url: "https://s1.ticketm.net/dam/a/2aa/7e15a9fe-6f0a-4591-b732-81c2f0fb02aa_TABLET_LANDSCAPE_3_2.jpg",
                                             width: 1024,
                                             height: 683,
                                             fallback: false,
                                        },
                                        {
                                             ratio: "16_9",
                                             url: "https://s1.ticketm.net/dam/a/2aa/7e15a9fe-6f0a-4591-b732-81c2f0fb02aa_RETINA_PORTRAIT_16_9.jpg",
                                             width: 640,
                                             height: 360,
                                             fallback: false,
                                        },
                                   ],
                                   classifications: [
                                        {
                                             primary: true,
                                             segment: {
                                                  id: "KZFzniwnSyZfZ7v7nJ",
                                                  name: "Music",
                                             },
                                             genre: {
                                                  id: "KnvZfZ7vAe6",
                                                  name: "Undefined",
                                             },
                                             subGenre: {
                                                  id: "KZazBEonSMnZfZ7v6JI",
                                                  name: "Undefined",
                                             },
                                             type: {
                                                  id: "KZAyXgnZfZ7v7l1",
                                                  name: "Group",
                                             },
                                             subType: {
                                                  id: "KZFzBErXgnZfZ7vAAI",
                                                  name: "Tribute Band",
                                             },
                                             family: false,
                                        },
                                   ],
                                   upcomingEvents: {
                                        tmr: 1,
                                        ticketmaster: 3,
                                        ticketweb: 3,
                                        _total: 7,
                                        _filtered: 0,
                                   },
                                   _links: {
                                        self: {
                                             href: "/discovery/v2/attractions/K8vZ9171__7?locale=en-us",
                                        },
                                   },
                              },
                         ],
                    },
               },
               {
                    name: "May Erlewine with Packy Lundholm",
                    type: "event",
                    id: "rZ7HnEZ1Af_FjN",
                    test: false,
                    url: "https://www.ticketweb.com/event/may-erlewine-with-packy-lundholm-cafe-du-nord-tickets/14648723",
                    locale: "en-us",
                    images: [
                         {
                              ratio: "16_9",
                              url: "https://s1.ticketm.net/dam/a/a1f/fc1bc35e-42d3-457b-bae0-ec9893c44a1f_SOURCE",
                              width: 2426,
                              height: 1365,
                              fallback: false,
                         },
                         {
                              ratio: "3_2",
                              url: "https://s1.ticketm.net/dam/a/a1f/fc1bc35e-42d3-457b-bae0-ec9893c44a1f_1790191_RETINA_PORTRAIT_3_2.jpg",
                              width: 640,
                              height: 427,
                              fallback: false,
                         },
                         {
                              ratio: "3_2",
                              url: "https://s1.ticketm.net/dam/a/a1f/fc1bc35e-42d3-457b-bae0-ec9893c44a1f_1790191_TABLET_LANDSCAPE_3_2.jpg",
                              width: 1024,
                              height: 683,
                              fallback: false,
                         },
                         {
                              ratio: "4_3",
                              url: "https://s1.ticketm.net/dam/a/a1f/fc1bc35e-42d3-457b-bae0-ec9893c44a1f_1790191_CUSTOM.jpg",
                              width: 305,
                              height: 225,
                              fallback: false,
                         },
                         {
                              ratio: "3_2",
                              url: "https://i.ticketweb.com/i/00/13/27/23/63_Edp.jpg?v=12",
                              width: 635,
                              height: 427,
                              fallback: false,
                         },
                         {
                              ratio: "3_2",
                              url: "https://s1.ticketm.net/dam/a/a1f/fc1bc35e-42d3-457b-bae0-ec9893c44a1f_1790191_ARTIST_PAGE_3_2.jpg",
                              width: 305,
                              height: 203,
                              fallback: false,
                         },
                         {
                              ratio: "16_9",
                              url: "https://s1.ticketm.net/dam/a/a1f/fc1bc35e-42d3-457b-bae0-ec9893c44a1f_1790191_TABLET_LANDSCAPE_16_9.jpg",
                              width: 1024,
                              height: 576,
                              fallback: false,
                         },
                         {
                              ratio: "16_9",
                              url: "https://s1.ticketm.net/dam/a/a1f/fc1bc35e-42d3-457b-bae0-ec9893c44a1f_1790191_RETINA_LANDSCAPE_16_9.jpg",
                              width: 1136,
                              height: 639,
                              fallback: false,
                         },
                         {
                              ratio: "16_9",
                              url: "https://s1.ticketm.net/dam/a/a1f/fc1bc35e-42d3-457b-bae0-ec9893c44a1f_1790191_RECOMENDATION_16_9.jpg",
                              width: 100,
                              height: 56,
                              fallback: false,
                         },
                         {
                              ratio: "16_9",
                              url: "https://s1.ticketm.net/dam/a/a1f/fc1bc35e-42d3-457b-bae0-ec9893c44a1f_1790191_RETINA_PORTRAIT_16_9.jpg",
                              width: 640,
                              height: 360,
                              fallback: false,
                         },
                         {
                              ratio: "16_9",
                              url: "https://s1.ticketm.net/dam/a/a1f/fc1bc35e-42d3-457b-bae0-ec9893c44a1f_1790191_EVENT_DETAIL_PAGE_16_9.jpg",
                              width: 205,
                              height: 115,
                              fallback: false,
                         },
                         {
                              ratio: "16_9",
                              url: "https://s1.ticketm.net/dam/a/a1f/fc1bc35e-42d3-457b-bae0-ec9893c44a1f_1790191_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                              width: 2048,
                              height: 1152,
                              fallback: false,
                         },
                    ],
                    sales: {
                         public: {
                              startDateTime: "2025-10-31T19:00:00Z",
                              startTBD: false,
                              startTBA: false,
                              endDateTime: "2026-01-23T06:45:00Z",
                         },
                    },
                    dates: {
                         access: {
                              startDateTime: "2026-01-23T03:00:00Z",
                              startApproximate: false,
                              endApproximate: false,
                         },
                         start: {
                              localDate: "2026-01-22",
                              localTime: "20:00:00",
                              dateTime: "2026-01-23T04:00:00Z",
                              dateTBD: false,
                              dateTBA: false,
                              timeTBA: false,
                              noSpecificTime: false,
                         },
                         end: {
                              approximate: false,
                              noSpecificTime: false,
                         },
                         timezone: "America/Los_Angeles",
                         status: {
                              code: "onsale",
                         },
                         spanMultipleDays: false,
                    },
                    classifications: [
                         {
                              primary: true,
                              segment: {
                                   id: "KZFzniwnSyZfZ7v7nJ",
                                   name: "Music",
                              },
                              genre: {
                                   id: "KnvZfZ7vAev",
                                   name: "Pop",
                              },
                              subGenre: {
                                   id: "KZazBEonSMnZfZ7vkIk",
                                   name: "Singer-Songwriter",
                              },
                              type: {
                                   id: "KZAyXgnZfZ7v7nI",
                                   name: "Undefined",
                              },
                              subType: {
                                   id: "KZFzBErXgnZfZ7v7lJ",
                                   name: "Undefined",
                              },
                              family: false,
                         },
                         {
                              primary: false,
                              segment: {
                                   id: "KZFzniwnSyZfZ7v7nJ",
                                   name: "Music",
                              },
                              genre: {
                                   id: "KnvZfZ7vAev",
                                   name: "Pop",
                              },
                              subGenre: {
                                   id: "KZazBEonSMnZfZ7vkIk",
                                   name: "Singer-Songwriter",
                              },
                              type: {
                                   id: "KZAyXgnZfZ7v7nI",
                                   name: "Undefined",
                              },
                              subType: {
                                   id: "KZFzBErXgnZfZ7v7lJ",
                                   name: "Undefined",
                              },
                              family: false,
                         },
                    ],
                    info: "One of the Midwests most prolific and passionate songwriters, May Erlewine has a gift for writing songs of substance that feel both fresh and soulfully familiar.Her ability to emotionally engage with an audience has earned her a dedicated following far beyond her Michigan roots.This year, May is teaming up with Chicago guitar wizard, Packy Lundholm.The heart forward power duo will be offering their music in the name of love, service and rock & roll.Cafe Du Nords Preferred Viewing Available, General Admission Not IncludedFor any event that is listed as 18 or 21 and over, ANY ticket holder unable to present valid identification indicating that they are of age will not be admitted to this event, and will not be eligible for a refund. Any event listed as All Ages, means 6 years of age or older. ALL tickets are standing room only unless otherwise specified. If you need special accommodations, contact info@cafedunord.com. Support acts are subject to change without refund.Professional Cameras are not allowed without prior approval. Professional Camera defined as detachable lens or of professional grade as determined by the venue staff. When in doubt, just email us ahead of the show! We might be able to get you a Photo Pass depending on Artists approval.",
                    pleaseNote:
                         "This event is 21 and over. Any ticket holder unable to present valid identification indicating that they are at least 21 years of age will not be admitted to this event, and will not be eligible for a refund. For any event that is 18 or 21 and over. Any Ticket holder unable to present valid identification indicating that they are of age will not be admitted to this event, and will not be eligible for a refund. Support acts are subject to change without refund. Professional Cameras are not allowed without prior approval. Professional Camera defined as detachable lens or of professional grade as determined by the venue staff. When in doubt, just email us ahead of the show! We might be able to get you a Photo Pass pending Artist’s approval. Only tickets that are purchased directly through www.cafedunord.com via Ticketweb are guaranteed entry. Any tickets purchased from unauthorized sources may be lost, stolen or counterfeit, and if so are void. Please see Ticketweb Purchase Policy for further information.",
                    priceRanges: [
                         {
                              type: "standard",
                              currency: "USD",
                              min: 29.33,
                              max: 29.33,
                         },
                    ],
                    nameOrigin: "custom",
                    _links: {
                         self: {
                              href: "/discovery/v2/events/rZ7HnEZ1Af_FjN?locale=en-us",
                         },
                         attractions: [
                              {
                                   href: "/discovery/v2/attractions/K8vZ917p3GV?locale=en-us",
                              },
                         ],
                         venues: [
                              {
                                   href: "/discovery/v2/venues/rZ7HnEZa73K?locale=en-us",
                              },
                         ],
                    },
                    _embedded: {
                         venues: [
                              {
                                   name: "Cafe Du Nord",
                                   type: "venue",
                                   id: "rZ7HnEZa73K",
                                   test: false,
                                   url: "https://www.ticketweb.com/venue/cafe-du-nord-san-francisco-ca/17555",
                                   locale: "en-us",
                                   postalCode: "94114",
                                   timezone: "America/Los_Angeles",
                                   city: {
                                        name: "San Francisco",
                                   },
                                   state: {
                                        name: "California",
                                        stateCode: "CA",
                                   },
                                   country: {
                                        name: "United States Of America",
                                        countryCode: "US",
                                   },
                                   address: {
                                        line1: "2174 Market St.",
                                   },
                                   location: {
                                        longitude: "-122.430487",
                                        latitude: "37.766526",
                                   },
                                   upcomingEvents: {
                                        ticketweb: 35,
                                        _total: 35,
                                        _filtered: 0,
                                   },
                                   _links: {
                                        self: {
                                             href: "/discovery/v2/venues/rZ7HnEZa73K?locale=en-us",
                                        },
                                   },
                              },
                         ],
                         attractions: [
                              {
                                   name: "May Erlewine",
                                   type: "attraction",
                                   id: "K8vZ917p3GV",
                                   test: false,
                                   url: "https://www.ticketmaster.com/may-erlewine-tickets/artist/2184458",
                                   locale: "en-us",
                                   externalLinks: {
                                        youtube: [
                                             {
                                                  url: "https://www.youtube.com/channel/UCvqqOX7Z0RBYMQSFL-IrXvA",
                                             },
                                        ],
                                        twitter: [
                                             {
                                                  url: "https://twitter.com/mayerlewine",
                                             },
                                        ],
                                        itunes: [
                                             {
                                                  url: "https://music.apple.com/us/artist/may-erlewine/395571082",
                                             },
                                        ],
                                        facebook: [
                                             {
                                                  url: "https://www.facebook.com/mayerlewinemusic/",
                                             },
                                        ],
                                        spotify: [
                                             {
                                                  url: "https://open.spotify.com/artist/2OCklJbxEeL54I1EQOlbxW",
                                             },
                                        ],
                                        instagram: [
                                             {
                                                  url: "https://www.instagram.com/may_erlewine/",
                                             },
                                        ],
                                        homepage: [
                                             {
                                                  url: "https://www.mayerlewine.com",
                                             },
                                        ],
                                   },
                                   images: [
                                        {
                                             ratio: "3_2",
                                             url: "https://s1.ticketm.net/dam/a/a1f/fc1bc35e-42d3-457b-bae0-ec9893c44a1f_1790191_TABLET_LANDSCAPE_3_2.jpg",
                                             width: 1024,
                                             height: 683,
                                             fallback: false,
                                        },
                                        {
                                             ratio: "4_3",
                                             url: "https://s1.ticketm.net/dam/a/a1f/fc1bc35e-42d3-457b-bae0-ec9893c44a1f_1790191_CUSTOM.jpg",
                                             width: 305,
                                             height: 225,
                                             fallback: false,
                                        },
                                        {
                                             ratio: "3_2",
                                             url: "https://s1.ticketm.net/dam/a/a1f/fc1bc35e-42d3-457b-bae0-ec9893c44a1f_1790191_RETINA_PORTRAIT_3_2.jpg",
                                             width: 640,
                                             height: 427,
                                             fallback: false,
                                        },
                                        {
                                             ratio: "3_2",
                                             url: "https://s1.ticketm.net/dam/a/a1f/fc1bc35e-42d3-457b-bae0-ec9893c44a1f_1790191_ARTIST_PAGE_3_2.jpg",
                                             width: 305,
                                             height: 203,
                                             fallback: false,
                                        },
                                        {
                                             ratio: "16_9",
                                             url: "https://s1.ticketm.net/dam/a/a1f/fc1bc35e-42d3-457b-bae0-ec9893c44a1f_1790191_TABLET_LANDSCAPE_16_9.jpg",
                                             width: 1024,
                                             height: 576,
                                             fallback: false,
                                        },
                                        {
                                             ratio: "16_9",
                                             url: "https://s1.ticketm.net/dam/a/a1f/fc1bc35e-42d3-457b-bae0-ec9893c44a1f_1790191_RETINA_LANDSCAPE_16_9.jpg",
                                             width: 1136,
                                             height: 639,
                                             fallback: false,
                                        },
                                        {
                                             ratio: "16_9",
                                             url: "https://s1.ticketm.net/dam/a/a1f/fc1bc35e-42d3-457b-bae0-ec9893c44a1f_1790191_RECOMENDATION_16_9.jpg",
                                             width: 100,
                                             height: 56,
                                             fallback: false,
                                        },
                                        {
                                             ratio: "16_9",
                                             url: "https://s1.ticketm.net/dam/a/a1f/fc1bc35e-42d3-457b-bae0-ec9893c44a1f_1790191_RETINA_PORTRAIT_16_9.jpg",
                                             width: 640,
                                             height: 360,
                                             fallback: false,
                                        },
                                        {
                                             ratio: "16_9",
                                             url: "https://s1.ticketm.net/dam/a/a1f/fc1bc35e-42d3-457b-bae0-ec9893c44a1f_SOURCE",
                                             width: 2426,
                                             height: 1365,
                                             fallback: false,
                                        },
                                        {
                                             ratio: "16_9",
                                             url: "https://s1.ticketm.net/dam/a/a1f/fc1bc35e-42d3-457b-bae0-ec9893c44a1f_1790191_EVENT_DETAIL_PAGE_16_9.jpg",
                                             width: 205,
                                             height: 115,
                                             fallback: false,
                                        },
                                        {
                                             ratio: "16_9",
                                             url: "https://s1.ticketm.net/dam/a/a1f/fc1bc35e-42d3-457b-bae0-ec9893c44a1f_1790191_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                                             width: 2048,
                                             height: 1152,
                                             fallback: false,
                                        },
                                   ],
                                   classifications: [
                                        {
                                             primary: true,
                                             segment: {
                                                  id: "KZFzniwnSyZfZ7v7nJ",
                                                  name: "Music",
                                             },
                                             genre: {
                                                  id: "KnvZfZ7vAv6",
                                                  name: "Country",
                                             },
                                             subGenre: {
                                                  id: "KZazBEonSMnZfZ7vAFI",
                                                  name: "Bluegrass",
                                             },
                                             type: {
                                                  id: "KZAyXgnZfZ7v7la",
                                                  name: "Individual",
                                             },
                                             subType: {
                                                  id: "KZFzBErXgnZfZ7vAd7",
                                                  name: "Musician",
                                             },
                                             family: false,
                                        },
                                   ],
                                   upcomingEvents: {
                                        ticketweb: 2,
                                        ticketmaster: 1,
                                        _total: 3,
                                        _filtered: 0,
                                   },
                                   _links: {
                                        self: {
                                             href: "/discovery/v2/attractions/K8vZ917p3GV?locale=en-us",
                                        },
                                   },
                              },
                         ],
                    },
               },
               {
                    name: "MØ",
                    type: "event",
                    id: "rZ7HnEZ1AKPpPf",
                    test: false,
                    url: "https://www.ticketweb.com/event/m-the-independent-tickets/13956954",
                    locale: "en-us",
                    images: [
                         {
                              ratio: "16_9",
                              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_TABLET_LANDSCAPE_16_9.jpg",
                              width: 1024,
                              height: 576,
                              fallback: true,
                         },
                         {
                              ratio: "16_9",
                              url: "https://s1.ticketm.net/dbimages/169081a.jpg",
                              width: 205,
                              height: 115,
                              fallback: false,
                         },
                         {
                              ratio: "16_9",
                              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_RETINA_PORTRAIT_16_9.jpg",
                              width: 640,
                              height: 360,
                              fallback: true,
                         },
                         {
                              ratio: "3_2",
                              url: "https://s1.ticketm.net/dam/a/b49/7657b887-8ca1-4040-8367-afb4eebf7b49_407091_ARTIST_PAGE_3_2.jpg",
                              width: 305,
                              height: 203,
                              fallback: false,
                         },
                         {
                              ratio: "16_9",
                              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_RETINA_LANDSCAPE_16_9.jpg",
                              width: 1136,
                              height: 639,
                              fallback: true,
                         },
                         {
                              ratio: "16_9",
                              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                              width: 2048,
                              height: 1152,
                              fallback: true,
                         },
                         {
                              ratio: "3_2",
                              url: "https://i.ticketweb.com/i/00/12/71/28/44_Edp.jpg?v=8",
                              width: 639,
                              height: 427,
                              fallback: false,
                         },
                         {
                              url: "https://s1.ticketm.net/dam/a/b49/7657b887-8ca1-4040-8367-afb4eebf7b49_SOURCE",
                              width: 400,
                              height: 247,
                              fallback: false,
                         },
                         {
                              ratio: "3_2",
                              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_RETINA_PORTRAIT_3_2.jpg",
                              width: 640,
                              height: 427,
                              fallback: true,
                         },
                         {
                              ratio: "16_9",
                              url: "https://s1.ticketm.net/dam/a/b49/7657b887-8ca1-4040-8367-afb4eebf7b49_407091_RECOMENDATION_16_9.jpg",
                              width: 100,
                              height: 56,
                              fallback: false,
                         },
                         {
                              ratio: "4_3",
                              url: "https://s1.ticketm.net/dbimages/169082a.jpg",
                              width: 305,
                              height: 225,
                              fallback: false,
                         },
                         {
                              ratio: "3_2",
                              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_TABLET_LANDSCAPE_3_2.jpg",
                              width: 1024,
                              height: 683,
                              fallback: true,
                         },
                    ],
                    sales: {
                         public: {
                              startDateTime: "2025-08-20T17:00:00Z",
                              startTBD: false,
                              startTBA: false,
                              endDateTime: "2026-01-29T04:00:00Z",
                         },
                    },
                    dates: {
                         access: {
                              startDateTime: "2026-01-29T03:30:00Z",
                              startApproximate: false,
                              endApproximate: false,
                         },
                         start: {
                              localDate: "2026-01-28",
                              localTime: "20:00:00",
                              dateTime: "2026-01-29T04:00:00Z",
                              dateTBD: false,
                              dateTBA: false,
                              timeTBA: false,
                              noSpecificTime: false,
                         },
                         end: {
                              approximate: false,
                              noSpecificTime: false,
                         },
                         timezone: "America/Los_Angeles",
                         status: {
                              code: "onsale",
                         },
                         spanMultipleDays: false,
                    },
                    classifications: [
                         {
                              primary: true,
                              segment: {
                                   id: "KZFzniwnSyZfZ7v7nJ",
                                   name: "Music",
                              },
                              genre: {
                                   id: "KnvZfZ7vAev",
                                   name: "Pop",
                              },
                              subGenre: {
                                   id: "KZazBEonSMnZfZ7vkEk",
                                   name: "Indie Pop",
                              },
                              type: {
                                   id: "KZAyXgnZfZ7v7nI",
                                   name: "Undefined",
                              },
                              subType: {
                                   id: "KZFzBErXgnZfZ7v7lJ",
                                   name: "Undefined",
                              },
                              family: false,
                         },
                         {
                              primary: false,
                              segment: {
                                   id: "KZFzniwnSyZfZ7v7nJ",
                                   name: "Music",
                              },
                              genre: {
                                   id: "KnvZfZ7vAev",
                                   name: "Pop",
                              },
                              subGenre: {
                                   id: "KZazBEonSMnZfZ7vk1t",
                                   name: "Pop",
                              },
                              type: {
                                   id: "KZAyXgnZfZ7v7nI",
                                   name: "Undefined",
                              },
                              subType: {
                                   id: "KZFzBErXgnZfZ7v7lJ",
                                   name: "Undefined",
                              },
                              family: false,
                         },
                    ],
                    info: "Please note - there is a delivery delay set for 2 weeks prior to show.",
                    pleaseNote:
                         "This event is 18 and over. Any ticket holder unable to present valid identification indicating that they are at least 18 years of age will not be admitted to this event, and will not be eligible for a refund. Support acts subject to change without refund.",
                    priceRanges: [
                         {
                              type: "standard",
                              currency: "USD",
                              min: 38.13,
                              max: 38.13,
                         },
                    ],
                    nameOrigin: "custom",
                    _links: {
                         self: {
                              href: "/discovery/v2/events/rZ7HnEZ1AKPpPf?locale=en-us",
                         },
                         attractions: [
                              {
                                   href: "/discovery/v2/attractions/K8vZ917oTw0?locale=en-us",
                              },
                         ],
                         venues: [
                              {
                                   href: "/discovery/v2/venues/rZ7HnEZadXm?locale=en-us",
                              },
                         ],
                    },
                    _embedded: {
                         venues: [
                              {
                                   name: "The Independent",
                                   type: "venue",
                                   id: "rZ7HnEZadXm",
                                   test: false,
                                   url: "https://www.ticketweb.com/venue/the-independent-san-francisco-ca/16302",
                                   locale: "en-us",
                                   postalCode: "94117",
                                   timezone: "America/Los_Angeles",
                                   city: {
                                        name: "San Francisco",
                                   },
                                   state: {
                                        name: "California",
                                        stateCode: "CA",
                                   },
                                   country: {
                                        name: "United States Of America",
                                        countryCode: "US",
                                   },
                                   address: {
                                        line1: "628 Divisadero St",
                                   },
                                   location: {
                                        longitude: "-122.4378",
                                        latitude: "37.7755",
                                   },
                                   upcomingEvents: {
                                        ticketweb: 75,
                                        _total: 75,
                                        _filtered: 0,
                                   },
                                   _links: {
                                        self: {
                                             href: "/discovery/v2/venues/rZ7HnEZadXm?locale=en-us",
                                        },
                                   },
                              },
                         ],
                         attractions: [
                              {
                                   name: "Mo",
                                   type: "attraction",
                                   id: "K8vZ917oTw0",
                                   test: false,
                                   url: "https://www.ticketmaster.com/mo-tickets/artist/770702",
                                   locale: "en-us",
                                   images: [
                                        {
                                             ratio: "16_9",
                                             url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_TABLET_LANDSCAPE_16_9.jpg",
                                             width: 1024,
                                             height: 576,
                                             fallback: true,
                                        },
                                        {
                                             ratio: "16_9",
                                             url: "https://s1.ticketm.net/dbimages/169081a.jpg",
                                             width: 205,
                                             height: 115,
                                             fallback: false,
                                        },
                                        {
                                             ratio: "16_9",
                                             url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_RETINA_PORTRAIT_16_9.jpg",
                                             width: 640,
                                             height: 360,
                                             fallback: true,
                                        },
                                        {
                                             ratio: "3_2",
                                             url: "https://s1.ticketm.net/dam/a/b49/7657b887-8ca1-4040-8367-afb4eebf7b49_407091_ARTIST_PAGE_3_2.jpg",
                                             width: 305,
                                             height: 203,
                                             fallback: false,
                                        },
                                        {
                                             ratio: "16_9",
                                             url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_RETINA_LANDSCAPE_16_9.jpg",
                                             width: 1136,
                                             height: 639,
                                             fallback: true,
                                        },
                                        {
                                             ratio: "3_2",
                                             url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_RETINA_PORTRAIT_3_2.jpg",
                                             width: 640,
                                             height: 427,
                                             fallback: true,
                                        },
                                        {
                                             ratio: "16_9",
                                             url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                                             width: 2048,
                                             height: 1152,
                                             fallback: true,
                                        },
                                        {
                                             url: "https://s1.ticketm.net/dam/a/b49/7657b887-8ca1-4040-8367-afb4eebf7b49_SOURCE",
                                             width: 400,
                                             height: 247,
                                             fallback: false,
                                        },
                                        {
                                             ratio: "16_9",
                                             url: "https://s1.ticketm.net/dam/a/b49/7657b887-8ca1-4040-8367-afb4eebf7b49_407091_RECOMENDATION_16_9.jpg",
                                             width: 100,
                                             height: 56,
                                             fallback: false,
                                        },
                                        {
                                             ratio: "4_3",
                                             url: "https://s1.ticketm.net/dbimages/169082a.jpg",
                                             width: 305,
                                             height: 225,
                                             fallback: false,
                                        },
                                        {
                                             ratio: "3_2",
                                             url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_TABLET_LANDSCAPE_3_2.jpg",
                                             width: 1024,
                                             height: 683,
                                             fallback: true,
                                        },
                                   ],
                                   classifications: [
                                        {
                                             primary: true,
                                             segment: {
                                                  id: "KZFzniwnSyZfZ7v7nJ",
                                                  name: "Music",
                                             },
                                             genre: {
                                                  id: "KnvZfZ7vAeA",
                                                  name: "Rock",
                                             },
                                             subGenre: {
                                                  id: "KZazBEonSMnZfZ7v6F1",
                                                  name: "Pop",
                                             },
                                             type: {
                                                  id: "KZAyXgnZfZ7v7nI",
                                                  name: "Undefined",
                                             },
                                             subType: {
                                                  id: "KZFzBErXgnZfZ7v7lJ",
                                                  name: "Undefined",
                                             },
                                             family: false,
                                        },
                                   ],
                                   upcomingEvents: {
                                        "mfx-dk": 1,
                                        "mfx-se": 1,
                                        ticketmaster: 2,
                                        ticketweb: 2,
                                        "mfx-no": 1,
                                        _total: 7,
                                        _filtered: 0,
                                   },
                                   _links: {
                                        self: {
                                             href: "/discovery/v2/attractions/K8vZ917oTw0?locale=en-us",
                                        },
                                   },
                              },
                         ],
                    },
               },
               {
                    name: "Leer/ Fever/ Secret Society/ Lich Gawd/ Armed and Dangerous",
                    type: "event",
                    id: "rZ7HnEZ1AfQ77N",
                    test: false,
                    url: "https://www.ticketweb.com/event/leer-fever-secret-society-lich-neck-of-the-woods-tickets/14684123",
                    locale: "en-us",
                    images: [
                         {
                              ratio: "16_9",
                              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_RETINA_LANDSCAPE_16_9.jpg",
                              width: 1136,
                              height: 639,
                              fallback: true,
                         },
                         {
                              ratio: "3_2",
                              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_TABLET_LANDSCAPE_3_2.jpg",
                              width: 1024,
                              height: 683,
                              fallback: true,
                         },
                         {
                              ratio: "16_9",
                              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                              width: 2048,
                              height: 1152,
                              fallback: true,
                         },
                         {
                              url: "https://i.ticketweb.com/i/00/13/30/40/03_Edp.jpg?v=4",
                              width: 342,
                              height: 427,
                              fallback: false,
                         },
                         {
                              ratio: "16_9",
                              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_EVENT_DETAIL_PAGE_16_9.jpg",
                              width: 205,
                              height: 115,
                              fallback: true,
                         },
                         {
                              ratio: "16_9",
                              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_RETINA_PORTRAIT_16_9.jpg",
                              width: 640,
                              height: 360,
                              fallback: true,
                         },
                         {
                              ratio: "16_9",
                              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_TABLET_LANDSCAPE_16_9.jpg",
                              width: 1024,
                              height: 576,
                              fallback: true,
                         },
                         {
                              ratio: "16_9",
                              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_RECOMENDATION_16_9.jpg",
                              width: 100,
                              height: 56,
                              fallback: true,
                         },
                         {
                              ratio: "4_3",
                              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_CUSTOM.jpg",
                              width: 305,
                              height: 225,
                              fallback: true,
                         },
                         {
                              ratio: "3_2",
                              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_ARTIST_PAGE_3_2.jpg",
                              width: 305,
                              height: 203,
                              fallback: true,
                         },
                         {
                              ratio: "3_2",
                              url: "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_RETINA_PORTRAIT_3_2.jpg",
                              width: 640,
                              height: 427,
                              fallback: true,
                         },
                    ],
                    sales: {
                         public: {
                              startDateTime: "2025-11-11T18:20:00Z",
                              startTBD: false,
                              startTBA: false,
                              endDateTime: "2025-12-07T03:00:00Z",
                         },
                    },
                    dates: {
                         access: {
                              startDateTime: "2025-12-07T03:00:00Z",
                              startApproximate: false,
                              endApproximate: false,
                         },
                         start: {
                              localDate: "2025-12-06",
                              localTime: "19:30:00",
                              dateTime: "2025-12-07T03:30:00Z",
                              dateTBD: false,
                              dateTBA: false,
                              timeTBA: false,
                              noSpecificTime: false,
                         },
                         end: {
                              approximate: false,
                              noSpecificTime: false,
                         },
                         timezone: "America/Los_Angeles",
                         status: {
                              code: "onsale",
                         },
                         spanMultipleDays: false,
                    },
                    classifications: [
                         {
                              primary: true,
                              segment: {
                                   id: "KZFzniwnSyZfZ7v7nJ",
                                   name: "Music",
                              },
                              genre: {
                                   id: "KnvZfZ7vAeA",
                                   name: "Rock",
                              },
                              subGenre: {
                                   id: "KZazBEonSMnZfZ7v66v",
                                   name: "Hardcore Punk",
                              },
                              type: {
                                   id: "KZAyXgnZfZ7v7nI",
                                   name: "Undefined",
                              },
                              subType: {
                                   id: "KZFzBErXgnZfZ7v7lJ",
                                   name: "Undefined",
                              },
                              family: false,
                         },
                         {
                              primary: false,
                              segment: {
                                   id: "KZFzniwnSyZfZ7v7nJ",
                                   name: "Music",
                              },
                              genre: {
                                   id: "KnvZfZ7vAvv",
                                   name: "Alternative",
                              },
                              subGenre: {
                                   id: "KZazBEonSMnZfZ7vAvn",
                                   name: "Alternative Rock",
                              },
                              type: {
                                   id: "KZAyXgnZfZ7v7nI",
                                   name: "Undefined",
                              },
                              subType: {
                                   id: "KZFzBErXgnZfZ7v7lJ",
                                   name: "Undefined",
                              },
                              family: false,
                         },
                         {
                              primary: false,
                              segment: {
                                   id: "KZFzniwnSyZfZ7v7nJ",
                                   name: "Music",
                              },
                              genre: {
                                   id: "KnvZfZ7vAeA",
                                   name: "Rock",
                              },
                              subGenre: {
                                   id: "KZazBEonSMnZfZ7v6a6",
                                   name: "Punk",
                              },
                              type: {
                                   id: "KZAyXgnZfZ7v7nI",
                                   name: "Undefined",
                              },
                              subType: {
                                   id: "KZFzBErXgnZfZ7v7lJ",
                                   name: "Undefined",
                              },
                              family: false,
                         },
                         {
                              primary: false,
                              segment: {
                                   id: "KZFzniwnSyZfZ7v7nJ",
                                   name: "Music",
                              },
                              genre: {
                                   id: "KnvZfZ7vAeA",
                                   name: "Rock",
                              },
                              subGenre: {
                                   id: "KZazBEonSMnZfZ7v6a6",
                                   name: "Punk",
                              },
                              type: {
                                   id: "KZAyXgnZfZ7v7nI",
                                   name: "Undefined",
                              },
                              subType: {
                                   id: "KZFzBErXgnZfZ7v7lJ",
                                   name: "Undefined",
                              },
                              family: false,
                         },
                         {
                              primary: false,
                              segment: {
                                   id: "KZFzniwnSyZfZ7v7nJ",
                                   name: "Music",
                              },
                              genre: {
                                   id: "KnvZfZ7vAeA",
                                   name: "Rock",
                              },
                              subGenre: {
                                   id: "KZazBEonSMnZfZ7v6a6",
                                   name: "Punk",
                              },
                              type: {
                                   id: "KZAyXgnZfZ7v7nI",
                                   name: "Undefined",
                              },
                              subType: {
                                   id: "KZFzBErXgnZfZ7v7lJ",
                                   name: "Undefined",
                              },
                              family: false,
                         },
                         {
                              primary: false,
                              segment: {
                                   id: "KZFzniwnSyZfZ7v7nJ",
                                   name: "Music",
                              },
                              genre: {
                                   id: "KnvZfZ7vAeA",
                                   name: "Rock",
                              },
                              subGenre: {
                                   id: "KZazBEonSMnZfZ7v6a6",
                                   name: "Punk",
                              },
                              type: {
                                   id: "KZAyXgnZfZ7v7nI",
                                   name: "Undefined",
                              },
                              subType: {
                                   id: "KZFzBErXgnZfZ7v7lJ",
                                   name: "Undefined",
                              },
                              family: false,
                         },
                    ],
                    info: "Spite Presents:LeerFeverSecret SocietyLich GawdArmed and DangerousSaturday December 6th 2025Neck of the Woods 406 Clement St San Francisco, CA 94118$12 in adv $15 at the doorDoors at 7pmALL AGES",
                    priceRanges: [
                         {
                              type: "standard",
                              currency: "USD",
                              min: 14.6,
                              max: 14.6,
                         },
                    ],
                    _links: {
                         self: {
                              href: "/discovery/v2/events/rZ7HnEZ1AfQ77N?locale=en-us",
                         },
                         venues: [
                              {
                                   href: "/discovery/v2/venues/rZ7HnEZ17f-ug?locale=en-us",
                              },
                         ],
                    },
                    _embedded: {
                         venues: [
                              {
                                   name: "Neck of the Woods",
                                   type: "venue",
                                   id: "rZ7HnEZ17f-ug",
                                   test: false,
                                   url: "https://www.ticketweb.com/venue/neck-of-the-woods-san-francisco-ca/521375",
                                   locale: "en-us",
                                   postalCode: "94118",
                                   timezone: "America/Los_Angeles",
                                   city: {
                                        name: "San Francisco",
                                   },
                                   state: {
                                        name: "California",
                                        stateCode: "CA",
                                   },
                                   country: {
                                        name: "United States Of America",
                                        countryCode: "US",
                                   },
                                   address: {
                                        line1: "406 Clement St",
                                   },
                                   location: {
                                        longitude: "-122.463783",
                                        latitude: "37.783230",
                                   },
                                   upcomingEvents: {
                                        ticketweb: 53,
                                        _total: 53,
                                        _filtered: 0,
                                   },
                                   _links: {
                                        self: {
                                             href: "/discovery/v2/venues/rZ7HnEZ17f-ug?locale=en-us",
                                        },
                                   },
                              },
                         ],
                    },
               },
               {
                    name: "Joy Oladokun",
                    type: "event",
                    id: "G5vYZbS1gk4lg",
                    test: false,
                    url: "https://www.ticketmaster.com/joy-oladokun-san-francisco-california-11-12-2025/event/1C006332B5195AF5",
                    locale: "en-us",
                    images: [
                         {
                              ratio: "16_9",
                              url: "https://s1.ticketm.net/dam/e/bd5/3757b0bc-c2ea-4c5c-8aa6-c511b2a77bd5_RETINA_LANDSCAPE_16_9.jpg",
                              width: 1136,
                              height: 639,
                              fallback: false,
                         },
                         {
                              ratio: "3_2",
                              url: "https://s1.ticketm.net/dam/e/bd5/3757b0bc-c2ea-4c5c-8aa6-c511b2a77bd5_ARTIST_PAGE_3_2.jpg",
                              width: 305,
                              height: 203,
                              fallback: false,
                         },
                         {
                              ratio: "16_9",
                              url: "https://s1.ticketm.net/dam/e/bd5/3757b0bc-c2ea-4c5c-8aa6-c511b2a77bd5_TABLET_LANDSCAPE_16_9.jpg",
                              width: 1024,
                              height: 576,
                              fallback: false,
                         },
                         {
                              ratio: "3_2",
                              url: "https://s1.ticketm.net/dam/e/bd5/3757b0bc-c2ea-4c5c-8aa6-c511b2a77bd5_SOURCE",
                              width: 2048,
                              height: 1365,
                              fallback: false,
                         },
                         {
                              ratio: "3_2",
                              url: "https://s1.ticketm.net/dam/e/bd5/3757b0bc-c2ea-4c5c-8aa6-c511b2a77bd5_TABLET_LANDSCAPE_3_2.jpg",
                              width: 1024,
                              height: 683,
                              fallback: false,
                         },
                         {
                              ratio: "4_3",
                              url: "https://s1.ticketm.net/dam/e/bd5/3757b0bc-c2ea-4c5c-8aa6-c511b2a77bd5_CUSTOM.jpg",
                              width: 305,
                              height: 225,
                              fallback: false,
                         },
                         {
                              ratio: "16_9",
                              url: "https://s1.ticketm.net/dam/e/bd5/3757b0bc-c2ea-4c5c-8aa6-c511b2a77bd5_RECOMENDATION_16_9.jpg",
                              width: 100,
                              height: 56,
                              fallback: false,
                         },
                         {
                              ratio: "16_9",
                              url: "https://s1.ticketm.net/dam/e/bd5/3757b0bc-c2ea-4c5c-8aa6-c511b2a77bd5_EVENT_DETAIL_PAGE_16_9.jpg",
                              width: 205,
                              height: 115,
                              fallback: false,
                         },
                         {
                              ratio: "16_9",
                              url: "https://s1.ticketm.net/dam/e/bd5/3757b0bc-c2ea-4c5c-8aa6-c511b2a77bd5_RETINA_PORTRAIT_16_9.jpg",
                              width: 640,
                              height: 360,
                              fallback: false,
                         },
                         {
                              ratio: "16_9",
                              url: "https://s1.ticketm.net/dam/e/bd5/3757b0bc-c2ea-4c5c-8aa6-c511b2a77bd5_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                              width: 2048,
                              height: 1152,
                              fallback: false,
                         },
                         {
                              ratio: "3_2",
                              url: "https://s1.ticketm.net/dam/e/bd5/3757b0bc-c2ea-4c5c-8aa6-c511b2a77bd5_RETINA_PORTRAIT_3_2.jpg",
                              width: 640,
                              height: 427,
                              fallback: false,
                         },
                    ],
                    sales: {
                         public: {
                              startDateTime: "2025-09-26T17:00:00Z",
                              startTBD: false,
                              startTBA: false,
                              endDateTime: "2025-11-13T06:00:00Z",
                         },
                         presales: [
                              {
                                   startDateTime: "2025-09-24T17:00:00Z",
                                   endDateTime: "2025-09-26T05:00:00Z",
                                   name: "Artist Presale",
                              },
                              {
                                   startDateTime: "2025-09-25T17:00:00Z",
                                   endDateTime: "2025-09-26T05:00:00Z",
                                   name: "Ticketmaster & Venue Presale",
                              },
                              {
                                   startDateTime: "2025-09-25T17:00:00Z",
                                   endDateTime: "2025-09-26T05:00:00Z",
                                   name: "LIVE NATION PRESALE",
                              },
                              {
                                   startDateTime: "2025-09-23T17:00:00Z",
                                   endDateTime: "2025-09-26T05:00:00Z",
                                   name: "Mastercard Presale",
                              },
                              {
                                   startDateTime: "2025-09-26T17:00:00Z",
                                   endDateTime: "2025-10-15T05:00:00Z",
                                   name: "Mastercard Preferred Tickets",
                              },
                         ],
                    },
                    dates: {
                         start: {
                              localDate: "2025-11-12",
                              localTime: "20:00:00",
                              dateTime: "2025-11-13T04:00:00Z",
                              dateTBD: false,
                              dateTBA: false,
                              timeTBA: false,
                              noSpecificTime: false,
                         },
                         timezone: "America/Los_Angeles",
                         status: {
                              code: "onsale",
                         },
                         spanMultipleDays: false,
                    },
                    classifications: [
                         {
                              primary: true,
                              segment: {
                                   id: "KZFzniwnSyZfZ7v7nJ",
                                   name: "Music",
                              },
                              genre: {
                                   id: "KnvZfZ7vAeA",
                                   name: "Rock",
                              },
                              subGenre: {
                                   id: "KZazBEonSMnZfZ7v6F1",
                                   name: "Pop",
                              },
                              type: {
                                   id: "KZAyXgnZfZ7v7nI",
                                   name: "Undefined",
                              },
                              subType: {
                                   id: "KZFzBErXgnZfZ7v7lJ",
                                   name: "Undefined",
                              },
                              family: false,
                         },
                    ],
                    promoter: {
                         id: "653",
                         name: "LIVE NATION MUSIC",
                         description: "LIVE NATION MUSIC / NTL / USA",
                    },
                    promoters: [
                         {
                              id: "653",
                              name: "LIVE NATION MUSIC",
                              description: "LIVE NATION MUSIC / NTL / USA",
                         },
                    ],
                    info: "Partially Seated - First Come, First Serve",
                    pleaseNote: "Age Restriction: 5 and Over",
                    seatmap: {
                         staticUrl: "https://mapsapi.tmol.io/maps/geometry/3/event/1C006332B5195AF5/staticImage?type=png&systemId=HOST",
                    },
                    ticketLimit: {
                         info: "There is a (6) ticket limit per person.",
                    },
                    ageRestrictions: {
                         legalAgeEnforced: false,
                    },
                    doorsTimes: {
                         localDate: "2025-11-12",
                         localTime: "19:00:00",
                         dateTime: "2025-11-13T03:00:00Z",
                    },
                    ticketing: {
                         safeTix: {
                              enabled: true,
                         },
                         allInclusivePricing: {
                              enabled: true,
                         },
                    },
                    nameOrigin: "custom",
                    _links: {
                         self: {
                              href: "/discovery/v2/events/G5vYZbS1gk4lg?locale=en-us",
                         },
                         attractions: [
                              {
                                   href: "/discovery/v2/attractions/K8vZ9179Dvf?locale=en-us",
                              },
                              {
                                   href: "/discovery/v2/attractions/K8vZ917_Q8V?locale=en-us",
                              },
                         ],
                         venues: [
                              {
                                   href: "/discovery/v2/venues/KovZ917ALXF?locale=en-us",
                              },
                         ],
                    },
                    _embedded: {
                         venues: [
                              {
                                   name: "August Hall",
                                   type: "venue",
                                   id: "KovZ917ALXF",
                                   test: false,
                                   url: "https://www.ticketmaster.com/august-hall-tickets-san-francisco/venue/230021",
                                   locale: "en-us",
                                   postalCode: "94102",
                                   timezone: "America/Los_Angeles",
                                   city: {
                                        name: "San Francisco",
                                   },
                                   state: {
                                        name: "California",
                                        stateCode: "CA",
                                   },
                                   country: {
                                        name: "United States Of America",
                                        countryCode: "US",
                                   },
                                   address: {
                                        line1: "420 Mason St",
                                   },
                                   location: {
                                        longitude: "-122.40959800",
                                        latitude: "37.78757100",
                                   },
                                   markets: [
                                        {
                                             name: "N. California/N. Nevada",
                                             id: "41",
                                        },
                                   ],
                                   dmas: [
                                        {
                                             id: 250,
                                        },
                                        {
                                             id: 273,
                                        },
                                        {
                                             id: 282,
                                        },
                                        {
                                             id: 341,
                                        },
                                        {
                                             id: 368,
                                        },
                                        {
                                             id: 374,
                                        },
                                        {
                                             id: 382,
                                        },
                                   ],
                                   upcomingEvents: {
                                        universe: 1,
                                        tmr: 4,
                                        ticketmaster: 42,
                                        _total: 47,
                                        _filtered: 0,
                                   },
                                   _links: {
                                        self: {
                                             href: "/discovery/v2/venues/KovZ917ALXF?locale=en-us",
                                        },
                                   },
                              },
                         ],
                         attractions: [
                              {
                                   name: "Joy Oladokun",
                                   type: "attraction",
                                   id: "K8vZ9179Dvf",
                                   test: false,
                                   url: "https://www.ticketmaster.com/joy-oladokun-tickets/artist/2610528",
                                   locale: "en-us",
                                   externalLinks: {
                                        youtube: [
                                             {
                                                  url: "https://www.youtube.com/c/JoyOladokun",
                                             },
                                        ],
                                        twitter: [
                                             {
                                                  url: "https://twitter.com/joyoladokun",
                                             },
                                        ],
                                        itunes: [
                                             {
                                                  url: "https://music.apple.com/ca/artist/joy-oladokun/699636664",
                                             },
                                        ],
                                        facebook: [
                                             {
                                                  url: "https://www.facebook.com/joyoladokunmusic/",
                                             },
                                        ],
                                        musicbrainz: [
                                             {
                                                  id: "a2abdca1-2041-45b9-8d01-e34fdef7922f",
                                                  url: "https://musicbrainz.org/artist/a2abdca1-2041-45b9-8d01-e34fdef7922f",
                                             },
                                        ],
                                        instagram: [
                                             {
                                                  url: "https://www.instagram.com/joyoladokun/",
                                             },
                                        ],
                                        homepage: [
                                             {
                                                  url: "http://joyoladokun.com/",
                                             },
                                        ],
                                   },
                                   images: [
                                        {
                                             ratio: "16_9",
                                             url: "https://s1.ticketm.net/dam/a/40e/4560d127-6d5b-4741-94cf-ae1b6fa0440e_TABLET_LANDSCAPE_16_9.jpg",
                                             width: 1024,
                                             height: 576,
                                             fallback: false,
                                        },
                                        {
                                             ratio: "16_9",
                                             url: "https://s1.ticketm.net/dam/a/40e/4560d127-6d5b-4741-94cf-ae1b6fa0440e_RETINA_LANDSCAPE_16_9.jpg",
                                             width: 1136,
                                             height: 639,
                                             fallback: false,
                                        },
                                        {
                                             ratio: "3_2",
                                             url: "https://s1.ticketm.net/dam/a/40e/4560d127-6d5b-4741-94cf-ae1b6fa0440e_ARTIST_PAGE_3_2.jpg",
                                             width: 305,
                                             height: 203,
                                             fallback: false,
                                        },
                                        {
                                             ratio: "3_2",
                                             url: "https://s1.ticketm.net/dam/a/40e/4560d127-6d5b-4741-94cf-ae1b6fa0440e_TABLET_LANDSCAPE_3_2.jpg",
                                             width: 1024,
                                             height: 683,
                                             fallback: false,
                                        },
                                        {
                                             ratio: "4_3",
                                             url: "https://s1.ticketm.net/dam/a/40e/4560d127-6d5b-4741-94cf-ae1b6fa0440e_CUSTOM.jpg",
                                             width: 305,
                                             height: 225,
                                             fallback: false,
                                        },
                                        {
                                             ratio: "16_9",
                                             url: "https://s1.ticketm.net/dam/a/40e/4560d127-6d5b-4741-94cf-ae1b6fa0440e_SOURCE",
                                             width: 2426,
                                             height: 1365,
                                             fallback: false,
                                        },
                                        {
                                             ratio: "3_2",
                                             url: "https://s1.ticketm.net/dam/a/40e/4560d127-6d5b-4741-94cf-ae1b6fa0440e_RETINA_PORTRAIT_3_2.jpg",
                                             width: 640,
                                             height: 427,
                                             fallback: false,
                                        },
                                        {
                                             ratio: "16_9",
                                             url: "https://s1.ticketm.net/dam/a/40e/4560d127-6d5b-4741-94cf-ae1b6fa0440e_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                                             width: 2048,
                                             height: 1152,
                                             fallback: false,
                                        },
                                        {
                                             ratio: "16_9",
                                             url: "https://s1.ticketm.net/dam/a/40e/4560d127-6d5b-4741-94cf-ae1b6fa0440e_EVENT_DETAIL_PAGE_16_9.jpg",
                                             width: 205,
                                             height: 115,
                                             fallback: false,
                                        },
                                        {
                                             ratio: "16_9",
                                             url: "https://s1.ticketm.net/dam/a/40e/4560d127-6d5b-4741-94cf-ae1b6fa0440e_RETINA_PORTRAIT_16_9.jpg",
                                             width: 640,
                                             height: 360,
                                             fallback: false,
                                        },
                                        {
                                             ratio: "16_9",
                                             url: "https://s1.ticketm.net/dam/a/40e/4560d127-6d5b-4741-94cf-ae1b6fa0440e_RECOMENDATION_16_9.jpg",
                                             width: 100,
                                             height: 56,
                                             fallback: false,
                                        },
                                   ],
                                   classifications: [
                                        {
                                             primary: true,
                                             segment: {
                                                  id: "KZFzniwnSyZfZ7v7nJ",
                                                  name: "Music",
                                             },
                                             genre: {
                                                  id: "KnvZfZ7vAeA",
                                                  name: "Rock",
                                             },
                                             subGenre: {
                                                  id: "KZazBEonSMnZfZ7v6F1",
                                                  name: "Pop",
                                             },
                                             type: {
                                                  id: "KZAyXgnZfZ7v7la",
                                                  name: "Individual",
                                             },
                                             subType: {
                                                  id: "KZFzBErXgnZfZ7vAd7",
                                                  name: "Musician",
                                             },
                                             family: false,
                                        },
                                   ],
                                   upcomingEvents: {
                                        tmr: 1,
                                        ticketmaster: 3,
                                        ticketweb: 2,
                                        _total: 6,
                                        _filtered: 0,
                                   },
                                   _links: {
                                        self: {
                                             href: "/discovery/v2/attractions/K8vZ9179Dvf?locale=en-us",
                                        },
                                   },
                              },
                              {
                                   name: "Bartees Strange",
                                   type: "attraction",
                                   id: "K8vZ917_Q8V",
                                   test: false,
                                   url: "https://www.ticketmaster.com/bartees-strange-tickets/artist/2792439",
                                   locale: "en-us",
                                   externalLinks: {
                                        youtube: [
                                             {
                                                  url: "https://www.youtube.com/@bartees_strange",
                                             },
                                        ],
                                        twitter: [
                                             {
                                                  url: "https://twitter.com/Bartees_Strange",
                                             },
                                        ],
                                        itunes: [
                                             {
                                                  url: "https://music.apple.com/us/artist/bartees-strange/1450776625",
                                             },
                                        ],
                                        facebook: [
                                             {
                                                  url: "https://www.facebook.com/BARTEESTRANGE/",
                                             },
                                        ],
                                        spotify: [
                                             {
                                                  url: "https://open.spotify.com/artist/6Gl4Q3ePw6HKMfIOix5QpG",
                                             },
                                        ],
                                        musicbrainz: [
                                             {
                                                  id: "9e1ea361-c2cc-45a4-a926-00518453efc0",
                                                  url: "https://musicbrainz.org/artist/9e1ea361-c2cc-45a4-a926-00518453efc0",
                                             },
                                        ],
                                        instagram: [
                                             {
                                                  url: "https://www.instagram.com/bartees_strange/",
                                             },
                                        ],
                                        homepage: [
                                             {
                                                  url: "https://www.barteesstrange.com/",
                                             },
                                        ],
                                   },
                                   images: [
                                        {
                                             ratio: "16_9",
                                             url: "https://s1.ticketm.net/dam/a/03a/f046217a-23c1-4e7d-8ae4-ef7684ef903a_EVENT_DETAIL_PAGE_16_9.jpg",
                                             width: 205,
                                             height: 115,
                                             fallback: false,
                                        },
                                        {
                                             ratio: "3_2",
                                             url: "https://s1.ticketm.net/dam/a/03a/f046217a-23c1-4e7d-8ae4-ef7684ef903a_RETINA_PORTRAIT_3_2.jpg",
                                             width: 640,
                                             height: 427,
                                             fallback: false,
                                        },
                                        {
                                             ratio: "16_9",
                                             url: "https://s1.ticketm.net/dam/a/03a/f046217a-23c1-4e7d-8ae4-ef7684ef903a_RETINA_PORTRAIT_16_9.jpg",
                                             width: 640,
                                             height: 360,
                                             fallback: false,
                                        },
                                        {
                                             ratio: "4_3",
                                             url: "https://s1.ticketm.net/dam/a/03a/f046217a-23c1-4e7d-8ae4-ef7684ef903a_CUSTOM.jpg",
                                             width: 305,
                                             height: 225,
                                             fallback: false,
                                        },
                                        {
                                             ratio: "16_9",
                                             url: "https://s1.ticketm.net/dam/a/03a/f046217a-23c1-4e7d-8ae4-ef7684ef903a_SOURCE",
                                             width: 2048,
                                             height: 1152,
                                             fallback: false,
                                        },
                                        {
                                             ratio: "16_9",
                                             url: "https://s1.ticketm.net/dam/a/03a/f046217a-23c1-4e7d-8ae4-ef7684ef903a_RETINA_LANDSCAPE_16_9.jpg",
                                             width: 1136,
                                             height: 639,
                                             fallback: false,
                                        },
                                        {
                                             ratio: "16_9",
                                             url: "https://s1.ticketm.net/dam/a/03a/f046217a-23c1-4e7d-8ae4-ef7684ef903a_TABLET_LANDSCAPE_16_9.jpg",
                                             width: 1024,
                                             height: 576,
                                             fallback: false,
                                        },
                                        {
                                             ratio: "3_2",
                                             url: "https://s1.ticketm.net/dam/a/03a/f046217a-23c1-4e7d-8ae4-ef7684ef903a_TABLET_LANDSCAPE_3_2.jpg",
                                             width: 1024,
                                             height: 683,
                                             fallback: false,
                                        },
                                        {
                                             ratio: "3_2",
                                             url: "https://s1.ticketm.net/dam/a/03a/f046217a-23c1-4e7d-8ae4-ef7684ef903a_ARTIST_PAGE_3_2.jpg",
                                             width: 305,
                                             height: 203,
                                             fallback: false,
                                        },
                                        {
                                             ratio: "16_9",
                                             url: "https://s1.ticketm.net/dam/a/03a/f046217a-23c1-4e7d-8ae4-ef7684ef903a_RECOMENDATION_16_9.jpg",
                                             width: 100,
                                             height: 56,
                                             fallback: false,
                                        },
                                   ],
                                   classifications: [
                                        {
                                             primary: true,
                                             segment: {
                                                  id: "KZFzniwnSyZfZ7v7nJ",
                                                  name: "Music",
                                             },
                                             genre: {
                                                  id: "KnvZfZ7vAvv",
                                                  name: "Alternative",
                                             },
                                             subGenre: {
                                                  id: "KZazBEonSMnZfZ7vAvn",
                                                  name: "Alternative Rock",
                                             },
                                             type: {
                                                  id: "KZAyXgnZfZ7v7l1",
                                                  name: "Group",
                                             },
                                             subType: {
                                                  id: "KZFzBErXgnZfZ7vA71",
                                                  name: "Band",
                                             },
                                             family: false,
                                        },
                                   ],
                                   upcomingEvents: {
                                        "mfx-nl": 1,
                                        ticketmaster: 4,
                                        ticketweb: 2,
                                        _total: 7,
                                        _filtered: 0,
                                   },
                                   _links: {
                                        self: {
                                             href: "/discovery/v2/attractions/K8vZ917_Q8V?locale=en-us",
                                        },
                                   },
                              },
                         ],
                    },
               },
               {
                    name: "PinkPantheress",
                    type: "event",
                    id: "G5vYZblMjUpDo",
                    test: false,
                    url: "https://www.ticketmaster.com/pinkpantheress-san-francisco-california-11-12-2025/event/1C0062BDDCD96ED1",
                    locale: "en-us",
                    images: [
                         {
                              ratio: "3_2",
                              url: "https://s1.ticketm.net/dam/a/6d5/305f1fa8-861d-4197-acfa-d3da93b436d5_RETINA_PORTRAIT_3_2.jpg",
                              width: 640,
                              height: 427,
                              fallback: false,
                         },
                         {
                              ratio: "16_9",
                              url: "https://s1.ticketm.net/dam/a/6d5/305f1fa8-861d-4197-acfa-d3da93b436d5_EVENT_DETAIL_PAGE_16_9.jpg",
                              width: 205,
                              height: 115,
                              fallback: false,
                         },
                         {
                              ratio: "16_9",
                              url: "https://s1.ticketm.net/dam/a/6d5/305f1fa8-861d-4197-acfa-d3da93b436d5_TABLET_LANDSCAPE_16_9.jpg",
                              width: 1024,
                              height: 576,
                              fallback: false,
                         },
                         {
                              ratio: "16_9",
                              url: "https://s1.ticketm.net/dam/a/6d5/305f1fa8-861d-4197-acfa-d3da93b436d5_RETINA_LANDSCAPE_16_9.jpg",
                              width: 1136,
                              height: 639,
                              fallback: false,
                         },
                         {
                              ratio: "16_9",
                              url: "https://s1.ticketm.net/dam/a/6d5/305f1fa8-861d-4197-acfa-d3da93b436d5_RECOMENDATION_16_9.jpg",
                              width: 100,
                              height: 56,
                              fallback: false,
                         },
                         {
                              ratio: "16_9",
                              url: "https://s1.ticketm.net/dam/a/6d5/305f1fa8-861d-4197-acfa-d3da93b436d5_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                              width: 2048,
                              height: 1152,
                              fallback: false,
                         },
                         {
                              ratio: "3_2",
                              url: "https://s1.ticketm.net/dam/a/6d5/305f1fa8-861d-4197-acfa-d3da93b436d5_TABLET_LANDSCAPE_3_2.jpg",
                              width: 1024,
                              height: 683,
                              fallback: false,
                         },
                         {
                              ratio: "16_9",
                              url: "https://s1.ticketm.net/dam/a/6d5/305f1fa8-861d-4197-acfa-d3da93b436d5_RETINA_PORTRAIT_16_9.jpg",
                              width: 640,
                              height: 360,
                              fallback: false,
                         },
                         {
                              ratio: "3_2",
                              url: "https://s1.ticketm.net/dam/a/6d5/305f1fa8-861d-4197-acfa-d3da93b436d5_ARTIST_PAGE_3_2.jpg",
                              width: 305,
                              height: 203,
                              fallback: false,
                         },
                         {
                              ratio: "16_9",
                              url: "https://s1.ticketm.net/dam/a/6d5/305f1fa8-861d-4197-acfa-d3da93b436d5_SOURCE",
                              width: 2426,
                              height: 1365,
                              fallback: false,
                         },
                         {
                              ratio: "4_3",
                              url: "https://s1.ticketm.net/dam/a/6d5/305f1fa8-861d-4197-acfa-d3da93b436d5_CUSTOM.jpg",
                              width: 305,
                              height: 225,
                              fallback: false,
                         },
                    ],
                    sales: {
                         public: {
                              startDateTime: "2025-06-20T17:00:00Z",
                              startTBD: false,
                              startTBA: false,
                              endDateTime: "2025-11-13T06:00:00Z",
                         },
                         presales: [
                              {
                                   startDateTime: "2025-06-18T17:00:00Z",
                                   endDateTime: "2025-06-20T16:00:00Z",
                                   name: "Artist Presale",
                              },
                              {
                                   startDateTime: "2025-06-18T19:00:00Z",
                                   endDateTime: "2025-06-20T16:00:00Z",
                                   name: "Live Nation Presale",
                              },
                              {
                                   startDateTime: "2025-06-18T19:00:00Z",
                                   endDateTime: "2025-06-20T16:00:00Z",
                                   name: "Ticketmaster Presale",
                              },
                              {
                                   startDateTime: "2025-06-18T19:00:00Z",
                                   endDateTime: "2025-06-20T16:00:00Z",
                                   name: "Venue Presale",
                              },
                              {
                                   startDateTime: "2025-06-19T19:00:00Z",
                                   endDateTime: "2025-06-20T16:00:00Z",
                                   name: "Spotify Presale",
                              },
                         ],
                    },
                    dates: {
                         start: {
                              localDate: "2025-11-12",
                              localTime: "20:00:00",
                              dateTime: "2025-11-13T04:00:00Z",
                              dateTBD: false,
                              dateTBA: false,
                              timeTBA: false,
                              noSpecificTime: false,
                         },
                         timezone: "America/Los_Angeles",
                         status: {
                              code: "onsale",
                         },
                         spanMultipleDays: false,
                    },
                    classifications: [
                         {
                              primary: true,
                              segment: {
                                   id: "KZFzniwnSyZfZ7v7nJ",
                                   name: "Music",
                              },
                              genre: {
                                   id: "KnvZfZ7vAev",
                                   name: "Pop",
                              },
                              subGenre: {
                                   id: "KZazBEonSMnZfZ7vk1t",
                                   name: "Pop",
                              },
                              type: {
                                   id: "KZAyXgnZfZ7v7nI",
                                   name: "Undefined",
                              },
                              subType: {
                                   id: "KZFzBErXgnZfZ7v7lJ",
                                   name: "Undefined",
                              },
                              family: false,
                         },
                    ],
                    promoter: {
                         id: "653",
                         name: "LIVE NATION MUSIC",
                         description: "LIVE NATION MUSIC / NTL / USA",
                    },
                    promoters: [
                         {
                              id: "653",
                              name: "LIVE NATION MUSIC",
                              description: "LIVE NATION MUSIC / NTL / USA",
                         },
                    ],
                    info: "Doors open at 7pm",
                    pleaseNote: "Doors open at 7pm",
                    products: [
                         {
                              name: "Premier Parking: PinkPantheress",
                              id: "G5vYZblMLUUWL",
                              url: "https://www.ticketmaster.com/premier-parking-pinkpantheress-san-francisco-california-11-12-2025/event/1C0062BDDFDB6F5F",
                              type: "Parking",
                              classifications: [
                                   {
                                        primary: true,
                                        segment: {
                                             id: "KZFzniwnSyZfZ7v7n1",
                                             name: "Miscellaneous",
                                        },
                                        genre: {
                                             id: "KnvZfZ7v7ll",
                                             name: "Undefined",
                                        },
                                        subGenre: {
                                             id: "KZazBEonSMnZfZ7vAv1",
                                             name: "Undefined",
                                        },
                                        type: {
                                             id: "KZAyXgnZfZ7vAva",
                                             name: "Parking",
                                        },
                                        subType: {
                                             id: "KZFzBErXgnZfZ7vAFe",
                                             name: "Regular",
                                        },
                                        family: false,
                                   },
                              ],
                         },
                         {
                              name: "California Lounge: PinkPantheress - not a concert ticket",
                              id: "G5vYZblMrgkHN",
                              url: "https://www.ticketmaster.com/california-lounge-pinkpantheress-not-a-concert-san-francisco-california-11-12-2025/event/1C0062BDDED46F23",
                              type: "Club Access",
                              classifications: [
                                   {
                                        primary: true,
                                        segment: {
                                             id: "KZFzniwnSyZfZ7v7n1",
                                             name: "Miscellaneous",
                                        },
                                        genre: {
                                             id: "KnvZfZ7v7ll",
                                             name: "Undefined",
                                        },
                                        subGenre: {
                                             id: "KZazBEonSMnZfZ7vAv1",
                                             name: "Undefined",
                                        },
                                        type: {
                                             id: "KZAyXgnZfZ7v7nJ",
                                             name: "Upsell",
                                        },
                                        subType: {
                                             id: "KZFzBErXgnZfZ7vAFJ",
                                             name: "VIP Club Access",
                                        },
                                        family: false,
                                   },
                              ],
                         },
                    ],
                    seatmap: {
                         staticUrl: "https://mapsapi.tmol.io/maps/geometry/3/event/1C0062BDDCD96ED1/staticImage?type=png&systemId=HOST",
                    },
                    accessibility: {
                         ticketLimit: 4,
                    },
                    ticketLimit: {
                         info: "There is an overall 4 ticket limit for this event.",
                    },
                    ageRestrictions: {
                         legalAgeEnforced: false,
                    },
                    ticketing: {
                         safeTix: {
                              enabled: true,
                         },
                         allInclusivePricing: {
                              enabled: true,
                         },
                    },
                    nameOrigin: "custom",
                    _links: {
                         self: {
                              href: "/discovery/v2/events/G5vYZblMjUpDo?locale=en-us",
                         },
                         attractions: [
                              {
                                   href: "/discovery/v2/attractions/K8vZ917_TO7?locale=en-us",
                              },
                              {
                                   href: "/discovery/v2/attractions/K8vZ917rKq7?locale=en-us",
                              },
                         ],
                         venues: [
                              {
                                   href: "/discovery/v2/venues/KovZpZAJ6nlA?locale=en-us",
                              },
                         ],
                    },
                    _embedded: {
                         venues: [
                              {
                                   name: "The Masonic",
                                   type: "venue",
                                   id: "KovZpZAJ6nlA",
                                   test: false,
                                   url: "https://www.ticketmaster.com/the-masonic-tickets-san-francisco/venue/229776",
                                   locale: "en-us",
                                   images: [
                                        {
                                             ratio: "16_9",
                                             url: "https://s1.ticketm.net/dbimages/16220v.jpg",
                                             width: 205,
                                             height: 115,
                                             fallback: false,
                                        },
                                   ],
                                   postalCode: "94108",
                                   timezone: "America/Los_Angeles",
                                   city: {
                                        name: "San Francisco",
                                   },
                                   state: {
                                        name: "California",
                                        stateCode: "CA",
                                   },
                                   country: {
                                        name: "United States Of America",
                                        countryCode: "US",
                                   },
                                   address: {
                                        line1: "1111 California St",
                                   },
                                   location: {
                                        longitude: "-122.41329300",
                                        latitude: "37.79141900",
                                   },
                                   markets: [
                                        {
                                             name: "N. California/N. Nevada",
                                             id: "41",
                                        },
                                   ],
                                   dmas: [
                                        {
                                             id: 250,
                                        },
                                        {
                                             id: 273,
                                        },
                                        {
                                             id: 282,
                                        },
                                        {
                                             id: 341,
                                        },
                                        {
                                             id: 368,
                                        },
                                        {
                                             id: 374,
                                        },
                                        {
                                             id: 382,
                                        },
                                   ],
                                   boxOfficeInfo: {
                                        openHoursDetail:
                                             "Due to the ongoing global pandemic, and to protect the health and safety of our guests and venue staff members, the box office at The Masonic will be open on-day-of-show only. If you’d like to purchase tickets, please visit us at www.livenation.com. If you’re looking to obtain a refund for a show that was either canceled, postponed or rescheduled, please visit us at www.livenation.com/refund for more information. We look forward to seeing you at our next show at The Masonic.",
                                        acceptedPaymentDetail: "Visa, Mastercard, Discover, Cash",
                                   },
                                   parkingDetail:
                                        "The entrance to our onsite parking garage is on California Street, just next to the entrance. It is open 24 hours per day, seven days per week. We recommend arriving early in order to find parking before a special event. Additional garages are available at Grace Cathedral (Taylor between California and Sacramnento & Crocker Garage (California between Taylor and Mason)",
                                   generalInfo: {
                                        generalRule:
                                             "Camera Policy: Personal cameras are allowed in the venue. Flash photography, video and removable lens cameras are not permitted without venue approval.",
                                   },
                                   upcomingEvents: {
                                        archtics: 4,
                                        ticketmaster: 40,
                                        _total: 44,
                                        _filtered: 0,
                                   },
                                   _links: {
                                        self: {
                                             href: "/discovery/v2/venues/KovZpZAJ6nlA?locale=en-us",
                                        },
                                   },
                              },
                         ],
                         attractions: [
                              {
                                   name: "PinkPantheress",
                                   type: "attraction",
                                   id: "K8vZ917_TO7",
                                   test: false,
                                   url: "https://www.ticketmaster.com/pinkpantheress-tickets/artist/2850572",
                                   locale: "en-us",
                                   externalLinks: {
                                        musicbrainz: [
                                             {
                                                  id: "7441014f-f8f5-494f-81db-ff166fbc078d",
                                                  url: "https://musicbrainz.org/artist/7441014f-f8f5-494f-81db-ff166fbc078d",
                                             },
                                        ],
                                   },
                                   images: [
                                        {
                                             ratio: "3_2",
                                             url: "https://s1.ticketm.net/dam/a/6d5/305f1fa8-861d-4197-acfa-d3da93b436d5_RETINA_PORTRAIT_3_2.jpg",
                                             width: 640,
                                             height: 427,
                                             fallback: false,
                                        },
                                        {
                                             ratio: "16_9",
                                             url: "https://s1.ticketm.net/dam/a/6d5/305f1fa8-861d-4197-acfa-d3da93b436d5_EVENT_DETAIL_PAGE_16_9.jpg",
                                             width: 205,
                                             height: 115,
                                             fallback: false,
                                        },
                                        {
                                             ratio: "16_9",
                                             url: "https://s1.ticketm.net/dam/a/6d5/305f1fa8-861d-4197-acfa-d3da93b436d5_TABLET_LANDSCAPE_16_9.jpg",
                                             width: 1024,
                                             height: 576,
                                             fallback: false,
                                        },
                                        {
                                             ratio: "16_9",
                                             url: "https://s1.ticketm.net/dam/a/6d5/305f1fa8-861d-4197-acfa-d3da93b436d5_RETINA_LANDSCAPE_16_9.jpg",
                                             width: 1136,
                                             height: 639,
                                             fallback: false,
                                        },
                                        {
                                             ratio: "16_9",
                                             url: "https://s1.ticketm.net/dam/a/6d5/305f1fa8-861d-4197-acfa-d3da93b436d5_RECOMENDATION_16_9.jpg",
                                             width: 100,
                                             height: 56,
                                             fallback: false,
                                        },
                                        {
                                             ratio: "16_9",
                                             url: "https://s1.ticketm.net/dam/a/6d5/305f1fa8-861d-4197-acfa-d3da93b436d5_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                                             width: 2048,
                                             height: 1152,
                                             fallback: false,
                                        },
                                        {
                                             ratio: "3_2",
                                             url: "https://s1.ticketm.net/dam/a/6d5/305f1fa8-861d-4197-acfa-d3da93b436d5_TABLET_LANDSCAPE_3_2.jpg",
                                             width: 1024,
                                             height: 683,
                                             fallback: false,
                                        },
                                        {
                                             ratio: "16_9",
                                             url: "https://s1.ticketm.net/dam/a/6d5/305f1fa8-861d-4197-acfa-d3da93b436d5_RETINA_PORTRAIT_16_9.jpg",
                                             width: 640,
                                             height: 360,
                                             fallback: false,
                                        },
                                        {
                                             ratio: "3_2",
                                             url: "https://s1.ticketm.net/dam/a/6d5/305f1fa8-861d-4197-acfa-d3da93b436d5_ARTIST_PAGE_3_2.jpg",
                                             width: 305,
                                             height: 203,
                                             fallback: false,
                                        },
                                        {
                                             ratio: "16_9",
                                             url: "https://s1.ticketm.net/dam/a/6d5/305f1fa8-861d-4197-acfa-d3da93b436d5_SOURCE",
                                             width: 2426,
                                             height: 1365,
                                             fallback: false,
                                        },
                                        {
                                             ratio: "4_3",
                                             url: "https://s1.ticketm.net/dam/a/6d5/305f1fa8-861d-4197-acfa-d3da93b436d5_CUSTOM.jpg",
                                             width: 305,
                                             height: 225,
                                             fallback: false,
                                        },
                                   ],
                                   classifications: [
                                        {
                                             primary: true,
                                             segment: {
                                                  id: "KZFzniwnSyZfZ7v7nJ",
                                                  name: "Music",
                                             },
                                             genre: {
                                                  id: "KnvZfZ7vAev",
                                                  name: "Pop",
                                             },
                                             subGenre: {
                                                  id: "KZazBEonSMnZfZ7vk1t",
                                                  name: "Pop",
                                             },
                                             type: {
                                                  id: "KZAyXgnZfZ7v7la",
                                                  name: "Individual",
                                             },
                                             subType: {
                                                  id: "KZFzBErXgnZfZ7vAdn",
                                                  name: "Artist",
                                             },
                                             family: false,
                                        },
                                   ],
                                   upcomingEvents: {
                                        ticketmaster: 7,
                                        _total: 7,
                                        _filtered: 0,
                                   },
                                   _links: {
                                        self: {
                                             href: "/discovery/v2/attractions/K8vZ917_TO7?locale=en-us",
                                        },
                                   },
                              },
                              {
                                   name: "Nick Cheo",
                                   type: "attraction",
                                   id: "K8vZ917rKq7",
                                   test: false,
                                   url: "https://www.ticketmaster.com/nick-cheo-tickets/artist/3755669",
                                   locale: "en-us",
                                   images: [
                                        {
                                             ratio: "16_9",
                                             url: "https://s1.ticketm.net/dam/a/f42/d1f4fcf9-963b-40a8-92ad-4ead1eb7df42_EVENT_DETAIL_PAGE_16_9.jpg",
                                             width: 205,
                                             height: 115,
                                             fallback: false,
                                        },
                                        {
                                             ratio: "3_2",
                                             url: "https://s1.ticketm.net/dam/a/f42/d1f4fcf9-963b-40a8-92ad-4ead1eb7df42_ARTIST_PAGE_3_2.jpg",
                                             width: 305,
                                             height: 203,
                                             fallback: false,
                                        },
                                        {
                                             ratio: "16_9",
                                             url: "https://s1.ticketm.net/dam/a/f42/d1f4fcf9-963b-40a8-92ad-4ead1eb7df42_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                                             width: 2048,
                                             height: 1152,
                                             fallback: false,
                                        },
                                        {
                                             ratio: "3_2",
                                             url: "https://s1.ticketm.net/dam/a/f42/d1f4fcf9-963b-40a8-92ad-4ead1eb7df42_RETINA_PORTRAIT_3_2.jpg",
                                             width: 640,
                                             height: 427,
                                             fallback: false,
                                        },
                                        {
                                             ratio: "16_9",
                                             url: "https://s1.ticketm.net/dam/a/f42/d1f4fcf9-963b-40a8-92ad-4ead1eb7df42_SOURCE",
                                             width: 2426,
                                             height: 1365,
                                             fallback: false,
                                        },
                                        {
                                             ratio: "4_3",
                                             url: "https://s1.ticketm.net/dam/a/f42/d1f4fcf9-963b-40a8-92ad-4ead1eb7df42_CUSTOM.jpg",
                                             width: 305,
                                             height: 225,
                                             fallback: false,
                                        },
                                        {
                                             ratio: "3_2",
                                             url: "https://s1.ticketm.net/dam/a/f42/d1f4fcf9-963b-40a8-92ad-4ead1eb7df42_TABLET_LANDSCAPE_3_2.jpg",
                                             width: 1024,
                                             height: 683,
                                             fallback: false,
                                        },
                                        {
                                             ratio: "16_9",
                                             url: "https://s1.ticketm.net/dam/a/f42/d1f4fcf9-963b-40a8-92ad-4ead1eb7df42_RECOMENDATION_16_9.jpg",
                                             width: 100,
                                             height: 56,
                                             fallback: false,
                                        },
                                        {
                                             ratio: "16_9",
                                             url: "https://s1.ticketm.net/dam/a/f42/d1f4fcf9-963b-40a8-92ad-4ead1eb7df42_TABLET_LANDSCAPE_16_9.jpg",
                                             width: 1024,
                                             height: 576,
                                             fallback: false,
                                        },
                                        {
                                             ratio: "16_9",
                                             url: "https://s1.ticketm.net/dam/a/f42/d1f4fcf9-963b-40a8-92ad-4ead1eb7df42_RETINA_PORTRAIT_16_9.jpg",
                                             width: 640,
                                             height: 360,
                                             fallback: false,
                                        },
                                        {
                                             ratio: "16_9",
                                             url: "https://s1.ticketm.net/dam/a/f42/d1f4fcf9-963b-40a8-92ad-4ead1eb7df42_RETINA_LANDSCAPE_16_9.jpg",
                                             width: 1136,
                                             height: 639,
                                             fallback: false,
                                        },
                                   ],
                                   classifications: [
                                        {
                                             primary: true,
                                             segment: {
                                                  id: "KZFzniwnSyZfZ7v7nJ",
                                                  name: "Music",
                                             },
                                             genre: {
                                                  id: "KnvZfZ7vAvF",
                                                  name: "Dance/Electronic",
                                             },
                                             subGenre: {
                                                  id: "KZazBEonSMnZfZ7vA1E",
                                                  name: "Dance/Electronic",
                                             },
                                             type: {
                                                  id: "KZAyXgnZfZ7v7la",
                                                  name: "Individual",
                                             },
                                             subType: {
                                                  id: "KZFzBErXgnZfZ7vAd7",
                                                  name: "Musician",
                                             },
                                             family: false,
                                        },
                                   ],
                                   upcomingEvents: {
                                        ticketmaster: 2,
                                        _total: 2,
                                        _filtered: 0,
                                   },
                                   _links: {
                                        self: {
                                             href: "/discovery/v2/attractions/K8vZ917rKq7?locale=en-us",
                                        },
                                   },
                              },
                         ],
                    },
               },
               {
                    name: "SPCA Benefit: Tributes to Coldplay, Avicii, Chainsmokers & Daft Punk",
                    type: "event",
                    id: "G5vYZbYrJ99LM",
                    test: false,
                    url: "https://www.ticketmaster.com/spca-benefit-tributes-to-coldplay-avicii-san-francisco-california-11-15-2025/event/1C006307A65D77F7",
                    locale: "en-us",
                    images: [
                         {
                              ratio: "3_2",
                              url: "https://s1.ticketm.net/dam/e/506/916a6569-f9fe-4213-89f8-3bf97774e506_TABLET_LANDSCAPE_3_2.jpg",
                              width: 1024,
                              height: 683,
                              fallback: false,
                         },
                         {
                              ratio: "3_2",
                              url: "https://s1.ticketm.net/dam/e/506/916a6569-f9fe-4213-89f8-3bf97774e506_RETINA_PORTRAIT_3_2.jpg",
                              width: 640,
                              height: 427,
                              fallback: false,
                         },
                         {
                              ratio: "3_2",
                              url: "https://s1.ticketm.net/dam/e/506/916a6569-f9fe-4213-89f8-3bf97774e506_ARTIST_PAGE_3_2.jpg",
                              width: 305,
                              height: 203,
                              fallback: false,
                         },
                         {
                              ratio: "16_9",
                              url: "https://s1.ticketm.net/dam/e/506/916a6569-f9fe-4213-89f8-3bf97774e506_RETINA_PORTRAIT_16_9.jpg",
                              width: 640,
                              height: 360,
                              fallback: false,
                         },
                         {
                              ratio: "16_9",
                              url: "https://s1.ticketm.net/dam/e/506/916a6569-f9fe-4213-89f8-3bf97774e506_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                              width: 2048,
                              height: 1152,
                              fallback: false,
                         },
                         {
                              ratio: "4_3",
                              url: "https://s1.ticketm.net/dam/e/506/916a6569-f9fe-4213-89f8-3bf97774e506_CUSTOM.jpg",
                              width: 305,
                              height: 225,
                              fallback: false,
                         },
                         {
                              ratio: "16_9",
                              url: "https://s1.ticketm.net/dam/e/506/916a6569-f9fe-4213-89f8-3bf97774e506_EVENT_DETAIL_PAGE_16_9.jpg",
                              width: 205,
                              height: 115,
                              fallback: false,
                         },
                         {
                              ratio: "16_9",
                              url: "https://s1.ticketm.net/dam/e/506/916a6569-f9fe-4213-89f8-3bf97774e506_RETINA_LANDSCAPE_16_9.jpg",
                              width: 1136,
                              height: 639,
                              fallback: false,
                         },
                         {
                              ratio: "16_9",
                              url: "https://s1.ticketm.net/dam/e/506/916a6569-f9fe-4213-89f8-3bf97774e506_TABLET_LANDSCAPE_16_9.jpg",
                              width: 1024,
                              height: 576,
                              fallback: false,
                         },
                         {
                              ratio: "16_9",
                              url: "https://s1.ticketm.net/dam/e/506/916a6569-f9fe-4213-89f8-3bf97774e506_RECOMENDATION_16_9.jpg",
                              width: 100,
                              height: 56,
                              fallback: false,
                         },
                    ],
                    sales: {
                         public: {
                              startDateTime: "2025-08-08T17:00:00Z",
                              startTBD: false,
                              startTBA: false,
                              endDateTime: "2025-11-16T06:00:00Z",
                         },
                    },
                    dates: {
                         start: {
                              localDate: "2025-11-15",
                              localTime: "20:00:00",
                              dateTime: "2025-11-16T04:00:00Z",
                              dateTBD: false,
                              dateTBA: false,
                              timeTBA: false,
                              noSpecificTime: false,
                         },
                         timezone: "America/Los_Angeles",
                         status: {
                              code: "cancelled",
                         },
                         spanMultipleDays: false,
                    },
                    classifications: [
                         {
                              primary: true,
                              segment: {
                                   id: "KZFzniwnSyZfZ7v7nJ",
                                   name: "Music",
                              },
                              genre: {
                                   id: "KnvZfZ7vAev",
                                   name: "Pop",
                              },
                              subGenre: {
                                   id: "KZazBEonSMnZfZ7vk1t",
                                   name: "Pop",
                              },
                              type: {
                                   id: "KZAyXgnZfZ7v7nI",
                                   name: "Undefined",
                              },
                              subType: {
                                   id: "KZFzBErXgnZfZ7v7lJ",
                                   name: "Undefined",
                              },
                              family: false,
                         },
                    ],
                    promoter: {
                         id: "653",
                         name: "LIVE NATION MUSIC",
                         description: "LIVE NATION MUSIC / NTL / USA",
                    },
                    promoters: [
                         {
                              id: "653",
                              name: "LIVE NATION MUSIC",
                              description: "LIVE NATION MUSIC / NTL / USA",
                         },
                    ],
                    pleaseNote:
                         "Unfortunately, the Event Organizer has had to cancel your event. You don't need to do a thing. We'll issue a refund to the original method of payment used at time of purchase, as soon as funds are received from the Event Organizer. It should appear on your account within 14-21 days. Please Note: If the tickets were transferred to you, the refund will go to the fan who originally purchased the tickets from Ticketmaster. Please see our Purchase Policy for more information.",
                    seatmap: {
                         staticUrl: "https://mapsapi.tmol.io/maps/geometry/3/event/1C006307A65D77F7/staticImage?type=png&systemId=HOST",
                    },
                    ageRestrictions: {
                         legalAgeEnforced: false,
                    },
                    doorsTimes: {
                         localDate: "2025-11-15",
                         localTime: "19:00:00",
                         dateTime: "2025-11-16T03:00:00Z",
                    },
                    ticketing: {
                         safeTix: {
                              enabled: true,
                         },
                         allInclusivePricing: {
                              enabled: true,
                         },
                    },
                    _links: {
                         self: {
                              href: "/discovery/v2/events/G5vYZbYrJ99LM?locale=en-us",
                         },
                         attractions: [
                              {
                                   href: "/discovery/v2/attractions/K8vZ917rLp0?locale=en-us",
                              },
                              {
                                   href: "/discovery/v2/attractions/K8vZ917rrOf?locale=en-us",
                              },
                              {
                                   href: "/discovery/v2/attractions/K8vZ917rOif?locale=en-us",
                              },
                         ],
                         venues: [
                              {
                                   href: "/discovery/v2/venues/KovZ917ALXF?locale=en-us",
                              },
                         ],
                    },
                    _embedded: {
                         venues: [
                              {
                                   name: "August Hall",
                                   type: "venue",
                                   id: "KovZ917ALXF",
                                   test: false,
                                   url: "https://www.ticketmaster.com/august-hall-tickets-san-francisco/venue/230021",
                                   locale: "en-us",
                                   postalCode: "94102",
                                   timezone: "America/Los_Angeles",
                                   city: {
                                        name: "San Francisco",
                                   },
                                   state: {
                                        name: "California",
                                        stateCode: "CA",
                                   },
                                   country: {
                                        name: "United States Of America",
                                        countryCode: "US",
                                   },
                                   address: {
                                        line1: "420 Mason St",
                                   },
                                   location: {
                                        longitude: "-122.40959800",
                                        latitude: "37.78757100",
                                   },
                                   markets: [
                                        {
                                             name: "N. California/N. Nevada",
                                             id: "41",
                                        },
                                   ],
                                   dmas: [
                                        {
                                             id: 250,
                                        },
                                        {
                                             id: 273,
                                        },
                                        {
                                             id: 282,
                                        },
                                        {
                                             id: 341,
                                        },
                                        {
                                             id: 368,
                                        },
                                        {
                                             id: 374,
                                        },
                                        {
                                             id: 382,
                                        },
                                   ],
                                   upcomingEvents: {
                                        universe: 1,
                                        tmr: 4,
                                        ticketmaster: 42,
                                        _total: 47,
                                        _filtered: 0,
                                   },
                                   _links: {
                                        self: {
                                             href: "/discovery/v2/venues/KovZ917ALXF?locale=en-us",
                                        },
                                   },
                              },
                         ],
                         attractions: [
                              {
                                   name: "Trouble",
                                   type: "attraction",
                                   id: "K8vZ917rLp0",
                                   test: false,
                                   url: "https://www.ticketmaster.com/trouble-tickets/artist/3856969",
                                   locale: "en-us",
                                   externalLinks: {
                                        facebook: [
                                             {
                                                  url: "https://www.facebook.com/people/Trouble-The-Music-of-Coldplay/61575224668622/",
                                             },
                                        ],
                                        instagram: [
                                             {
                                                  url: "https://www.instagram.com/trouble_coldplay/",
                                             },
                                        ],
                                        homepage: [
                                             {
                                                  url: "https://www.trouble-coldplay.com/",
                                             },
                                        ],
                                   },
                                   images: [
                                        {
                                             ratio: "16_9",
                                             url: "https://s1.ticketm.net/dam/c/4f2/0109888a-61b5-4525-8432-b026ef04f4f2_105631_RETINA_LANDSCAPE_16_9.jpg",
                                             width: 1136,
                                             height: 639,
                                             fallback: true,
                                        },
                                        {
                                             ratio: "3_2",
                                             url: "https://s1.ticketm.net/dam/c/4f2/0109888a-61b5-4525-8432-b026ef04f4f2_105631_ARTIST_PAGE_3_2.jpg",
                                             width: 305,
                                             height: 203,
                                             fallback: true,
                                        },
                                        {
                                             ratio: "3_2",
                                             url: "https://s1.ticketm.net/dam/c/4f2/0109888a-61b5-4525-8432-b026ef04f4f2_105631_TABLET_LANDSCAPE_3_2.jpg",
                                             width: 1024,
                                             height: 683,
                                             fallback: true,
                                        },
                                        {
                                             ratio: "16_9",
                                             url: "https://s1.ticketm.net/dam/c/4f2/0109888a-61b5-4525-8432-b026ef04f4f2_105631_RECOMENDATION_16_9.jpg",
                                             width: 100,
                                             height: 56,
                                             fallback: true,
                                        },
                                        {
                                             ratio: "16_9",
                                             url: "https://s1.ticketm.net/dam/c/4f2/0109888a-61b5-4525-8432-b026ef04f4f2_105631_TABLET_LANDSCAPE_16_9.jpg",
                                             width: 1024,
                                             height: 576,
                                             fallback: true,
                                        },
                                        {
                                             ratio: "16_9",
                                             url: "https://s1.ticketm.net/dam/c/4f2/0109888a-61b5-4525-8432-b026ef04f4f2_105631_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                                             width: 2048,
                                             height: 1152,
                                             fallback: true,
                                        },
                                        {
                                             ratio: "16_9",
                                             url: "https://s1.ticketm.net/dam/c/4f2/0109888a-61b5-4525-8432-b026ef04f4f2_105631_RETINA_PORTRAIT_16_9.jpg",
                                             width: 640,
                                             height: 360,
                                             fallback: true,
                                        },
                                        {
                                             ratio: "3_2",
                                             url: "https://s1.ticketm.net/dam/c/4f2/0109888a-61b5-4525-8432-b026ef04f4f2_105631_RETINA_PORTRAIT_3_2.jpg",
                                             width: 640,
                                             height: 427,
                                             fallback: true,
                                        },
                                        {
                                             ratio: "4_3",
                                             url: "https://s1.ticketm.net/dam/c/4f2/0109888a-61b5-4525-8432-b026ef04f4f2_105631_CUSTOM.jpg",
                                             width: 305,
                                             height: 225,
                                             fallback: true,
                                        },
                                        {
                                             ratio: "16_9",
                                             url: "https://s1.ticketm.net/dam/c/4f2/0109888a-61b5-4525-8432-b026ef04f4f2_105631_EVENT_DETAIL_PAGE_16_9.jpg",
                                             width: 205,
                                             height: 115,
                                             fallback: true,
                                        },
                                   ],
                                   classifications: [
                                        {
                                             primary: true,
                                             segment: {
                                                  id: "KZFzniwnSyZfZ7v7nJ",
                                                  name: "Music",
                                             },
                                             genre: {
                                                  id: "KnvZfZ7vAev",
                                                  name: "Pop",
                                             },
                                             subGenre: {
                                                  id: "KZazBEonSMnZfZ7vkEl",
                                                  name: "Pop Rock",
                                             },
                                             type: {
                                                  id: "KZAyXgnZfZ7v7l1",
                                                  name: "Group",
                                             },
                                             subType: {
                                                  id: "KZFzBErXgnZfZ7vAAI",
                                                  name: "Tribute Band",
                                             },
                                             family: false,
                                        },
                                   ],
                                   upcomingEvents: {
                                        ticketmaster: 1,
                                        _total: 1,
                                        _filtered: 0,
                                   },
                                   draftStatus: "ACCEPTED",
                                   _links: {
                                        self: {
                                             href: "/discovery/v2/attractions/K8vZ917rLp0?locale=en-us",
                                        },
                                   },
                              },
                              {
                                   name: "Yuka Yu",
                                   type: "attraction",
                                   id: "K8vZ917rrOf",
                                   test: false,
                                   url: "https://www.ticketmaster.com/yuka-yu-tickets/artist/3856854",
                                   locale: "en-us",
                                   externalLinks: {
                                        youtube: [
                                             {
                                                  url: "https://www.youtube.com/c/yukayumusic",
                                             },
                                        ],
                                        bandcamp: [
                                             {
                                                  url: "https://yukayumusic.bandcamp.com/",
                                             },
                                        ],
                                        itunes: [
                                             {
                                                  url: "https://music.apple.com/us/artist/yuka-yu/1807000301",
                                             },
                                        ],
                                        spotify: [
                                             {
                                                  url: "https://open.spotify.com/artist/7zhvEJkt6jEHjov5uXZY8Z",
                                             },
                                        ],
                                        facebook: [
                                             {
                                                  url: "https://www.facebook.com/yukayumusic",
                                             },
                                        ],
                                        instagram: [
                                             {
                                                  url: "https://instagram.com/_yukaswat",
                                             },
                                        ],
                                        soundcloud: [
                                             {
                                                  url: "https://soundcloud.com/yukaswat",
                                             },
                                        ],
                                        homepage: [
                                             {
                                                  url: "https://yukayumusic.com/",
                                             },
                                        ],
                                   },
                                   images: [
                                        {
                                             ratio: "3_2",
                                             url: "https://s1.ticketm.net/dam/c/df8/81eadad8-4449-412e-a2b1-3d8bbb78edf8_106181_TABLET_LANDSCAPE_3_2.jpg",
                                             width: 1024,
                                             height: 683,
                                             fallback: true,
                                        },
                                        {
                                             ratio: "16_9",
                                             url: "https://s1.ticketm.net/dam/c/df8/81eadad8-4449-412e-a2b1-3d8bbb78edf8_106181_EVENT_DETAIL_PAGE_16_9.jpg",
                                             width: 205,
                                             height: 115,
                                             fallback: true,
                                        },
                                        {
                                             ratio: "4_3",
                                             url: "https://s1.ticketm.net/dam/c/df8/81eadad8-4449-412e-a2b1-3d8bbb78edf8_106181_CUSTOM.jpg",
                                             width: 305,
                                             height: 225,
                                             fallback: true,
                                        },
                                        {
                                             ratio: "3_2",
                                             url: "https://s1.ticketm.net/dam/c/df8/81eadad8-4449-412e-a2b1-3d8bbb78edf8_106181_RETINA_PORTRAIT_3_2.jpg",
                                             width: 640,
                                             height: 427,
                                             fallback: true,
                                        },
                                        {
                                             ratio: "16_9",
                                             url: "https://s1.ticketm.net/dam/c/df8/81eadad8-4449-412e-a2b1-3d8bbb78edf8_106181_RETINA_PORTRAIT_16_9.jpg",
                                             width: 640,
                                             height: 360,
                                             fallback: true,
                                        },
                                        {
                                             ratio: "16_9",
                                             url: "https://s1.ticketm.net/dam/c/df8/81eadad8-4449-412e-a2b1-3d8bbb78edf8_106181_TABLET_LANDSCAPE_16_9.jpg",
                                             width: 1024,
                                             height: 576,
                                             fallback: true,
                                        },
                                        {
                                             ratio: "3_2",
                                             url: "https://s1.ticketm.net/dam/c/df8/81eadad8-4449-412e-a2b1-3d8bbb78edf8_106181_ARTIST_PAGE_3_2.jpg",
                                             width: 305,
                                             height: 203,
                                             fallback: true,
                                        },
                                        {
                                             ratio: "16_9",
                                             url: "https://s1.ticketm.net/dam/c/df8/81eadad8-4449-412e-a2b1-3d8bbb78edf8_106181_RECOMENDATION_16_9.jpg",
                                             width: 100,
                                             height: 56,
                                             fallback: true,
                                        },
                                        {
                                             ratio: "16_9",
                                             url: "https://s1.ticketm.net/dam/c/df8/81eadad8-4449-412e-a2b1-3d8bbb78edf8_106181_RETINA_LANDSCAPE_16_9.jpg",
                                             width: 1136,
                                             height: 639,
                                             fallback: true,
                                        },
                                        {
                                             ratio: "16_9",
                                             url: "https://s1.ticketm.net/dam/c/df8/81eadad8-4449-412e-a2b1-3d8bbb78edf8_106181_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                                             width: 2048,
                                             height: 1152,
                                             fallback: true,
                                        },
                                   ],
                                   classifications: [
                                        {
                                             primary: true,
                                             segment: {
                                                  id: "KZFzniwnSyZfZ7v7nJ",
                                                  name: "Music",
                                             },
                                             genre: {
                                                  id: "KnvZfZ7vAvF",
                                                  name: "Dance/Electronic",
                                             },
                                             subGenre: {
                                                  id: "KZazBEonSMnZfZ7vA1E",
                                                  name: "Dance/Electronic",
                                             },
                                             type: {
                                                  id: "KZAyXgnZfZ7v7la",
                                                  name: "Individual",
                                             },
                                             subType: {
                                                  id: "KZFzBErXgnZfZ7vAdn",
                                                  name: "Artist",
                                             },
                                             family: false,
                                        },
                                   ],
                                   upcomingEvents: {
                                        ticketmaster: 1,
                                        _total: 1,
                                        _filtered: 0,
                                   },
                                   draftStatus: "ACCEPTED",
                                   _links: {
                                        self: {
                                             href: "/discovery/v2/attractions/K8vZ917rrOf?locale=en-us",
                                        },
                                   },
                              },
                              {
                                   name: "DJ Meikee Magnetic",
                                   type: "attraction",
                                   id: "K8vZ917rOif",
                                   test: false,
                                   url: "https://www.ticketmaster.com/dj-meikee-magnetic-tickets/artist/3869664",
                                   locale: "en-us",
                                   externalLinks: {
                                        instagram: [
                                             {
                                                  url: "https://www.instagram.com/glitterazzisf/",
                                             },
                                        ],
                                   },
                                   images: [
                                        {
                                             ratio: "3_2",
                                             url: "https://s1.ticketm.net/dam/c/df8/81eadad8-4449-412e-a2b1-3d8bbb78edf8_106181_TABLET_LANDSCAPE_3_2.jpg",
                                             width: 1024,
                                             height: 683,
                                             fallback: true,
                                        },
                                        {
                                             ratio: "16_9",
                                             url: "https://s1.ticketm.net/dam/c/df8/81eadad8-4449-412e-a2b1-3d8bbb78edf8_106181_EVENT_DETAIL_PAGE_16_9.jpg",
                                             width: 205,
                                             height: 115,
                                             fallback: true,
                                        },
                                        {
                                             ratio: "4_3",
                                             url: "https://s1.ticketm.net/dam/c/df8/81eadad8-4449-412e-a2b1-3d8bbb78edf8_106181_CUSTOM.jpg",
                                             width: 305,
                                             height: 225,
                                             fallback: true,
                                        },
                                        {
                                             ratio: "3_2",
                                             url: "https://s1.ticketm.net/dam/c/df8/81eadad8-4449-412e-a2b1-3d8bbb78edf8_106181_RETINA_PORTRAIT_3_2.jpg",
                                             width: 640,
                                             height: 427,
                                             fallback: true,
                                        },
                                        {
                                             ratio: "16_9",
                                             url: "https://s1.ticketm.net/dam/c/df8/81eadad8-4449-412e-a2b1-3d8bbb78edf8_106181_RETINA_PORTRAIT_16_9.jpg",
                                             width: 640,
                                             height: 360,
                                             fallback: true,
                                        },
                                        {
                                             ratio: "16_9",
                                             url: "https://s1.ticketm.net/dam/c/df8/81eadad8-4449-412e-a2b1-3d8bbb78edf8_106181_TABLET_LANDSCAPE_16_9.jpg",
                                             width: 1024,
                                             height: 576,
                                             fallback: true,
                                        },
                                        {
                                             ratio: "3_2",
                                             url: "https://s1.ticketm.net/dam/c/df8/81eadad8-4449-412e-a2b1-3d8bbb78edf8_106181_ARTIST_PAGE_3_2.jpg",
                                             width: 305,
                                             height: 203,
                                             fallback: true,
                                        },
                                        {
                                             ratio: "16_9",
                                             url: "https://s1.ticketm.net/dam/c/df8/81eadad8-4449-412e-a2b1-3d8bbb78edf8_106181_RECOMENDATION_16_9.jpg",
                                             width: 100,
                                             height: 56,
                                             fallback: true,
                                        },
                                        {
                                             ratio: "16_9",
                                             url: "https://s1.ticketm.net/dam/c/df8/81eadad8-4449-412e-a2b1-3d8bbb78edf8_106181_RETINA_LANDSCAPE_16_9.jpg",
                                             width: 1136,
                                             height: 639,
                                             fallback: true,
                                        },
                                        {
                                             ratio: "16_9",
                                             url: "https://s1.ticketm.net/dam/c/df8/81eadad8-4449-412e-a2b1-3d8bbb78edf8_106181_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                                             width: 2048,
                                             height: 1152,
                                             fallback: true,
                                        },
                                   ],
                                   classifications: [
                                        {
                                             primary: true,
                                             segment: {
                                                  id: "KZFzniwnSyZfZ7v7nJ",
                                                  name: "Music",
                                             },
                                             genre: {
                                                  id: "KnvZfZ7vAvF",
                                                  name: "Dance/Electronic",
                                             },
                                             subGenre: {
                                                  id: "KZazBEonSMnZfZ7vA1E",
                                                  name: "Dance/Electronic",
                                             },
                                             type: {
                                                  id: "KZAyXgnZfZ7v7la",
                                                  name: "Individual",
                                             },
                                             subType: {
                                                  id: "KZFzBErXgnZfZ7vAd7",
                                                  name: "Musician",
                                             },
                                             family: false,
                                        },
                                   ],
                                   upcomingEvents: {
                                        ticketmaster: 1,
                                        _total: 1,
                                        _filtered: 0,
                                   },
                                   draftStatus: "ACCEPTED",
                                   _links: {
                                        self: {
                                             href: "/discovery/v2/attractions/K8vZ917rOif?locale=en-us",
                                        },
                                   },
                              },
                         ],
                    },
               },
          ],
     },
     _links: {
          first: {
               href: "/discovery/v2/events.json?city=San+Francisco&classificationName=Music&page=0&size=10",
          },
          self: {
               href: "/discovery/v2/events.json?size=10&city=San+Francisco&classificationName=Music",
          },
          next: {
               href: "/discovery/v2/events.json?city=San+Francisco&classificationName=Music&page=1&size=10",
          },
          last: {
               href: "/discovery/v2/events.json?city=San+Francisco&classificationName=Music&page=62&size=10",
          },
     },
     page: {
          size: 10,
          totalElements: 628,
          totalPages: 63,
          number: 0,
     },
};

export { testUser1, ticketMasterRawEventTest };
