var jakeImg, pathImg, path, jake, left_boundary, right_boundary, subway, subwayImg, coin, coinImg, coinscore,song,slider;
function preload(){
 
  jakeImg=loadAnimation("jake1.png", "jake2.png", "jake3.png", "jake4.png", "jake5.png");
  pathImg=loadImage("path.png");
  subwayImg=loadImage("subway.png");
  coinImg=loadImage("coin.png");
}

function setup(){
  createCanvas(400,400);
  path=createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY=5;
  path.y=path.height/30;
  jake=createSprite(180,340,50,170);
  jake.addAnimation("running", jakeImg);
  subway=createSprite(200,80,100,100);
  subway.addImage(subwayImg);
  coin=createSprite(200,200,80,90);
  coin.addImage(coinImg);
  coin.scale=0.3
  coin=createSprite(100,200,80,90);
  coin.addImage(coinImg);
  coin.scale=0.3
  coin=createSprite(300,200,80,90);
  coin.addImage(coinImg);
  coin.scale=0.3;
  left_boundary=createSprite(0,300,100,600);
  right_boundary=createSprite(390,300,80,600);
 left_boundary.visible=false;
right_boundary.visible=false;
}

function draw() {
  background(0);
  textSize(10);
  text('coin Score', 1,200);
  textSize(10);
  text('0', 20,230);
  path.velocityY=5;
  jake.x=World.mouseX;
  if(path.y>400) {
  path.y=height/2 ;
  if(jake.isTouching(coin)) {
  coinscore = coinscore+1;
 }
  
}
  jake.collide(left_boundary);
  jake.collide(right_boundary);
  edges=createEdgeSprites();
  jake.collide(edges[3]);
drawSprites();
}

