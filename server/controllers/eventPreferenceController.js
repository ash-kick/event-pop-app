const EventPreference = require("../models/eventPreference");
const Event = require("../models/event");

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
                         eventThroughPreference: req.body.eventThroughPreference,
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

// display all preference options

exports.displayPreferenceOptions = async (req, res, next) => {
     const currentType = req.body.currentType;
     const currentGenre = req.body.currentGenre;
     try {
          const [locations, types, genres, subGenres] = await Promise.all([
               Event.distinct("cityName"),
               Event.distinct("eventTypeName"),
               currentType ? Event.distinct("genreName", { eventTypeName: currentType }) : Event.distinct("genreName"),
               currentType && currentGenre
                    ? Event.distinct("subGenreName", { eventTypeName: currentType, genreName: currentGenre })
                    : Event.distinct("subGenreName"),
          ]);
          res.status(200).json({
               locations: locations.sort(),
               types: types.sort(),
               genres: genres.sort(),
               subGenres: subGenres.sort(),
          });
     } catch (err) {
          next(err);
     }
};

// FOR FUTURE STATE reset preference (will need a hardcoded default json file for the request)
