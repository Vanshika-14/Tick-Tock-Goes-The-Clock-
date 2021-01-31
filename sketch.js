
function setup(){

  createCanvas(700, 600);

  angleMode(DEGREES);

}


function draw() {

  background("Black");

  fill(255);
  textSize(30);
  textFont("Times New Roman");
  textStyle("Bold");
  text("Don't Know The Time? Check It Now!", 100, 500); 

  textSize(24)
  fill("LightGreen")
  textFont("Times New Roman");
  textStyle("Bold");
  text("Hours", 400, 200)

  textSize(24)
  fill("Red")
  textFont("Times New Roman");
  textStyle("Bold");
  text("Minutes", 400, 250)

  textSize(24)
  fill("LightBlue")
  textFont("Times New Roman");
  textStyle("Bold");
  text("Seconds", 400, 300)
  

  translate(200, 200)
  rotate(-90);

  hr = hour();
  mn = minute();
  sc = second();
  
  strokeWeight(7);

  stroke("LightBlue")
  noFill();
  end = map(sc, 0, 60, 0, 360);
  arc(0, 0, 300, 300, 0, end);
  
  stroke("Red");
  end2 = map(mn, 0, 60, 0, 360);
  arc(0, 0, 280, 280, 0, end2);
  
  stroke("Green");
  end3 = map(hr%12, 0, 12, -0, 360);
  arc(0, 0, 260, 260, 0, end3);


  push();
  rotate(end);
  stroke("LightBlue");
  line(0, 0, 100, 0);
  pop();

  push();
  rotate(end2);
  stroke("Red");
  line(0, 0, 75, 0);
  pop();

  push();
  rotate(end3);
  stroke("Green");
  line(0, 0, 50, 0);
  pop();

  stroke("Black");
  point (0, 0);

  }