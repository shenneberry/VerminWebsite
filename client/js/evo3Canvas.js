

var md = false; 
//INITIAL CANVAS SETUP
var c = document.getElementById('evo3Canvas');
c.addEventListener('mousedown', down);
c.addEventListener('mouseup', toggledraw);
//in this case, the event is the mouse moving
c.addEventListener('mousemove', function(evt){
    var mousePos = getMousePos(c, evt); 
    //assigns returned variables from the getMousePos
    var posx = mousePos.x; 
    var posy = mousePos.y;
    draw(c, posx, posy); 
}); 

//sets the drawing surface width and height to 
//whatever is set in the css
c.width = c.scrollWidth;
c.height = c.scrollHeight;

//FUNCTIONS
function down(){
    md = true; 
}
function toggledraw(){
    md = false; 
}
function getMousePos(c, evt){
    //returns the size of an element and its
    // position related to the viewport
    // in this case, the canvas
    var rect = c.getBoundingClientRect();
    return{
        x:evt.clientX - rect.left,
        y:evt.clientY - rect.top
    }
}
function draw(c, posx, posy){
    //get 2d drawing api
    var ctx = c.getContext('2d');
    if(md){
        //c.style.cursor="pointer"; 
        ctx.fillRect(posx, posy, 4, 4);
    }
}