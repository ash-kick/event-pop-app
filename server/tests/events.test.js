const request = require ("supertest");
const app = require("../app.js");
const Event = require("../models/event.js");
const User = require("../models/user");
const EventPreference = require("../models/eventPreference");
const {createTestEvents} = require("./testDataHelper.js");


// EVENT TEST BLOCK
describe("Event endpoint tests", ()=>{
    
// TEST SET UP
    // Create variables for users during event tests
    let userToken;
    let userId;
    let userName;
    let userCity;
    let eventTestDataResponse;
    // Create and login user, set all user related variables
    async function createUserTestData(){
        const registerResponse = await request(app).post("/api/user/register", ).send({
            userName: "event_test_username",
            password: "event_test_password",
            email: "event_test_email@example.com",
            userCity: "San Francisco"
        });

            const response = await request(app).post("/api/user/login", ).send({
            userName: "event_test_username",
            password: "event_test_password"
        });
        userToken = response.body.token;
        userId = response.body.user;
        userName = response.body.userName;
        userCity = response.body.userCity;
    };
    // Clean up all user and event data and pull in a fresh set
    beforeAll(async()=>{
        await User.deleteMany({});
        await EventPreference.deleteMany({});
        await Event.deleteMany({});
        eventTestDataResponse =  await createTestEvents();
        await createUserTestData();
    });

    // TESTS
    // Add saved event
    test("User is able to save an event", async ()=>{
        const response = await request(app).post("/api/events/saved-event").set("Authorization", `Bearer ${userToken}`).send(
        {
            eventId: eventTestDataResponse.event0._id
        })
        expect(response.status).toBe(200);
        expect(response.body.message === "Event added successfully");
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
        
    })

    // DISPLAY SEARCH RESULT EVENTS
    // DISPLAY 3 UPCOMING EVENTS BY LOCATION OLDEST TO NEWEST
})
