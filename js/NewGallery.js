var Container = document.createElement("div");
Container.id="GalleryV2";
Container.setAttribute("data-50","opacity:0.5");
Container.style.clipPath="circle(0% at var(--mousex) var(--mousey))";



header = document.createElement('div');
header.innerHTML ="Scroll Down⤓";
header.id="HDR";


Container.appendChild(header);

body.appendChild(Container);

WorksBtn = document.querySelector("#Wb");
WorksBtn.onclick=Display;


function Display()
{
    Container.style.animationFillMode="forwards";
    Container.style.animationName="WORK";
    Container.style.animationDuration="2s";
    Container.style.animationIterationCount=1;
    Container.style.display="flex";
    Container.children[1].style.opacity=1;
}
Container.onscroll=scroll;



previd =1;

function scroll(e)
{
    max = e.target.scrollHeight - e.target.offsetHeight;
    current = e.target.scrollTop;
    children  = Container.children;
    INDE = current.map(0,max,1,children.length);
    //percent = current/max;
   // ind = percent * (children.length*1000);
    console.log(INDE);
    if(parseInt(INDE)!=previd)
    {
        children[parseInt(INDE)].style.opacity=1;
        children[previd].style.opacity=0.2;

        previd = parseInt(INDE);
    }
    N=current*100/max;
    body.style.setProperty('--scrollY',`${current-700}px`)
    if(current==max)
    {
        header.innerHTML="End⤒";
    }
    else
    {
        header.innerHTML="More⤓";
 
    }
    
}

Number.prototype.map = function (in_min, in_max, out_min, out_max) {
    return (this - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
  }