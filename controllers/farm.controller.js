const Farm = require('../models/farm');

const createFarm = (req, res) => {
  if (!req.body.regID) {
    return res.status(400).json({
      success: false,
      message: "regID is undefined",
    });
  }
  if (!req.body.name) {
    return res.status(400).json({
      success: false,
      message: "name is undefined",
    });
  }
  if (!req.body.location) {
    return res.status(400).json({
      success: false,
      message: "location is undefined",
    });
  }

  //create a new user
  const farm = new Farm(req.body);

  //save to database
  farm
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

const getAllFarms = (req, res) => {

    Farm.find({})
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
    getAllFarms,
    createFarm
};