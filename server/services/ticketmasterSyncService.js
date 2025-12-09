const mongoose = require("mongoose");
const Event = require("../models/event");
const axios = require("axios");

const TICKETMASTER_EVENTS_BASE_URL = "https://app.ticketmaster.com/discovery/v2/events.json?";
const TICKETMASTER_API_KEY = process.env.TICKETMASTER_API_KEY;

// names of cities currently supported by eventpop
const cityNames = ["San Francisco", "Los Angeles", "New York"];
// reformatting today's date to match ticketmaster api
const today = new Date().toISOString().split(".")[0] + "Z";

const fetchEventsForCity = async (cityName) => {
     try {
          let URL = `${TICKETMASTER_EVENTS_BASE_URL}apikey=${TICKETMASTER_API_KEY}&startDateTime=${today}&city=${cityName}`;
          const response = await axios.get(URL);
          console.log("Axios response:", response.data);
     } catch (error) {
          console.log("Error fetching data...");
          console.log("Full error response:", error.response?.data || error);
     }
};

module.exports = { fetchEventsForCity, cityNames };
