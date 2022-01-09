"use strict";
exports.__esModule = true;
var AutoPause = /** @class */ (function () {
    function AutoPause() {
        this.threshold = 0.25;
        this.handleIntersection = this.handleIntersection.bind(this);
        this.handleVisibilityChange = this.handleVisibilityChange.bind(this);
    }
    AutoPause.prototype.run = function (player) {
        this.player = player;
        var obeserver = new IntersectionObserver(this.handleIntersection, {
            threshold: this.threshold
        });
        obeserver.observe(this.player.media);
        document.addEventListener("visibilitychange", this.handleVisibilityChange);
    };
    // Entries are the observed objects (in this case we have just one)
    AutoPause.prototype.handleIntersection = function (entries) {
        var entry = entries[0];
        var isVisible = entry.intersectionRatio >= this.threshold;
        isVisible ? this.player.play() : this.player.pause();
    };
    AutoPause.prototype.handleVisibilityChange = function () {
        var isVisible = document.visibilityState === "visible";
        !isVisible ? this.player.pause() : this.player.play();
    };
    return AutoPause;
}());
exports["default"] = AutoPause;
