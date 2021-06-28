const Farm = require('../models/farm');

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
    getAllFarms
};