import { VueElement, createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'
import axios from 'axios'
import store from './store'

const app = createApp(App)

app.use(router)

app.use(store);

app.mount('#app')
