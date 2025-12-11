const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const JWT_SECRET_DEV = process.env.JWT_SECRET_DEV;

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
               eventPreferencesId: "dummy-preferences-id", // place holder for now
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

// jwt token generation variables
const maxAgeToken = 1 * 24 * 60 * 60;
const createToken = (id) => {
     return jwt.sign({ id }, JWT_SECRET_DEV, {
          expiresIn: maxAgeToken,
     });
};
