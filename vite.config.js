import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      },
    },
  },

  server: {
    host: '0.0.0.0',
    port: 80,
    watch: {
      usePolling: true,
    },
  },

  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: [
      {
        find: /^@nectary\/components\/(.*)$/,
        replacement: "@nectary/components/$1/index",
      },
    ],
  },
})
