const mongoose  = require('mongoose');
const CONFIG = require('../config')
 

exports.initDB  = function () {
  mongoose.connect(CONFIG.DB.URI, CONFIG.DB.OPTIONS);
  mongoose.set('debug', CONFIG.DB.DEBUG);
}
