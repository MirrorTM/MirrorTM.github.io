function LoadBackground()
{
var req = new XMLHttpRequest();
req.open('GET', './res/bg/jpg/ATT/lighter/BG.mp4', true);
req.responseType = 'blob';
let BGH = document.createElement('video');
req.onload = function() {
   // Onload is triggered even on 404
   // so we need to check the status code
   if (this.status === 200) {
      var videoBlob = this.response;
      var vid = URL.createObjectURL(videoBlob); // IE10+
      // Video is now downloaded
      // and we can set it as source on the video element
      BGH.src = vid;
      console.log("loaded");
    //var P5 = new p5(HERO , Home)
    //RenderBg();
    //createjs.Ticker.on("tick", Render);
    //setInterval(function(){UPDATE=true;},1000/30)
    //requestAnimationFrame(Render);
    //lastknownview=Home;
    
    
        Home.appendChild(BGH);
        BGH.autoplay=false;
        BGH.loop=true;
        BGH.muted=true;
        BGH.playbackRate = 1.7;
        BGH.play();

        Home.SHOWVIEW();
        
   }
}
req.onerror = function() {
   // Error
}
req.onprogress=function(e)
{
    var loadedPercentage = parseInt((e.loaded / e.total) * 100);
    PROGR.innerHTML=`Loading -> ${loadedPercentage}%`;

}

req.send();
}