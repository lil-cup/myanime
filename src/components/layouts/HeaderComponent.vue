<template>
  <header>
    <RouterLink :to="{ name: 'welcome' }" class="logo"><span>My</span>Anime</RouterLink>
    <div class="search">
      <img src="/images/icons/search.svg" />
      <input type="text" placeholder="Поиск..." v-model="search" @input="getNewAnimeSeries" />
      <div class="list" v-if="search">
        <RouterLink
          @click="clearSearch"
          v-for="(anime, index) in list"
          :to="{ name: 'anime.episodes', params: { name: anime.alias } }"
          class="list__item"
          :key="index"
        >
          <img :src="ani_url + anime.poster.src" class="list__item-poster" />
          <div>
            <h3>{{ anime.name.main }}</h3>
            <div class="list__item-description">{{ truncateDescription(anime.description) }}</div>
            <div class="list__item-data">
              <div class="item">{{ anime.year }}</div>
              <div class="item">{{ anime.season.description }}</div>
              <div class="item">{{ anime.type.value }}</div>
            </div>
          </div>
        </RouterLink>
        <div v-show="list.length === 0" class="not_found">
          <img src="/images/not_found.gif" />
          <span
            >По вашему запросу <br />
            ничего не найдено</span
          >
        </div>
      </div>
    </div>
    <a class="user">M</a>
  </header>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      search: '',
      ani_url: 'https://anilibria.top',
      list: null,
    }
  },

  methods: {
    getNewAnimeSeries() {
      if (this.search.trim()) {
        axios
          .get('https://anilibria.top/api/v1/app/search/releases', {
            params: {
              query: this.search,
            },
          })
          .then((r) => {
            this.list = r.data
            console.log(r.data)
          })
          .catch((e) => {
            console.log(e)
          })
      }
    },

    truncateDescription(description) {
      if (description && description.length > 20) {
        return description.substring(0, 150) + '...'
      }
      return description
    },

    clearSearch() {
      this.search = null
    },
  },
}
</script>
