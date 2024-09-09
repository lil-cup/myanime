<!--<template>-->
<!--    <div class="episodes">-->
<!--        <div class="container">-->
<!--            <header-component></header-component>-->
<!--            <div class="episodes__player">-->
<!--                <div class="episodes__player-bg">-->
<!--                    <span class="loader" v-if="isBuffering || loadVideo"></span>-->
<!--                    <video ref="video" @click="startVideo"></video>-->
<!--                    <div class="controls">-->
<!--                        <div class="controls__line" @click="seekVideo($event)">-->
<!--                            <div class="controls__line-progress" :style="{ width: progressWidth + '%' }"></div>-->
<!--                            <div class="controls__line-buffer" :style="{ width: bufferedWidth + '%' }"></div>-->
<!--                        </div>-->
<!--                        <div class="controls__play" @click="startVideo">-->
<!--                            <img src="/images/player/play.svg" v-if="isPaused">-->
<!--                            <img src="/images/player/pause.svg" v-if="!isPaused">-->
<!--                        </div>-->
<!--                        <div>{{ getCurrentTime }} / {{ getDuration }}</div>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->
<!--    </div>-->
<!--</template>-->

<!--<script>-->
<!--import HeaderComponent from "../layouts/HeaderComponent.vue";-->
<!--import Hls from "hls.js";-->

<!--export default {-->
<!--    components: {-->
<!--        HeaderComponent-->
<!--    },-->

<!--    data() {-->
<!--        return {-->
<!--            animeInfo: null,-->
<!--            animeId: this.$route.params.id,-->
<!--            video: null,-->
<!--            loadVideo: true,-->
<!--            isPaused: true,-->
<!--            durationVideo: 0,-->
<!--            currentTime: 0,-->
<!--            bufferedWidth: 0,-->
<!--            isBuffering: false,-->
<!--        }-->
<!--    },-->

<!--    computed: {-->
<!--        getCurrentTime() {-->
<!--            const hours = Math.floor(this.currentTime / 3600);-->
<!--            const minutes = Math.floor((this.currentTime % 3600) / 60);-->
<!--            const remainingSeconds = Math.floor(this.currentTime % 60);-->

<!--            const formattedHours = hours > 0 ? String(hours).padStart(2, '0') + ':' : '';-->
<!--            const formattedMinutes = String(minutes).padStart(2, '0');-->
<!--            const formattedSeconds = String(remainingSeconds).padStart(2, '0');-->

<!--            return `${formattedHours}${formattedMinutes}:${formattedSeconds}`;-->
<!--        },-->

<!--        getDuration() {-->
<!--            const hours = Math.floor(this.durationVideo / 3600);-->
<!--            const minutes = Math.floor((this.durationVideo % 3600) / 60);-->
<!--            const remainingSeconds = this.durationVideo % 60;-->

<!--            const formattedHours = hours > 0 ? String(hours).padStart(2, '0') + ':' : '';-->
<!--            const formattedMinutes = String(minutes).padStart(2, '0');-->
<!--            const formattedSeconds = String(remainingSeconds).padStart(2, '0');-->

<!--            return `${formattedHours}${formattedMinutes}:${formattedSeconds}`;-->
<!--        },-->

<!--        progressWidth() {-->
<!--            return (this.currentTime / this.durationVideo) * 100;-->
<!--        },-->
<!--    },-->

<!--    mounted() {-->
<!--        axios.get(`/api/anime/episode/${this.animeId}`)-->
<!--            .then(response => {-->
<!--                this.video = {-->
<!--                    'hls_480': response.data.hls_480 ?? null,-->
<!--                    'hls_720': response.data.hls_720 ?? null,-->
<!--                    'hls_1080': response.data.hls_1080 ?? null,-->
<!--                }-->
<!--                this.durationVideo = response.data.duration;-->

<!--                this.uploadingVideo();-->
<!--            })-->
<!--            .catch(error => {-->
<!--                console.log(error)-->
<!--            })-->

<!--        const video = this.$refs.video;-->
<!--        video.addEventListener('timeupdate', this.updateTime);-->
<!--        video.addEventListener('progress', this.updateBuffered);-->
<!--        video.addEventListener('waiting', this.handleBuffering);-->
<!--        video.addEventListener('stalled', this.handleBuffering);-->
<!--        video.addEventListener('playing', this.clearBuffering);-->
<!--        video.addEventListener('error', this.handleVideoError);-->
<!--    },-->

<!--    methods: {-->
<!--        uploadingVideo() {-->
<!--            if (Hls.isSupported()) {-->
<!--                const video = this.$refs.video;-->
<!--                let hls = new Hls();-->
<!--                hls.loadSource(this.video.hls_480);-->
<!--                hls.attachMedia(video);-->

<!--                hls.on(Hls.Events.MANIFEST_PARSED, () => {-->
<!--                    this.loadVideo = false;-->
<!--                });-->
<!--            }-->
<!--        },-->

<!--        startVideo() {-->
<!--            const video = this.$refs.video;-->

<!--            if (video.paused) {-->
<!--                video.play().then(() => {-->
<!--                    this.isPaused = false;-->
<!--                }).catch(error => {-->
<!--                    console.error("Ошибка при попытке воспроизвести видео:", error);-->
<!--                });-->
<!--            } else {-->
<!--                video.pause();-->
<!--                this.isPaused = true;-->
<!--            }-->
<!--        },-->

<!--        updateTime() {-->
<!--            this.currentTime = this.$refs.video.currentTime;-->
<!--        },-->

<!--        seekVideo(event) {-->
<!--            const slider = event.currentTarget;-->
<!--            const rect = slider.getBoundingClientRect();-->
<!--            const offsetX = event.clientX - rect.left;-->
<!--            const newTime = (offsetX / slider.offsetWidth) * this.durationVideo;-->

<!--            this.$refs.video.currentTime = newTime;-->
<!--            this.currentTime = newTime;-->
<!--        },-->

<!--        updateBuffered() {-->
<!--            const video = this.$refs.video;-->
<!--            if (video.buffered.length > 0) {-->
<!--                const bufferedEnd = video.buffered.end(video.buffered.length - 1);-->
<!--                this.bufferedWidth = (bufferedEnd / video.duration) * 100;-->
<!--            }-->
<!--        },-->

<!--        handleBuffering() {-->
<!--            this.isBuffering = true;-->
<!--        },-->

<!--        clearBuffering() {-->
<!--            this.isBuffering = false;-->
<!--        },-->

<!--        handleVideoError() {-->
<!--            this.isBuffering = false;-->
<!--            alert("There was an error loading the video. Please check your connection and try again.");-->
<!--        }-->
<!--    },-->
<!--}-->
<!--</script>-->



