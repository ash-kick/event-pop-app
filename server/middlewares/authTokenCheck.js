const jwt = require("jsonwebtoken");

const JWT_SECRET_DEV = process.env.JWT_SECRET_DEV;

// Check if token is present otherwise throw unathorized message, note only using access tokens for now, refresh token not yet implemented
const authenticateToken = async (req, res, next) => {
     try {
          const token = req.headers["authorization"]?.split(" ")[1];
          if (!token) return res.status(401).json({ message: "Unauthorized" });
          req.user = jwt.verify(token, JWT_SECRET_DEV);
          next();
     } catch (err) {
          console.log("JWT verification failed...");
          console.log("Error name:", err.name);
          console.log("Error message:", err.message);
          console.log("Full error:", err);
          return res.status(401).json({ message: "Unauthorized" });
     }
};

module.exports = authenticateToken;
