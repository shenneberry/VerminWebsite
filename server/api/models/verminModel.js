const mongoose = require('mongoose');
mongoose.Promise = global.Promise;


//Schema for Vermin with all evolutions
var verminSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {type: String, required: true},
    evo1: {
        evoLevel: Number,
        evo1Image: {type: String, required: true},
        lifes: {type: Number, required: true},
        muscle: {type: Number, required: true},
        blast: {type: Number, required: true},
        guard: {type: Number, required: true},
        fast: {type: Number, required: true}
    },
    evo2: {
        evoLevel: Number,
        evo2Image: {type: String, required: true},
        lifes: {type: Number, required: true},
        muscle: {type: Number, required: true},
        blast: {type: Number, required: true},
        guard: {type: Number, required: true},
        fast: {type: Number, required: true}
    },
    evo3: {
        evoLevel: Number,
        evo3Image: {type: String, required: true},
        lifes: {type: Number, required: true},
        muscle: {type: Number, required: true},
        blast: {type: Number, required: true},
        guard: {type: Number, required: true},
        fast: {type: Number, required: true}
    }
}); 


module.exports = mongoose.model('Vermin', verminSchema);