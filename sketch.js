var backImage,backgr;
var player, player_running;
var ground,ground_img;
var FoodGroup;
var obstacleGroup;
var stone,bananaImage;
var banana,gOver,overimg;
var h1,h2,h3;
var himg

var STATE=1;
var life = 3

function preload(){
  backImage=loadImage("jungle.jpg");
  player_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  s1 = loadImage("stone.png");
  bananaImage = loadImage("banana.png")
  overimg = loadImage("gameOver.png")
  himg = loadImage("heart.png")

}

function setup() {
  createCanvas(800,400);
  
  FoodGroup = new Group()
  obstacleGroup = new Group()

  backgr=createSprite(0,0,800,400);
  backgr.addImage(backImage);
  backgr.scale=1.5;
  backgr.x=backgr.width/2;
  backgr.velocityX=-4;
  
  player = createSprite(100,290,20,50);
  player.addAnimation("Running",player_running);
  player.scale = 0.1;
  
  ground = createSprite(400,350,800,10);
  ground.x=ground.width/2;
  ground.visible=false;

  gOver = createSprite(displayWidth/2-200,displayHeight/2-120)
  gOver.addImage(overimg);
  gOver.visible=false; 

  h1 = createSprite(325,15);
  h1.scale=0.02;
  h1.addImage("hi",himg)
  
   h2 = createSprite(355,15);
  h2.scale=0.02;
  h2.addImage("hi",himg)
  
   h3 = createSprite(385,15);
  h3.scale=0.02;
  h3.addImage("hi",himg)

}

function draw() { 
 
 
  background(0);


  if (STATE == 1){
  if (player.isTouching(FoodGroup)){

  player.scale+= +0.08;
  FoodGroup[0].destroy();
  
  }

   if (life == 2){

  h1.destroy();

   }
  
if (life == 1){

h2.destroy();
   
}
if (life == 0){

h3.destroy();

}

  if(backgr.x<100){
    backgr.x=backgr.width/2;
  }

   if (life ==0 ){

   STATE=0;

   }

 if  (STATE ==0){
 
player.destroy();
gOver.visible=true;
backgr.velocityX=0;

}

console.log(player.y)

    if(keyDown("space") && player.y>312) {
      player.velocityY = -14;
    }
    player.velocityY = player.velocityY + 0.8;
  
    player.collide(ground);

    if (player.isTouching(obstacleGroup)){

   life=life-1;
   obstacleGroup[0].destroy();

    }
  
fruits();
stones();
  }
console.log(life)  

  drawSprites();
}


function fruits() {
  
  if (frameCount % 230 === 0 ){
  
  banana = createSprite(600,290);
  banana.addImage("b1",bananaImage);
  banana.velocityX= -6 ;
  banana.lifetime = 150;
    FoodGroup.add(banana)
    banana.scale=0.07;
  banana.y=Math.round(random(120,360));
 // banana.debug=true;
    banana.setCollider("circle",0,0,95);
  }
  
}


function stones() {

  if (frameCount % 100 === 0) {

    stone = createSprite(600, 320);
    stone.addImage("sa", s1);
    stone.velocityX = -6;
    stone.lifetime = 150;
    stone.scale = 0.09;
    obstacleGroup.add(stone)
   stone.debug=true;
    stone.setCollider("circle",0,0,12)
  }

}


