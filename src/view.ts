//TODO investigate why this get breaks without the .ts suffix
import AutoPlay from "../plugins/AutoPlay";
import MediaPlayer from "./MediaPlayer";
import AutoPause from "../plugins/AutoPause";

const videoEl = document.querySelector("video");
const play = document.getElementById("play_pause");
const mute = document.getElementById("mute");

const player = new MediaPlayer({
  el: videoEl,
  plugins: [new AutoPause(), new AutoPlay()],
});

play.addEventListener("click", handleVideo);
mute.addEventListener("click", handleMute);

function handleVideo() {
  player.isPlaying() ? player.pause() : player.play();
}

function handleMute() {
  player.handleMute();
}


// TODO fix cache invalidation
// if ("serviceWorker" in navigator) {
//   console.log("entre")
//   try {
//     navigator.serviceWorker.register("/sw.ts");
//   } catch (error) {
//     throw new Error(`An error has occured trying to register the service \n
//                         details: ${error.message} `);
//   }
// }
