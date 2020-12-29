var a,b;
function setup() {
  
  createCanvas(800,400);
 a= createSprite(400, 200, 50, 50);
 b= createSprite(400,200,80,30);
 a.shapeColor =" green";
 b.shapeColor =" green";
}

function draw() {
  background(255,255,255);  
  a.x=mouseX;
  a.y=mouseY;
  if(a.x-b.x<65){
    a.shapeColor =" red";
    b.shapeColor =" red";
  }
  else{
    a.shapeColor =" green";
    b.shapeColor =" green";
  }
  drawSprites();
}