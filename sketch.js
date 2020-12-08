var frect, mrect

function setup() {
  createCanvas(800,400);
  frect= createSprite(200, 200, 50, 80);
  mrect= createSprite(400, 200, 50, 30);
  frect.shapeColor="turquoise"
  mrect.shapeColor="turquoise"
}

function draw() {
  background(0);  
  mrect.x = mouseX
  mrect.y = mouseY
  if(mrect.x-frect.x<frect.width/2+mrect.width/2 && 
    frect.x-mrect.x<frect.width/2+mrect.width/2 && 
    frect.y-mrect.y<frect.height/2+mrect.height/2 &&
    mrect.y-frect.y<frect.height/2+mrect.height/2){
    frect.shapeColor="magenta"
    mrect.shapeColor="magenta"
  }
  else{
    frect.shapeColor="turquoise"
    mrect.shapeColor="turquoise" 
  }

  
  drawSprites();
}