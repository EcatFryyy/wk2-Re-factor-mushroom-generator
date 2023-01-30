let posX,posY;
let amt;

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(118,125,118);
  noLoop();
}



function draw() {

  
  let nPosX = posX + random(-amt,amt);
  let nPosY = posY + random(-amt,amt);
  
  //mushroom stem
  strokeWeight(random(20));
  stroke(random(255),230,random(255),random(210));
  line(posX,posY,posX,posY+random(5,10));
  //mushroom cap
  fill(255,random(255),random(255),random(50,225));
  ellipse(posX,posY,random(2,15),random(2,10));
  
  

  posX = nPosX;
  posY = nPosY;
}


if (posX > width || posX< 0){
    posX = -posX
    
  }
  
  if (posY > height || posY< 0){
     posY = -posY;
  
  }


function mousePressed(){
  posX = mouseX;
  posY = mouseY;
  amt = random(70,300);
 loop();

}

// function keyPressed(){
//   save("img.png");
// }