const mongoose = require('mongoose');

const mediaSchema = new mongoose.Schema({
  filename: String,
  path: String, // Cloudinary URL
  type: String, // 'image' or 'video'
  uploadedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Media', mediaSchema);
