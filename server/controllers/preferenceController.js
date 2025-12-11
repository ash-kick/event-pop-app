const EventPreference = require("../models/eventPreference");
const User = require("../models/user");

// create new preference (will all be set to default)
exports.createPreference = async (req, res, next) => {
     // find current user's user id
     const user = await User.findOne({ userName: req.body.userName });
     try {
          const newEventPreference = new EventPreference({
               userId: user._id,
               eventLocationPreference: user.userCity,
          });
     } catch (err) {
          console.log(err);
     }
};

// update preference

// reset preference (will need a hardcoded default json file for the request)

// display preference for user
