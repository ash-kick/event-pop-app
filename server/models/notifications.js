const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema({
     userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true, index: true },
     event: { type: mongoose.Schema.Types.ObjectId, ref: "Event", required: true, index: true },
     read: { type: Boolean, required: true, default: false, index: true },
     createdAt: { type: Date, required: true, default: Date.now },
     updatedAt: { type: Date, default: null },
});

module.exports = mongoose.model("Notification", notificationSchema);
