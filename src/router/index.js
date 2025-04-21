import * as Vue from 'vue'
// import { createRouter, createWebHistory } from 'vue-router'
import * as VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'
// import Header from './components/Header'
// import Form from '@/components/Form.vue' // не работает
import Form from '../components/Form.vue' // работает
import Main from '../components/Main.vue' // работает

// Vue.use(Router)

const routes = [
   {
      path: '/',
      name: 'iMain',
      component: Main,
      // or component: () => import("@/views/HomePage.vue"),
      props: true,
   },
   {
      path: '/form',
      name: 'Form',
      component: Form,
      props: true,
   }
];

export const router = VueRouter.createRouter({
   history: VueRouter.createWebHashHistory(),
   mode: 'history',
   routes: routes,
});

// export default router;
//todo export default router  -становится устаревшим (неиспользуемым).

// const app = Vue.createApp({})

// app.use(router)

// app.mount('#app')

// export default router;
// export default new Router({
//    mode: 'history',
//    routes: [
//       {
//          path: '/',
//          name: 'iMain',
//          component: Main,
//          props: true,
//       },
//       {
//          path: '/form',
//          name: 'Form',
//          component: Form,
//          props: true,
//       },
//    ]
// })

