const fs = require('fs'); 
const express = require('express');
const app = express();//creates an instance of the express object
//declared above.

 
//blah blah
//error handler logging middlewar for HTTP requests
const morgan = require('morgan');
const bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
const path = require('path');

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;


// .catch((err) => {
//   console.log(err);
//   process.exit(1);
// });


//RouterModules
const verminRouter = require('./api/routes/verminRouter'); 
const adminRouter = require('./api/routes/adminRouter');

mongoose.connect('mongodb://localhost:27017/testdb', {useNewUrlParser: true});

// mongoose.connect('mongodb+srv://dbAdmin:Me69Pyj9nkgNHO7C@vermin-app-2-goi8v.mongodb.net/test?retryWrites=true', 
//   {
//     useNewUrlParser: true
//   }
// )
// .then(function() {
//   console.log('connected properly');}) 
// .catch((err) => {
//     console.log(err);
//     // process.exit(1);
//   });

//USE methods middleware
//Error handling middleware
app.use(morgan('dev'));

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

//look at docs for body parser
//States that I want to parse url encoded data
app.use(bodyParser.urlencoded({ extended: true}));
//body-parser middleware
//parses the body of a JSON file
app.use(bodyParser.json());
//sets up a static file directory path to refer to for index.html to be automatically loaded 
app.use(cookieParser());



app.use(express.static(path.join(__dirname, '..', 'client')));
//app.use(express.static(path.join(__dirname, 'uploads')));
//app.use(express.static(path.join(__dirname)));

//makes sure any requests with /uploads have public access to the uploads folder
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
//makes sure this url is sent to be processed by submitVermin.js
app.use('/vermin', verminRouter, express.static(path.join(__dirname, 'vermin-pics')));
app.use('/admin', adminRouter); 

//error to be sent to error handler function below if
// request makes it past all specified url handlers above.
app.use((req, res, next) => {
   const error = new Error('Not found');
   error.status = 404;
   //sends the error out to error handler below.
   next(error); 
});

//general error handler for errors thrown from anywhere else in
// application
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
      error: {
        message: error.message
      }
    });
});



module.exports = app; 