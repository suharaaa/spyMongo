const router = require("express").Router();
const userController = require("../controllers/user.controller");

router.get("/users", userController.getAllUsers);

module.exports = router;
