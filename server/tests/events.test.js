const request = require ("supertest");
const app = require("../app.js");
const Event = require("../models/event.js");

describe("Event endpoint tests", ()=>{
    // CLEAN UP EVENT/USER DATA
    beforeAll(async()=>{
        await User.deleteMany({});
        await EventPreference.deleteMany({});
    })
    beforeEach(async () => {
        await Event.deleteMany({});
        });

    // CREATE AND LOGIN A TEST USER
    async function createEventTestData(){
    await request(app).post("/api/user/register", ).send({
        userName: "test_username",
        password: "test_password",
        email: "test_user_email@example.com",
        userCity: "San Francisco"
    });
        const response = await request(app).post("/api/user/login", ).send({
        userName: "test_username",
        password: "test_password"
    });

    await request(app).post // LEFT OFF HERE NEED TO CREATE TEST HELPER WITH DUMMY EVENT DATA
}
createEventTestData();
    // ADD A SAVED EVENT
    test("User is able to save an event", async ()=>{
        const response = await request(app).post("/api/event/")

        })
    // DISPLAY SAVED EVENTS
    // DELETE A SAVED EVENT
    // DISPLAY SEARCH RESULT EVENTS
    // DISPLAY 3 UPCOMING EVENTS BY LOCATION OLDEST TO NEWEST
})
