<template>
  <div class="episodes">
    <div class="container">
      <HeaderComponent />
      <div class="episodes__player">
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
import HeaderComponent from '@/components/layouts/HeaderComponent.vue'
import Player from '@/components/layouts/Player.vue'
import EpisodesInfo from '@/components/layouts/EpisodesInfo.vue'
import {getAnimeEpisode} from "@/api/api_anilibria.js";

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
      getAnimeEpisode(this.animeId).then((response) => {
          this.anime_data = response.data
        })
        .catch((error) => {
          console.log(error)
        })
    },
  },
}
</script>
