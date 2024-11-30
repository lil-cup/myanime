import { createRouter, createWebHistory } from 'vue-router'
import WelcomeView from '../views/WelcomeView.vue'
import EpisodesView from '../views/EpisodesView.vue'
import EpisodeView from '../views/EpisodeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: WelcomeView,
    },
    {
      path: '/anime/:name/episodes',
      component: EpisodesView,
      name: 'anime.episodes',
    },
    {
      path: '/anime/episode/:id',
      component: EpisodeView,
      name: 'anime.episode',
    },
  ],
})

export default router
