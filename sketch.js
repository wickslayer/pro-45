const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var world,engine;
var tArray=[]; 

function preload(){
gunIMG = loadImage("images/M416.jpeg");
targetIMG = loadImage("images/target.png");
}


function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world; 
  gun= createSprite(160,320,20,20);
  gun.addImage(gunIMG);
  gun.scale=0.8
}


function draw() {
  Engine.update(engine);
  background("black");
  gun.y=mouseY;
  fill("white");
  //text(mouseX+" , "+mouseY,200,30);
  spawnTarget();
  drawSprites();
}
function spawnTarget(){
if(frameCount%150===0){
var target= createSprite(600,100,20,20);
target.velocityY=2
target.addImage(targetIMG);
target.lifetime=200;
target.scale=0.08
}
}
