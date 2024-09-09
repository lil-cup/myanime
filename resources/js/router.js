import Vue from "vue";
import VueRouter from "vue-router";

import Welcome from './components/pages/Welcome.vue';
import Episodes from './components/pages/Episodes.vue';
import Episode from './components/pages/Episode.vue';

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Welcome,
            name: 'welcome.show',
        },
        {
            path: '/anime/:name/episodes',
            component: Episodes,
            name: 'anime.episodes',
        },
        {
            path: '/anime/episode/:id',
            component: Episode,
            name: 'anime.episode',
        },
    ],
});
