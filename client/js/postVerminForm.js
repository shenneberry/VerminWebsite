
//   var socket = io.connect('http://localhost:4000');
//     socket.on('news', function (data) {
//       console.log(data);
//       socket.emit('my other event', { my: 'data' });
//     });


// //Query DOM to be used in seperate file
// var canvas = document.getElementById('canvas');
// var handle = document.getElementById('handle');
// var submitBtn = document.getElementById('submit');
// var output = document.getElementById('output');
// function submitBtn(){
//     socket.emit('post', function(){
//         alert(1); 
//         const out = fs.createWriteStream('../img/test.png');
//         const stream = canvas.createPNGStream(); 
//         stream.pipe(out);
//         out.on('finish', () => console.log('PNG created')); 
//         const lifes = req.body.lifes; 
//         res.end(); 
//     });             
    
// }