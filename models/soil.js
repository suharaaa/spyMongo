const mongoose = require("mongoose");

const soilSchema = new mongoose.Schema({
  sampleID: { type: String, required: true },
  location: { type: String, required: true},
  address: { type: String, required: true },
});

module.exports = mongoose.model("Soil", soilSchema);