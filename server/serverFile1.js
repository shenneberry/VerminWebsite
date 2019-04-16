var server = require('http').createServer(handler)
var io = require('socket.io')(server);
var fs = require('fs');
console.log('hello')
server.listen(4000);

function handler (req, res) {
  fs.readFile(__dirname + '/../client/index.html',
  function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index.html');
    }

    res.writeHead(200);
    res.end(data);//this is what is sent back to the client
    //if everything goes ok
  });
}
console.log(Object.keys(io))
//client's starts io connection
io.on('connection', function (socket/*bidirectional socket*/) {
  //This emits to either the client or the server depending 
  //on which side this script is being run from
  //In this case, this is being emitted to the client
    socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
      //listens and log data from client
    console.log(data);
  });
});
