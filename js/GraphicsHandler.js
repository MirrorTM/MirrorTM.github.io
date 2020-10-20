const BG=[];
const app = new PIXI.Application({width:1920,height:1080});
document.querySelector('#HOME').appendChild(app.view);
app.loader.onComplete.add(Loaded);
app.loader.onProgress.add(Progress);

PreloadBg();
app.loader.load();

function PreloadBg()
{
    for(i=0;i<=256;i++)
    {
        var str = "" + i
        var pad = "00000"
        var ans = pad.substring(0, pad.length - str.length) + str
        path="/res/bg/jpg/New Folder/Frame_"+ans+".jpg";
        app.loader.add(`BG${ans}`,path);
    }
}

function Loaded(e)
{
    console.log("loaded");
    RenderBg();
    }
function Progress(e)
{
    console.log(e.progress);
}
function RenderBg()
{
    for(i=0;i<=256;i++)
    {
        var str = "" + i
        var pad = "00000"
        var ans = pad.substring(0, pad.length - str.length) + str
        path="./res/bg/jpg/New Folder/Frame_"+ans+".jpg";
        name =`BG${ans}`;
        BG.push(app.loader.resources[name].texture);
    }

    var anim = new PIXI.AnimatedSprite(BG);
    anim.x = app.screen.width / 2;
    anim.y = app.screen.height / 2;
    anim.anchor.set(0.5);
    anim.animationSpeed = 0.5;
    anim.play();
    app.stage.addChild(anim);
}