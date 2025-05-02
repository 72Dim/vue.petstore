import { createApp } from 'vue' //todo рекомендуемый способ создания компонентов Vue
import router from './router/index.js'

import Header from './components/Header.vue' //? работает
import Form from './components/Form.vue'
import Main from './components/Main.vue'
// import App from './components/App.vue' // работает
// import App from './App.vue' // работает
import './assets/app.css'

console.dir(createApp);
console.dir(router);

// var cart = [1001, 1002];
const app = createApp({
   el: '#app',
   // router: router, //? работает
   // router,            //? сокращёная запись работает
   template: '<Header/>', //'<Form/>', '<Header/>' //'<Main/>', //'<Main/>', '<Form/>' <'App/>' `<p>Helow</p>`, //? работает
   // template: '<my-header></my-header>', //'<Form/>', '<Header/>' //'<Main/>', //'<Main/>', '<Form/>' <'App/>' `<p>Helow</p>`, //? работает
   components: {
      // App,
      Header,
      Form,
      Main
   },
   data() {
      return { }
   },
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
// console.log(cart);

console.dir(app);

app.use(router);		// использовать, применение
app.mount('#app');	// устанавливать

console.dir(app);

