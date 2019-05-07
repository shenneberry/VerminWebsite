

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

window.addEventListener("load", () => {
     
    const evo1Canvas = document.querySelector("#evo1Canvas");
    const evo1Ctx = evo1Canvas.getContext("2d");
    let painting = false; 

    function startPosition(e){

        painting = true;
        draw(e); 
    }
    function finishedPosition(){
        painting = false;
        evo1Ctx.beginPath();
    }

    function draw(e){
        if(!painting) return;
        var canvasColorPicker = document.getElementById("canvasColorPicker");
        evo1Ctx.lineWidth = 10;
        evo1Ctx.lineCap = 'round';
        evo1Ctx.lineTo(e.clientX, e.clientY);
        evo1Ctx.strokeStyle = canvasColorPicker.value; 
        evo1Ctx.stroke();
        evo1Ctx.beginPath();
        evo1Ctx.moveTo(e.clientX, e.clientY);
    }

    evo1Canvas.addEventListener("mousedown", startPosition);
    evo1Canvas.addEventListener("mouseup", finishedPosition);
    evo1Canvas.addEventListener("mousemove", draw); 
});



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