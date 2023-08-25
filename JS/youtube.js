var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubePlayerAPIReady() {
  console.log("ready youtube")
  new YT.Player('player', {
    videoId: 'tcSrynKYXbU',
    playerVars: {
      autoplay: true,
      loop: true,
      playlist: 'tcSrynKYXbU'
    },
    events: {
      onReady: function (event) {
        event.target.mute()
      }
    }
  })
}
