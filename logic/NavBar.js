import {Mirror } from "./APP.js";

let template=`
<div id="Wb" ><p alt="HoverMe">Works</p></div>
<span></span>
<div id="CenterB" onclick="CLOUD.SHOWVIEW();" ><p alt="HoverMe">Skills</p></div>
<span></span>
<div  onclick="window.location.href = 'http://www.instagram.com/mirrordsgn';"><p alt="HoverMe">Instagram</p></div>
<span></span>
<div  onclick="window.location.href = 'https://mail.google.com/mail/?view=cm&fs=1&to=marknoonmn@gmail.com&su=coming from your website';" style='padding-right:0px;'><p alt="HoverMe">Contact</p></div>`;

export class NavBar extends HTMLElement
{
    constructor()
    {
        super();

        this.id="BAR";
        this.innerHTML=template
       // this.addEventListener("LOADED",this.PL);

    }
}
customElements.define('nav-bar', NavBar);
