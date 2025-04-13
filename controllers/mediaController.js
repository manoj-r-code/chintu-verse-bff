const Media = require("../models/mediaModel");
// const { cloudinary } = require("../config/cloudinaryConfig");

const uploadMedia = async (req, res) => {
  try {
    const file = req.file;
    const media = new Media({
      filename: file.originalname,
      path: file.path,
      type: file.mimetype.startsWith("video") ? "video/mp4" : "image",
    });
    await media.save();
    res.status(201).json(media);
    console.log("uploaded success");
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Upload failed", error: err });
    console.log("uploaded failed");
  }
};

const getGallery = async (req, res) => {
  try {
    const media = await Media.find().sort({ uploadedAt: -1 });
    res.json(media);
  } catch (err) {
    res.status(500).json({ message: "Fetch failed", error: err });
  }
};

const deleteMedia = async (req, res) => {
  try {
    const media = await Media.findById(req.params.id);
    if (!media) return res.status(404).json({ message: "Media not found" });

    await Media.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Deletion failed" });
  }
};

module.exports = { uploadMedia, getGallery, deleteMedia };
