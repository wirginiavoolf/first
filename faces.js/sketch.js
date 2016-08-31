var pupilY = 80;
var pupilX = 50

function setup() {
  createCanvas(500,500);
}

function draw() {
  
  //eyes
  ellipse(50,50,100,100);
  ellipse(150,50,100,100);
  
  //pupils
  ellipse(pupilX,pupilY,50,50);
  ellipse(pupilX + 100,pupilY,50,50);
  
  //nose
  rect(125,125,30,30);
  
  
//mouth
  rect(50,200,200,200, 0,20,50,20);
  
  //teeth
line(50,300, 250,300);
line(125,200, 125,400);
line(175,200, 175,400);
  
}