const request = require ("supertest");
const app = require("../app.js");
const User = require("../models/user");
const Notification = require("../models/notifications");
const EventPreference = require("../models/eventPreference")
const {createTestUser, loginTestUser} = require("./testDataHelper.js")

describe("Notification endpoint tests", ()=>{
let token;
let userCity;
let userId;

beforeEach(async ()=>{
    // cleanup all tests
    await User.deleteMany({ userName: { $regex: /^test_notification_/ } });
    await EventPreference.deleteMany({});
    // variables for user register and login
    const uniqueId = Date.now();
    const testNotificationUser = `test_notification_user${uniqueId}`
    const testNotificationEmail = `test_notification_user${uniqueId}@email.com`
    const testNotificationPassword= "test_notification_password";
    const testNotificationCity= "Los Angeles";
    // create test user and log them in
    const registerResponse = await createTestUser(testNotificationUser, testNotificationPassword, testNotificationEmail, testNotificationCity);
    const loginResponse = await loginTestUser(testNotificationUser, testNotificationPassword);
    // return the token and userCity
    token = loginResponse.token;
    userCity = loginResponse.userCity;
    userId = registerResponse.userId;

    console.log(userId);
})
// getting notifications for a user

test("testing, testing", async()=>{
    console.log("Hi a test is happening")
});
// marking a notification for a user as read
test("testing, testing", async()=>{
    console.log("Hi a second test is happening")
});
// marking all notifications for a user as read
test("testing, testing", async()=>{
    console.log("Hi a second test is happening")
});
})
