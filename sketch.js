var runner,road,bomb,coin2,coin,energy,power,runner1,road1,bomb1,coin1,energy1,power1,b1,b2;
function preload(){
  runner1 = loadAnimation("Runner-1.png","Runner-2.png");
  road1 = loadImage("path.png");
  bomb1 = loadImage("bomb.png");
  coin1 = loadImage("coin.png");
  energy1 = loadImage("energyDrink.png");
  power1 = loadImage("power.png");
}

function setup(){
  createCanvas(400,400);
  road = createSprite(200,200,10,10);
  road.addImage(road1);
  road.scale = 0.5;
  runner = createSprite(200,350,100,100);
  runner.addAnimation("run",runner1);
  runner.scale = 0.03;
  b1 = createSprite(66,200,133,400);
  b2 = createSprite(339,200,133,400);
  b1.visible=false;
  b2.visible=false;
  var coins = createGroup;
}

function draw() {
  background(52, 195, 235);
  drawSprites();
  runner.collide(b1);
  runner.collide(b2);
  runner.velocityX = 0
  if (keyDown("Right_Arrow")){
      runner.velocityX=runner.velocityX+5;
  }
  if (keyDown("Left_Arrow")){
    runner.velocityX=runner.velocityX-5;
  }
  road.velocityY = 5;
  if (road.y > 230){
    road.y = 170;
  }
}
