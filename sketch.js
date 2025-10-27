let rotations = 0 

  

let wordSize = 100;
let x, y;
let xVel = 10;
let yVel = 7;
 let word = 'welcome!'
 
 let xLoc = [], yLoc = [];
let numSegments = 100;

let diameter =100;


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
  
  fill('red');
  text(word, x, y);

  x += xVel;
  y += yVel;
  
  let w = textWidth(word) ; 
  let h = wordSize ; 
  

  if (x > width - w / 2 || x < w / 2) xVel *= -1;
  if (y > height - h / 2 || y < h / 2) yVel *= -1;
  
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

}

function mousePressed(){
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

  




