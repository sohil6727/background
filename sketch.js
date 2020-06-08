 
 var fixed,moving;



function setup(){

  createCanvas(1200,600);
 
  fixed = createSprite(600,400,50,80);
  fixed.shapeColor ="green";
  moving = createSprite(400,200,80,30);
  moving.shapeColor ="green";
}


function draw(){
 background("red")
 moving.x = world.mouseX;
 moving.y = world.mouseY;
   
 if(keyDown(space)){
   background.shapeColor = "yellow";
 }

  drawSprites();
}