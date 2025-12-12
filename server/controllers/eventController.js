const User = require("../models/user");
const Event = require("../models/event");

// SAVED EVENTS FUNCTIONALITY

exports.addSavedEvent = async (req, res, next) => {
     try {
          const eventToSave = await Event.findOne({ _id: req.body.eventId });
          if (!eventToSave) {
               return res.status(404).json({ message: "Event not found, could not be saved" });
          }
          const updatedUser = await User.updateOne(
               {
                    _id: req.user.id,
               },
               {
                    $addToSet: {
                         savedEvents: req.body.eventId,
                    },
               }
          );
          if (updatedUser.matchedCount === 0) {
               return res.status(404).json({ message: "User not found" });
          }
          res.status(200).json({
               message: "Event added successfully",
          });
     } catch (err) {
          console.log("Unable to save event");
          next(err);
     }
};

// DISPLAY SEARCH RESULT EVENTS

// DISPLAY UPCOMING EVENTS BY LOCATION
