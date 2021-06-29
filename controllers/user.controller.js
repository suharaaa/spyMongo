const User = require("../models/user");

const createUser = (req, res) => {
  if (!req.body.name) {
    return res.status(400).json({
      success: false,
      message: "Name is undefined",
    });
  }
  if (!req.body.email) {
    return res.status(400).json({
      success: false,
      message: "Email is undefined",
    });
  }
  if (!req.body.password) {
    return res.status(400).json({
      success: false,
      message: "Password is undefined",
    });
  }

  //create a new user
  const user = new User(req.body);

  //save to database
  user
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

const getAllUsers = (req, res) => {
  User.find({})
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
  createUser,
  getAllUsers,
};
