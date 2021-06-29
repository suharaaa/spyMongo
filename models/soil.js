const mongoose = require("mongoose");

const soilSchema = new mongoose.Schema({
  sampleid: { type: String, required: true },
  location: { type: String, required: true},
  address: { type: String, required: true },
});

module.exports = mongoose.model("Soil", soilSchema);