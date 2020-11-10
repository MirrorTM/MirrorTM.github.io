import {Mirror } from "./APP.js";

let template=``;
export class HomeScreen extends HTMLElement
{
    constructor()
    {
        super();

        //this.CONT = document.createElement("div");
        this.id="HOME";
        this.innerHTML=template
        this.addEventListener("LOADED",this.PL);
        //this.onanimationend=this.SHOWTEXT;
        //this.innerHTML+='<link href="./css/loading.css" rel="stylesheet">'
    }
    PL(e)
    {
        this.appendChild(e.detail.BGH);
        Mirror.PLACE(this);
        if(Mirror.lastknownview.id=="blocker")
        {
            document.documentElement.style.setProperty('--opc',1);
            let gs = gsap.timeline();
            gs.from("#BAR>div>p,#AB > p",1.8,{y:1000,ease:"power4.out",delay:1.2,skewY:10,stagger:{amount:0.4}})
            //gs.from("logo-logo",1.8,{y:1000,ease:"power4.out",delay:0,skewY:10,stagger:{amount:0.4}})

        }
        this.SHOWVIEW(Mirror.Logo.children[0]);
    }
    SHOWTEXT(e)
    {
        if(Mirror.lastknownview.id=="blocker")
        {
        document.documentElement.style.setProperty('--opc',1);
        let gs = gsap.timeline();
        gs.from("p",1.8,{y:200,ease:"power4.out",delay:0,skewY:10,stagger:{amount:0.4}})
        }
       // Mirror.Body.removeChild(document.querySelector('#blocker'))
    }
}
customElements.define('home-screen', HomeScreen);
