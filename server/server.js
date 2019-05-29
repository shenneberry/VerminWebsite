const http = require('http');
const app = require('./app.js');
const port = process.env.PORT || 4000;
const server = http.createServer(app);
server.listen(port);
const cronJob = require('cron').CronJob; 
// var io = require('socket.io')(server);
 
 

// //client's starts io connection, a new socket is made, and
// //the callback function defines what to do w/newly created socket
// //only use socket for real time updates
// io.on('connection', function (socket/*bidirectional socket*/) {
//     //This emits to either the client or the server depending 
//     //on which side this script is being run from
//     //In this case, this is being emitted to the client
//     console.log('connection set')
//     socket.emit('news', { hello: 'world' });
//     socket.on('my other event', function (data) {
//       console.log('received post request');
//       console.log(data);
//       //listens and log data from client
//     });
//   });

//  new cronJob('*/5 * * * * *', function(){
//      console.log("starting cron");

//  }, null, true, 'America/Los_Angeles'); 