const User = require("../models/user");
const Event = require("../models/event");

// SAVED EVENTS FUNCTIONALITY (ADD, DELETE, DISPLAY)

// add a saved event
exports.addSavedEvent = async (req, res, next) => {
     try {
          const eventToSave = await Event.findOne({ _id: req.body.eventId });
          if (!eventToSave) {
               return res.status(404).json({ message: "Event not found, could not be saved" });
          }
          const user = await User.findOne({ _id: req.user.id });
          const savedEventIds = user.savedEvents.map((id) => id.toString());
          if (savedEventIds.includes(req.body.eventId)) {
               return res.status(409).json({ message: "Event already saved" });
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

// delete a saved event
exports.deleteSavedEvent = async (req, res, next) => {
     try {
          const eventToDelete = await Event.findOne({ _id: req.body.eventId });
          if (!eventToDelete) {
               return res.status(404).json({ message: "Event not found, could not delete" });
          }
          const updatedUser = await User.updateOne(
               { _id: req.user.id },
               {
                    $pull: { savedEvents: eventToDelete.id },
               }
          );
          if (updatedUser.matchedCount === 0) {
               return res.status(404).json({ message: "User not found" });
          }
          res.status(200).json({
               message: "Event removed successfully",
          });
     } catch (err) {
          console.log("Could not delete the event");
          next(err);
     }
};

// DISPLAY SEARCH RESULT EVENTS

// DISPLAY UPCOMING EVENTS BY LOCATION
