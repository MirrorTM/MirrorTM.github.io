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

Downscale = window.screen.height/1080;
if(Downscale>1)
{
    Downscale=1;
}
body.style.setProperty('--downscale',Downscale);


IM.src="";

stage=null;
path="";
ATT=null;

var QUE = new Loader();
QUE.onComplete.add(Loaded);
QUE.onProgress.add(Progress);
QUE.onLoad.add(Handle);

var QUE2 = new Loader();
//QUE2.onComplete.add(Loaded);
//QUE2.onProgress.add(Progress);
QUE2.onLoad.add(HandleGallery);
QUE2.onError.add(Err);
// var QUE2 = new createjs.LoadQueue(false);
// QUE2.setMaxConnections(2);
// QUE2.on("fileload", HandleGallery, this);
// QUE2.on("error", Err, this);

Animating = true;

//PreloadBg();

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
function AnimStart(e)
{
    animationname = e.animationName;
}
function AnimEnd(e)
{
    if(e.animationName == 'A3')
    {
        this.style.animation= "A1 12s infinite";
    }
    Animating = false;
}
function Handle(e,l)
{
    l.data.preload="auto";

    //el = new p5.Element(l.data);
    
    //BG.push(createImg(l.data.src,""));
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

function PreloadBg()
{
    //for(i=1;i<=1;i++)
    //{
        //var str = "" + i
        //var pad = "00000"
        //var ans = pad.substring(0, pad.length - str.length) + str
        //path="/res/bg/jpg/ATT/lighter/Frame_"+ans+".png";
        QUE.add('./res/bg/jpg/ATT/lighter/BG.mp4');
        QUE.load();
    //}
    

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

function Loaded(e)
{
    // console.log("loaded");
    // //var P5 = new p5(HERO , Home)
    // //RenderBg();
    // //createjs.Ticker.on("tick", Render);
    // //setInterval(function(){UPDATE=true;},1000/30)
    // //requestAnimationFrame(Render);
    // //lastknownview=Home;
    
    // var Back = Object.values(QUE.resources)[IDX].data;
    // Home.appendChild(Back);
    // Back.autoplay=false;
    // Back.loop=true;
    // Back.muted=true;
    // Back.playbackRate = 1.7;
    // Back.play();

    // Home.SHOWVIEW();

    //LOCK.remove();


}

function Progress(e)
{
    //console.log(e.progress);
    
    PROGR.innerHTML=`Loading -> ${parseInt(e.progress)}%`;
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
        //lastknownview.style.zindex=-1;
        // lastknownview.style.animationFillMode="forwards";
        // lastknownview.style.animationName="HD";
        // lastknownview.style.animationDuration="2s";
        // lastknownview.style.animationIterationCount=1;
        lastknownview.classList.add('HIDE');
        lastknownview.classList.remove('SHOW');

        this.classList.add('SHOW');
        this.classList.remove('HIDE');

        // this.style.animationFillMode="forwards";
        // //this.style.visibility="visible";
        // this.style.animationName="SW";
        // this.style.animationDuration="2s";
        // this.style.animationIterationCount=1;
        //this.style.zindex=3;
        if(this == CLOUD)
        {
            TagCloud(this, Texts, Options);
        }

        lastknownview = this;

    }
}