const mongoose = require("mongoose");

const serviceCategorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  icon: { type: String, required: true }, // icon key
  description: { type: String, required: true },
  detail: { type: String, required: true },
  images: {type: [String], required: true},
});

module.exports = mongoose.model("ServiceCategory", serviceCategorySchema);