const express = require("express");
const multer = require("multer");
const { storage} = require("../config/cloudinaryConfig");
const { uploadMedia, getGallery,deleteMedia } = require("../controllers/mediaController");

const upload = multer({ storage });
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World from ChintuVerse backend!");
});
router.post("/upload", upload.single("file"), uploadMedia);
router.get("/getmedia", getGallery);
router.delete("/delete/:id", deleteMedia);

module.exports = router;
