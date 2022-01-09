"use strict";
exports.__esModule = true;
var MediaPlayer = /** @class */ (function () {
    function MediaPlayer(config) {
        this.media = config.el;
        this.plugins = config.plugins || [];
        this.initPlayer();
        this.initPlugins();
    }
    MediaPlayer.prototype.initPlayer = function () {
        this.container = document.createElement("div");
        this.container.style.position = "relative";
        this.media.parentNode.insertBefore(this.container, this.media);
        this.container.appendChild(this.media);
    };
    MediaPlayer.prototype.play = function () {
        this.media.play();
    };
    MediaPlayer.prototype.pause = function () {
        this.media.pause();
    };
    MediaPlayer.prototype.isPlaying = function () {
        var isPlaying = this.media.currentTime > 0 &&
            !this.media.paused &&
            !this.media.ended &&
            this.media.readyState > 2;
        return isPlaying;
    };
    MediaPlayer.prototype.mute = function () {
        this.media.muted = true;
    };
    MediaPlayer.prototype.unmute = function () {
        this.media.muted = false;
    };
    MediaPlayer.prototype.handleMute = function () {
        this.media.muted ? this.unmute() : this.mute();
    };
    MediaPlayer.prototype.initPlugins = function () {
        var _this = this;
        if (!!this.plugins.length) {
            this.plugins.forEach(function (plugin) {
                console.log("this ", _this);
                plugin.run(_this);
            });
        }
    };
    return MediaPlayer;
}());
exports["default"] = MediaPlayer;
