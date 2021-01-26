var starry, starryImg;
var fairy, fairyImg; 
var star;

function preload()
{
  //starryImg = loadImage("starnight.png");
//fairyImg = loadImage("fairy.png");

}

function setup() {
  createCanvas(800, 750);
  
  starry = createSprite(400,400,800,800);
  starry.shapeColor = color("black");
  //starry.addImage(starryImg);

  star = createSprite(700,150,50,50);
  star.shapeColor = color("yellow");

  fairy = createSprite(100,650,100,100);
  fairy.shapeColor = color("green");
 // fairy.addImage("fairy", fairyImg);
}


function draw() {
  background("black");

  if (keyDown("left_arrow")) {
    fairy.x = fairy.x - 3;
  }

  if (keyDown("right_arrow")) {
    fairy.x = fairy.x + 3;
  }

  if (keyDown("space")) {
    star.velocityY = 3;
  }

drawSprites();
}
