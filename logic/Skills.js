import {Mirror } from "./APP.js";

let template=``;
export class Skills extends HTMLElement
{
    constructor()
    {
        super();

        //this.CONT = document.createElement("div");
        this.id="SKILLS";
        this.innerHTML=template
        //Mirror.Nav.children[2].addEventListener("click",this.PL);
        Mirror.PLACE(this);
        //this.innerHTML+='<link href="./css/loading.css" rel="stylesheet">'
        
    }
    PL()
    {
        
        //StartSkills();
        this.SHOWVIEW(Mirror.Nav.children[2]);
    }

}
customElements.define('skills-skills', Skills);
