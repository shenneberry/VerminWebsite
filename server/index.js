// var fs = require('fs');
const bodyParser = require('body-parser');
const path = require('path');
const express = require('express');
const app = express();//creates an instance of the express object
//declared above.

//RouterModules
const submitVerminModule = require('./api/routes/submitVermin')

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
//sets up a static file directories to refer to. 
app.use(express.static(path.join(__dirname, '..', 'client')));
//app.use(express.static(path.join(__dirname, 'api', 'routes')));
app.use('/submitVermin', submitVerminModule); 

module.exports = app; 