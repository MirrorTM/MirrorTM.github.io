import {Mirror } from "./APP.js";

import * as app from './APP.js'


export function LoadBackground()
{
var req = new XMLHttpRequest();
req.open('GET', './res/bg/jpg/ATT/lighter/BG.mp4', true);
req.responseType = 'blob';
let BGH = document.createElement('video');
let play = false;
let PROGR = document.querySelector("#prec");
BGH.oncanplaythrough = Done;

function Done(e)
{
  play=true;
}
req.onload = function() {
   if (this.status === 200) {
      var videoBlob = this.response;
      var vid = URL.createObjectURL(videoBlob);
      BGH.src = vid;
      console.log("loaded");
      BGH.setAttribute('playsinline', '');
      BGH.setAttribute('muted', '');
      //BGH.autoplay=true;
      BGH.loop=true;
      BGH.muted=true;
      BGH.playbackRate = 1;
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

    PROGR.innerHTML=`${loadedPercentage}%`;
    var event = new CustomEvent("PROGRESS", {detail: {loadedPercentage: loadedPercentage}});
    Mirror.lastknownview.dispatchEvent(event);
   if(play)
   {
      
   }
}

req.send();
}