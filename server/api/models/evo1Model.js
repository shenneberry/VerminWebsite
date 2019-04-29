const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

//Schema for vermindb
var evo1Schema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    evo1Image: {type: String, required: true},
    lifes: {type: Number, required: true},
    muscle: {type: Number, required: true},
    blast: {type: Number, required: true},
    guard: {type: Number, required: true},
    fast: {type: Number, required: true}
  });

  //creates model from Schema   
  module.exports = mongoose.model('Evo1', evo1Schema);
  ; 