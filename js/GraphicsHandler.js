const BG=[];
const IM = new Image();
IM.src="";

stage=null;
path="";
ATT=null;
const app = new PIXI.Application({width:1920,height:1080});
//app.view.id="bg";
//document.querySelector('#HOME').appendChild(app.view);
app.stop();
app.loader.onComplete.add(Loaded);
app.loader.onProgress.add(Progress);
//anim = "";

PreloadBg();
app.loader.load();
IDX=0;
var RATE=50;


 

function PreloadBg()
{
    for(i=0;i<=256;i++)
    {
        var str = "" + i
        var pad = "00000"
        var ans = pad.substring(0, pad.length - str.length) + str
        path="/res/bg/jpg/ATT/Frame_"+ans+".jpg";
        BG.push(path);
        app.loader.add(`BG${ans}`,path);
    }
}

function Loaded(e)
{
    console.log("loaded");
    app.start();
    RenderBg();
    setInterval(Render,1000/RATE);
    //createjs.Ticker.on("tick", Render);
    }
function Progress(e)
{
    console.log(e.progress);
}
function RenderBg()
{
    stage = new createjs.Stage("bg");


    ATT = new createjs.Bitmap(IM);
    stage.addChild(ATT);
    stage.update();

 
    
}
function Render()
{
    if(stage!=null)
    {
        IDX++;
        IM.src=BG[IDX];
        ATT.image =IM;

        stage.update();
        if(IDX==256)
        {
            IDX=0;
        }
    }
}

