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
  let pastIsShowing = isShowingBannerVideo;
  isShowingBannerVideo = event.data === YT.PlayerState.PLAYING || (isShowingBannerVideo && event.data === YT.PlayerState.BUFFERING);
  if (pastIsShowing === isShowingBannerVideo) return;
  if (isShowingBannerVideo) {
    bannerStatic.style.opacity = 0;
    bannerVideo.style.opacity = 1;
    bannerVideo.style.display= "block";
  }else{
    bannerStatic.style.opacity = 1;
    bannerStatic.style.display = "block";
    bannerVideo.style.opacity = 0;
  }
}
bannerVideo.addEventListener( "transitionend", event => {if (event.propertyName === "opacity") bannerVideo .style.display=window.getComputedStyle(bannerVideo ).opacity==="1"?"block":"none"})
bannerStatic.addEventListener("transitionend", event => {if (event.propertyName === "opacity") bannerStatic.style.display=window.getComputedStyle(bannerStatic).opacity==="1"?"block":"none"})
