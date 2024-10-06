<template>
    <div class="player" ref="player">
        <span class="loader" v-if="isBuffering || loadVideo"></span>
        <div class="overlay"></div>
        <video ref="video" @click="togglePlayPause" playsinline></video>
        <div class="controls">
            <button class="primary" v-if="isOpening" @click="skipOpening">Пропустить опенинг</button>
            <div class="controls__line" @click="seekVideo($event)">
                <div class="controls__line-smallLine" ref="opening"></div>
                <div class="controls__line-smallLine" ref="ending"></div>
                <div class="controls__line-progress" :style="{ width: progressWidth + '%' }"></div>
                <div
                    v-for="(buffer, index) in bufferedRanges"
                    :key="index"
                    class="controls__line-buffer"
                    :style="{ left: buffer.start + '%', width: buffer.width + '%' }"
                ></div>
            </div>
            <div class="controls__buttons">
                <div class="controls__buttons-list">
                    <div class="time">{{ formattedTime(currentTime) }} / {{ formattedTime(durationVideo) }}</div>
                </div>
                <div class="controls__buttons-play" @click="togglePlayPause">
                    <img src="/images/player/play.svg" v-if="!isVideoPlaying">
                    <img src="/images/player/pause.svg" v-if="isVideoPlaying">
                </div>
                <div class="controls__buttons-list">
                    <div class="control"><img src="/images/player/volume/volume-high.svg"></div>
                    <div class="control"><img src="/images/player/settings.svg"></div>
                    <div class="control" @click="fullScreen"><img src="/images/player/full-screen.svg"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Hls from "hls.js";

export default {
    props: {
        anime_data: {
            required: true,
        }
    },

    data() {
        return {
            video: null,
            loadVideo: true,
            durationVideo: 0,
            currentTime: 0,
            bufferedWidth: 0,
            bufferedRanges: [],
            isBuffering: false,
            isVideoPlaying: false,
        }
    },

    computed: {
        progressWidth() {
            return (this.currentTime / this.durationVideo) * 100;
        },

        isOpening() {
            const openingStart = this.anime_data.opening.start;
            const openingEnd = this.anime_data.opening.stop;
            return this.currentTime >= openingStart && this.currentTime < openingEnd;
        },

        isPlaying() {
            return this.$refs.video && !this.$refs.video.paused;
        },
    },

    mounted() {
        const video = this.$refs.video;

        this.initializeVideo();
        video.addEventListener('play', this.handlePlayPauseEvent);
        video.addEventListener('pause', this.handlePlayPauseEvent);
    },

    methods: {
        handlePlayPauseEvent() {
            this.isVideoPlaying = !this.$refs.video.paused;
        },

        isIOS() {
            return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
        },

        fullScreen() {
            const player = this.$refs.player;
            const video = this.$refs.video;

            this.handleFullScreen(this.isIOS() ? video : player);
        },

        handleFullScreen(element) {
            if (document.fullscreenElement) this.exitFullScreen();
            else this.enterFullScreen(element);
        },

        enterFullScreen(element) {
            if (element.requestFullscreen) {
                element.requestFullscreen();
            } else if (element.webkitRequestFullscreen) {
                element.webkitRequestFullscreen();
            } else if (element.mozRequestFullScreen) {
                element.mozRequestFullScreen();
            } else if (element.msRequestFullscreen) {
                element.msRequestFullscreen();
            } else if (element.webkitEnterFullscreen) {
                element.webkitEnterFullscreen();
            }
        },

        exitFullScreen() {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
        },

        formattedTime(timeInSeconds) {
            const hours = Math.floor(timeInSeconds / 3600);
            const minutes = Math.floor((timeInSeconds % 3600) / 60);
            const seconds = Math.floor(timeInSeconds % 60);

            const formattedHours = hours > 0 ? String(hours).padStart(2, '0') + ':' : '';
            const formattedMinutes = String(minutes).padStart(2, '0');
            const formattedSeconds = String(seconds).padStart(2, '0');

            return `${formattedHours}${formattedMinutes}:${formattedSeconds}`;
        },

        initializeVideo() {
            this.video = {
                hls_480: this.anime_data.hls_480 ?? null,
                hls_720: this.anime_data.hls_720 ?? null,
                hls_1080: this.anime_data.hls_1080 ?? null,
            };
            this.durationVideo = this.anime_data.duration;

            if (this.anime_data.opening && this.anime_data.opening.start) this.setLinePosition(this.anime_data.opening, this.$refs.opening);
            if (this.anime_data.ending && this.anime_data.ending.start) this.setLinePosition(this.anime_data.ending, this.$refs.ending);

            const video = this.$refs.video;
            video.addEventListener('progress', this.updateBuffered);
            video.addEventListener('timeupdate', this.updateTime);
            video.addEventListener('waiting', this.handleBuffering);
            video.addEventListener('stalled', this.handleBuffering);
            video.addEventListener('playing', this.clearBuffering);
            video.addEventListener('error', this.handleVideoError);

            this.uploadingVideo();
        },

        setLinePosition(data, refElement) {
            refElement.style.width = `${(data.stop - data.start) / this.durationVideo * 100}%`;
            refElement.style.left = `${data.start / this.durationVideo * 100}%`;
        },

        uploadingVideo() {
            if (Hls.isSupported()) {
                const video = this.$refs.video;
                const hls = new Hls();
                hls.loadSource(this.video.hls_480);
                hls.attachMedia(video);

                hls.on(Hls.Events.MANIFEST_PARSED, () => {
                    this.loadVideo = false;
                });
            }
        },

        togglePlayPause() {
            const video = this.$refs.video;

            if (video.paused) video.play()
            else video.pause();
        },

        skipOpening() {
            this.$refs.video.currentTime = this.anime_data.opening.stop;
            this.currentTime = this.anime_data.opening.stop;
        },

        updateTime() {
            const video = this.$refs.video;
            if (video && video.currentTime) this.currentTime = video.currentTime;
        },

        seekVideo(event) {
            const slider = event.currentTarget;
            const rect = slider.getBoundingClientRect();
            const offsetX = event.clientX - rect.left;
            const newTime = (offsetX / slider.offsetWidth) * this.durationVideo;

            this.$refs.video.currentTime = newTime;
            this.currentTime = newTime;
        },

        updateBuffered() {
            const video = this.$refs.video;
            const buffered = video.buffered;
            const duration = video.duration;
            this.bufferedRanges = [];

            for (let i = 0; i < buffered.length; i++) {
                const start = (buffered.start(i) / duration) * 100;
                const end = (buffered.end(i) / duration) * 100;
                const width = end - start;

                this.bufferedRanges.push({
                    start,
                    width
                });
            }
        },

        handleBuffering() {
            this.isBuffering = true;
        },

        clearBuffering() {
            this.isBuffering = false;
        },

        handleVideoError() {
            this.isBuffering = false;
            alert("There was an error loading the video. Please check your connection and try again.");
        }
    }
}
</script>
