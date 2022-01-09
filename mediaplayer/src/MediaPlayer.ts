class MediaPlayer {
  media: HTMLMediaElement
  private plugins: Array<{ run: Function }>
  container: HTMLElement;

  constructor(config: { el: HTMLMediaElement, plugins: Array<{ run: Function }> }) {
    this.media = config.el;
    this.plugins = config.plugins || [];
    this.initPlayer()
    this.initPlugins();
  }

  initPlayer() {
    this.container = document.createElement("div");
    this.container.style.position = "relative"
    this.media.parentNode.insertBefore(this.container, this.media);
    this.container.appendChild(this.media)
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
