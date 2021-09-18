var object1;
var object2;

function setup() {
  createCanvas(800,400);
 object1= createSprite(400, 200, 50, 50);
 object2= createSprite(400, 200, 50, 50);

 object1.shapeColor="blue";
 object2.shapeColor="blue";
 
 object1.debug=true;
 object2.debug=true;
}

function draw() {
  background(255,255,255); 
  
  object2.x=World.mouseX;
  object2.y=World.mouseY;
if(object1.x-object2.x<object2.width/2 + object1.width/2&&
  object2.x-object1.x<object2.width/2 + object1.width/2&&
  object1.y-object2.y<object2.height/2 + object1.height/2&&
  object2.y-object1.y<object2.height/2 + object1.height/2)
{
  object1.shapeColor="red";
 object2.shapeColor="red";
}
else
{
  object1.shapeColor="blue";
 object2.shapeColor="blue";
}
  drawSprites();
}