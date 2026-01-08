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
                    $pull: { savedEvents: req.body.eventId },
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

// display saved events
exports.getSavedEvents = async (req, res, next) => {
     try {
          const user = await User.findById(req.user.id).populate("savedEvents");
          if (!user) {
               return res.status(404).json({ message: "User not found" });
          }
          if (user.savedEvents.length === 0) {
               return res.status(404).json({ message: "No events found" });
          }
          res.status(200).json({ savedEvents: user.savedEvents });
     } catch (err) {
          console.log("Could not retrieve saved events");
          next(err);
     }
};

// DISPLAY SEARCH RESULT EVENTS

exports.getSearchedEvents = async (req, res, next) => {
     try {
          const keyword = req.query.searchValue;
          // cityNameValue will be a dropdown in the front end so no triming/modification required.
          const cityNameValue = req.query.cityNameValue;
          // adding pages for results greater than 10 only want to load 10 at a time
          const page = parseInt(req.query.page) || 1;
          const limit = 10;
          const skip = (page - 1) * limit;

          if (!keyword || keyword.trim() === "") {
               return res.status(400).json({ message: "Search keyword is required" });
          }
          const escapedKeyword = keyword.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
          const keywordQuery = {
               $or: [
                    { eventName: { $regex: escapedKeyword, $options: "i" } },
                    { eventTypeName: { $regex: escapedKeyword, $options: "i" } },
                    { venueName: { $regex: escapedKeyword, $options: "i" } },
                    { genreName: { $regex: escapedKeyword, $options: "i" } },
                    { subGenreName: { $regex: escapedKeyword, $options: "i" } },
               ],
               startDateTime: { $gte: Date.now() },
          };
          if (cityNameValue !== "any") {
               keywordQuery.cityName = cityNameValue;
          }
          const foundEvents = await Event.find(keywordQuery).skip(skip).limit(limit); // limit temp for now
          if (foundEvents.length === 0) {
               return res.status(404).json({ message: "No events found for this keyword" });
          }
          res.status(200).json({ foundEvents, hasMore: foundEvents.length === limit });
     } catch (err) {
          console.log("No events found");
          next(err);
     }
};

// DISPLAY UPCOMING EVENTS BY LOCATION OLDEST TO NEWEST

exports.getUpcomingEventsByCity = async (req, res, next) => {
     try {
          const location = req.body.userCity;
          const upcomingEvents = await Event.find({ cityName: location, startDateTime: { $gte: Date.now() } })
               .limit(20)
               .sort({ startDateTime: 1 });
          if (upcomingEvents.length === 0) {
               return res.status(404).json({ message: "No upcoming events found for this location" });
          }
          res.status(200).json({ upcomingEvents });
     } catch (err) {
          next(err);
     }
};
