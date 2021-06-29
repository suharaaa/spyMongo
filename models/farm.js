const mongoose = require("mongoose");

const farmSchema = new mongoose.Schema({
  regID: { type: String, required: true },
  name: { type: String, required: true },
  location: { type: String, required: true},
});

module.exports = mongoose.model("Farm", farmSchema);