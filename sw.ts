const WATCHED_METHODS = ["GET"]
const VERSION = "v1"

async function precache() {
    const cache = await caches.open(VERSION);
    console.log("cache", cache);
    return cache.addAll([
        "/",
        "/index.html",
        "/src/MediaPlayer.js",
        "/src/serviceWorker.js",
        "/src/view.js",
        "/plugins/AutoPause.js",
        "/plugins/AutoPlay.js",
        "/assets/BigBuckBunny.mp4",
        "/assets/index.css"
    ])
}

async function cachedResponse(req) {
    const cache = await caches.open(VERSION)
    const response = await cache.match(req)
    console.log(response);
    return response || fetch(req)
}

async function updateCache(req) {
    const cache = await caches.open(VERSION)
    const response = await cache.match(req)
    return cache.put(req, response)
}

self.addEventListener("install", event => {
    event.waitUntil(precache)
});

self.addEventListener("fetch", event => {
    const req = event.request.method;
    // handles get request
    if (req !== "GET") {
        return
    }
    // if (WATCHED_METHODS.includes(req)) {
    event.respondWith(cachedResponse(req))
    // } else return;
    // update
    event.waitUntil(updateCache)
})

