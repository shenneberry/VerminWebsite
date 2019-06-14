const mongoose = require('mongoose');
mongoose.Promise = global.Promise;


//Schema for Vermin with all evolutions
var algorithmsSchema = mongoose.Schema({

    _id: mongoose.Schema.Types.ObjectId,
    calcLifes: {type: Number, required: true},
    calcMuscle: {type: Number, required: true},
    calcBlast: {type: Number, required: true},
    calcGuard: {type: Number, required: true},
    calcInitFast: {type: Number, required: true},
    maxNextTurnFast: {type: Number, required: true},
    calcNextTurnFast: {type: Number, required: true},
    turnOrder: {
         turn1: 1,
         turn2: 2,
         turn3: 3,
         turn4: 4
    },
    calcHitOrMiss: {type: Number, required: true},
    //start needed for calcHitOrMiss
    accuracyNumber: {type: Number, required: true},
    //end vars needed for calcHitOrMiss
    calcMuscleDmg: {type: Number, required: true},
    //start vars needed for calcMuscleDmg
    dmgConst: {type: Number, required: true},
    //end vars needed for calcMuscleDmg
    calcGuardDmgReduction: {type: Number, required: true},
    //star vars needed for calcGuardDmgReduction
    baseDmg: {type: Number, required: true},
    finalDmg: {type: Number, required: true},

}); 


module.exports = mongoose.model('Algorithms', algorithmsSchema);