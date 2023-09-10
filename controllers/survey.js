const { db } = require("../connect.js");

module.exports.addSociodemographic = (req, res) => {
  console.log("Hello");
  const q =
    "INSERT INTO survey_sociodemographic (`idCode`, `age`, `gender`, `education`, `district`, `date`) VALUES (?)";

  const values = [
    req.body.idCode,
    req.body.age,
    req.body.GENDER,
    req.body.EDUCATION,
    req.body.DISTRICT,
    new Date().toISOString().slice(0, 19).replace("T", " "),
  ];

  db.query(q, [values], (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).json(err);
    }
    return res
      .status(200)
      .json("Sociodemographic Survey has been sent succesfully");
  });
};

exports.addRtc = (req, res) => {
  const q =
    "INSERT INTO survey_rtc (`idCode`, `rtc_1`, `rtc_2`,`rtc_3`,`rtc_4`,`rtc_5`,`rtc_6`,`rtc_7`,`rtc_8`,`rtc_9`,`rtc_10`,`rtc_11`,`rtc_12`,`rtc_13`,`rtc_14`,`rtc_15`,`rtc_16`,`rtc_17`,`rtc_18`,`rtc_19`,`rtc_20`,`rtc_21`,`rtc_22`,`rtc_23`,`rtc_24`,`rtc_25`,`rtc_26`,`rtc_27`,`rtc_28`,`rtc_29`, `date`) VALUES (?)";

  const values = [
    req.body.savedIdCode,
    req.body.RTC_IMP_1,
    req.body.RTC_IMP_2,
    req.body.RTC_IMP_3,
    req.body.RTC_IMP_4,
    req.body.RTC_MOT_5,
    req.body.RTC_MOT_6,
    req.body.RTC_MOT_7,
    req.body.RTC_MOT_8,
    req.body.RTC_AUE_9,
    req.body.RTC_AUE_10,
    req.body.RTC_AUE_11,
    req.body.RTC_AUE_12,
    req.body.RTC_AUE_13,
    req.body.RTC_EFF_14,
    req.body.RTC_EFF_15,
    req.body.RTC_EFF_16,
    req.body.RTC_EFF_17,
    req.body.RTC_SOC_18,
    req.body.RTC_SOC_19,
    req.body.RTC_SOC_20,
    req.body.RTC_SOC_21,
    req.body.RTC_ACT_22,
    req.body.RTC_ACT_23,
    req.body.RTC_ACT_24,
    req.body.RTC_ACT_25,
    req.body.RTC_REA_26,
    req.body.RTC_REA_27,
    req.body.RTC_REA_28,
    req.body.RTC_REA_29_REVERSED,
    new Date().toISOString().slice(0, 19).replace("T", " "),
  ];

  db.query(q, [values], (err, data) => {
    if (err) return res.status(500).json(err);
    return res
      .status(200)
      .json("Readiness to change Survey has been sent succesfully");
  });
};
