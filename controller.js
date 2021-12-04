import MediaPlayer from "./MediaPlayer";
import AutoPlay from "./plugins/AutoPlay";

const video = document.querySelector("video");
const button = document.getElementById("button");

const player = new MediaPlayer({
    el: video,
});

button.addEventListener("click", handleVideo);
console.log("sadas");

function handleVideo() {
    player.isPlaying() ? player.pause() : player.play();
}
