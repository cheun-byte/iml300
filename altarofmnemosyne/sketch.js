function setup() {
    const canvas = createCanvas(400, 160);
  canvas.parent("sketch-holder");
  frameRate(2);
}


function draw() {
  clear();

  noStroke();
  fill(227, 214, 197);

  rect(50, 50, 35, random(25, 80));
  rect(115, 50, 35, random(50, 105));
  rect(181, 50, 35, random(25, 80));
  rect(247, 50, 35, random(50, 105));
  rect(313, 50, 35, random(25, 80));
}