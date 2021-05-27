var backImage,backgr;
var player, player_running;
var ground,ground_img;
var FoodGroup;
var obstacleGroup;
var stone,bananaImage;

var STATE=1;
var life = 3

function preload(){
  backImage=loadImage("jungle.jpg");
  player_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  s1 = loadImage("stone.png");
  bananaImage = loadImage("banana.png")

}

function setup() {
  createCanvas(800,400);
  
  FoodGroup = []
  obstaclesGroup = []

  backgr=createSprite(0,0,800,400);
  backgr.addImage(backImage);
  backgr.scale=1.5;
  backgr.x=backgr.width/2;
  backgr.velocityX=-4;
  
  player = createSprite(100,340,20,50);
  player.addAnimation("Running",player_running);
  player.scale = 0.1;
  
  ground = createSprite(400,350,800,10);
  ground.x=ground.width/2;
  ground.visible=false;
  
}

function draw() { 
 
   background(0);
  
  if(backgr.x<100){
    backgr.x=backgr.width/2;
  }
  
  if (player.isTouching(FoodGroup)){

  player.scale+=0.005;
  FoodGroup[0].destroy();

  }

 

   if (life ==0 ){

   STATE=0;

   }

    if(keyDown("space") ) {
      player.velocityY = -12;
    }
    player.velocityY = player.velocityY + 0.8;
  
    player.collide(ground);

    if (player.isTouching(obstacleGroup)){

   life=life-1;

    }
  
fruits();
stones();

  
  drawSprites();
}


function fruits() {
  
  if (frameCount % 233 === 0 ){
  
  banana = createSprite(600,290);
  banana.addImage("b1",bananaImage);
  banana.velocityX= -6 ;
  banana.lifetime = 150;
    FoodGroup=[banana]
    banana.scale=0.07;
  banana.y=Math.round(random(320,560));
 // banana.debug=true;
    banana.setCollider("circle",0,0,95);
  }
  
}


function stones() {

  if (frameCount % 100 === 0) {

    stone = createSprite(600, 350);
    stone.addImage("sa", s1);
    stone.velocityX = -6;
    stone.lifetime = 150;
    stone.scale = 0.09;
    obstacleGroup=[stone]
   //stone.debug=true;
    stone.setCollider("circle",0,0,12)
  }

}


