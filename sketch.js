var movingRect, fixedRect;
var rand;
var rand2;
var edges;
var object1, object2, object3, object4;

function setup() {
  createCanvas(800, 800);
  movingRect = createSprite(400, 200, 50, 50);
  movingRect.shapeColor = "red";
  fixedRect = createSprite(600, 200, 50, 80);
  fixedRect.shapeColor = "green";
  // movingRect.velocityX = -3;
  fixedRect.velocityX = 3;
  // movingRect.velocityY = 3;
  fixedRect.velocityY = -3;
  object1 = createSprite(300, 40, 20, 20);
  object1.shapeColor = "blue";
  // object1.velocity X = -3;
  // object1.velocityY = -3;
  object2 = createSprite(40, 400, 20, 20);
  object2.shapeColor = "purple";
  // object2.velocityX = 3;
  // object2.velocityY = 3;
  object3 = createSprite(430, 403, 20, 20);
  object3.shapeColor = "red";
  // object3.velocityX = -3;
  // object3.velocityY = 3;
  object4 = createSprite(123, 321, 20, 20);
  object4.shapeColor = "yellow";
  // object4.velocityX = 3;
  // object4.velocityY = -3;
}

function draw() {
  background(0, 0, 0);

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;


  console.log(movingRect.x - fixedRect.x);

  rand = Math.round(random(1, 255));


  if (isTouching(movingRect, object2)) {
    movingRect.shapeColor = rand2;
    object2.shapeColor = rand2;
  } else {
    movingRect.shapeColor = "red";
    object2.shapeColor = "green";
  }






  rand2 = Math.round(random(1, 3));
  switch (rand2) {
    case 1: movingRect.shapeColor = "red";
      break;
    case 2: movingRect.shapeColor = "blue";
      break;
    case 3: movingRect.shapeColor = "green";
      break;
    default: break;
  }
  edges = createEdgeSprites();

  movingRect.bounceOff(edges);
  fixedRect.bounceOff(edges);

  bounceOff(movingRect, fixedRect);
  drawSprites();
}

