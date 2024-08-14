<template>
    <div class="main">
        <div class="container">
            <header-component></header-component>
            <div class="main__slogan">Добро пожаловать в <span class="logo"><span>My</span>anime</span>, где каждый найдет что-то для себя! От классики до последних новинок — мы собрали лучшие аниме-сериалы для вашего удовольствия. Приятного просмотра и ярких впечатлений!</div>

            <div class="swiper-anime">
                <router-link :to="{ name: 'welcome.show'}" class="swiper-anime__title">
                    Новые эпизоды
                </router-link>
                <div class="swiper-container">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide" v-for="anime in allAnime">
                            <router-link :to="{ name: 'anime.episodes', params: { name: anime.alias } }">
                                <div class="rating" v-if="anime.age_rating">{{ anime.age_rating.label }}</div>
                                <div class="episode" v-if="!anime.loader">{{ anime.latest_episode.ordinal }} серия</div>
                                <div class="content" v-if="!anime.loader">
                                    <div class="name">{{ anime.name.main }}</div>
                                    <div class="content__data" v-if="!anime.loader">
                                        <div class="content__data-date">
                                            <span>{{ anime.year }}</span>
                                            <span>{{ anime.season.description }}</span>
                                            <span>{{ anime.type.description }}</span>
                                        </div>
                                        <div class="content__data-button"><img src="/images/icons/play.svg"> смотреть</div>
                                    </div>
                                </div>
                                <img class="poster" :src="anime.poster.src" v-if="!anime.loader && anime.poster.src">
                                <div class="loader" v-if="anime.loader"></div>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <img src="https://i.playground.ru/p/cqwTrXJ66pedXRxb7Klwdg.png" class="main__bg">
    </div>
</template>
<script>
import HeaderComponent from "../layouts/HeaderComponent.vue";
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

export default {
    components: {
        HeaderComponent
    },

    data() {
        return {
            allAnime: [
                {loader: true},
                {loader: true},
                {loader: true},
            ],
        }
    },

    mounted() {
        new Swiper('.swiper-container', {
            slidesPerView: 3,
            spaceBetween: 15,
            direction: 'horizontal',
        });

        this.getNewAnimeSeries();
    },

    methods: {
        getNewAnimeSeries() {
            let main = this;
            axios.get('/api/anime/new')
                .then(function (response) {
                    main.allAnime = response.data.map(function(anime) {
                        anime.loader = false;
                        return anime;
                    });
                })
                .catch(function (error) {
                    console.log(error)
                })
        }
    }
}
</script>



