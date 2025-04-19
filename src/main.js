import './assets/main.css'
import './assets/app.css'

// import Vue from 'vue' // так не работает
// import * as Vue from 'vue' // работает
import { createApp } from 'vue' // рекомендуемый способ создания компонентов Vue

import App from './App.vue'
// import router from './router'

// import Header from './Header.vue'
// import Form from '@/components/Header'
// import Form from './Form.vue'
// import Main from './Main.vue'

// Vue.config.productionTip = false

const app = createApp({
      el: '#app',
   // router,
   template: '<App/>', // `<p>Helow</p>`,
   // components: { App }
});
app.component('App', App);
// const app = Vue.createApp({
//    el: '#app',
//    // router,
//    template: '<App/>',
//    components: { App }
// });
app.mount('#app')

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
