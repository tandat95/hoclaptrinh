
const db = require('../db')
const TramDo = db.model('TramDo', {
    title: String,
    lat: Number,
    lng: Number,
    CO2: Number,
    03: Number,
    AQI: Number,
    color: String
});

module.exports = TramDo;