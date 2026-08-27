const bannerVideo = document.getElementById("banner-video");
const bannerStatic = document.getElementById("banner-static-container");
function playBannerVideo() {
  bannerStatic.style.display = "none";
  bannerVideo.style.display = "block";
  console.log("pressed");
}
