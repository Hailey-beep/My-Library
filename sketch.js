var movableRect, fixedRect, obj3, obj4, obj5, obj6;

function setup() {
  createCanvas(800,400);
  movableRect = createSprite(400, 300, 70, 50);
  movableRect.shapeColor = "green";
  //movableRect.velocityX = 2;
  //movableRect.velocityY = -4;
  fixedRect = createSprite(600, 300, 50, 50);
  fixedRect.shapeColor = "green";

  obj3 = createSprite(100,200,20,20);
  obj3.shapeColor = "yellow";

  obj4 = createSprite(200,200,20,20);
  obj4.shapeColor = "yellow";
  obj4.velocityX = 2;

  obj5 = createSprite(300,200,20,20);
  obj5.shapeColor = "yellow";
  obj5.velocityX = -2;

  obj6 = createSprite(400,200,20,20);
  obj6.shapeColor = "yellow";
}

function draw() {
  background("black"); 
  
  movableRect.y = mouseY;
  movableRect.x = mouseX;

  if(movableRect.isTouching(obj5)) {
      movableRect.shapeColor = "red";
      obj5.shapeColor = "red";
    }
    else {
      movableRect.shapeColor = "green";
      obj5.shapeColor = "yellow";
  }

  bounce(obj4, obj5);

  console.log(movableRect.x - fixedRect.x);
  drawSprites();
}