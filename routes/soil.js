const router = require("express").Router();
const soilController = require("../controllers/soil.controller");

router.post("/soils", soilController.createSoil);
router.get("/soils", soilController.getAllSoils);

module.exports = router;