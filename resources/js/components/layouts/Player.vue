<template>
    <div class="player" ref="player">
        <span class="loader" v-if="isBuffering || loadVideo"></span>
        <div class="overlay"></div>
        <video ref="video" @click="togglePlayPause" playsinline></video>
        <div class="controls">
            <button class="primary" v-if="isOpening" @click="skipOpening">Пропустить опенинг</button>
            <div class="controls__line" @click="seekVideo($event)">
                <div class="controls__line-smallLine" ref="opening" v-show="isShowMarkers"></div>
                <div class="controls__line-smallLine" ref="ending" v-show="isShowMarkers"></div>
                <div class="controls__line-progress" :style="{ width: progressWidth + '%' }"></div>
                <div
                    v-for="(buffer, index) in bufferedRanges"
                    :key="index"
                    class="controls__line-buffer"
                    :style="{ left: buffer.start + '%', width: buffer.width + '%' }"
                >
                </div>
            </div>
            <div class="controls__buttons">
                <div class="controls__buttons-list">
                    <div class="time">{{ formattedTime(currentTime) }} / {{ formattedTime(durationVideo) }}</div>
                </div>
                <div class="controls__buttons-play" @click="togglePlayPause">
                    <img src="/images/player/play.svg" v-show="!isVideoPlaying">
                    <img src="/images/player/pause.svg" v-show="isVideoPlaying">
                </div>
                <div class="controls__buttons-list">
                    <div class="control volume" v-if="!isMobile">
                        <img src="/images/player/volume/volume-mute.svg" v-show="volume === 0">
                        <img src="/images/player/volume/volume-medium.svg" v-show="volume !== 0 && volume < 0.65">
                        <img src="/images/player/volume/volume-high.svg" v-show="volume >= 0.65">
                        <div class="volume-slider" @click="setVolume($event)">
                            <span>{{ `${Math.round(volume * 100)}%` }}</span>
                            <div class="volume-slider__progress" :style="{ height: volume * 100 + '%' }"></div>
                        </div>
                    </div>
                    <div class="control">
                        <img src="/images/player/settings.svg">
                        <div class="block">
                            <div class="settings">
                                <div class="settings__content">
                                    <span>Скорость</span>
                                    <p>1x</p>
                                </div>
                                <div class="settings__content">
                                    <span>Источник</span>
                                    <p>
                                        {{ `${source}p` }}
                                    </p>
                                    <div class="list" v-if="video">
                                        <div
                                            class="list__item"
                                            v-for="video_source in Object.keys(video)"
                                            :class="{active: source === video_source}"
                                            @click="changeVideoSource(video_source)">
                                            {{ `${video_source}p` }}
                                        </div>
                                    </div>
                                </div>
                                <div class="settings__content" @click="skipOp">
                                    <span>Пропускать опенинг</span>
                                    <div class="settings__content-control" ref="skip"><i ref="skip_circle"></i></div>
                                </div>
                                <div class="settings__content">
                                    <span>Автовоспроизведение</span>
                                    <div class="settings__content-control"><i></i></div>
                                </div>
                                <div class="settings__content" @click="showMarkers">
                                    <span>Показать маркеры</span>
                                    <div class="settings__content-control" ref="markers"><i ref="markers_circle"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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
            isSkipOpening: false,
            isShowMarkers: false,
            video: null,
            loadVideo: true,
            durationVideo: 0,
            currentTime: 0,
            bufferedWidth: 0,
            bufferedRanges: [],
            isBuffering: false,
            isVideoPlaying: false,
            volume: 1,
            source: null,
        }
    },

    watch: {
        shouldSkipOpening(newVal) {
            if (newVal) this.skipOpening();
        }
    },

    computed: {
        shouldSkipOpening() {
            return this.isOpening && this.isSkipOpening;
        },

        progressWidth() {
            return (this.currentTime / this.durationVideo) * 100;
        },

        isOpening() {
            const openingStart = this.anime_data.opening?.start;
            const openingEnd = this.anime_data.opening?.stop;
            return this.currentTime >= openingStart && this.currentTime < openingEnd;
        },

        isPlaying() {
            return this.$refs.video && !this.$refs.video.paused;
        },

        isMobile() {
            return /Mobi|Android|iPhone|iPad|iPod/.test(navigator.userAgent);
        },
    },

    mounted() {
        const video = this.$refs.video;

        this.initializeVideo();
        video.addEventListener('play', this.handlePlayPauseEvent);
        video.addEventListener('pause', this.handlePlayPauseEvent);
    },

    methods: {
        skipOp() {
            this.isSkipOpening = !this.isSkipOpening;
            this.$refs.skip.classList.toggle('active');
            this.$refs.skip_circle.classList.toggle('active');
        },

        showMarkers() {
            this.isShowMarkers = !this.isShowMarkers;
            this.$refs.markers.classList.toggle('active');
            this.$refs.markers_circle.classList.toggle('active');
        },

        setVolume(event) {
            const slider = this.$el.querySelector('.volume-slider');
            const rect = slider.getBoundingClientRect();
            const offsetY = rect.bottom - event.clientY;

            this.volume = Math.max(0, Math.min(1, offsetY / slider.offsetHeight));
            this.$refs.video.volume = this.volume;
        },

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
            this.video = Object.keys(this.anime_data)
                .filter(key => key.startsWith('hls_'))
                .reduce((hls, key) => {
                    const resolution = key.replace('hls_', '');
                    const value = this.anime_data[key];
                    if (value) hls[resolution] = value;
                    return hls;
                }, {});

            this.source = Object.keys(this.video)[0];
            this.durationVideo = this.anime_data.duration;

            if (this.anime_data.opening && this.anime_data.opening.start) this.setLinePosition(this.anime_data.opening, this.$refs.opening);
            if (this.anime_data.ending && this.anime_data.ending.start) this.setLinePosition(this.anime_data.ending, this.$refs.ending);

            const video = this.$refs.video;
            video.volume = this.volume;
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

        changeVideoSource(video_source) {
            if (this.video[video_source]) {
                const currentTime = this.$refs.video.currentTime;
                this.source = video_source;
                this.uploadingVideo();

                this.$nextTick(() => {
                    this.$refs.video.currentTime = currentTime;
                    if (this.isVideoPlaying) this.$refs.video.play();
                });
            }
        },

        uploadingVideo() {
            if (Hls.isSupported()) {
                const video = this.$refs.video;
                const hls = new Hls();

                hls.loadSource(this.video[this.source]);
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
