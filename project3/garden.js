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

    if (f.size < f.targetSize) {
      f.size += f.growSpeed;
    } else {
      f.alpha -= 2; 
    }

    let c = color(f.color);
    c.setAlpha(f.alpha);
    fill(c);

    textSize(f.size);
    text(flowerSymbol, f.x, f.y);
  }

  flowers = flowers.filter(f => f.alpha > 0);
}

function mousePressed() {
  for (let i = 0; i < count; i++) {
    flowers.push({
  x: random(width),
  y: random(height),
  size: 0,
  targetSize: random(32, 64),
  growSpeed: random(0.5, 2),
  alpha: 255,
  hold: random(60, 180),
  color: random(palette)
});}

  count++;
}