import {Mirror } from "./APP.js";

export class Header extends HTMLElement
{
    constructor()
    {
        super();

        //this.CONT = document.createElement("div");
        this.innerHTML=`<div id="AB"><p alt="Hover">Simply. =Design</p></div>`;
        //this.addEventListener("LOADED",this.PL);

        //this.innerHTML+='<link href="./css/loading.css" rel="stylesheet">'
    }
}
customElements.define('hdr-hdr', Header);
