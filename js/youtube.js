const tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
  // player 인자값: <div id="player"></div>
  new YT.Player('player', {
    // videoId: 최초 재생할 유튜브 영상 Id
    videoId: 'An6LvWQuj_8',
    playerVars: {
      autoplay: true,
      loop: true,
      // playList: 반복 재생할 유튜브 영상의 Id 목록
      playlist: 'An6LvWQuj_8'
    },
    events: {
      onReady: function(event) {
        // mute option: 음소거
        event.target.mute();
      }
    }
  });
}