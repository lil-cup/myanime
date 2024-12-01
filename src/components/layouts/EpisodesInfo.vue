<template>
  <div>
    <div class="episodes__filters">
      <div @click="toggleSort" class="episodes__filters-filter">
        <img src="/images/filters/filter-ascending.svg" :class="{ 'active': !isAscending }" />
      </div>
    </div>

    <div :class="`episodes__episodes ${type}`">
      <div :class="`episodes__episodes-episode ${type} ${index === active_episode ? 'active' : ''}`" v-for="(episode, index) in sortedEpisodes" :key="index">
        <RouterLink :to="{ name: 'anime.episode', params: { id: episode.id } }">
          <img v-if="episode.preview.src" :src="ani_url + episode.preview.src" :class="`bg ${type}`" />
          <img v-if="!episode.preview.src" src="/favicon.svg" :class="`bg-not ${type}`" />
          <div class="content">
            <div class="content__title">
              <div v-if="episode.name" class="content__title-name">{{ episode.name }}</div>
              <div class="content__title-num">{{ episode.ordinal }} эпизод</div>
            </div>
            <div class="content__time">{{ formatTime(episode.duration) }}</div>
          </div>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    episodes: {
      required: true,
      type: Array,
    },

    type: {
      required: true,
      type: String,
    },

    active_episode: {
      default: false,
    }
  },

  data() {
    return {
      ani_url: 'https://anilibria.top',
      isAscending: true,
    }
  },

  computed: {
    sortedEpisodes() {
      return this.episodes.slice().sort((a, b) => {
        return this.isAscending ? a.ordinal - b.ordinal : b.ordinal - a.ordinal;
      });
    }
  },

  methods: {
    formatTime(seconds) {
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = seconds % 60;
      return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
    },

    toggleSort() {
      this.isAscending = !this.isAscending;
    }
  },
}
</script>
