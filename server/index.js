// var fs = require('fs');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/testdb');
var path = require('path');
var express = require('express');
var app = express();//creates an instance of the express object
//declared above. 
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(4000);

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
app.use(bodyParser.urlencoded({ extended: true})); 
//sets up a static file directory to refer to. 
app.use(express.static(path.join(__dirname, '..', 'client')));

//Schema for testdb
var nameSchema = new mongoose.Schema({
  lifes: 0,
  muscle: 0,
  blast: 0,
  guard: 0,
  fast: 0
});

//creates model from Schema
var User = mongoose.model('User', nameSchema);

//Use express for things that don't have to be updated live
app.post('/SubmitVermin'/*Refers to form action in html*/, function(req, res){
   var myData = new User(req.body);
   myData.save()
   .then(item => {
     res.send("item saved to database");
   })
   .catch(err => {
     res.status(400).send("unable to save to database");
   }); 

});

//client's starts io connection, a new socket is made, and
//the callback function defines what to do w/newly created socket
//only use socket for real time updates
io.on('connection', function (socket/*bidirectional socket*/) {
  //This emits to either the client or the server depending 
  //on which side this script is being run from
  //In this case, this is being emitted to the client
  console.log('connection set')
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log('received post request');
    console.log(data);
    //listens and log data from client
  });
});

