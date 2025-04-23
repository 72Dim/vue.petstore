import { createApp } from 'vue' //todo рекомендуемый способ создания компонентов Vue
// import router from './src/router/index.js' // не работает
// import router from '../router/index.js'   // не работает
import router from './router/index.js'

import Header from './components/Header.vue' //? работает
import Form from './components/Form.vue'
import Main from './components/Main.vue'
// import App from './components/App.vue' // работает
import App from './App.vue' // работает

console.dir(router);

const app = createApp({
   el: '#app',
   // router: router, //? работает
   // router,            //? сокращёная запись работает
   template: '<App/>', //'<Main/>', // <'App/>'`<p>Helow</p>`, //? работает
   components: {
      App,
      Header,
      Form,
      Main
   }
});
app.use(router);
app.mount('#app'); // устанавливать
