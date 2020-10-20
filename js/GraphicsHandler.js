const BG=[];
const IM = new Image();
createjs.Ticker.framerate=40;
IM.src="";

stage=null;
path="";
ATT=null;

queue = new createjs.LoadQueue(false);

PreloadBg();

queue.on("complete", Loaded, this);
queue.on("fileload", FileComplete, this);






IDX=0;


 function FileComplete(e)
 {
    BG.push(e.result.src);
 }

function PreloadBg()
{
    for(i=0;i<=256;i++)
    {
        var str = "" + i
        var pad = "00000"
        var ans = pad.substring(0, pad.length - str.length) + str
        path="/res/bg/jpg/ATT/Frame_"+ans+".jpg";
        //app.loader.add(`BG${ans}`,path);
        queue.loadFile({id: `BG${ans}`, src:path});
    }
}

function Loaded(e)
{
    console.log("loaded");
    RenderBg();
    createjs.Ticker.on("tick", Render);
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
 
    
}
function Render()
{
   

    if(stage!=null)
    {
        IDX++;

        var str = "" + IDX
        var pad = "00000"
        var ans = pad.substring(0, pad.length - str.length) + str
        p="/res/bg/jpg/ATT/Frame_"+ans+".jpg";

        ATT.image =queue.getResult(p, true);
        stage.clear;
        stage.update();
        if(IDX==256)
        {
            IDX=0;
        }
    }
}

