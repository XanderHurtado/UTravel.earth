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
  bannerVideo.classList.toggle('is-visible');
}
