var db = require('mongoose');
db.connect('mongodb://localhost/hoclaptrinh');
module.exports = db;