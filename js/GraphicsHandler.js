Element.prototype.SHOWVIEW = SHOWVIEW;

const BG=[];
const IM = new Image();
const CAN = document.getElementById("bg");
//const CON=CAN.getContext("2d",{ alpha: false });
var GaleryHeights=[];
animationname = "A1";
const LOCK = document.createElement("div");
LOCK.id="blocker";

const PROGR = document.createElement("span");
PROGR.id="progress";
LOCK.appendChild(PROGR);

body.appendChild(LOCK);
lastknownview = LOCK;
UPDATE = false;

Downscale = window.screen.height / 1080;
if(Downscale>1)
{
    Downscale=1;
}
body.style.setProperty('--downscale',Downscale);


IM.src="";

stage=null;
path="";
ATT=null;

//var QUE = new Loader();
//QUE.onComplete.add(Loaded);
//QUE.onProgress.add(Progress);
//QUE.onLoad.add(Handle);

var QUE2 = new Loader();
QUE2.onLoad.add(HandleGallery);
QUE2.onError.add(Err);

Animating = true;

PreloadGallery();
IDX=0;

function Err(e,l,r)
{
    l._queue.worker = null;
    l._queue.resources = null;
    r.abort();
    l._queue.pause();
    l.reset();
}
function EnlargeImage(e)
{
        currentscale = this.getBoundingClientRect().width / this.offsetWidth;
        body.style.setProperty('--imagelastscale' , currentscale);
        this.style.animation= "A2 2.0s 1";
        this.style.animationFillMode="forwards";
}
function RevertImage(e)
{
    if(!Animating)
    {
        this.style.animation= "A3 2.0s 1";
        this.style.animationFillMode="forwards";
        this.style.animationPlayState="running";
    }
}
function HandleGallery(l,r)
{
        r.data.onmouseenter = ShowImg;//EnlargeImage;
        //r.data.onmouseleave = HideImg//RevertImage;
        //r.data.onanimationend  = AnimEnd;
        //r.data.onanimationstart = AnimStart;
        r.data.id="item";
        Container.appendChild(r.data);
        
}
function PreloadGallery()
{
    for(i=1;i<=82;i++)
    {
        path=`/prij/1/${i}.jpg`;
        QUE2.add(path);
    }
    QUE2.load();
}

function Render()
{
    if(CON!=null)
    {
        if(UPDATE)
        {
            IDX++;
            //IM.src=BG[IDX];
            UPDATE=false;
            CON.drawImage(Object.values(QUE.resources)[IDX].data,0,0);
            if(IDX==255)
            {            
                IDX=0;
            }
            
        }
    }
    requestAnimationFrame(Render);
}

function SHOWVIEW()
{
    if(this!=lastknownview)
    {

        //this.onanimationend=RevealTExt;


        lastknownview.classList.add('HIDE');
        lastknownview.classList.remove('SHOW');
        this.classList.add('SHOW');
        this.classList.remove('HIDE');
        if(this == CLOUD)
        {
            TagCloud(this, Texts, Options);
        }

        lastknownview = this;
    }
}
function RevealTExt(e)
{
    body.style.setProperty('--state','txt');
}

function HideText(e)
{
    body.style.setProperty('--state','null');
      
}