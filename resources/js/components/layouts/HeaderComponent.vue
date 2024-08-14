<template>
    <header>
        <router-link :to="{name: 'welcome.show' }" class="logo"><span>My</span>Anime</router-link>
        <div class="search">
            <img src="/images/icons/search.svg">
            <input type="text" placeholder="Поиск...">
        </div>
        <router-link :to="{name: 'welcome.show' }" class="user">M</router-link>
    </header>
</template>

<script setup>

</script>
