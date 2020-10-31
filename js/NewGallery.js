import { Mirror } from "../logic/APP";

export class Gallery extends HTMLElement
{
    constructor()
    {
        
        this.id="GalleryV2";
        this.Hero = new Image();
        this.Hero.id="Hero";
        this.Hero.onmouseout = HideImg;
        this.header = document.createElement('p');
        this.header.innerHTML ="Scroll Down⤓";
        this.header.id="HDR";
        this.appendChild(header);
        this.onscroll=this.scroll;

        Mirror.PLACE(Hero);
    }
    HideImg(e)
    {
        body.style.setProperty('--op',1);
        body.style.setProperty('--displayimg',0);
        body.style.setProperty('--disp','2');

    }
    ShowImg(e)
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
    scroll(e)
{
    //e.preventDefault();
    max=e.target.scrollHeight;
    
    current= e.target.scrollTop;
    document.documentElement.style.setProperty('--scrollY',`${current}px`)
    if(current==max-e.target.offsetHeight)
    {
        this.header.innerHTML="GoBack⤒";
    }
    else
    {
        this.header.innerHTML="More⤓";
 
    }
    
}

}