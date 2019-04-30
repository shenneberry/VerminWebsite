

var md = false; 
//INITIAL CANVAS SETUP
var evo2Canvas = document.getElementById('evo2Canvas');
evo2Canvas.addEventListener('mousedown', down);
evo2Canvas.addEventListener('mouseup', toggledraw);
//in this case, the event is the mouse moving
evo2Canvas.addEventListener('mousemove', function(evt){
    var mousePos = getMousePos(evo2Canvas, evt); 
    //assigns returned variables from the getMousePos
    var posx = mousePos.x; 
    var posy = mousePos.y;
    draw(evo2Canvas, posx, posy); 
}); 

//sets the drawing surface width and height to 
//whatever is set in the css
evo2Canvas.width = evo2Canvas.scrollWidth;
evo2Canvas.height = evo2Canvas.scrollHeight;

//FUNCTIONS
function down(){
    md = true; 
}
function toggledraw(){
    md = false; 
}
function getMousePos(evo2Canvas, evt){
    //returns the size of an element and its
    // position related to the viewport
    // in this case, the canvas
    var rect = evo2Canvas.getBoundingClientRect();
    return{
        x:evt.clientX - rect.left,
        y:evt.clientY - rect.top
    }
}
function draw(evo2Canvas, posx, posy){
    //get 2d drawing api
    var ctx = evo2Canvas.getContext('2d');
    if(md){
        //c.style.cursor="pointer"; 
        ctx.fillRect(posx, posy, 4, 4);
    }
}