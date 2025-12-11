const User = require("../models/user");
const bcrypt = require("bcrypt");

// create new user
exports.registerUser = async (req, res, next) => {
     try {
          // need to set default preferences here somehow
          const eventPreferences = {};
          const { userName, password, email, userCity } = req.body;
          const encryptedPassword = await bcrypt.hash(password, 10);
          const newUser = new User({
               userName: userName,
               password: encryptedPassword,
               email: email,
               userCity: userCity,
               eventPreferences: "dummy-preferences-id", // place holder for now
          });
          const savedUser = await newUser.save();
          res.status(201).json({
               _id: savedUser._id,
               userName: savedUser.userName,
               createdAt: savedUser.createdAt,
          });
     } catch (err) {
          console.log("Registration was unsuccessful");
          next(err);
     }
};
