const mongoose = require("mongoose");
const reviewSchema = require("./review");

const workerSchema = new mongoose.Schema({
  name: String,
  profession: String,
  heroimage: String,
  image: String,
  experiance: String,
  wage: String,
  rating: Number,
  reviews: [reviewSchema],
});

module.exports = mongoose.model("Worker", workerSchema);