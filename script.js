const bannerVideo = document.getElementById("banner-video");
const bannerStatic = document.getElementById("banner-static-container");

//YouTube API
let player;
window.onYouTubeIframeAPIReady = function() {
  player = new YT.Player('banner-video',{
   events:{
    onStateChange: bannerVideoStateChange
   }
  });
  if (player) document.getElementById("banner-video-center").style.display="block";
}
//Create YouTube API script AFTER defining 'onYouTubeIframeAPIReady'
var youtubeAPIScriptTag = document.createElement("script");
youtubeAPIScriptTag.src = "https://www.youtube.com/iframe_api";
document.getElementsByTagName("script")[0].parentNode.insertBefore(youtubeAPIScriptTag, document.getElementsByTagName("script")[0]);
function playBannerVideo() {
  if (!player) return;
  player.playVideo();
}
let isShowingBannerVideo = false;
let startVisualLoadTimeout = -1;
function bannerVideoStateChange(event) {
  let pastIsShowing = isShowingBannerVideo;
  isShowingBannerVideo = event.data === YT.PlayerState.PLAYING || (isShowingBannerVideo && event.data === YT.PlayerState.BUFFERING);
  
  if (!isShowingBannerVideo && event.data === YT.PlayerState.BUFFERING) {
    startVisualLoadTimeout = setTimeout(() => {
      document.getElementById("banner-play-button").classList.add("is-hidden");
      document.getElementById("banner-loading-spinner").classList.add("is-visible");
    },500);
  }
  if (startVisualLoadTimeout !== -1 && event.data === YT.PlayerState.PLAYING) {
    clearTimeout(startVisualLoadTimeout);
    startVisualLoadTimeout = -1;
    document.getElementById("banner-play-button").classList.remove("is-hidden");
    document.getElementById("banner-loading-spinner").classList.remove("is-visible");
  }
  
  if (pastIsShowing === isShowingBannerVideo) return;
  bannerVideo.classList.toggle("is-visible",isShowingBannerVideo);
}

const locationInput = document.getElementById("user-location-input");
const locationOptions = [...document.querySelectorAll("#input-bar-location-menu div.input-bar-option")];
const locationMenuContainer = document.getElementById("input-bar-location-menu");
locationOptions.forEach(element => element.addEventListener("click",event => locationInput.value = element.textContent));
locationInput.addEventListener("focus",event => locationMenuContainer.classList.add("expand"));
locationInput.addEventListener("blur",event => locationMenuContainer.classList.remove("expand"));

/*(g=>{var h,a,k,p="The Google Maps JavaScript API",c="google",l="importLibrary",q="__ib__",m=document,b=window;b=b[c]||(b[c]={});var d=b.maps||(b.maps={}),r=new Set,e=new URLSearchParams,u=()=>h||(h=new Promise(async(f,n)=>{await a;g.start({key:e.get("key"),v:"alpha",...k});setTimeout(()=>n(Error(p+" could not load.")),2e4);d[l]=async(f,...n)=>d[l].then(async(f,...n)=>f(...n));f()}));if(d[l])console.warn(p+" only loads once.");else{a=new Promise((f,n)=>{var e=m.createElement("script");e.src=f;b[q]=u;e.onerror=()=>n(Error(p+" failed to load."));m.head.append(e)});d[l]=async(f,...n)=>{await u();return d[l](f,...n)}}}
)();

async function initMap() {
    // 1. Dynamically import the 3D library
    const { Map3DElement } = await google.maps.importLibrary("maps3d");
    
    // 2. Reference the map element from the DOM
    const mapElement = document.getElementById("world-map");
    
    // Optional: Configure properties dynamically via JavaScript if desired
    // mapElement.center = {lat: 37.7749, lng: -122.4194, altitude: 500};
}

// Fire the initialization routine
initMap();*/
