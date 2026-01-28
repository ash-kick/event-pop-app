const request = require ("supertest");
const app = require("../app.js");
const Event = require("../models/event.js");
const User = require("../models/user");
const EventPreference = require("../models/eventPreference");
const {createTestEvents} = require("./testDataHelper.js");


// EVENT TEST BLOCK

describe("Event endpoint tests", ()=>{
// TEST SET UP
const uniqueId = Date.now();
const testUserName = `event_test_username_${uniqueId}`;
const testEmail = `event_test_email_${uniqueId}@example.com`;
    // Create variables for users during event tests
    let userToken;
    let userCity;
    let eventTestDataResponse;
    // Create and login user, set all user related variables
    async function createUserTestData(){
        const registerResponse = await request(app).post("/api/user/register", ).send({
            userName: testUserName,
            password: "event_test_password",
            email: testEmail,
            userCity: "San Francisco"
        });
        const response = await request(app).post("/api/user/login", ).send({
            userName: testUserName,
            password: "event_test_password"
        });
    
        return {
            token: response.body.token,
            userCity: response.body.userCity
        };
    };

        // Ensure clean state for each test
        beforeEach(async () => {            
            // Clean up only data from this test file (by unique identifier)
            await User.deleteMany({ userName: { $regex: /^event_test_username_/ } });
            await EventPreference.deleteMany({});
            await Event.deleteMany({});
            
            // Create fresh user and events for each test
            const userData = await createUserTestData();
            userToken = userData.token;
            userCity = userData.userCity;
            eventTestDataResponse = await createTestEvents();
        });

    // TESTS
    
    // Add saved event
    test("User is able to save an event", async ()=>{
        const response = await request(app).post("/api/events/saved-event").set("Authorization", `Bearer ${userToken}`).send(
        {
            eventId: eventTestDataResponse.event0._id
        })
        expect(response.status).toBe(200);
        expect(response.body.message).toBe("Event added successfully");
        })
    // Display saved events
    test("User can see all saved events", async ()=>{
        await request(app).post("/api/events/saved-event").set("Authorization", `Bearer ${userToken}`).send(
            {
                eventId: eventTestDataResponse.event1._id
            });
        const response = await request(app).get("/api/events/saved-event").set("Authorization", `Bearer ${userToken}`);
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty("savedEvents");
        expect(response.body.savedEvents.length).toBeGreaterThan(0);
    })
    // Delete a saved event
    test("User can delete a saved event", async ()=>{
        await request(app).post("/api/events/saved-event").set("Authorization", `Bearer ${userToken}`).send(
            {
                eventId: eventTestDataResponse.event2._id
            });
        const response = await request(app).delete("/api/events/saved-event").set("Authorization", `Bearer ${userToken}`).send({
            eventId: eventTestDataResponse.event2._id
        })
        expect(response.body.message).toBe("Event removed successfully");
        expect(response.status).toBe(200);
    })
    // Display event search results
    test("User can search events", async ()=>{
            const response = await request(app).get("/api/events/search").set("Authorization", `Bearer ${userToken}`).query({
                searchValue: eventTestDataResponse.event3.genreName,
                cityNameValue: eventTestDataResponse.event3.cityName
            })
            expect(response.status).toBe(200);
            expect(response.body).toHaveProperty("foundEvents");
            expect(response.body.foundEvents.length).toBeGreaterThan(0);
    })
    // Display 3 upcoming events in user location
    test("User's upcoming events feed shows 3 upcoming events in their location", async ()=>{
        const response = await request(app).get("/api/events/upcoming").set("Authorization", `Bearer ${userToken}`).query({
            userCity: userCity,
        })
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty("upcomingEvents");
    })
})
