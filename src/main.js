import './assets/styles/base.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)
app.config.globalProperties.$ani_url_site = import.meta.env.VITE_ANILIBRIA_SITE_URL
app.mount('#app')
