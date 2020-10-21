const BG=[];
const IM = new Image();
const CAN = document.getElementById("bg");
const CON=CAN.getContext("2d",{ alpha: false });

CAN.width=1920;
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




PreloadBg();
QUE.load();
IDX=0;

async function Handle(e)
{
    console.log(e);
    BG.push(e.result);
}

function PreloadBg()
{
    for(i=0;i<=256;i++)
    {
        var str = "" + i
        var pad = "00000"
        var ans = pad.substring(0, pad.length - str.length) + str
        path="/res/bg/jpg/ATT/Frame_"+ans+".jpg";
        QUE.loadFile(path,false);
    }
}

function Loaded(e)
{
    console.log("loaded");
    RenderBg();
    createjs.Ticker.on("tick", Render);
    //requestAnimationFrame(Render);
}

function Progress(e)
{
    console.log(e.progress);
}
function RenderBg()
{
    //stage = new createjs.Stage("bg");
    //ATT = new createjs.Bitmap(IM);
    //stage.addChild(ATT);
    CON.clearRect(0, 0, 1920, 1080);
    CON.drawImage(BG[IDX], 0, 0);
}

function Render()
{
    if(CON!=null)
    {
        IDX++;
        //IM.src=BG[IDX];
        CON.drawImage(BG[IDX], 0, 0,1920,1080);
        if(IDX==256)
        {
            CON.clearRect(0, 0, 1920, 1080);
        
            IDX=0;
        }
        //requestAnimationFrame(Render);
    }
}

