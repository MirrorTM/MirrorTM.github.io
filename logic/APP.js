import * as A from './LockScreen.js'
import * as VL from './Videoloader.js'
import * as B from './HomeScreen.js'
import * as C from './NavBar.js'
import * as D from './Header.js'
import * as E from './Logo.js'
import { Gallery } from './NewGallery.js'
import * as RL from '../js/resource-loader.min.js'
Element.prototype.SHOWVIEW = SHOWVIEW;


function SHOWVIEW(e)
{
    let left = e.getBoundingClientRect().right+'px';
    document.documentElement.style.setProperty('--dot',left)
    if(this!=Mirror.lastknownview)
    {
        Mirror.lastknownview.classList.add('HIDE');
        Mirror.lastknownview.classList.remove('SHOW');
        this.classList.add('SHOW');
        this.classList.remove('HIDE');
        // if(this == CLOUD)
        // {   
        //     TagCloud(this, Texts, Options);
        // }
        Mirror.lastknownview = this;
    }
}

export class APP
{
    constructor()
    {
        this.MX=0;
        this.MY=0;
        this.Body=document.querySelector('body');
        this.loading=0;
        window.addEventListener('START',this.PRELOAD);       
        this.lastknownview = new A.LockScreen();
        this.PLACE(this.lastknownview);
        this.Home=new B.HomeScreen();
        this.Nav=new C.NavBar();
        this.PLACE(this.Nav);
        this.Home.appendChild(new D.Header());
        this.Logo  = new E.Logo();
        this.PLACE(this.Logo);
        
    }
    PRELOAD()
    {
        VL.LoadBackground();
    }
    PLACE(ELEM)
    {
        this.Body.appendChild(ELEM);
    }
}

function Err(e,l,r)
{
    l._queue.worker = null;
    l._queue.resources = null;
    r.abort();
    l._queue.pause();
    l.reset();
}
function HandleGallery(l,r)
{
        r.data.onmouseenter = gallery.ShowImg;
        r.data.id="item";
        Container.appendChild(r.data);     
}
function PreloadGallery()
{
    QUE2 = new RL.Loader();
    QUE2.onLoad.add(HandleGallery);
    QUE2.onError.add(Err);

    for(let i=1;i<=82;i++)
    {
        QUE2.add(`/prij/1/${i}.jpg`);
    }
    QUE2.load();
}


export let Mirror = new APP();
export let gallery=new Gallery();

function onImageLoad(e)
{
    e.detail.data.onmouseenter = gallery.ShowImg;
    e.detail.data.id="item";
    gallery.appendChild(e.detail.data);   
}

window.addEventListener("ImageLoaded",onImageLoad);
Mirror.Logo.onclick=function(){Mirror.Home.SHOWVIEW(this.children[0])}

let ToP=document.createElement('div');
ToP.id="spacer";

Mirror.PLACE(gallery.Hero);
Mirror.PLACE(gallery);
Mirror.PLACE(ToP);
document.querySelector('#Wb').onclick=function(){gallery.SHOWVIEW(this)}
console.log(Mirror);