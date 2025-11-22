const { testTMEventsNY } = require("./tmEventsNY");
const { testTMEventsSF } = require("./tmEventsSF");
const { testTMEventsLA } = require("./tmEventsLA");

const allEventFiles = [testTMEventsLA, testTMEventsNY, testTMEventsSF];
let testTMEventsArray = [];

for (let i = 0; i < allEventFiles.length; i++) {
     for (let j = 0; j < allEventFiles[i]._embedded.events.length; j++) {
          let currentEvent = allEventFiles[i]._embedded.events[j];
          testTMEventsArray.push(currentEvent);
     }
}

const testTMEventsAll = {
     _embedded: {
          events: testTMEventsArray,
     },
};

module.exports = { testTMEventsAll };
