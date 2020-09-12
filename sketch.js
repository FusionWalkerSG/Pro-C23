function setup() {
  createCanvas(800,400);
}

function draw() {
  background(0);
  rect(260,180,240,320)
  rect(350,35,60,146)
  rect(180,155,50,250)
  triangle(350,35,410,35,380,8)
  triangle(180,155,230,155,200,130)
  rect(540,150,50,250)
  triangle(540,150,590,150,560,120)
  push()
  fill("red")
  text(mouseX+":"+ mouseY,mouseX,mouseY)
  pop()
}