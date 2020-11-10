
export class Gallery extends HTMLElement
{
    constructor()
    {
        super();
        this.id="GalleryV2";
        this.Hero = new Image();
        this.Hero.id="Hero";
        this.Hero.onmouseout = this.HideImg;
        this.header = document.createElement('p');
        this.header.innerHTML ="Scroll⤓";
        this.addEventListener("SHOWGALLERY",this.SHOW);
        this.header.id="HDR";
        this.appendChild(this.header);
        this.onscroll=this.scroll;
        this.QUE2 = new Loader();
        this.QUE2.onLoad.add(this.HandleGallery);
        this.QUE2.onError.add(this.Err);
        this.PreloadGallery();
    }
    HideImg(e)
    {
        body.style.setProperty('--op',1);
        body.style.setProperty('--displayimg',0);
        body.style.setProperty('--disp','2');

    }
    SHOW()
    {
        this.SHOWVIEW();
    }
    Helper()
    {
        
    }
    ShowImg(e)
    {
        if(window.getComputedStyle(e.target).getPropertyValue("opacity")!=0)
        {
            let H=e.target.naturalHeight;
            let Ratio = Hero.height / H ;
            let W=e.target.naturalWidth * Ratio;
            body.style.setProperty('--actw',W+'px');
            body.style.setProperty('--op',0);
            body.style.setProperty('--disp',0);

            body.style.setProperty('--displayimg',1);
            Hero.src=e.target.src;
        }
    }
    scroll(e)
    {
        e.preventDefault();
        
        let max=e.target.scrollHeight;
        let current= e.target.scrollTop;
        document.documentElement.style.setProperty('--scrollY',`${current}px`)
        if(current==0)
        {
            this.header.innerHTML="Scroll⤓";

        }
        if(current==max-e.target.offsetHeight)
        {
            this.header.innerHTML="⤒";
        }
        else
        {
            this.header.innerHTML="More⤓";
    
        }
        
    }
     Err(e,l,r)
    {
        l._queue.worker = null;
        l._queue.resources = null;
        r.abort();
        l._queue.pause();
        l.reset();
    }
    HandleGallery(l,r)
    {
            //r.data.onmouseenter = gallery.ShowImg;
            //r.data.id="item";
            //Container.appendChild(r.data);     

            // create and dispatch the event
            var event = new CustomEvent("ImageLoaded", {detail: {data: r.data}});
            window.dispatchEvent(event);
    }
    PreloadGallery()
    {
        for(let i=2;i<=20;i++)
        {
            this.QUE2.add(`/prij/1/${i}.jpg`);
        }
        this.QUE2.load();
    }
}
customElements.define('gallery-gallery', Gallery);
