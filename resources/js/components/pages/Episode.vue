<template>
    <div class="container">
        <header-component></header-component>
    </div>
</template>

<script>
import HeaderComponent from "../layouts/HeaderComponent.vue";

export default {
    components: {
        HeaderComponent
    },

    data() {
        return {
            ani_url: ani_url,
            animeInfo: null,
            animeId: this.$route.params.id,
        }
    },

    mounted() {
        axios.get(`/api/anime/episode/${this.animeId}`)
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.log(error)
            })
    },
}
</script>



