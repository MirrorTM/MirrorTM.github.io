//let PRAD=48;
let easing=0.2;
let mx = 50;
let my = 50;
let d=1;

function Dist(x1,y1,x2,y2)
{
    var a = x1 - x2;
    var b = y1 - y2;

   return Math.sqrt( a*a + b*b );
}
var CUR = {RAD:48};

function setup() 
{
  createCanvas(body.offsetWidth, body.offsetHeight);
  fill(49, 49, 49);
  stroke(211, 211, 211);
  strokeWeight(2);
  //PreloadBg();
  LoadBackground();
 
}

function draw() {
   clear();
  if (abs(mouseX - mx) > 0.1) {
    mx = mx + (mouseX - mx) * easing;
  }
  if (abs(mouseY - my) > 0.1) {
    my = my + (mouseY - my) * easing;
  }
  background(225,225,225,0);
  body.style.setProperty('--mox',mx+'px');
  body.style.setProperty('--moy',my+'px');
  circle(mx,my,CUR.RAD)
}
function mouseMoved()
{
//   PRAD-=1.5;
//   setTimeout(function(){PRAD+=1.5},100);

        

        HOVERED =document.querySelector('p[alt="HoverMe"]:hover');
        JustHover = document.querySelector('p[alt="Hover"]:hover');
        HOVEREDIMG=document.querySelector('img:hover');

        if(HOVERED)
        {
            const rect = HOVERED.getBoundingClientRect();
            x=mx-(rect.left) ;
            y=my-(rect.top) ;            
            body.style.setProperty('--itemx',x+'px');
            body.style.setProperty('--itemy',y+'px');

            TweenLite.to(CUR, 0.5, {RAD:48*0.6});
            //pointer.style.setProperty('--hovering','hov 0.7s 1');
            fill(255,255,255);
            //ring.style.backgroundColor="white";
            
            HOVERED.onmouseleave=function(){this.style.transform=""};
            //HOVERED.style.transform=`translate(-50%,-50%) translate(${x}px, ${y}px) `;

        }
        else if(JustHover)
        {
            fill(255,255,255);
            TweenLite.to(CUR, 0.5, {RAD:48*2});
        }
        else
        {
            TweenLite.to(CUR, 0.5, {RAD:48});
            PRAD=48;
            fill(49, 49, 49);
            //stroke(211, 211, 211);
            //strokeWeight(2);
        }
     

}
