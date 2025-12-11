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
exports.updatePreference = async (req, res, next) => {
     try {
          const updatedPreference = await EventPreference.updateOne(
               { userId: req.body.userId },
               {
                    $set: {
                         eventTypePreference: req.body.eventTypePreference,
                         eventTypeGenrePreference: req.body.eventTypeGenrePreference,
                         eventLocationPreference: req.body.eventLocationPreference,
                         eventStartDatePreference: req.body.eventStartDatePreference,
                         eventEndDatePreference: req.body.eventEndDatePreference,
                         editedAt: Date.now(),
                    },
               }
          );
          console.log(updatedPreference);
          res.status(200).json({
               message: "Preferences updated successfully",
          });
     } catch (err) {
          console.log("Preference update unsuccessful");
          next(err);
     }
};

// reset preference (will need a hardcoded default json file for the request)

// display preference for user
