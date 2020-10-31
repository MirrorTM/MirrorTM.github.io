import {Mirror } from "./APP.js";

export class Logo extends HTMLElement
{
    constructor()
    {
        super();

        //this.CONT = document.createElement("div");
        this.id='TEXT';
        this.innerHTML=`<img alt="Hover" src = "./res/LOGO.svg">`;
        //this.addEventListener("LOADED",this.PL);

        //this.innerHTML+='<link href="./css/loading.css" rel="stylesheet">'
    }
}
customElements.define('logo-logo', Logo);
