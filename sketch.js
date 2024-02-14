// Angry Birds with Matter.js
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/challenges/content/videos/challenges/138-angry-birds-with-matterjs
// https://youtu.be/TDQzoe9nslY

// Code from Challenge: https://editor.p5js.org/codingtrain/sketches/UOR4nIcNS



const { Engine, World, Bodies, Mouse, MouseConstraint, Constraint } = Matter;

let ground;
const boxes = [];
var line = [];
let bird;
let world, engine;
let mConstraint;
let slingshot;

let dotImg;
let boxImg;
let bkgImg;

function preload() {
  dotImg = loadImage('images/dot.png');
  boxImg = loadImage('images/equals.png');
  bkgImg = loadImage('images/skyBackground_p5_a.png');
}

function setup() {
  const canvas = createCanvas(1011, 600);
  canvas.parent('mycanvas');
  painoNappi();
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width / 2, height - 10, width, 20);


  for (let i = 0; i < 3; i++) {
    boxes[i] = new Box(250, 300 - i * 75, 84, 100);
  }
  bird = new Bird(100, 260, 50);
  slingshot = new SlingShot(100, 220, bird.rock);
  const mouse = Mouse.create(canvas.elt);
  const options = {
    mouse: mouse
  };

  // A fix for HiDPI displays
  mouse.pixelRatio = pixelDensity();
  mConstraint = MouseConstraint.create(engine, options);
  World.add(world, mConstraint);
}


function touchEnded() {
  console.log("touch");
  setTimeout(() => {
    slingshot.fly();
  }, 100);
  
}
function mouseReleased() {
  setTimeout(() => {
    slingshot.fly();
  }, 100);
}

// press start button creates starting situation identical with doubleclick above
function painoNappi() {
  var nappi = createButton('Start');
//  nappi.position(10,800);
  nappi.parent('tryckknapp');
  nappi.mouseClicked(restart);
}

function restart() {
  setTimeout(() => {
    const canvas = createCanvas(1011, 600);
    canvas.parent('mycanvas');
    engine = Engine.create();
    
    world = engine.world;
    ground = new Ground(width / 2, height - 10, width, 20);
    for (let i = 0; i < 3; i++) {
      boxes[i] = new Box(250, 300 - i * 75, 84, 100);
    }
    bird = new Bird(100, 260, 50);
    slingshot = new SlingShot(100, 220, bird.rock);
    const mouse = Mouse.create(canvas.elt);
    const options = {
      mouse: mouse
    };
  
    // A fix for HiDPI displays
    mouse.pixelRatio = pixelDensity();
    mConstraint = MouseConstraint.create(engine, options);
    World.add(world, mConstraint);
  }, 300);
}


function draw() {
  background(bkgImg);
  Matter.Engine.update(engine);
  ground.show();
  for (let box of boxes) {
    box.show();
  }
  slingshot.show();
  bird.show();

}

