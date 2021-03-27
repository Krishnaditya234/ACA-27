
var player;
var target;
var edges;

function setup() {
createCanvas(800,600);

edges=createEdgeSprites();
player = createSprite(50,550,20,20); 
target = createSprite(700,50,30,30);
obs1 = createSprite(100,150,100,20);
obs1.velocityX = 10;
obs2 = createSprite(300,150,100,20);
obs2.velocityX = -10;
obs3 = createSprite(500,150,100,20);
obs3.velocityX = 10;
obs4 = createSprite(700,150,100,20);
obs4.velocityX = -10;
obs5 = createSprite(100,300,100,20);
obs5.velocityX = 10;
obs6 = createSprite(300,300,100,20);
obs6.velocityX = -10;
obs7 = createSprite(500,300,100,20);
obs7.velocityX = -10;
obs8 = createSprite(700,300,100,20);
obs8.velocityX = 10;
obs9 = createSprite(100,450,100,20);
obs9.velocityX = -10;
obs10 = createSprite(300,450,100,20);
obs10.velocityX = 10;
obs11 = createSprite(500,450,100,20);
obs11.velocityX = -10;
obs12 = createSprite(700,450,100,20);
obs12.velocityX = 10;
target.shapeColor = "pink"
obs2.shapeColor = "red"
obs1.shapeColor = "red"
obs3.shapeColor = "red"
obs4.shapeColor = "red"
obs5.shapeColor = "red"
obs6.shapeColor = "red"
obs7.shapeColor = "red"
obs8.shapeColor = "red"
obs9.shapeColor = "red"
obs10.shapeColor = "red"
obs11.shapeColor = "red"
obs12.shapeColor = "red"
player.shapeColor = "white"
}

function draw() {
background("green");  
text("Press Space to restart");
text("Press Shift to Pause");
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
obs7.bounceOff(edges[1]);
obs7.bounceOff(edges[0]);
obs8.bounceOff(edges[1]);
obs8.bounceOff(edges[0]);
obs9.bounceOff(edges[1]);
obs9.bounceOff(edges[0]);
obs10.bounceOff(edges[1]);
obs10.bounceOff(edges[0]);
obs11.bounceOff(edges[1]);
obs11.bounceOff(edges[0]);
obs12.bounceOff(edges[1]);
obs12.bounceOff(edges[0]);
if(keyDown("w")){
  player.y=player.y-20;
}
if(keyDown("s")){
  player.y=player.y+20;
}
if(keyDown("a")){
  player.x=player.x-20;
}
if(keyDown("d")){
  player.x=player.x+20;
}
if(keyDown("up")){
  player.y=player.y-20;
}
if(keyDown("down")){
  player.y=player.y+20;
}
if(keyDown("left")){
  player.x=player.x-20;
}
if(keyDown("right")){
  player.x=player.x+20;
}
if(keyDown("space")){
  obs1.velocityX=-20;
  obs2.velocityX=-20;
  obs3.velocityX=-20;
  obs4.velocityX=+20;
  obs5.velocityX=+20;
  obs6.velocityX=+20;
  obs7.velocityX=+20;
  obs8.velocityX=-20;
  obs9.velocityX=-20;
  obs10.velocityX=-20;
  obs11.velocityX=-20;
  obs12.velocityX=+20;
  player.x=30;
  player.y=550;
  obs1.x=50;
  obs2.x=275;
  obs3.x=500;
  obs4.x=750;
  obs5.x=50;
  obs6.x=275;
  obs7.x=500;
  obs8.x=750;
  obs9.x=50;
  obs10.x=275;
  obs11.x=500;
  obs12.x=750;
  obs1.y=150;
  obs2.y=150;
  obs3.y=150;
  obs4.y=150;
  obs5.y=300;
  obs6.y=300;
  obs7.y=300;
  obs8.y=300;
  obs9.y=450;
  obs10.y=450;
  obs11.y=450;
  obs12.y=450;
  
}

if(keyDown("shift")){
  obs1.velocityX=0;
  obs2.velocityX=0;
  obs3.velocityX=0;
  obs4.velocityX=0;
  obs5.velocityX=0;
  obs6.velocityX=0;
  obs7.velocityX=0;
  obs8.velocityX=0;
  obs9.velocityX=0;
  obs10.velocityX=0;
  obs11.velocityX=0;
  obs12.velocityX=0;
  player.x=30;
  player.y=550;
  obs1.x=50;
  obs2.x=275;
  obs3.x=500;
  obs4.x=750;
  obs5.x=50;
  obs6.x=275;
  obs7.x=500;
  obs8.x=750;
  obs9.x=50;
  obs10.x=275;
  obs11.x=500;
  obs12.x=750;
  obs1.y=150;
  obs2.y=150;
  obs3.y=150;
  obs4.y=150;
  obs5.y=300;
  obs6.y=300;
  obs7.y=300;
  obs8.y=300;
  obs9.y=450;
  obs10.y=450;
  obs11.y=450;
  obs12.y=450;
}

if(player.isTouching(obs1)){
  obs1.velocityX=0;
  obs2.velocityX=0;
  obs3.velocityX=0;
  obs4.velocityX=0;
  obs5.velocityX=0;
  obs6.velocityX=0;
  obs7.velocityX=0;
  obs8.velocityX=0;
  obs9.velocityX=0;
  obs10.velocityX=0;
  obs11.velocityX=0;
  obs12.velocityX=0;
  player.velocityX=0;
  player.velocityY=0;
  text("YOU LOSE",430,20);
}
if(player.isTouching(obs2)){
  obs1.velocityX=0;
  obs2.velocityX=0;
  obs3.velocityX=0;
  obs4.velocityX=0;
  obs5.velocityX=0;
  obs6.velocityX=0;
  obs7.velocityX=0;
  obs8.velocityX=0;
  obs9.velocityX=0;
  obs10.velocityX=0;
  obs11.velocityX=0;
  obs12.velocityX=0;
  player.velocityX=0;
  player.velocityY=0;
  text("YOU LOSE",430,20);
}
if(player.isTouching(obs3)){
  obs1.velocityX=0;
  obs2.velocityX=0;
  obs3.velocityX=0;
  obs4.velocityX=0;
  obs5.velocityX=0;
  obs6.velocityX=0;
  obs7.velocityX=0;
  obs8.velocityX=0;
  obs9.velocityX=0;
  obs10.velocityX=0;
  obs11.velocityX=0;
  obs12.velocityX=0;
  player.velocityX=0;
  player.velocityY=0;
  text("YOU LOSE",430,20);
}
if(player.isTouching(obs4)){
  obs1.velocityX=0;
  obs2.velocityX=0;
  obs3.velocityX=0;
  obs4.velocityX=0;
  obs5.velocityX=0;
  obs6.velocityX=0;
  obs7.velocityX=0;
  obs8.velocityX=0;
  obs9.velocityX=0;
  obs10.velocityX=0;
  obs11.velocityX=0;
  obs12.velocityX=0;
  player.velocityX=0;
  player.velocityY=0;
  text("YOU LOSE",430,20);
}
if(player.isTouching(obs5)){
  obs1.velocityX=0;
  obs2.velocityX=0;
  obs3.velocityX=0;
  obs4.velocityX=0;
  obs5.velocityX=0;
  obs6.velocityX=0;
  obs7.velocityX=0;
  obs8.velocityX=0;
  obs9.velocityX=0;
  obs10.velocityX=0;
  obs11.velocityX=0;
  obs12.velocityX=0;
  player.velocityX=0;
  player.velocityY=0;
  text("YOU LOSE",430,20);
}
if(player.isTouching(obs6)){
  obs1.velocityX=0;
  obs2.velocityX=0;
  obs3.velocityX=0;
  obs4.velocityX=0;
  obs5.velocityX=0;
  obs6.velocityX=0;
  obs7.velocityX=0;
  obs8.velocityX=0;
  obs9.velocityX=0;
  obs10.velocityX=0;
  obs11.velocityX=0;
  obs12.velocityX=0;
  player.velocityX=0;
  player.velocityY=0;
  text("YOU LOSE",430,20);
}
if(player.isTouching(obs7)){
  obs1.velocityX=0;
  obs2.velocityX=0;
  obs3.velocityX=0;
  obs4.velocityX=0;
  obs5.velocityX=0;
  obs6.velocityX=0;
  obs7.velocityX=0;
  obs8.velocityX=0;
  obs9.velocityX=0;
  obs10.velocityX=0;
  obs11.velocityX=0;
  obs12.velocityX=0;
  player.velocityX=0;
  player.velocityY=0;
  text("YOU LOSE",430,20);
}
if(player.isTouching(obs8)){
  obs1.velocityX=0;
  obs2.velocityX=0;
  obs3.velocityX=0;
  obs4.velocityX=0;
  obs5.velocityX=0;
  obs6.velocityX=0;
  obs7.velocityX=0;
  obs8.velocityX=0;
  obs9.velocityX=0;
  obs10.velocityX=0;
  obs11.velocityX=0;
  obs12.velocityX=0;
  player.velocityX=0;
  player.velocityY=0;
  text("YOU LOSE",430,20);
}
if(player.isTouching(obs9)){
  obs1.velocityX=0;
  obs2.velocityX=0;
  obs3.velocityX=0;
  obs4.velocityX=0;
  obs5.velocityX=0;
  obs6.velocityX=0;
  obs7.velocityX=0;
  obs8.velocityX=0;
  obs9.velocityX=0;
  obs10.velocityX=0;
  obs11.velocityX=0;
  obs12.velocityX=0;
  player.velocityX=0;
  player.velocityY=0;
  text("YOU LOSE",430,20);
}
if(player.isTouching(obs10)){
obs1.velocityX=0;
obs2.velocityX=0;
obs3.velocityX=0;
obs4.velocityX=0;
obs5.velocityX=0;
obs6.velocityX=0;
obs7.velocityX=0;
obs8.velocityX=0;
obs9.velocityX=0;
obs10.velocityX=0;
obs11.velocityX=0;
obs12.velocityX=0;
  player.velocityX=0;
  player.velocityY=0;
  text("YOU LOSE",430,20);
}
if(player.isTouching(obs11)){
  obs1.velocityX=0;
  obs2.velocityX=0;
  obs3.velocityX=0;
  obs4.velocityX=0;
  obs5.velocityX=0;
  obs6.velocityX=0;
  obs7.velocityX=0;
  obs8.velocityX=0;
  obs9.velocityX=0;
  obs10.velocityX=0;
  obs11.velocityX=0;
  obs12.velocityX=0;
  player.velocityX=0;
  player.velocityY=0;
  text("YOU LOSE",430,20);
}
if(player.isTouching(obs12)){
  obs1.velocityX=0;
  obs2.velocityX=0;
  obs3.velocityX=0;
  obs4.velocityX=0;
  obs5.velocityX=0;
  obs6.velocityX=0;
  obs7.velocityX=0;
  obs8.velocityX=0;
  obs9.velocityX=0;
  obs10.velocityX=0;
  obs11.velocityX=0;
  obs12.velocityX=0;
  player.velocityX=0;
  player.velocityY=0;
  text("YOU LOSE",430,20);
}
if(player.isTouching(target)){
  obs1.velocityX=0;
  obs2.velocityX=0;
  obs3.velocityX=0;
  obs4.velocityX=0;
  obs5.velocityX=0;
  obs6.velocityX=0;
  obs7.velocityX=0;
  obs8.velocityX=0;
  obs9.velocityX=0;
  obs10.velocityX=0;
  obs11.velocityX=0;
  obs12.velocityX=0;
  player.x=30;
  player.y=550;
  obs1.x=50;
  obs2.x=275;
  obs3.x=500;
  obs4.x=750;
  obs5.x=50;
  obs6.x=275;
  obs7.x=500;
  obs8.x=750;
  obs9.x=50;
  obs10.x=275;
  obs11.x=500;
  obs12.x=750;
  obs1.y=150;
  obs2.y=150;
  obs3.y=150;
  obs4.y=150;
  obs5.y=300;
  obs6.y=300;
  obs7.y=300;
  obs8.y=300;
  obs9.y=450;
  obs10.y=450;
  obs11.y=450;
  obs12.y=450;
  text("YOU WON",450,20);
}
  drawSprites();
}

