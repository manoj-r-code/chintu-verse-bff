const express = require("express");
const multer = require("multer");
const { storage } = require("../config/cloudinaryConfig");
const {
  uploadMedia,
  getGallery,
  deleteMedia,
} = require("../controllers/mediaController");
const authMiddleware = require("../middleware/authMiddleware");

const upload = multer({ storage });
const router = express.Router();

router.get("/ping", (req, res) => {
  res.status(200).send('pong');
});

router.get("/", authMiddleware, (req, res) => {
  res.send("Hello World from ChintuVerse backend!");
});
router.post("/upload",authMiddleware, upload.single("file"), uploadMedia);
router.get("/getmedia",authMiddleware, getGallery);
router.delete("/delete/:id",authMiddleware, deleteMedia);

// Example of a protected route
router.get("/api/protected", authMiddleware, (req, res) => {
  res.json({ message: `Hello User ${req.user}, this is a protected route!` });
});

module.exports = router;
