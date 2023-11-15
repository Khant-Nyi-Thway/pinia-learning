import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

createApp(App)
.use(createPinia())
.mount('#app')


import 'bootstrap/dist/js/bootstrap.bundle.min.js';
