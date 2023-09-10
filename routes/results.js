const express = require("express")
const { getSociodemographic, getRtc } = require("../controllers/results.js");

const router = express.Router()

router.get("/sociodemographic", getSociodemographic)
router.get("/rtc", getRtc)

module.exports = router