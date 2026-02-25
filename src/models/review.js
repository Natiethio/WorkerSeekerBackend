const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  reviewer: String,
  comment: String,
  rating: Number,
  date: String,
});

module.exports = reviewSchema;