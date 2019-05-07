

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
    const canvas = document.querySelector("#evo1Canvas");
    const ctx = canvas.getContext("2d");
    let painting = false; 

    function startPosition(e){

        painting = true;
        draw(e); 
    }
    function finishedPosition(){
        painting = false;
        ctx.beginPath();
    }

    function draw(e){
        if(!painting) return;
        ctx.lineWidth = 10;
        ctx.lineCap = 'round';
        ctx.lineTo(e.clientX, e.clientY);
        ctx.strokeStyle = "blue"; 
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY);
    }

    canvas.addEventListener("mousedown", startPosition);
    canvas.addEventListener("mouseup", finishedPosition);
    canvas.addEventListener("mousemove", draw)
});