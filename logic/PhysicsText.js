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
    p.translate(b.vertices[0].x, b.vertices[0].y);
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
let H=0;
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

let canvas;
let sizes = [5, 10, 20, 30, 40];

p.setup =function() {
  canvas = p.createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  //  Engine.run(engine);
  p.textSize(64);
  
   
 grounds.push(Bodies.rectangle(windowWidth/2,windowWidth/2 , windowWidth, 120, { isStatic: true }));
 grounds.push(Bodies.rectangle(0,height , 120, height, { isStatic: true }));
 grounds.push(Bodies.rectangle(width,height , 120, height, { isStatic: true }));

  World.add(world, grounds);
    for (let text of Skills)
      {
      boxes.push(Bodies.rectangle(width/2+getRandomArbitrary(-380,380), 80, p.textWidth(text), 64));
      World.add(world,boxes[boxes.length-1])
      console.log(boxes)
    } 
  let mouse = Mouse.create(canvas.elt);
  mouse.pixelRatio = p.pixelDensity() // for retina displays etc
  let options = {
    mouse: mouse
  }
  mConstraint = MouseConstraint.create(engine, options);
  World.add(world, mConstraint);
  Engine.run(engine);
  //p.background(0)
}

p.draw = function() {
  

  //p.background(0);
  squareColor = color(255, 255, 255);
  squareColor.setAlpha(millis()/15);

  p.fill(squareColor)
  p.strokeWeight(6);
 
  Engine.update(engine);
  
  
  for (let [i,box] of boxes.entries()) 
  {
    
    p.push();


    //SHg(box,p.textWidth(Skills[i]),32);
    p.translate(box.vertices[0].x, box.vertices[0].y+32);
    p.rotate(box.angle);
    //p.blendMode(DIFFERENCE);
    p.stroke('black')
    
    p.text(Skills[i],0,0);
    //p.blendMode(BLEND);
    

    p.pop()
  }
 
  
}
}
let myp5 = new p5(lkk);