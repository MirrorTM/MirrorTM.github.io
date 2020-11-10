import * as A from './LockScreen.js'
import * as VL from './Videoloader.js'
import * as B from './HomeScreen.js'
import * as C from './NavBar.js'
import * as D from './Header.js'
import * as E from './Logo.js'
import { Gallery } from './NewGallery.js'
import * as RL from '../js/resource-loader.min.js'
import * as sk from './Skills.js'
Element.prototype.SHOWVIEW = SHOWVIEW;


function SHOWVIEW(e)
{
    
    let left = e.getBoundingClientRect().left;
    document.documentElement.style.setProperty('--dot',(left+(e.offsetWidth))+"px")
    let el=document.querySelector('.clicked')
    if(el)
    {
        el.classList.remove('clicked');

    }
    e.classList.toggle("clicked");
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
        document.documentElement.style.setProperty('--down',screen.height/1080)
        document.documentElement.style.setProperty('--add', screen.height - 1080 +'px' )
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



export let Mirror = new APP();
export let gallery=new Gallery();
export let SKILL=new sk.Skills();
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
//Mirror.PLACE(ToP);
document.querySelector('#Wb').onclick=function(){gallery.SHOWVIEW(this)}
document.querySelector('#CenterB').onclick=function(){SKILL.SHOWVIEW(this);StartSkills()}
document.querySelector("#HAMBURGER").onclick=showMenu;


function showMenu(e)
{

  let a=  document.querySelector("#BAR");
  const sty = getComputedStyle(a)
  if(sty.display=="none")
  {
  a.style.display = "flex";
  }else
  {
    a.style.display = "none";
  }
}