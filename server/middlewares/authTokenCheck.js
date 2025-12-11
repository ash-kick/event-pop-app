const jwt = require("jsonwebtoken");

const JWT_SECRET_DEV = process.env.JWT_SECRET_DEV;

// Check if token is present otherwise throw unathorized message
const authenticateToken = async (req, res, next) => {
     try {
          const token = req.headers["authorization"]?.split(" ")[1];
          if (!token) return res.status(401).json({ message: "Unauthorized" });
          req.user = jwt.verify(token, JWT_SECRET_DEV);
          next();
     } catch (err) {
          return res.status(401).json({ message: "Unauthorized" });
     }
};

module.exports = authenticateToken;
