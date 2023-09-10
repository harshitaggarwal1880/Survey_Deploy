const { db }  = require("../connect.js");


exports.getSociodemographic = (req, res)=>{
    const q = "SELECT * FROM survey_sociodemographic;"
    db.query(q, (err, data)=>{
    if(err) return res.json(err)
    return res.json(data)
    })
}

exports.getRtc = (req, res)=>{
   const q = "SELECT * FROM survey_rtc;"
    db.query(q, (err, data)=>{
    if(err) return res.json(err)
    return res.json(data)
    })
}