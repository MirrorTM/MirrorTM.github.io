

var HERO = function(p)
{

    let jhh=[];
    let img;
    let time=0;
    let pg;

    p.setup=setup2;
    p.draw=draw2;

    function setup2() 
    {

    p.createCanvas(974, 1080);
    p.frameRate(40);
    pg=p.createGraphics(974,1080);
    
    }

    function draw2() {
    
        //background(25,255,255,0)
        pg.image(BG[time],0,0)
        p.image(pg,0,0);
        time+=1;
        if(time==255)
        {
            time=0;
        }
    }

}

