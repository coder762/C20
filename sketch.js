var fixedRect,movingRect;

function setup() {
  createCanvas(800,400);

  fixedRect=createSprite(400, 200, 30, 80);
  fixedRect.shapeColor="red";

  movingRect=createSprite(200,300,80,30);
  movingRect.shapeColor="red";

  BounceOffRect1=createSprite(100,300,80,30)
  BounceOffRect1.velocityX=3
  BounceOffRect2=createSprite(700,300,80,30)
  BounceOffRect2.velocityX=-3
}

function draw() {
  background(0);  

  movingRect.x=mouseX;
  movingRect.y=mouseY;

  if(fixedRect.width/2+movingRect.width/2>movingRect.x-fixedRect.x &&
    fixedRect.width/2+movingRect.width/2>fixedRect.x-movingRect.x &&
    fixedRect.height/2+movingRect.height/2>fixedRect.y-movingRect.y &&
    fixedRect.height/2+movingRect.height/2>movingRect.y-fixedRect.y){
    fixedRect.shapeColor="blue";
    movingRect.shapeColor="blue";
  }
  else{
    fixedRect.shapeColor="red";
    movingRect.shapeColor="red";
  }

  if(BounceOffRect1.width/2+BounceOffRect2.width/2>BounceOffRect1.x-BounceOffRect2.x &&
    BounceOffRect1.width/2+BounceOffRect2.width/2>BounceOffRect2.x-BounceOffRect1.x){
      BounceOffRect1.velocityX=BounceOffRect1.velocityX*(-1);
      BounceOffRect2.velocityX=BounceOffRect2.velocityX*(-1);
    }
    if(BounceOffRect1.height/2+BounceOffRect2.height/2>BounceOffRect1.y-BounceOffRect2.y &&
      BounceOffRect1.height/2+BounceOffRect2.height/2>BounceOffRect2.y-BounceOffRect2.y){
        BounceOffRect1.velocityY=BounceOffRect1.velocityY*(-1);
        BounceOffRect2.velocityY=BounceOffRect2.velocityY*(-1);
      }

  drawSprites();
}