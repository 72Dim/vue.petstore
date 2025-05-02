// import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
   //  vue(),
   vue({
      template: {
         compilerOptions: {
            // isCustomElement: (tag) => ['my-header'].includes(tag),
            /* Рассматривать все теги, начинающиеся с 'my-header',
               как пользовательские элементы.
                  Должен возвращать true, если тег должен рассматриваться
               как нативный пользовательский элемент. Для совпавшего
               тега Vue отобразит его как пользовательский элемент,
               а не попытается разрешить его как компонент Vue.
               Нативные HTML и SVG теги в этой функции указывать
               не нужно — парсер Vue распознаёт их автоматически.
            */
            // isCustomElement: (tag) => tag.startsWith('my-header'),
         }
      }
   }),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      // '@': fileURLToPath(new URL('./src', import.meta.url)) // sring from box
       'vue': 'vue/dist/vue.esm-bundler.js'
    },
  },
})

