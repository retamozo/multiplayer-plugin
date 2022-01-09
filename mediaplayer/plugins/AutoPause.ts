import MediaPlayer from "../src/MediaPlayer";

class AutoPause {
    private threshold: number;
    player: MediaPlayer;
    constructor() {
        this.threshold = 0.25;
        this.handleIntersection = this.handleIntersection.bind(this)
        this.handleVisibilityChange = this.handleVisibilityChange.bind(this)
    }

    run(player: MediaPlayer) {

        this.player = player;

        const obeserver = new IntersectionObserver(this.handleIntersection, {
            threshold: this.threshold
        })

        obeserver.observe(this.player.media)

        document.addEventListener("visibilitychange", this.handleVisibilityChange)
    }

    // Entries are the observed objects (in this case we have just one)
    private handleIntersection(entries: IntersectionObserverEntry[]) {
        const entry = entries[0]
        const isVisible = entry.intersectionRatio >= this.threshold
        isVisible ? this.player.play() : this.player.pause()

    }

    private handleVisibilityChange() {
        const isVisible = document.visibilityState === "visible"
        !isVisible ? this.player.pause() : this.player.play()
    }
}

export default AutoPause