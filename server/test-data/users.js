// Generate Mongo compatible ObjectIds for users
const userId1 = new ObjectId();
const userId2 = new ObjectId();
const userId3 = new ObjectId();

// Generate Mongo compatible ObjectIds for preferences
const prefId1 = new ObjectId();
const prefId2 = new ObjectId();
const prefId3 = new ObjectId();

// Generate Mongo compatible ObjectIds for alerts
const alertId1 = new ObjectId();
const alertId2 = new ObjectId();

// Generate Mongo compatible ObjectIds for friends
const friendId1 = new ObjectId();
const friendId2 = new ObjectId();

// Test user data

const testUsers = [
     {
          _id: userId1,
          username: "hpotter",
          password: "lumos731",
          email: "hpotter@hogwarts.com",
          alerts: [alertId1],
          friends: [friendId2, friendId3],
          eventPreferences: [prefId1],
          createdAt: new Date("2024-01-15"),
          editedAt: new Date("2024-11-20"),
     },
     {
          _id: userId2,
          username: "hermione_granger",
          password: "leviosa88",
          email: "hgranger@hogwarts.com",
          alerts: [alertId2],
          friends: [friendId1, friendId3],
          eventPreferences: [prefId2],
          createdAt: new Date("2024-02-10"),
          editedAt: new Date("2024-11-18"),
     },
     {
          _id: userId3,
          username: "ron_weasley",
          password: "quidditch99",
          email: "rweasley@hogwarts.com",
          alerts: [],
          friends: [friendId1, friendId2],
          eventPreferences: [prefId3],
          createdAt: new Date("2024-03-05"),
          editedAt: new Date("2024-11-15"),
     },
     {
          _id: userId4,
          username: "draco_m",
          password: "slytherin13",
          email: "dmalfoy@hogwarts.com",
          alerts: [],
          friends: [friendId2],
          eventPreferences: [prefId4],
          createdAt: new Date("2024-07-05"),
          editedAt: new Date("2024-11-21"),
     },
];

module.exports = { testUsers, userId1, userId2, userId3, prefId1, prefId2, prefId3 };
