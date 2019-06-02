

/*script one

var md = false; 
//INITIAL CANVAS SETUP
var evo1Canvas = document.getElementById('evo1Canvas');
evo1Canvas.addEventListener('mousedown', down);
evo1Canvas.addEventListener('mouseup', toggledraw);
//in this case, the event is the mouse moving
evo1Canvas.addEventListener('mousemove', function(evt){
    var mousePos = getMousePos(evo1Canvas, evt); 
    //assigns returned variables from the getMousePos
    var posx = mousePos.x; 
    var posy = mousePos.y;
    draw(evo1Canvas, posx, posy); 
}); 

//sets the drawing surface width and height to 
//whatever is set in the css
evo1Canvas.width = evo1Canvas.scrollWidth;
evo1Canvas.height = evo1Canvas.scrollHeight;

//FUNCTIONS
function down(){
    md = true; 
}
function toggledraw(){
    md = false; 
}
function getMousePos(evo1Canvas, evt){
    //returns the size of an element and its
    // position related to the viewport
    // in this case, the canvas
    var rect = evo1Canvas.getBoundingClientRect();
    return{
        x:evt.clientX - rect.left,
        y:evt.clientY - rect.top
    }
}
function draw(evo1Canvas, posx, posy){
    //get 2d drawing api
    var ctx = evo1Canvas.getContext('2d');
    if(md){
        //c.style.cursor="pointer";
        ctx.fillStyle="green";
        ctx.fillRect(posx, posy, 20, 20);
        console.log("brush size and color applied");
          
    }
}

*/

// window.addEventListener("load", () => {
     
//     const evo1Canvas = document.querySelector("#evo1Canvas");
//     const evo1Ctx = evo1Canvas.getContext("2d");
//     let painting = false; 

//     function startPosition(e){

//         painting = true;
//         draw(e); 
//     }
//     function finishedPosition(){
//         painting = false;
//         evo1Ctx.beginPath();
//     }

//     function draw(e, posx, posy){
//         if(!painting) return;
//         var canvasColorPicker = document.getElementById("canvasColorPicker");
//         evo1Ctx.lineWidth = 10;
//         evo1Ctx.lineCap = 'round';
//         evo1Ctx.lineTo(posx, posy);//e.clientX, e.clientY);
//         evo1Ctx.strokeStyle = canvasColorPicker.value; 
//         evo1Ctx.stroke();
//         evo1Ctx.beginPath();
//         evo1Ctx.moveTo(posx, posy);//e.clientX, e.clientY);
//     }

//     function getMousePos(evo1Canvas, evt){
//         //returns the size of an element and its
//         // position related to the viewport
//         // in this case, the canvas
//         var rect = evo1Canvas.getBoundingClientRect();
//         return{
//             x:evt.clientX- rect.left, 
//             y:evt.clientY- rect.top
//         }
//     }
    

    


window.addEventListener("load", () => {
     
    const evo1Canvas = document.querySelector("#evo1Canvas");
    const evo1Ctx = evo1Canvas.getContext("2d");
	let painting = false; 
	var mouse = {x: 0, y: 0};
	evo1Canvas.addEventListener("mousedown", startPosition);
    evo1Canvas.addEventListener("mouseup", finishedPosition);
    evo1Canvas.addEventListener("mousemove", function(evt){
        // var mousePos = getMousePos(evo1Canvas, evt); 
        // //assigns returned variables from the getMousePos
        
		mouse.x = evt.pageX - this.offsetLeft;
		mouse.y = evt.pageY - this.offsetTop;
		  
		var posx = mousePos.x; 
		var posy = mousePos.y;
        draw(evo1Canvas, posx, posy); 
    }); 

    function startPosition(e){

        painting = true;
        draw(e); 
    }
    function finishedPosition(){
        painting = false;
        evo1Ctx.beginPath();
    }

    function draw(e, posx, posy){
        if(!painting) return;
        var canvasColorPicker = document.getElementById("canvasColorPicker");
        evo1Ctx.lineWidth = 10;
        evo1Ctx.lineCap = 'round';
        evo1Ctx.lineTo(posx, posy);//e.clientX, e.clientY);
        evo1Ctx.strokeStyle = canvasColorPicker.value; 
        evo1Ctx.stroke();
        evo1Ctx.beginPath();
        evo1Ctx.moveTo(posx, posy);//e.clientX, e.clientY);
    }

    function getMousePos(evo1Canvas, evt){
        //returns the size of an element and its
        // position related to the viewport
        // in this case, the canvas
        var rect = evo1Canvas.getBoundingClientRect();
        return{
            x:evt.clientX- rect.left, 
            y:evt.clientY- rect.top
        }
	}

	function getOffset( el ) {
		var _x = 0;
		var _y = 0;
		while( el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ) ) {
			_x += el.offsetLeft - el.scrollLeft;
			_y += el.offsetTop - el.scrollTop;
			el = el.offsetParent;
		}
		return { top: _y, left: _x };
	}
	var xOffset = getOffset( document.getElementById('#ev') ).left; 
	var yOffset = getOffset( document.getElementById('#sketch') ).left;
});
    

//     evo1Canvas.addEventListener("mousedown", startPosition);
//     evo1Canvas.addEventListener("mouseup", finishedPosition);
//     evo1Canvas.addEventListener("mousemove", function(evt){
//         var mousePos = getMousePos(evo1Canvas, evt); 
//         //assigns returned variables from the getMousePos
//         var posx = mousePos.x; 
//         var posy = mousePos.y;
//         draw(evo1Canvas, posx, posy); 
//     }); 
// });



// var mousePressed = false;
// var lastX, lastY;
// var ctx;

// $("document").ready(function(){
// function InitThis() {
//     ctx = document.getElementById('evo1Canvas').getContext("2d");

//     $('#evo1Canvas').mousedown(function (e) {
//         mousePressed = true;
//         Draw(e.pageX - $(this).offset().left, e.pageY - $(this).offset().top, false);
//     });

//     $('#evo1Canvas').mousemove(function (e) {
//         if (mousePressed) {
//             Draw(e.pageX - $(this).offset().left, e.pageY - $(this).offset().top, true);
//         }
//     });

//     $('#evo1Canvas').mouseup(function (e) {
//         mousePressed = false;
//     });
// 	    $('#evo1Canvas').mouseleave(function (e) {
//         mousePressed = false;
//     });
// }

// function Draw(x, y, isDown) {
//     if (isDown) {
//         ctx.beginPath();
//         ctx.strokeStyle = "black";//$('#selColor').val();
//         ctx.lineWidth = "1";//$('#selWidth').val();
//         ctx.lineJoin = "round";
//         ctx.moveTo(lastX, lastY);
//         ctx.lineTo(x, y);
//         ctx.closePath();
//         ctx.stroke();
//     }
//     lastX = x; lastY = y;
// }
	
// function clearArea() {
//     // Use the identity matrix while clearing the canvas
//     ctx.setTransform(1, 0, 0, 1, 0, 0);
//     ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
// }
// });




// You can export the variable from first file using export.

// //first.js
// const colorCode = {
//     black: "#000",
//     white: "#fff"
// };
// export { colorCode };
// Then, import the variable in second file using import.

// //second.js
// import { colorCode } from './first.js'

// (function() {
	
// 	var canvas = document.querySelector('#evo1Canvas');
// 	var ctx = canvas.getContext('2d');
	
// 	var sketch = document.querySelector('#sketch');
// 	var sketch_style = getComputedStyle(sketch);
// 	canvas.width = parseInt(sketch_style.getPropertyValue('width'));
// 	canvas.height = parseInt(sketch_style.getPropertyValue('height'));
	
	
// 	// Creating a tmp canvas
// 	var tmp_canvas = document.createElement('canvas');
// 	var tmp_ctx = tmp_canvas.getContext('2d');
// 	tmp_canvas.id = 'tmp_canvas';
// 	tmp_canvas.width = canvas.width;
// 	tmp_canvas.height = canvas.height;
	
// 	sketch.appendChild(tmp_canvas);

// 	var mouse = {x: 0, y: 0};
// 	var last_mouse = {x: 0, y: 0};
	
// 	// Pencil Points
// 	var ppts = [];
	
// 	/* Mouse Capturing Work */
// 	tmp_canvas.addEventListener('mousemove', function(e) {
// 		mouse.x = typeof e.offsetX !== 'undefined' ? e.offsetX : e.layerX;
// 		mouse.y = typeof e.offsetY !== 'undefined' ? e.offsetY : e.layerY;
// 	}, false);
	
	
// 	/* Drawing on Paint App */
// 	tmp_ctx.lineWidth = 5;
// 	tmp_ctx.lineJoin = 'round';
// 	tmp_ctx.lineCap = 'round';
// 	tmp_ctx.strokeStyle = 'blue';
// 	tmp_ctx.fillStyle = 'blue';
	
// 	tmp_canvas.addEventListener('mousedown', function(e) {
// 		tmp_canvas.addEventListener('mousemove', onPaint, false);
		
// 		mouse.x = typeof e.offsetX !== 'undefined' ? e.offsetX : e.layerX;
// 		mouse.y = typeof e.offsetY !== 'undefined' ? e.offsetY : e.layerY;
		
// 		ppts.push({x: mouse.x, y: mouse.y});
		
// 		onPaint();
// 	}, false);
	
// 	tmp_canvas.addEventListener('mouseup', function() {
// 		tmp_canvas.removeEventListener('mousemove', onPaint, false);
		
// 		// Writing down to real canvas now
// 		ctx.drawImage(tmp_canvas, 0, 0);
// 		// Clearing tmp canvas
// 		tmp_ctx.clearRect(0, 0, tmp_canvas.width, tmp_canvas.height);
		
// 		// Emptying up Pencil Points
// 		ppts = [];
// 	}, false);
	
// 	var onPaint = function() {
		
// 		// Saving all the points in an array
// 		ppts.push({x: mouse.x, y: mouse.y});
		
// 		if (ppts.length < 3) {
// 			var b = ppts[0];
// 			tmp_ctx.beginPath();
// 			//ctx.moveTo(b.x, b.y);
// 			//ctx.lineTo(b.x+50, b.y+50);
// 			tmp_ctx.arc(b.x, b.y, tmp_ctx.lineWidth / 2, 0, Math.PI * 2, !0);
// 			tmp_ctx.fill();
// 			tmp_ctx.closePath();
			
// 			return;
// 		}
		
// 		// Tmp canvas is always cleared up before drawing.
// 		tmp_ctx.clearRect(0, 0, tmp_canvas.width, tmp_canvas.height);
		
// 		tmp_ctx.beginPath();
// 		tmp_ctx.moveTo(ppts[0].x, ppts[0].y);
		
// 		for (var i = 1; i < ppts.length - 2; i++) {
// 			var c = (ppts[i].x + ppts[i + 1].x) / 2;
// 			var d = (ppts[i].y + ppts[i + 1].y) / 2;
			
// 			tmp_ctx.quadraticCurveTo(ppts[i].x, ppts[i].y, c, d);
// 		}
		
// 		// For the last 2 points
// 		tmp_ctx.quadraticCurveTo(
// 			ppts[i].x,
// 			ppts[i].y,
// 			ppts[i + 1].x,
// 			ppts[i + 1].y
// 		);
// 		tmp_ctx.stroke();
		
// 	};
	
// }());
