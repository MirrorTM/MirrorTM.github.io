const BG=[];
const IM = new Image();
const CAN = document.getElementById("bg");
const CON=CAN.getContext("2d",{ alpha: false });

const LOCK = document.createElement("div");
LOCK.id="blocker";

const PROGR = document.createElement("span");
PROGR.id="progress";
LOCK.appendChild(PROGR);

body.appendChild(LOCK);

UPDATE = false;

CAN.width=974;
CAN.height=1080;

createjs.Ticker.framerate=60;
IM.src="";

stage=null;
path="";
ATT=null;

var QUE = new createjs.LoadQueue(false);

QUE.on("complete", Loaded, this);
QUE.on("progress", Progress, this);
QUE.on("fileload", Handle, this);
QUE.on("error", Err, this);



PreloadBg();
QUE.load();
IDX=0;

function Err()
{
    QUE.setPaused(true);
    QUE.dispatchEvent("complete");
}
async function Handle(e)
{
    if(e.item.src.includes('Frame'))
    {
        BG.push(e.result);
    }
    else
    {
        Container.appendChild(e.result);
    }
}

function PreloadBg()
{
    for(i=1;i<=256;i++)
    {
        var str = "" + i
        var pad = "00000"
        var ans = pad.substring(0, pad.length - str.length) + str
        path="/res/bg/jpg/ATT/lighter/Frame_"+ans+".png";
        QUE.loadFile(path,false,false);
    }
    for(i=1;i<=82;i++)
    {
        path=`/prij/1/${i}.jpg`;
        QUE.loadFile(path,false,false);
    }
}

function Loaded(e)
{
    console.log("loaded");
    LOCK.remove();
    //RenderBg();
    //createjs.Ticker.on("tick", Render);
    setInterval(function(){UPDATE=true;},1000/30)
    requestAnimationFrame(Render);
}

function Progress(e)
{
    //console.log(e.progress);
    PROGR.innerHTML=`Loading -> ${parseInt(e.progress*100)}%`;
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
            CON.drawImage(BG[IDX], 0, 0,974,1080);
            if(IDX==255)
            {            
                IDX=0;
            }
            
        }
    }
    requestAnimationFrame(Render);
}

