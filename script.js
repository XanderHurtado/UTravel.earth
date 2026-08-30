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
  if (event.data === YT.PlayerState.PLAYING || (isShowingBannerVideo && event.data === YT.PlayerState.BUFFERING) {
    bannerStatic.style.display = "none";
    bannerVideo.style.display = "block";
    isShowingBannerVideo = true;
  }else{
    bannerStatic.style.display = "block";
    bannerVideo.style.display = "none";
    isShowingBannerVideo = false;
  }
}
