const mongoose = require("../configration/dbconfig");

const profssionSchema = new mongoose.Schema({
  profession: {type: String, required: true},
  heroimage: {type: String, required: true},
  icon: {type: String, required: true},
});

module.exports = mongoose.model("Profession", profssionSchema);