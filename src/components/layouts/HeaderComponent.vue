<template>
  <header>
    <RouterLink :to="{ name: 'welcome' }" class="logo"><span>My</span>Anime</RouterLink>
    <div class="search">
      <img src="/images/icons/search.svg" />
      <input type="text" placeholder="Поиск..." />
    </div>
    <a class="user">M</a>
  </header>
</template>
