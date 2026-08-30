const bannerVideo = document.getElementById("banner-video");
const bannerStatic = document.getElementById("banner-static-container");

let player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('banner-video',{
   events:{
    onStateChange: pauseBannerVideo
   }
  });
}
function playBannerVideo() {
  if (!player) return;
  bannerStatic.style.display = "none";
  bannerVideo.style.display = "block";
  player.playVideo();
}
function pauseBannerVideo(event) {
  console.log(event.data);
  if (event.data !== YT.PlayerState.PAUSED && event.data !== YT.PlayerState.ENDED) return;
  bannerStatic.style.display = "block";
  bannerVideo.style.display = "none";
}
