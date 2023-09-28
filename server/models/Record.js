const mongoose = require('mongoose')

const recordSchema = new mongoose.Schema({
  quoteUserId:String,
  name:String,
  quoteType:String,
  quoteDate:Date,
  quoteCost:Number,
  quoteComps:String,

});

const Record = mongoose.model('records',recordSchema);
module.exports = Record;
