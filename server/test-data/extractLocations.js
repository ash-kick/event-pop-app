const { testTMEventsAll } = require("./tmEventsAll");

const allEventsArray = testTMEventsAll._embedded.events;
const testLocationsAll = [];

for (let i = 0; i < allEventsArray.length; i++) {
     let currentCityName = allEventsArray[i]._embedded.venues[0].city.name;

     if (testLocationsAll.filter((city) => city === currentCityName).length === 0) {
          testLocationsAll.push(currentCityName);
     }
}

module.exports = { testLocationsAll };
