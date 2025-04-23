import { createRouter, createWebHistory } from 'vue-router'

// import App from '/src/App.vue'            // работает
import Main from '../components/Main.vue' // работает
import Form from '../components/Form.vue' // работает

/*//* Смотрим, что возвращает import
   let url = import.meta.env.BASE_URL;
   console.log('import.meta.env.BASE_URL: '+url );
   console.log(import('/src/App.vue')); // работает
*/

// export const router = createRouter({
const router = createRouter({
   mode: 'history',
   history: createWebHistory(import.meta.env.BASE_URL),
   routes: [
      /* //* Если этот маршрут открыть то шаблон App отображается дважды
         {
            path: '/',
            // component: App //* or see below
            component: import('/src/App.vue') // работает
         },
      */
      {
         path: '/main',
         name: 'iMain',
         component: Main
      },
      {
         path: '/form',
         component: Form
      }
   ]
})
export default router

/* //* export and export default
   Именованная форма более применима для экспорта нескольких величин.
   Во время импорта, можно будет использовать одно и то же имя,
   чтобы обратиться к соответствующему экспортируемому значению.

   Касательно экспорта по умолчанию(default ), он может быть только
   один для каждого отдельного модуля(файла). Дефолтный экспорт может
   представлять собой функцию, класс, объект или что - то другое.
   Это значение следует рассматривать как "основное", так как его будет
   проще всего импортировать.
*/

