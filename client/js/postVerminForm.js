const express = require('express');
const app = express();
const canvas = require('canvas'); 

const fs = require('fs');


app.use(express.urlencoded())

//Make front end socket connection
//io is available because we have access to it on the front end now
var socket = io.connect('http://localhost:4000');
        socket.on('news', function (data) {
          console.log(data);
          socket.emit('my other event', { my: 'data' });
        });


// Query DOM
var canvas = document.getElementById('canvas');
var handle = document.getElementById('handle');
var submitBtn = document.getElementById('submit');
var output = document.getElementById('output');

//Emit events

submitBtn.addEventListener('click', function(){  
    app.post('/server/index.js', (req, res) => {
        const out = fs.createWriteStream('/../img/test.png');
        const stream = canvas.createPNGStream(); 
        stream.pipe(out);
        out.on('finish', () => console.log('PNG created')); 
        const lifes = req.body.lifes; 
        res.end(); 
    });

});