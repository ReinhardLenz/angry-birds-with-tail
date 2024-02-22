// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/challenges/content/videos/challenges/138-angry-birds-with-matterjs
// https://youtu.be/TDQzoe9nslY

// Code from Challenge: https://editor.p5js.org/codingtrain/sketches/UOR4nIcNS



const { Engine, World, Bodies, Mouse, MouseConstraint, Constraint } = Matter;

let ground;
let row_number;
let vertix=[];
const boxes = [];
var line = [];
var quad_coord= new Array();
let bird;
let world, engine;
let mConstraint;
let slingshot;

let dotImg;
let boxImg;
let bkgImg;
//tree branches and birds coordinates
quad_coord=[
  [{"x1":"444","y1":"335"},{"x2":"410","y2":"397"},{"x3":"511","y3":"397"},{"x4":"469","y4":"333"}],
  [{"x1":"429","y1":"284"},{"x2":"445","y2":"330"},{"x3":"463","y3":"328"},{"x4":"439","y4":"276"}],
  [{"x1":"403","y1":"271"},{"x2":"425","y2":"283"},{"x3":"439","y3":"275"},{"x4":"425","y4":"249"}],
  [{"x1":"369","y1":"291"},{"x2":"379","y2":"296"},{"x3":"403","y3":"275"},{"x4":"397","y4":"263"}],
  [{"x1":"386","y1":"227"},{"x2":"409","y2":"259"},{"x3":"420","y3":"249"},{"x4":"401","y4":"221"}],
  [{"x1":"423","y1":"210"},{"x2":"416","y2":"243"},{"x3":"426","y3":"244"},{"x4":"439","y4":"218"}],
  [{"x1":"324","y1":"299"},{"x2":"349","y2":"339"},{"x3":"381","y3":"300"},{"x4":"366","y4":"288"}],
  [{"x1":"290","y1":"244"},{"x2":"322","y2":"295"},{"x3":"360","y3":"254"},{"x4":"334","y4":"224"}],
  [{"x1":"364","y1":"170"},{"x2":"381","y2":"221"},{"x3":"400","y3":"213"},{"x4":"417","y4":"151"}],
  [{"x1":"260","y1":"306"},{"x2":"285","y2":"321"},{"x3":"326","y3":"315"},{"x4":"292","y4":"289"}],
  [{"x1":"211","y1":"278"},{"x2":"225","y2":"301"},{"x3":"256","y3":"305"},{"x4":"256","y4":"294"}],
  [{"x1":"236","y1":"226"},{"x2":"242","y2":"284"},{"x3":"256","y3":"287"},{"x4":"254","y4":"224"}],
  [{"x1":"395","y1":"133"},{"x2":"400","y2":"153"},{"x3":"415","y3":"147"},{"x4":"419","y4":"113"}],
  [{"x1":"447","y1":"197"},{"x2":"437","y2":"214"},{"x3":"510","y3":"233"},{"x4":"525","y4":"224"}],
  [{"x1":"476","y1":"205"},{"x2":"492","y2":"206"},{"x3":"507","y3":"185"},{"x4":"481","y4":"179"}],
  [{"x1":"300","y1":"150"},{"x2":"325","y2":"145"},{"x3":"323","y3":"110"},{"x4":"297","y4":"117"}],
  [{"x1":"487","y1":"114"},{"x2":"513","y2":"144"},{"x3":"527","y3":"119"},{"x4":"515","y4":"100"}],
];
row_number=17;

function preload() {
  dotImg = loadImage('images/dot.png');
  boxImg = loadImage('images/equals.png');
  bkgImg = loadImage('images/skyBackground_p5_a.png');
}

function setup() {
  //const canvas = createCanvas(1011, 600);
  const canvas = createCanvas(711, 400);
  canvas.parent('mycanvas');
  painoNappi();
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width / 2, height - 10, width, 20);
  

  for (let i = 0; i < row_number; i++) {
  vertix[i]= new Vertix(
                        parseInt(quad_coord[i][0]['x1']),
                        parseInt(quad_coord[i][0]['y1']),

                        parseInt(quad_coord[i][1]['x2']),
                        parseInt(quad_coord[i][1]['y2']),

                        parseInt(quad_coord[i][2]['x3']),
                        parseInt(quad_coord[i][2]['y3']),

                        parseInt(quad_coord[i][3]['x4']),
                        parseInt(quad_coord[i][3]['y4'])


    );
  }
  for (let i = 0; i < 3; i++) {
    boxes[i] = new Box(650, 300 - i * 75, 70, 70);
  }
  bird = new Bird(100, 260, 30);
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
    const canvas = createCanvas(711, 400);
    canvas.parent('mycanvas');
    engine = Engine.create();
    
    world = engine.world;
    ground = new Ground(width / 2, height - 10, width, 20);

    for (let i = 0; i < row_number; i++) {
      vertix[i]= new Vertix(
                            parseInt(quad_coord[i][0]['x1']),
                            parseInt(quad_coord[i][0]['y1']),
    
                            parseInt(quad_coord[i][1]['x2']),
                            parseInt(quad_coord[i][1]['y2']),
    
                            parseInt(quad_coord[i][2]['x3']),
                            parseInt(quad_coord[i][2]['y3']),
    
                            parseInt(quad_coord[i][3]['x4']),
                            parseInt(quad_coord[i][3]['y4'])
    
    
        );
      }

    for (let i = 0; i < 3; i++) {
      boxes[i] = new Box(650, 300 - i * 75, 70, 70);
    }
    bird = new Bird(100, 260, 30);
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
  //for (let i = 0; i < row_number; i++) {
  //vertix[i].show();
  //}
  for (let box of boxes) {
    box.show();
  }
  slingshot.show();
  bird.show();

}

