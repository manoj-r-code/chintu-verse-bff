const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;

const authMiddleware = (req, res, next) => {
  const authHeader = req.header("Authorization");

  if (!authHeader) {
    return res.status(401).json({ message: "No token, authorization denied" });
  }

  const token = authHeader.split(" ")[1]; // Fix: split Bearer and token

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    // req.user = decoded.id;
    req.user = decoded; // 💥 Now req.user has id AND email

    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: "Token is not valid" });
  }
};

module.exports = authMiddleware;
