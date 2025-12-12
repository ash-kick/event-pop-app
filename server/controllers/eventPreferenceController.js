const EventPreference = require("../models/eventPreference");

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
               { userId: req.user.id },
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
          if (updatedPreference.matchedCount === 0) {
               return res.status(404).json({
                    message: "User preferences not found",
               });
          }
          res.status(200).json({
               message: "Preferences updated successfully",
          });
     } catch (err) {
          console.log("Preference update unsuccessful");
          next(err);
     }
};

// display preference for user
exports.displayPreference = async (req, res, next) => {
     try {
          const currentUserPreference = await EventPreference.findOne({
               userId: req.user.id,
          });
          if (currentUserPreference === null) {
               return res.status(404).json({
                    message: "Preferences not found for user",
               });
          }
          res.status(200).json(currentUserPreference);
     } catch (err) {
          console.log("Preference not found");
          next(err);
     }
};

// FOR FUTURE STATE reset preference (will need a hardcoded default json file for the request)
