const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const JWT_SECRET_DEV = process.env.JWT_SECRET_DEV;
const { createPreferenceForUser } = require("./eventPreferenceController");

// create new user & event preferences
exports.registerUser = async (req, res, next) => {
     try {
          const { userName, password, email, userCity } = req.body;
          const encryptedPassword = await bcrypt.hash(password, 10);
          const newUser = new User({
               userName: userName,
               password: encryptedPassword,
               email: email,
               userCity: userCity,
          });
          const savedUser = await newUser.save();
          const savedEventPreference = await createPreferenceForUser(savedUser);
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

// jwt token generation variables, token will expire after 24 hrs
const maxAgeToken = 1 * 24 * 60 * 60;
const createToken = (id, userName) => {
     return jwt.sign({ id, userName }, JWT_SECRET_DEV, {
          expiresIn: maxAgeToken,
     });
};

// log in user and generate token
exports.loginUser = async (req, res, next) => {
     try {
          const user = await User.findOne({ userName: req.body.userName });
          if (!user) {
               return res.status(401).json({ message: "Invalid credentials" });
          }
          const passwordMatch = await bcrypt.compare(req.body.password, user.password);
          if (passwordMatch) {
               console.log("Log in was successful");
               // genearte jwt token on successful password match
               const token = createToken(user._id, user.userName);
               // respond with the user id and token
               res.status(200).json({
                    user: user._id,
                    token: token,
                    // need this for searching upcoming events in your area later
                    userCity: user.userCity,
               });
          } else return res.status(401).json({ message: "Invalid credentials" });
     } catch (err) {
          console.log("Log in unsuccessful");
          next(err);
     }
};

//
