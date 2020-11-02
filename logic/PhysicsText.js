
let lkk = function(p)
{
var Engine = Matter.Engine,
  //    Render = Matter.Render,
  World = Matter.World,
  MouseConstraint = Matter.MouseConstraint,
  Mouse = Matter.Mouse,
  Bodies = Matter.Bodies;

  function SHg(b,w,h)
{
  let pos = b.position;
    let angle = b.angle;

    p.push();
    //p.translate(b.vertices[0].x, b.vertices[0].y);
    p.rotate(angle);
    p.strokeWeight(1);
    p.stroke(255);
    p.fill(127);
    p.rect(0, 0, w, h);
    p.pop();
}

let Skills = ["AutoCad","Rhino","Grasshopper","Revit",'Enscape','Sketchup','Python','Vray','Photoshop','Illustrator','CSS','JS','C#','3DSMAX','Blender'];
let engine;
let world;
let boxes = [];
let circles = [];
let grounds=[];
let mConstraint;
let myFont;
let H=0;
let startT = 0;
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

let canvas;
let sizes = [5, 10, 20, 30, 40];
p.preload=function()
{
  myFont = p.loadFont('./css/fonts/Circe-ExtraBold.ttf');
}
p.setup =function() {
  canvas = p.createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  p.textSize(82);

  
 
 grounds.push(Bodies.rectangle(windowWidth/2,windowWidth/2 , windowWidth, 120, { isStatic: true }));
 grounds.push(Bodies.rectangle(0,height , 120, height, { isStatic: true }));
 grounds.push(Bodies.rectangle(width,height , 120, height, { isStatic: true }));

  World.add(world, grounds);
    
  let mouse = Mouse.create(canvas.elt);
  
  mouse.pixelRatio = p.pixelDensity() // for retina displays etc
  let options = {
    mouse: mouse,
    stifness:0.01
  }
  mConstraint = MouseConstraint.create(engine, options);
  World.add(world, mConstraint);
  Engine.run(engine);
  p.textFont(myFont);
 
  for (let text of Skills)
      {
      let bbox = myFont.textBounds(text.toUpperCase(), 0, 0, 82);
      boxes.push(Bodies.rectangle(width/2+getRandomArbitrary(-380,380), 80, bbox.w, bbox.h));
      World.add(world,boxes[boxes.length-1])
    } 

  //p.background(0)
}

p.draw = function() {
  
  squareColor = color(0, 0, 0);
  squareColor.setAlpha(78);
  p.background(squareColor);
  p.fill('white')
  p.strokeWeight(6);
 
  Engine.update(engine);
  
  
  for (let [i,box] of boxes.entries()) 
  {
    
    p.push();

    

    p.translate(box.vertices[0].x, box.vertices[3].y);
    let bbox = myFont.textBounds(Skills[i].toUpperCase(), 0, 0, 82);

    //SHg(box,bbox.w,bbox.h);

    p.rotate(box.angle);
    p.blendMode(EXCLUSION);
    
    p.text(Skills[i].toUpperCase(),0,0);
    //p.blendMode(BLEND);
    

    p.pop()
  }
 startT = p.millis();
}
}

function StartSkills()
{

  myp5 = new p5(lkk,"SKILLS");
}
//let myp5 = new p5(lkk);