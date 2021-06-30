const mongoose = require("mongoose");

const soilSchema = new mongoose.Schema({
  sampleID: { type: String, required: true },
  location: { type: String, required: true },
  address: { type: String, required: true },
  spectralData: [
    { 
      name: {type: String, required: true}
     }
  ],
  imageData: {
    cameraImage: { type: String },
    microscopicImage: { type: String },
  },
});

module.exports = mongoose.model("Soil", soilSchema);
