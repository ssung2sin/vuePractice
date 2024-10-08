import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router/index.js'

createApp(App).app.use(router).mount('#app')
