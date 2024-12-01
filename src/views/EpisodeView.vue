<template>
  <div class="episodes">
    <div class="container">
      <HeaderComponent />
      <div class="episodes__player">
        <iframe v-if="url_test" :src="url_test" style="width: 100%; height: 100%;"></iframe>
        <Player
          v-if="anime_data"
          :key="anime_data.ordinal"
          :anime_data="anime_data"
          :autoplay="autoplay"
        />
      </div>
      <EpisodesInfo
        v-if="anime_data"
        :episodes="anime_data.release.episodes"
        type="small"
        :active_episode="anime_data.ordinal - 1"
      />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import HeaderComponent from '../components/layouts/HeaderComponent.vue'
import Player from '../components/layouts/Player.vue'
import EpisodesInfo from '../components/layouts/EpisodesInfo.vue'

export default {
  components: {
    Player,
    HeaderComponent,
    EpisodesInfo,
  },

  data() {
    return {
      anime_data: null,
      animeId: this.$route.params.id,
      autoplay: false,
      url_test: null,
    }
  },

  watch: {
    '$route.params.id': {
      immediate: true,
      handler(newId) {
        this.animeId = newId
        this.fetchAnimeData()
      },
    },
  },

  mounted() {
    this.fetchAnimeData()
  },

  methods: {
    fetchAnimeData() {
      axios
        .get(`https://anilibria.top/api/v1/anime/releases/episodes/${this.animeId}`)
        .then((response) => {
          this.anime_data = response.data
        })
        .catch((error) => {
          console.log(error)
        })

      // axios
      //   .get('https://kodikapi.com/list', {
      //     params: {
      //       token: '10387cdefef099e7a5e4fe8e54d54d17',
      //       types: 'anime-serial',
      //       title: 'yfhenj',

      //       // with_seasons: true,
      //       // with_episodes: true,
      //       // limit: 1,
      //       // with_page_links: true,
      //     },
      //   })
      //   .then((r) => {
      //     console.log(r.data.results[0]);

      //     this.url_test = r.data.results[1].link
      //     // this.test()
      //     // console.log(r.data.results[0])
      //   })
      //   .catch((e) => {
      //     console.log(e)
      //   })
    },
  },
}
</script>
