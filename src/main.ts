import { createApp } from 'vue'
import { createHead } from '@vueuse/head'
import './style.css'
import App from './App.vue'
import router from './router'
import vLazy from './directives/vLazy'

const app = createApp(App)
const head = createHead()

app.use(router)
app.use(head)
app.directive('lazy', vLazy)
app.mount('#app')
