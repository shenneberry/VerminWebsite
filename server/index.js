// var fs = require('fs');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/testdb');
const express = require('express');
const app = express();//creates an instance of the express object
//declared above. 



var options = {
  dotfiles: 'ignore',
  etag: false,
  extensions: ['htm', 'html'],
  index: false,
  maxAge: '1d',
  redirect: false,
  setHeaders: function (res, path, stat) {
    res.set('x-timestamp', Date.now())
  }
}

//USE methods
//body-parser middleware
app.use(bodyParser.json());
//look at docs for body parser
app.use(bodyParser.urlencoded({ extended: true})); 
//sets up a static file directory to refer to. 
app.use(express.static(path.join(__dirname, '..', 'client')));

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
app.post('/SubmitVermin'/*Refers to form action in html*/, function(req, res){
   var myData = new evo1(req.body);
   myData.save()
   .then(item => {
     res.send("item saved to database");
   })
   .catch(err => {
     res.status(400).send("unable to save to database");
   }); 

});



module.exports = app; 