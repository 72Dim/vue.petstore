//todo Ниже рекомендуемый способ создания экзумпляра Vue.
import { createApp } from 'vue'
import router from './router/index.js'

import Header from './components/Header.vue' //? работает
import Form from './components/Form.vue'
import Main from './components/Main.vue'
// import App from './components/App.vue' // работает
import App from './App.vue' // работает
import './assets/app.css'

const app = createApp({
   el: '#app',
   // router: router,   //? работает
   // router,           //? сокращёная запись работает
   template: '<App/>', //'<Form/>','<Header/>','<Main/>','<App/>', //? работает
   components: {
      App,
      Header,
      Form,
      Main
   },
   // data() {
   //    return {}
   // },
   // methods: {
   //    // showFullCart() {
   //    //    return this.cart.length || '';
   //    // }
   // },
   // computed: { // вычисляемые
   //    area: function () {
   //       return this.width * this.length;
   //    },
   //    cartItemCount: function () {
   //       console.log('I am cartItemCount.');

   //       return this.cart.length || '';
   //    },
      // showFullCart() {
      //    return this.cart.length || '';
      // }
   // }
});
console.log(app.config)
// console.dir(app);
// app.component('Header', Header);
app.use(router);		// использовать, применение
app.mount('#app');	// устанавливать
