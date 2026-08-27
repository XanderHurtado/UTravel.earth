const bannerVideo = document.getElementById("banner-video");
const bannerStatic = document.getElementById("banner-static-container");

let player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('banner-video');
}
function playBannerVideo() {
  if (!player) return;
  bannerStatic.style.display = "none";
  bannerVideo.style.display = "block";
  player.playVideo();
}
