const Soil = require("../models/soil");

const createSoil = (req, res) => {
  if (!req.body.sampleID) {
    return res.status(400).json({
      success: false,
      message: "sampleID is undefined",
    });
  }
  if (!req.body.location) {
    return res.status(400).json({
      success: false,
      message: "location is undefined",
    });
  }
  if (!req.body.address) {
    return res.status(400).json({
      success: false,
      message: "address is undefined",
    });
  }

  //create a new user
  const soil = new Soil(req.body);

  //save to database
  soil
    .save()
    .then((result) => {
      res.status(200).json({
        success: true,
        data: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: err.message,
      });
    });
};

const getAllSoils = (req, res) => {
  Soil.find({})
    .then((result) => {
      res.status(200).json({
        success: true,
        data: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: err.message,
      });
    });
};

module.exports = {
  createSoil,
  getAllSoils,
};
