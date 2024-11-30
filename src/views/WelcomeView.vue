<template>
  <div class="main">
    <div class="container">
      <HeaderComponent />
      <div class="main__slogan">
        Добро пожаловать в <span class="logo"><span>My</span>anime</span>, где каждый найдет что-то
        для себя! От классики до последних новинок — мы собрали лучшие аниме-сериалы для вашего
        удовольствия. Приятного просмотра и ярких впечатлений!
      </div>
      <div class="swiper-anime">
        <div class="swiper-slide" v-for="(anime, index) in allAnime" :key="index">
          <RouterLink :to="anime.alias ? { name: 'anime.episodes', params: { name: anime.alias } } : { name: 'welcome' }" class="slide"
>            <div class="rating" v-if="anime.age_rating">{{ anime.age_rating.label }}</div>
            <div class="episode" v-if="!anime.loader">{{ anime.latest_episode.ordinal }} серия</div>
            <div class="content" v-if="!anime.loader">
              <div class="name">{{ anime.name.main }}</div>
              <div class="content__data" v-if="!anime.loader">
                <div class="content__data-date">
                  <span>{{ anime.year }}</span>
                  <span>{{ anime.season.description }}</span>
                  <span>{{ anime.type.description }}</span>
                </div>
                <a class="button primary" style="width: fit-content">
                  <img src="/images/icons/play.svg" /> смотреть
                </a>
              </div>
            </div>
            <img
              class="poster"
              :src="ani_url + anime.poster.src"
              v-if="!anime.loader && anime.poster.src"
            />
            <content-loader
              v-if="anime.loader"
              viewBox="0 0 999 999"
              :speed="1"
              primaryColor="#141414"
              secondaryColor="#212121"
            >
              <rect x="0" y="0" rx="0" ry="0" width="100%" height="100%" />
            </content-loader>
          </RouterLink>
        </div>
      </div>
    </div>
    <img src="/images/top.gif" class="main__bg" />
  </div>
</template>

<script>
import axios from 'axios'
import HeaderComponent from '../components/layouts/HeaderComponent.vue'
import { ContentLoader } from 'vue-content-loader'

export default {
  components: {
    HeaderComponent,
    ContentLoader,
  },

  data() {
    return {
      ani_url: 'https://anilibria.top',
      allAnime: [{ loader: true }, { loader: true }, { loader: true }],
    }
  },

  mounted() {
    this.getNewAnimeSeries()
  },

  methods: {
    getNewAnimeSeries() {
      axios
        .get('https://anilibria.top/api/v1/anime/releases/latest?limit=3')
        .then((r) => {
          this.allAnime = r.data.map(function (anime) {
            anime.loader = false
            return anime
          })
        })
        .catch((error) => {
          console.log(error)
        })
    },
  },
}
</script>
