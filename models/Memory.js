const mongoose = require('mongoose');

const memorySchema = new mongoose.Schema({
  type: String, // "image" | "video" | "final"
  src: String,  // just the filename, e.g., "IMG-20240604-WA0065.jpg"
  caption: String,
  message: String
});

module.exports = mongoose.model('Memory', memorySchema);
