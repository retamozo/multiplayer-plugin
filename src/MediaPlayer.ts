class MediaPlayer {
  media: HTMLMediaElement
  private plugins: Array<{ run: Function }>
  constructor(config: { el: HTMLMediaElement, plugins: Array<{ run: Function }> }) {
    this.media = config.el;
    this.plugins = config.plugins || [];
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

  private initPlugins() {
    if (!!this.plugins.length) {
      this.plugins.forEach((plugin) => {
        plugin.run(this);
      });
    }
  }
}

export default MediaPlayer;
