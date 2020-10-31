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
        this.onanimationend=this.SHOWTEXT;
        //this.innerHTML+='<link href="./css/loading.css" rel="stylesheet">'
    }
    PL(e)
    {
        this.appendChild(e.detail.BGH);
        Mirror.PLACE(this);
        this.SHOWVIEW(Mirror.Logo.children[0]);

    }
    SHOWTEXT(e)
    {
        document.documentElement.style.setProperty('--opc',1);
    }
}
customElements.define('home-screen', HomeScreen);
