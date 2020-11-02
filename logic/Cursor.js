//let PRAD=48;
let easing = 0.2;
let mx = 50;
let my = 50;
let d = 1;

let CUR = {RAD: 32};

function setup() 
{
  createCanvas(windowWidth, windowHeight);
  mouseX=windowWidth/2;
  mouseY=windowHeight/2;
  fill(49, 49, 49);
  stroke(211, 211, 211);
  strokeWeight(2);
  smooth();

  const event = new Event('START');
  window.dispatchEvent(event);
}
function windowResized()
{
    resizeCanvas(windowWidth,windowHeight)
}
function draw() {
    //clear();
    if (abs(mouseX - mx) > 0.1) {
      mx = mx + (mouseX - mx) * easing;
    }
    if (abs(mouseY - my) > 0.1) {
      my = my + (mouseY - my) * easing;
    }
    
    BG = color(0, 0, 0);
    BG.setAlpha(90);
    background(BG);
    
    angle = atan2(my - windowHeight/2, mx - windowWidth/2);

    document.documentElement.style.setProperty('--mox',mx+'px');
    document.documentElement.style.setProperty('--moy',my+'px');
    document.documentElement.style.setProperty('--par',angle+'rad')
    circle(mx,my,CUR.RAD)
}

function mouseMoved()
{
        HOVERED =document.querySelector('p[alt="HoverMe"]:hover');
        JustHover = document.querySelector('img[alt="Hover"]:hover') ||document.querySelector('div[alt="Hover"]:hover');
        JustHover2 = document.querySelector('p[alt="Hover"]:hover');

        HOVEREDIMG=document.querySelector('img:hover');

        if(HOVERED)
        {
            const rect = HOVERED.getBoundingClientRect();
            x=mx-(rect.left) ;
            y=my-(rect.top) ;            
            document.documentElement.style.setProperty('--itemx',x+'px');
            document.documentElement.style.setProperty('--itemy',y+'px');
            TweenLite.to(CUR, 0.5, {RAD:48*2});
            fill(255,255,255);      
        }
        else if(JustHover)
        {
            fill(255,255,255);
            TweenLite.to(CUR, 0.5, {RAD:48*2});
        }
      
        else if(JustHover2)
        {
          fill(255,255,255);
          TweenLite.to(CUR, 0.5, {RAD:48*2});
        }
        else
        {
            TweenLite.to(CUR, 0.5, {RAD:32});
            fill(49, 49, 49);
        }
}
