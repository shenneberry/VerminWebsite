const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/testdb');
const express = require('express');
const router = express.Router();

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
  router.post('/', (req, res, next) => {  
    var myData = new evo1(req.body);
     myData.save()
     .then(item => {
       res.send("item saved to database");
     })
     .catch(err => {
       res.status(400).send("unable to save to database");
     }); 
  
  });

  //double colon indicates a variable. 
  router.get('/:verminId', (req, res, next) => {
     const id = req.params.verminId;
    //  if(id === ){

    //  }else {

    //  }
  });

  router.patch('/:verminId', (req, res, next) => {
    const id = req.params.verminId;
   //  if(id === ){

   //  }else {

   //  }
  });

  router.delete('/:verminId', (req, res, next) => {
      const id = req.params.verminId;
    //  if(id === ){

    //  }else {

    //  }
    });


  module.exports = router;