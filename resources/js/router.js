import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',

    routes: [
        {
            path: '/',
            component: () => import('./components/pages/Welcome.vue'),
            name: 'welcome.show',
        },
        {
            path: '/anime/:name/episodes',
            component: () => import('./components/pages/Episodes.vue'),
            name: 'anime.episodes',
        },

        {
            path: '/anime/episode/:id',
            component: () => import('./components/pages/Episode.vue'),
            name: 'anime.episode',
        },
    ],
});
