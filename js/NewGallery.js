var Container = document.createElement("div");
Container.id="GalleryV2";
Container.setAttribute("data-50","opacity:0.5");
Container.style.clipPath="circle(0% at var(--mousex) var(--mousey))";

var Hero = new Image();
Hero.id="Hero";
Hero.onmouseout = HideImg;


header = document.createElement('div');
header.innerHTML ="Scroll Down⤓";
header.id="HDR";


Container.appendChild(header);
body.appendChild(Hero);

body.appendChild(Container);



function HideImg(e)
{
    body.style.setProperty('--op',1);
    body.style.setProperty('--displayimg',0);
    body.style.setProperty('--disp','2');

}
function ShowImg(e)
{
    if(window.getComputedStyle(this).getPropertyValue("opacity")!=0)
    {
        H=this.naturalHeight;
        Ratio = Hero.height / H ;
        W=this.naturalWidth * Ratio;
        body.style.setProperty('--actw',W+'px');
        body.style.setProperty('--op',0);
        body.style.setProperty('--disp',0);

        body.style.setProperty('--displayimg',1);
        Hero.src=this.src;
    }
}

function Display()
{
    Container.style.animationFillMode="forwards";
    Container.style.animationName="WORK";
    Container.style.animationDuration="2s";
    Container.style.animationIterationCount=1;
    Container.style.display="flex";
}
Container.onscroll=scroll;


IN=1;

previd =1;
function scroll(e)
{
    //e.preventDefault();
    max=e.target.scrollHeight;
    
    current= e.target.scrollTop;
    body.style.setProperty('--scrollY',`${current}px`)
    if(current==max-e.target.offsetHeight)
    {
        header.innerHTML="GoBack⤒";
    }
    else
    {
        header.innerHTML="More⤓";
 
    }
    
}

Number.prototype.map = function (in_min, in_max, out_min, out_max) {
    return (this - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
  }
function trueFloor(x)
{
    x = x * 100;
    if(x > .0000000000000006)
        x = x - .0000000000000006;
    x = Math.floor(x/100);
    return x;
}