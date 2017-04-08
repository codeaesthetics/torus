var go =1;


function setup() {
  createCanvas(windowWidth,windowHeight,WEBGL);
    background(255);

}

function draw() {
  torus( go * 0.40, 10 );
  

  
  go = go +1;
  }
 
function mousePressed() {
  go= 1;
}    
  

  
