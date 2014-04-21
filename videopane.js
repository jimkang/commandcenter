function createVideoPane(opts) {
  // opts:
  //  paneRoot: The selection in which the pane will be contained.
  //  containerId: The id of the container in which the iframe will go.
  var player;

  function createPlayer() {
    player = new YT.Player(opts.id, {
      height: '320',
      width: '320',
      videoId: opts.youtubeId,
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      }
    });
    return player;
  }

  // 4. The API will call this function when the video player is ready.
  function onPlayerReady(event) {
    // var iframe = event.target.getIframe();
    event.target.playVideo();
  }

  // 5. The API calls this function when the player's state changes.
  //    The function indicates that when playing a video (state=1),
  var done = false;
  function onPlayerStateChange(event) {
    // if (event.data == YT.PlayerState.PLAYING && !done) {
      // setTimeout(stopVideo, 6000);
      // done = true;
    // }
  }
  function stopVideo() {
    player.stopVideo();
  }

  createPlayer();

  return {
    createPlayer: createPlayer
  };
}
