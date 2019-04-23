// var fs = require('fs');
// var express = require('express'); 
// var socket = require('socket.io');

// //App setup
// var app = express();
// var server = app.listen(4000, function(){
//   console.log('listening to request on nodemon');
// })

// //Static files. Most static files come from the server side
// app.use(express.static('client'));//searches for index.html file in client folder
// //sets up socket on server side
// var io = socket(server);




// //client's starts io connection, a new socket is made, and
// // the callback function defines what to do w/newly created socket
// io.on('connection', function (socket/*bidirectional socket*/) {
//   //This emits to either the client or the server depending 
//   //on which side this script is being run from
//   //In this case, this is being emitted to the client
//   console.log('received connection');
//   //test connection
//   socket.emit('news', { hello: 'world' });
//   socket.on('post', function(data){
//     //Save data to MongoDB
//     console.log('received post'); 
//   }); 
//   socket.on('my other event', function (data) {
//       //listens and log data from client
//     console.log(data);
//   });
// });
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

//sets up a static file directory to refer to. 
app.use(express.static(path.join(__dirname, '..', 'client')));

// app.get('/', function (req, res) {
//   const indexPath = path.join(__dirname, '..', 'client', 'index.html' );
//   res.sendFile(indexPath);
// });

//Use express for things that don't have to be updated live
app.post('/SubmitVermin'/*Refers to form action in html*/, function(req, res){
   
});

//only use socket for real time updates
io.on('connection', function (socket) {
  console.log('connection set')
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log('received post request');
    console.log(data);
  });
});

