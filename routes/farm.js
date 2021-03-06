const router = require("express").Router();
const farmController = require("../controllers/farm.controller");

router.post("/farms", farmController.createFarm);
router.get("/farms", farmController.getAllFarms);

module.exports = router;
