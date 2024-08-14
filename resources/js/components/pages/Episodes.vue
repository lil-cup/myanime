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
            nameAnime: this.$route.params.name,
        }
    },


    mounted() {
            let main = this;
            axios.get(`/api/anime/${main.nameAnime}/episodes`)
                .then(function (response) {
                    console.log(response.data)
                })
                .catch(function (error) {
                    console.log(error)
                })
    },
}
</script>



