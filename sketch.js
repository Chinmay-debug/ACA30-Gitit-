var player;
var edges;
var score=0;
var snakeGroup;
var snakeImage, targetImage , playerImage , backImage;

function preload(){
  snakeImage = loadImage("snake.png");
  targetImage = loadImage("carrot.png");
  playerImage = loadImage("bunny.png");
  backImage=loadImage("bg.png");
}

function setup() {
createCanvas(600,600);
edges = createEdgeSprites();
bg = createSprite(300,300,600,600);
bg.scale=5;
bg.addImage(backImage);

target = createSprite(560, 40, 30, 30);
target.addImage(targetImage);
target.scale=0.1;

player = createSprite(40.550,30,30);
player.addImage(playerImage);
player.scale=0.2;
snakeGroup= new Group();
obs1 = createSprite(300, 120, 100, 20);
obs1.velocityX = 5;
obs2 = createSprite(300, 320, 100, 20);
obs2.velocityX = -5;
obs3 = createSprite(150, 120, 100, 20);
obs3.velocityX = 5;
obs4 = createSprite(200, 120, 100, 20);
obs4.velocityX = -5;
obs5 = createSprite(150, 320, 100, 20);
obs5.velocityX = 5;
obs6 = createSprite(120, 320, 100, 20);
obs6.velocityX = -5;
}

 



function draw() {
background("black");


player.bounceOff(edges[0]);
player.bounceOff(edges[1]);
player.bounceOff(edges[2]);
player.bounceOff(edges[3]);
obs1.bounceOff(edges[1]);
obs1.bounceOff(edges[0]);
obs2.bounceOff(edges[1]);
obs2.bounceOff(edges[0]);
obs3.bounceOff(edges[1]);
obs3.bounceOff(edges[0]);
obs4.bounceOff(edges[1]);
obs4.bounceOff(edges[0]);
obs5.bounceOff(edges[1]);
obs5.bounceOff(edges[0]);
obs6.bounceOff(edges[1]);
obs6.bounceOff(edges[0]);




if (keyDown("up")) {
  player.y = player.y - 10;
}

if (keyDown("down")) {
  player.y = player.y + 10;
}

if (keyDown("left")) {
  player.x = player.x - 3;
}

if (keyDown("right")) {
  player.x = player.x + 3;
}

if (player.isTouching(target)) {
  text("YOU WIN", 300, 300);
}

if (player.isTouching(obs1)) {
  player.x = 40;
  player.y = 500;
  text("YOU LOSE", 300, 300);

}

if (player.isTouching(obs2)) {
  player.x = 40;
  player.y = 500;
  text("YOU LOSE", 300, 300);
}

if (player.isTouching(obs3)) {
  player.x = 40;
  player.y = 500;
  text("YOU LOSE", 300, 300);
}

if (player.isTouching(obs4)) {
  player.x = 40;
  player.y = 500;
  text("YOU LOSE", 300, 300);
}

if (player.isTouching(obs5)) {
  player.x = 40;
  player.y = 500;
  text("YOU LOSE", 300, 300);
}

if (player.isTouching(obs6)) {
  player.x = 40;
  player.y = 500;
  text("YOU LOSE", 300, 300);
}

if(player.isTouching(snakeGroup)){
  player.x=40;
  player.y=500;
}

generateSnakes();
for(var i = 0 ; i< (snakeGroup).length ;i++){
  var temp = (snakeGroup).get(i) ;
  if(player.isTouching(temp)){
   score++;
   temp.destroy();
   temp=null;
  }
}
    
  
    


 drawSprites();
 textSize(20);
 text("WORMS DESTROYED:"+score,350,50);
}


function generateSnakes(){
  if(frameCount % 30===0){
    var snake = createSprite(600,random(70,520),random(30,120),5);
    snake.addImage(snakeImage);
    snake.scale=random(0.3,0.4);
    snake.shapeColor="yellow"
    snake.velocityX=-6;
   
    snakeGroup.add(snake);
    }
  }





