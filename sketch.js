//creating objects
var object1, object2, object3, object4;

function setup() {
  createCanvas(1000,2000);


  object1 = createSprite(200, 200, 50, 50);
  object2 = createSprite(100, 100, 50, 50);
  object3 = createSprite(300, 300, 20, 20);
  object4 = createSprite(350, 350, 50, 50);

  object1.shapeColor = "purple";
  object2.shapeColor = "blue";
  object3.shapeColor = "red";
  object4.shapeColor = "yellow";
}


function draw() {
  background(255,255,255);  

object1.x = World.mouseX;
object1.y = World.mouseY;

if(object1.x - object2.x < object1.width/2 + object2.width/2
  && object2.x - object1.x < object1.width/2 + object2.width/2
  && object1.y - object2.y < object1.width/2 + object2.width/2
  && object2.y - object1.y < object1.height/2 + object2.height/2) {
object2.shapeColor = "green";
object1.shapeColor = "green";
}

else{object2.shapeColor = "black";
object1.shapeColor = "black";}


  drawSprites();
}