import './assets/main.css'
import './assets/app.css'

// import Vue from 'vue' //* так не работает
// import * as Vue from 'vue' //? работает
import { createApp } from 'vue' //todo рекомендуемый способ создания компонентов Vue
// import App from './App.vue'  //? работает
// import router from './router/index' //* не работает
// import router from '../index.js'    //* не работает
// import router from '/src/router/index.js' //? работает
// import router from './router/index.js' //? работает
// import router from './router'           //? работает
import { router } from "./router";     // !!!


import Header from './components/Header.vue' //? работает
// import Form from '@/components/Header'
import Form from './components/Form.vue'
import Main from './components/Main.vue'

// Vue.config.productionTip = false

// const app = createApp({
//    el: '#app',
//    // router: router, //? работает
//    router,            //? сокращёная запись работает
//    template: '<Main/>', // `<p>Helow</p>`, //? работает
//    components: {// Header, // Form,
//       Main
//    }
// });
createApp(Main)
   .component("Main", Main)
   .use(router)
   .mount("#app");

// app.component('App', App); //? работает
// app.component('Header', Header); //? работает

// const app = Vue.createApp({
//    el: '#app',
//    // router,
//    template: '<App/>',
//    components: { App }
// });
// app.mount('#app')

// createApp(App)
//    .component("fa", FontAwesomeIcon)
//    .use(router)
//    .mount("#app");

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
