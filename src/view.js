//TODO investigate why this get breaks without the .js suffix
import AutoPlay from "../plugins/AutoPlay.js";
import MediaPlayer from "../src/MediaPlayer.js";

const videoEl = document.querySelector("video");
const play = document.getElementById("play_pause");
const mute = document.getElementById("mute")

const player = new MediaPlayer({
    el: videoEl,
    plugins: {
        // autoplay: new AutoPlay()
    }
});



play.addEventListener("click", handleVideo);
mute.addEventListener("click", handleMute)


function handleVideo() {
    player.isPlaying() ? player.pause() : player.play();
}

function handleMute() {
    player.handleMute()
}

