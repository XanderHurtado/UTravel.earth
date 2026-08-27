const bannerVideo = document.getElementById("banner-video");
const bannerStatic = document.getElementById("banner-static-container");

let player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('banner-video',{
   events:{
    onPlayerStateChange:pauseBannerVideo
   }
  });
}
function playBannerVideo() {
  if (!player) return;
  bannerStatic.style.display = "none";
  bannerVideo.style.display = "block";
  console.log(player);
  player.playVideo();
}
function pauseBannerVideo(event) {
  if (event.data !== YT.PlayerState.PAUSED) return;
  console.log("paused");
}
