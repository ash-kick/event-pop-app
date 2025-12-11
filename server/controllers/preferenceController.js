const EventPreference = require("../models/eventPreference");
const User = require("../models/user");

// create new preference during user registration (will all be set to default)
const createPreferenceForUser = async (user) => {
     const newEventPreference = new EventPreference({
          userId: user._id,
          eventLocationPreference: user.userCity,
     });
     const savedEventPreference = await newEventPreference.save();
     return savedEventPreference;
};

exports.createPreferenceForUser = createPreferenceForUser;

// update preference

// reset preference (will need a hardcoded default json file for the request)

// display preference for user
