const mongoose = require('mongoose');
mongoose.Promise = global.Promise;


//Schema for Vermin with all evolutions
var team1Schema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    vermin3: {
        posNum: 3,
        name: {type: String, required: true},
        evoImage: {type: String, required: true},
        lifes: {type: Number, required: true},
        muscle: {type: Number, required: true},
        blast: {type: Number, required: true},
        guard: {type: Number, required: true},
        fast: {type: Number, required: true}
    },
    vermin4:{
        posNum: 4,
        name: {type: String, required: true},
        evoImage: {type: String, required: true},
        lifes: {type: Number, required: true},
        muscle: {type: Number, required: true},
        blast: {type: Number, required: true},
        guard: {type: Number, required: true},
        fast: {type: Number, required: true}
    }

}); 


module.exports = mongoose.model('Team2', team1Schema);