const mongoose = require("mongoose");

exports.wakeUpDb = async (req, res, next) => {
     try {
          await mongoose.connection.db.admin().command({ ping: 1 });
          res.status(200).json({ ok: true, message: "DB is awake" });
     } catch (err) {
          next(err);
     }
};
