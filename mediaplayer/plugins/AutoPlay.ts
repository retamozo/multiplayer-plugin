import MediaPlayer from "../src/MediaPlayer";

class AutoPlay {
    run(player: MediaPlayer) {
        if (!player.media.muted) {
            player.mute();
        }
        player.play();
    }
}

export default AutoPlay;