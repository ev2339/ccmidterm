let rotations = 0 

  

let wordSize = 200;
let x, y;
let xVel = 10;
let yVel = 7;
 let word;
 
 let xLoc = [], yLoc = [];
let numSegments = 100;

let diameter =100;

let rectX, rectY, rectW, rectH;
let rect2X , rect2Y , rect2W , rect2H;
let rect3X , rect3Y, rect3W , rect3H ; 
let url = "https://ev2339.github.io/kittychasescircles/";
let music = "https://ev2339.github.io/rodentfriends/"
let spag = 'https://ev2339.github.io/rodentspaghetti/'

function preload(){
  word = loadImage('rat.png')
  word.resize(50 , 100)
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  fill(0);
  stroke(255);
  angleMode(DEGREES)
  
  for(let i = 0; i < numSegments; i++){
    xLoc[i] = 0; 
    yLoc[i] = 0; 
}
  
x = width / 2;
  y = height / 2;

  textAlign(CENTER, CENTER);
  textSize(wordSize);
  
  rectW = 300;
  rectH = 100;
  rectX = width - rectW - 1000;
  rectY = height / 2 - rectH / 2;
  
  
    textAlign(CENTER, CENTER);
  textSize(wordSize);
  rect2W = 300; 
  rect2H = 100; 
  rect2X = width - rectW - 1000;
  rect2Y = height / 3 - rectH / 3;
  
  textAlign(CENTER, CENTER);
  textSize(wordSize);
  rect3W = 300; 
  rect3H = 100; 
  rect3X = width - rectW - 1000;
  rect3Y = height / 6 - rectH / 6;
}

function draw() {
  background(0);

  push()
  translate( 450 , 0)
  firstDesign()
  pop()
  
  push()
  translate(20 , 0)
  secondDesign()
  pop()

  image(word, x, y);

  x += xVel;
  y += yVel;
  
  let w = word.width ; 
  let h = word.height ; 
  

if (x > width - w) {
  x = width - w;   
  xVel *= -1;
} else if (x < 0) {
  x = 0;
  xVel *= -1;
}

if (y > height - h) {
  y = height - h;
  yVel *= -1;
} else if (y < 0) {
  y = 0;
  yVel *= -1;
}
  
    xLoc[numSegments - 1] = mouseX;
  yLoc[numSegments - 1] = mouseY;
  
  
  for(let i = 0; i<numSegments; i++){
    xLoc[i] = xLoc[i+3]
    yLoc[i] = yLoc[i+3]
    
   
    if (i % 2 === 0) {
  fill(194, 255, 252)
} else {
  fill(194, 255, 252)
}
    let d = map(i, 0,numSegments, 0,PI)
    d = 0.3;
    
    let r = d*255;
    let b = 255-d*255;
    
    stroke(r, 0,b)
    ellipse(xLoc[i], yLoc[i], d*diameter)
  }
  
   fill(255, 171, 249);
  stroke(255);
  rect(rectX, rectY, rectW, rectH, 10);
  fill(255);
  noStroke();
  textSize(20);
  textAlign(CENTER, CENTER);
  text("KITTY CHASES CIRCLES", rectX + rectW / 2, rectY + rectH / 2);
  textFont('Times New Roman')
  
    fill(255, 171, 249);
  stroke(255);
  rect(rect2X, rect2Y, rect2W, rect2H, 10);
  fill(255);
  noStroke();
  textSize(20);
  textAlign(CENTER, CENTER);
  textFont('Times New Roman');
  text("RODENT FRIENDS", rect2X + rect2W / 2, rect2Y + rect2H / 2);
  
  fill(255, 171, 249);
  stroke(255);
  rect(rect3X, rect3Y, rect3W, rect3H, 10);
  fill(255);
  noStroke();
  textSize(20);
  textAlign(CENTER, CENTER);
  textFont('Times New Roman');
  text("RODENT SPAGHETTI", rect3X + rect3W / 2, rect3Y + rect3H / 2);
}


function mousePressed(){

  if (mouseX > rectX && mouseX < rectX + rectW &&
      mouseY > rectY && mouseY < rectY + rectH) {
    window.open(url, "_blank");

}
  
   if (mouseX > rect2X && mouseX < rect2X + rect2W &&
      mouseY > rect2Y && mouseY < rect2Y + rect2H) {
    window.open(music, "_blank");

}
  
   if (mouseX > rect3X && mouseX < rect3X + rect3W &&
      mouseY > rect3Y && mouseY < rect3Y + rect3H) {
    window.open(spag, "_blank");

}
  
  print(xLoc)
}


function firstDesign(){

  translate(width/2, height/2)
  rotate(rotations)
  fill (224, 255, 254)
  ellipse( 0 , 0 , 500)
  stroke(0)


 
  
  fill(255)
  ellipse ( 0 , 0 , 400)

  fill ( 255, 240, 166)
  ellipse (0 , 0 , 300)
  


  fill(255, 232, 130)
  ellipse(0,0,100)
  
  let Ellipses = 9

  
for( let i = 0 ; i < Ellipses ; i++){
  push();
  
  let angle = i * (360 / Ellipses) + rotations ; 
  
  rotate(angle)
  translate( 80 , 250);
  
  fill(255, 232, 130);
    ellipse(0, 0 , 60);
   rotate(angle)

  
  pop();

  
 }
  
      
for( let i = 0 ; i < Ellipses ; i++){
  push();
  
  let angle = i * (360 / Ellipses) + rotations ; 
  
  rotate(angle)
  translate( 100 , 400);
  
  fill(204, 255, 253);
    ellipse(0, 0 , 80);

   rotate(angle)
  

  
  pop();

  
 }
  
for( let i = 0 ; i < Ellipses ; i++){
  push();
  
  let angle = i * (360 / Ellipses) + rotations ; 
  
  rotate(angle)
  translate( 80 , 100);
  
  fill(252, 245, 210);
    ellipse(0, 0 , 70);
  
  pop();
    
 }
  
  for( let i = 0 ; i < Ellipses ; i++){
  push();
  
  let angle = i * (360 / Ellipses) + rotations ; 
  
  rotate(angle)
  translate( 350 , 100);
  
  fill(252, 245, 210);
    ellipse(0, 0 , 70);
    
  pop();
    
 }
  
  //print(rotations)
  rotations+=1;

  
  
}


function secondDesign(){
 
 

  translate(width/2, height/2)
  rotate(rotations)
  fill (224, 255, 254)
  ellipse( 0 , 0 , 50)
  stroke(0)


 
  
  fill(255)
  ellipse ( 0 , 0 , 50)

  
  


  fill(255, 232, 130)
  ellipse(0,0,75)
  
  let Ellipses = 9

  
for( let i = 0 ; i < Ellipses ; i++){
  push();
  
  let angle = i * (360 / Ellipses) + rotations ; 
  
  rotate(angle)
  translate( 80 , 250);
  
  fill(255, 232, 130);
    ellipse(0, 0 , 30);
   rotate(angle)

  
  pop();

  
 }
  
      
for( let i = 0 ; i < Ellipses ; i++){
  push();
  
  let angle = i * (360 / Ellipses) + rotations ; 
  
  rotate(angle)
  translate( 80 , 200);
  
  fill(204, 255, 253);
    ellipse(0, 0 , 50);

   rotate(angle)
  

  
  pop();

  
 }
  
for( let i = 0 ; i < Ellipses ; i++){
  push();
  
  let angle = i * (360 / Ellipses) + rotations ; 
  
  rotate(angle)
  translate( 80 , 50);
  
  fill(252, 245, 210);
    ellipse(0, 0 , 40);
  
  pop();
    
 }
  
  for( let i = 0 ; i < Ellipses ; i++){
  push();
  
  let angle = i * (360 / Ellipses) + rotations ; 
  
  rotate(angle)
  translate( 80 , 150);
  
  fill(252, 245, 210);
    ellipse(0, 0 , 40);
    
  pop();
    
 }
  //print(rotations)
  //rotations+=1;


}
