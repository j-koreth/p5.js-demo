let rad = 15; // Width of the shape
let xpos, ypos; // Starting position of shape

let xspeed = 6; // Speed of the shape
let yspeed = 6; // Speed of the shape

let xdirection = 1; // Left or Right
let ydirection = 1; // Top to Bottom

let balls = [];
class Ellipse {
  constructor(xpos, ypos, xspeed, yspeed, xdirection, ydirection, colorR, colorG, colorB) {
    this.xpos = xpos;
    this.ypos = ypos;
    this.xspeed = xspeed;
    this.yspeed = yspeed;
    this.xdirection = xdirection;
    this.ydirection = ydirection;
    this.colorR = colorR;
    this.colorG = colorG;
    this.colorB = colorB;
    this.counter = 0;
  }
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  noStroke();
  ellipseMode(RADIUS);

  // Set the starting position of the shape
  balls.push(new Ellipse(width / 2, width / 2, 5, 5, 1, 1, 203, 27, 69));
}

function draw() {

  for (const ball of balls) {
    if (ball.counter % 10 == 0) {
      ball.colorR = (ball.colorR + 5) % 255;
      ball.colorG = (ball.colorG) % 255;
      ball.colorB = (ball.colorB) % 255;
    }

    ball.counter = ball.counter + 1;

    // Update the position of the shape

    ball.xpos = ball.xpos + ball.xspeed * ball.xdirection;
    ball.ypos = ball.ypos + ball.yspeed * ball.ydirection;

    // Test to see if the shape exceeds the boundaries of the screen
    // If it does, reverse its direction by multiplying by -1
    if (ball.xpos > width - rad || ball.xpos < rad) {
      ball.xdirection *= -1;
    }
    if (ball.ypos > height - rad || ball.ypos < rad) {
      ball.ydirection *= -1;
    }

    ellipse(ball.xpos, ball.ypos, rad);
    fill(ball.colorR, ball.colorG, ball.colorB);

  }


}

function mouseReleased() {
  balls.push(new Ellipse(mouseX, mouseY, 5, 5, 1, 1, Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255)));
}