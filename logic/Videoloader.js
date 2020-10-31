import {Mirror } from "./APP.js";

import * as app from './APP.js'


export function LoadBackground()
{
var req = new XMLHttpRequest();
req.open('GET', './res/bg/jpg/ATT/lighter/BG.mp4', true);
req.responseType = 'blob';
let BGH = document.createElement('video');

req.onload = function() {
   if (this.status === 200) {
      var videoBlob = this.response;
      var vid = URL.createObjectURL(videoBlob);
      BGH.src = vid;
      console.log("loaded");
      BGH.setAttribute('playsinline', 'playsinline');
      BGH.setAttribute('muted', 'muted');
      BGH.autoplay=false;
      BGH.loop=true;
      BGH.muted=true;
      BGH.playbackRate = 0.8;
      BGH.play();

      var event = new CustomEvent("LOADED" , {detail:{BGH,BGH}});
      Mirror.Home.dispatchEvent(event);
      //Home.appendChild(BGH);
      //Home.SHOWVIEW();
        
   }
}
req.onerror = function() {
   // Error
}
req.onprogress=function(e)
{
    var loadedPercentage = parseInt((e.loaded / e.total) * 100);
    //PROGR.innerHTML=`Loading -> ${loadedPercentage}%`;
    var event = new CustomEvent("PROGRESS", {detail: {loadedPercentage: loadedPercentage}});
    Mirror.lastknownview.dispatchEvent(event);
   
}

req.send();
}