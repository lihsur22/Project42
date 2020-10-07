var h, mn, sec;
var sAngle, hAngle, mAngle;
var hHand, mHand, sHand;

function setup() {
  createCanvas(800,800);

  sHand = new Sec();
  mHand = new Min();
  hHand = new Hr();
}

function draw() {
  background(0);
  angleMode(DEGREES);
  h = hour();
  mn = minute();
  sec = second();

  sAngle = map(sec, 0, 60, 0, 360);
  mAngle = map(mn, 0, 60, 0, 360);
  hAngle = map(h % 12, 0, 12, 0, 360);

  stroke("black");
  fill(200)
  ellipse(400,400,400)
  noFill();
  strokeWeight(8);
  stroke("#D70071");
  arc(400, 400, 472, 472, 270, sAngle - 90);
  stroke("#9C4E97");
  arc(400, 400, 456, 456, 270, mAngle - 90);
  stroke("#0035AA");
  arc(400, 400, 440, 440, 270, hAngle - 90);

  sHand.display();
  mHand.display();
  hHand.display();

  strokeWeight(1);
  textSize(30);
  textAlign(CENTER);
  stroke("#9C4E97");
  text(mn, 400, 550);
  stroke("#D70071");
  text(sec, 463, 550);
  stroke("#0035AA");
  text(h, 337, 550);
}