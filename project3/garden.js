let flowers = [];
let flowerSymbol = "✿";

let palette = ["#a62467", "#c878cc", "#eee4ff"];
let count = 1; 

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
}

function draw() {
  background("#7084dd");

  for (let f of flowers) {
    fill(f.color);
    textSize(f.size);
    text(flowerSymbol, f.x, f.y);
  }
}

function mousePressed() {
  for (let i = 0; i < count; i++) {
    flowers.push({
      x: random(width),
      y: random(height),
      size: random(16, 64),
      color: random(palette)
    });
  }

  count++;
}