const router = require("express").Router();
const farmController = require("../controllers/farm.controller");

router.get("/farms", farmController.getAllFarms);

module.exports = router;
