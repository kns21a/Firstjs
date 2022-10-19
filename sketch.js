let w = 1000;
let h = 1000;

function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  background(255);
  stroke(125, 50, 100, 100)
  strokeWeight(60)
  fill(50, 150, 150, [20])
  rect(frameCount*3, 75, 250, 250)
  
  stroke(255, 100, 5, 100)
  strokeWeight(100)
  fill(200, 30, 150, [75])
  rect(frameCount*6, 275, 600, 600)
  
  stroke(4, 255, 10, 100)
  strokeWeight(30)
  fill(100, 75, 30, [100])
  rect(frameCount*2.5, 475, 200, 200)
  
  stroke(1, 100, 255, 100)
  strokeWeight(100)
  fill(5, 255, 150, [20])
  rect(frameCount*4.5, 675, 400, 400)
  
  stroke(255, 1, 0, 100)
  strokeWeight(40)
  fill(230, 150, 20, [80])
  rect(frameCount*3.5, 875, 60, 60)
}
