const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/testdb');
const app = require('../../index');

//Schema for testdb
var evo1Schema = new mongoose.Schema({
    img: String,
    lifes: 0,
    muscle: 0,
    blast: 0,
    guard: 0,
    fast: 0
  });
  
  //creates model from Schema
  var evo1 = mongoose.model('Evo1', evo1Schema);
  
  //Use express for things that don't have to be updated live
  app.post('/', function(req, res){
     var myData = new evo1(req.body);
     myData.save()
     .then(item => {
       res.send("item saved to database");
     })
     .catch(err => {
       res.status(400).send("unable to save to database");
     }); 
  
  });