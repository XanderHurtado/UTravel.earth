const bannerVideo = document.getElementById("banner-video");
const bannerStatic = document.getElementById("banner-static-container");

let player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('banner-video',{
   events:{
    onStateChange: bannerVideoStateChange
   }
  });
}
function playBannerVideo() {
  if (!player) return;
  player.playVideo();
}
let isShowingBannerVideo = false;
function bannerVideoStateChange(event) {
  if (event.data === YT.PlayerState.PLAYING || (isShowingBannerVideo && event.data === YT.PlayerState.BUFFERING)) {
    bannerStatic.style.opacity = 0;
    bannerVideo.style.opacity = 1;
    isShowingBannerVideo = true;
  }else{
    bannerStatic.style.opacity = 1;
    bannerVideo.style.opacity = 0;
    isShowingBannerVideo = false;
  }
}
bannerVideo.addEventListener( "transitionend", event => {if (event.propertyName === "opacity") bannerVideo .style.display=window.getComputedStyle(bannerVideo ).opacity==="1"?"block":"none"})
bannerStatic.addEventListener("transitionend", event => {if (event.propertyName === "opacity") bannerStatic.style.display=window.getComputedStyle(bannerStatic).opacity==="1"?"block":"none"})
