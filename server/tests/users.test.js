const request = require ("supertest");
const app = require("../app.js");
const User = require("../models/user");
const EventPreference = require("../models/eventPreference");

describe("User endpoint tests", ()=>{
    // Clean up before each test
    beforeEach(async () => {
            await User.deleteMany({});
            await EventPreference.deleteMany({});
         });
    //User can register with new credentials
    test("User is able to register with new userName and password", async ()=>{
            const response = await request(app).post("/api/user/register", ).send({
            userName: "test_username",
            password: "test_password",
            email: "test_user_email@example.com",
            userCity: "San Francisco"
        });
            expect(response.status).toBe(201);
            expect (response.body).toHaveProperty("_id");
            expect (response.body).toHaveProperty("userName");
            expect (response.body).toHaveProperty("createdAt");
        })
    //User can login with correct username and password
    test("User is able to login with correct userName and password", async ()=>{

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
            expect(response.status).toBe(200);
            expect (response.body).toHaveProperty("token");
        })
})