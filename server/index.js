// var fs = require('fs');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://sdAdmin:' + 'uU0u6wasBq2gPgrL'/*process.env.MONGO_ATLAS_PW*/ + '@vermin-app-goi8v.mongodb.net/test?retryWrites=true',
  {
    useNewUrlParser: true
  }
);
const bodyParser = require('body-parser');
const path = require('path');
const express = require('express');
const app = express();//creates an instance of the express object
//declared above.
//error handler for HTTP requests
const morgan = require('morgan');

//RouterModules
const verminModule = require('./api/routes/verminRouter')

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

//USE methods middleware
//Error handling middleware
app.use(morgan('dev'));
//look at docs for body parser
//States that I want to parse url encoded data
app.use(bodyParser.urlencoded({ extended: true}));
//body-parser middleware
//parses the body of a JSON file
app.use(bodyParser.json());
//Prevents CORS errors, gives the headers necessary for
// the client to get access to the server when requested
//This middleware specifies which headers can be attached to request
app.use((req, res, next) => {

  //Star means that the origin client url can come from anywhere
  res.header('Access-Control-Allow-Origin', '*'); 
  //Gives the clients certain headers to allow certain types of access to server
  res.header('Access-Control-Allow-Headers', 
  'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  //states which methods the browser is allowed to send
  if(req.method === 'OPTIONS'){
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET'); 
    return res.status(200).json({}); 
  }
  //next(); allows other routers to take over if
  // if we are not returning an OPTIONS request. 
  next();
}); 
//sets up a static file directories to refer to. 
app.use(express.static(path.join(__dirname, '..', 'client')));
//makes sure any requests with /uploads have public access to the uploads folder
app.use(express.static('/uploads', path.join(__dirname, 'uploads')));
//makes sure this url is sent to be processed by submitVermin.js
app.use('/vermin', verminModule);

//error to be sent to error handler function below if
// request makes it past all specified url handlers above.
app.use((req, res, next) => {
   const error = new Error('Not found');
   error.status = 404;
   //sends the error out to error handler below.
   next(error); 
});

//general error handler
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    // res.json({
    //   error: {
    //     message: error.message
    //   }
    // });
});

module.exports = app; 