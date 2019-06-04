const mongoose = require('mongoose');
mongoose.Promise = global.Promise;


//Schema for Vermin with all evolutions
var team1Schema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    vermin1: {
        name: {type: String, required: true},
        
    }

}); 


module.exports = mongoose.model('Team1', team1Schema);