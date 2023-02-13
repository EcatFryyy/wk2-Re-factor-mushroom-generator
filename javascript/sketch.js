let canvas;
let button;
let slider;

let displayState = 0;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight, WEBGL);
  canvas.parent("sketch-container"); //move our canvas inside this HTML element

  createEasyCam();

  addGUI();
}

function draw() {
  background(200,200,250);
 

  noStroke();
  lights();
  ambientLight(100,1);
  ambientMaterial(slider.value(), 180, 80);
  // pointLight(250, 250, 250, locX, locY, 50);
  smooth();
  

  if(displayState == 0){
    let d1= dist(width/2,height/2, mouseX,mouseY);
    let speed1= map(d1,0, sqrt((width/2)*(width/2)+(height/2)*(height/2)), 0,0.1)
    rotateZ(frameCount * speed1);
    rotateX(frameCount * speed1);
    rotateY(frameCount * speed1);
    torus(width/10, width/48);
  }else{
    //box(70);
    push();
    let d2= dist(width/20,width/4, mouseX,mouseY);
    let speed2= map(d2,0, sqrt((width/2)*(width/2)+(height/2)*(height/2)), 0,0.1)
    rotateZ(frameCount * speed2);
    translate(0,0);
    rotateX(frameCount * speed2);
    rotateY(frameCount * speed2);
    cone(width/20,width/4);
    pop();

  }

}

function addGUI()
{
  //add a slider
  slider = createSlider(0, 255, 100);
  slider.addClass("slider");
  //Add the slider to the parent gui HTML element
  slider.parent("gui-container");

  //add a button
  if(displayState == 0)
  {
      button = createButton("Change to Cone");
  }else if(displayState == 1){
      button = createButton("Change to Circle");
  }

  button.addClass("button");

  //Add the play button to the parent gui HTML element
  button.parent("gui-container");
  
  //Adding a mouse pressed event listener to the button 
  button.mousePressed(handleButtonPress); 

}

function handleButtonPress()
{
    
  if(displayState < 1)
  {
    displayState++;
  }else{
    displayState = 0;
  }

  if(displayState == 0)
  {
      button.html("Change Cone");
  }else if(displayState == 1){
      button.html("Change to Torus");
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}