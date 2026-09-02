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

const locationInput = document.getElementById("user-location-input");
const locationOptions = [...document.querySelectorAll("#banner-bottom-bar-left-menu div.banner-bar-drop-option")];
locationOptions.forEach(element => element.addEventListener("click",event => locationInput.value = element.textContent));
locationInput.addEventListener("focus",event => {console.log("Hi");locationInput.classList.add("expand")});
locationInput.addEventListener("blur",event => locationInput.classList.remove("expand"));
