var Container = document.createElement("div");
Container.id="GalleryV2";
Container.setAttribute("data-50","opacity:0.5");
Container.style.clipPath="circle(0% at var(--mousex) var(--mousey))";
images = document.querySelectorAll("img");

images.forEach(element => {
    Container.appendChild(element);
}); 

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