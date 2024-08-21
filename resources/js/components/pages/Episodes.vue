<template>
    <div class="episodes">
        <div class="container">
            <header-component></header-component>
            <div class="episodes__episode">
                <div class="episodes__episode-title" v-if="animeInfo">
                    <div class="rating" v-if="animeInfo.age_rating">{{ animeInfo.age_rating.label }}</div>
                    <img class="image" v-if="animeInfo" :src="ani_url + animeInfo.poster.src">
                    <router-link
                        class="button"
                        :to="animeInfo ? { name: 'anime.episode', params: { id: animeInfo.episodes[0].id } } : { name: 'welcome.show' }">
                        <img src="/images/icons/play.svg">
                        первый эпизод
                    </router-link>
                    <div class="content">
                        <div>
                            <div class="content__name">{{ animeInfo.name.main }}</div>
                            <div class="content__name en">{{ animeInfo.name.english }}</div>
                        </div>
                        <div class="all-text">
                            <div class="content__text">Дата выхода: <span>{{ animeInfo.year }}</span></div>
                            <div class="content__text">Сезон: <span>{{ animeInfo.season.description }}</span></div>
                            <div class="content__text" v-if="animeInfo.type.description">Тип:
                                <span>{{ animeInfo.type.description }}</span></div>
                        </div>
                    </div>
                </div>
                <div class="episodes__episode-description" v-if="animeInfo">{{ animeInfo.description }}</div>
            </div>
            <div class="episodes__filters">
                <div class="episodes__filters-filter"><img src="/images/filters/filter-ascending.svg"></div>
            </div>
            <div class="episodes__episodes" v-if="animeInfo">
                <div class="episodes__episodes-episode" v-for="episode in animeInfo.episodes">
                    <img :src="ani_url + episode.preview.src" class="bg">
                    <router-link :to="{ name: 'anime.episode', params: { id: episode.id } }">
                        <div class="content">
                            <div class="content__title">
                                <div class="content__title-name">{{ episode.name }}</div>
                                <div class="content__title-num">{{ episode.ordinal }} эпизод</div>
                            </div>
                            <div class="content__time">{{ formatTime(episode.duration) }}</div>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

import HeaderComponent from "../layouts/HeaderComponent.vue";

export default {
    components: {
        HeaderComponent
    },

    data() {
        return {
            ani_url: ani_url,
            animeInfo: null,
            nameAnime: this.$route.params.name,
        }
    },

    mounted() {
        axios.get(`/api/anime/${this.nameAnime}/episodes`)
            .then(response => {
                this.animeInfo = response.data;
                // console.log(response.data);
            })
            .catch(error => {
                // console.log(error)
            })
    },
    methods: {
        formatTime(seconds) {
            const minutes = Math.floor(seconds / 60);
            const remainingSeconds = seconds % 60;
            return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
        }
    },
}
</script>



