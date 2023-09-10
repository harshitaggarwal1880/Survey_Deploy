const express = require("express");

const { addRtc, addSociodemographic } =require("../controllers/survey.js");

const router = express.Router()

router.post("/rtc", addRtc)
router.post("/sociodemographic", addSociodemographic)

module.exports = router