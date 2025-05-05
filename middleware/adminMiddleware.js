const adminMiddleware = (req, res, next) => {
  if (req.user.email !== "admin@gmail.com") {
    return res.status(403).json({ message: "Access denied. Admins only." });
  }
  next();
};

module.exports = adminMiddleware;
