<template>
    <div class="episodes">
        <div class="container">
            <header-component/>
            <div class="episodes__player">
                <Player v-if="anime_data" :anime_data="anime_data"/>
            </div>
        </div>
    </div>
</template>

<script>
import HeaderComponent from "../layouts/HeaderComponent.vue";
import Hls from "hls.js";
import Player from "../layouts/Player.vue";

export default {
    components: {
        Player,
        HeaderComponent,
    },

    data() {
        return {
            anime_data: null,
            animeId: this.$route.params.id,
        }
    },

    mounted() {
        axios.get(`/api/anime/episode/${this.animeId}`)
            .then(response => {
                this.anime_data = response.data;
            })
            .catch(error => {
                console.log(error)
            })
    },
}
</script>



