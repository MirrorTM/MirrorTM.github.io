var Container = document.createElement("div");
Container.id="GalleryV2";
Container.setAttribute("data-50","opacity:0.5");
Container.style.clipPath="circle(0% at var(--mousex) var(--mousey))";
images = document.querySelectorAll("img");
header = document.createElement('div');
header.innerHTML ="Scroll Down⤓";
header.id="HDR";
images.forEach(element => {
    Container.appendChild(element);
}); 

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
}
Container.children[0].style.opacity=1;
Container.onscroll=scroll;

previd =0;

function scroll(e)
{
    max = e.target.scrollHeight - e.target.offsetHeight;
    current = e.target.scrollTop;
    children  = Container.children;

    percent = clamp((current * 100)/ (max + children[0].height/1.1),0,100);
    ind = percent * children.length;
    console.log(parseInt(ind/100));
    if(parseInt(ind/100)!=previd)
    {
        children[parseInt(ind/100)].style.opacity=1;
        children[previd].style.opacity=0.2;

        previd = parseInt(ind/100);
    }
    N=current*100/max;
    body.style.setProperty('--scrollY',`${current}px`)
    if(current==max)
    {
        header.innerHTML="End⤒";
    }
    else
    {
        header.innerHTML="More⤓";
 
    }
    
}