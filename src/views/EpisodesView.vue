<template>
  <div class="episodes">
    <div class="container">
      <header-component></header-component>
      <div class="episodes__episode">
        <div class="episodes__episode-title" v-if="animeInfo">
          <div class="rating" v-if="animeInfo.age_rating">{{ animeInfo.age_rating.label }}</div>
          <img class="image" v-if="animeInfo" :src="ani_url + animeInfo.poster.src" />
          <RouterLink
            v-if="animeInfo && animeInfo.episodes && animeInfo.episodes.length > 0"
            class="button primary"
            :to="{ name: 'anime.episode', params: { id: animeInfo.episodes[0].id } }"
          >
            <img src="/images/icons/play.svg" />
            Первый эпизод
          </RouterLink>

          <RouterLink
            v-if="(animeInfo.episodes.length === 0)"
            class="button primary"
            :to="{ name: 'welcome' }"
          >
            Временно недоступно
          </RouterLink>
          <div class="content">
            <div>
              <div class="content__name">{{ animeInfo.name.main }}</div>
              <div class="content__name en">{{ animeInfo.name.english }}</div>
            </div>
            <div class="all-text">
              <div class="content__text">
                Дата выхода: <span>{{ animeInfo.year }}</span>
              </div>
              <div class="content__text">
                Сезон: <span>{{ animeInfo.season.description }}</span>
              </div>
              <div class="content__text" v-if="animeInfo.type.description">
                Тип: <span>{{ animeInfo.type.description }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="episodes__episode-description" v-if="animeInfo">
          {{ animeInfo.description }}
        </div>
      </div>
      <EpisodesInfo v-if="animeInfo && animeInfo.episodes.length > 0" :episodes="animeInfo.episodes" type="big" />
    </div>
  </div>
</template>
<script>
import HeaderComponent from '../components/layouts/HeaderComponent.vue'
import EpisodesInfo from '../components/layouts/EpisodesInfo.vue'

import axios from 'axios'

export default {
  components: {
    HeaderComponent,
    EpisodesInfo,
  },

  data() {
    return {
      ani_url: 'https://anilibria.top',
      animeInfo: null,
      nameAnime: this.$route.params.name,
    }
  },

  watch: {
    '$route.params.name': {
      immediate: true,
      handler(newAnime) {
        this.nameAnime = newAnime;
        this.fetchAnimeData();
      }
    }
  },


  methods: {
    fetchAnimeData() {
      axios
      .get(`https://anilibria.top/api/v1/anime/releases/${this.nameAnime}`)
      .then((response) => {
        console.log(response.data)

        this.animeInfo = response.data
      })
      .catch((e) => {
        console.log(e)
      })
    }
  }
}
</script>
