const router = require("express").Router();
const userController = require("../controllers/user.controller");

router.post("/users", userController.createUser);
router.get("/users", userController.getAllUsers);

module.exports = router;
