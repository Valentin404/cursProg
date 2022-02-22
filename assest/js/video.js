      
const video = document.querySelector('.video-area-popup')
const contVideo = document.querySelector('.contVideo')

var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '390',
    width: '640',
    videoId: 'Dv7gLpW91DM',
    playerVars: {
      'playsinline': 1
    },
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

function onPlayerReady(event) {
  event.target.playVideo();
}
var done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    //   window.stopVideo = player.stopVideo
    setTimeout(window.stopVideo, 2000);
    done = false;
  }
}


window.stopVideo = function stopVideo() {
    player.stopVideo();
    
}

setTimeout(onYouTubeIframeAPIReady,2000)


video.onclick = ()=>{
    contVideo.classList.add('active')
}
contVideo.onclick=e=>{
   if(e.target.className.includes('contVideo')){
    contVideo.classList.remove('active')  
    window.stopVideo()
   }

}
