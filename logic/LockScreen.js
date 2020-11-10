
export class LockScreen extends HTMLElement
{
    constructor()
    {
        super();

        //this.CONT = document.createElement("div");
        this.id="blocker";
        this.PROGR = document.createElement("svg");
        this.PROGR.id="progress";
        //this.PROGR.innerHTML=`Loading -> ${0}%`;
        this.appendChild(this.PROGR);
        this.PROGR2 = document.createElement("div");
        this.PROGR2.id="prec";

        this.appendChild(this.PROGR2);
        //this.prec=document.createElement('div');
        //this.prec.id="prec";
        //this.appendChild(this.prec);
        this.addEventListener("PROGRESS",this.Update);

        //this.innerHTML+='<link href="./css/loading.css" rel="stylesheet">'
    }
    Update(e)
    {
       // this.PROGR.innerHTML=`Loading -> ${e.detail.loadedPercentage}%`;
       //console.log(e.detail.loadedPercentage);
       document.documentElement.style.setProperty('--Prog',100-e.detail.loadedPercentage+"%");
    }
}
customElements.define('lock-screen', LockScreen);


let LS=`
<style>
    .inner {
        background-color: green;
    }
</style>`