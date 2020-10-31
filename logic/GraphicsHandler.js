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
        r.data.onmouseenter = ShowImg;
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