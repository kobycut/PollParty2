import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import './assets/base.scss'
import './assets/home.scss'
import './assets/polls.scss'
import './assets/createPoll.scss'
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
