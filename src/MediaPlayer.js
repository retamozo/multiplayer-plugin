// function MediaPlayer(mediaPlayerConfig) {
//     this.media = mediaPlayerConfig.el;
// }

// MediaPlayer.prototype.play = function () {
//     this.media.play();
// };

// MediaPlayer.prototype.pause = function () {
//     this.media.pause();
// };

// MediaPlayer.prototype.isPlaying = function () {
//     const isPlaying =
//         this.media.currentTime > 0 &&
//         !this.media.paused &&
//         !this.media.ended &&
//         this.media.readyState > 2;

//     return isPlaying;
// };

class MediaPlayer {
  constructor(mediaPlayerConfig) {
    this.media = mediaPlayerConfig.el;
    this.plugins = mediaPlayerConfig.plugins || {};
    this.initPlugins();
  }
  play() {
    this.media.play();
  }
  pause() {
    this.media.pause();
  }
  isPlaying() {
    const isPlaying =
      this.media.currentTime > 0 &&
      !this.media.paused &&
      !this.media.ended &&
      this.media.readyState > 2;

    return isPlaying;
  }

  mute() {
    this.media.muted = true;
  }

  unmute() {
    this.media.muted = false;
  }

  handleMute() {
    this.media.muted ? this.unmute() : this.mute();
  }

  initPlugins() {
    if (this.plugins) {
      Object.values(this.plugins).forEach((plugin) => {
        plugin.run(this);
      });
    }
  }
}

export default MediaPlayer;
