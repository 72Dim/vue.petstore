import './assets/main.css'
import './assets/app.css'

// import { createApp } from 'vue'
import * as Vue from 'vue'
import App from './App.vue'
import router from './router'

// import Header from './Header.vue'
// import Form from '@/components/Header'
// import Form from './Form.vue'
// import Main from './Main.vue'

// Vue.config.productionTip = false

// const app = createApp(App)
const app = Vue.createApp({
   el: '#app',
   router,
   template: '<App/>',
   components: { App }
});
// app.component('TodoDeleteButton', TodoDeleteButton)
// app.use(router)

/* Eslint-Disable No New */
// new Vue({
//    el: '#app',
//    router,
//    template: '<App/>',
//    components: { App }
// })
// .mount('#app');
app.mount('#app')
