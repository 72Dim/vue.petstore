<!-- <script type="module" data-infa="работает"> -->
<!--<script data-infa="работает">

export default {
  // Properties returned from data() become reactive state
  // and will be exposed on `this`.
  data() {
    return {
      count: 0
    }
  },

  // Methods are functions that mutate state and trigger updates.
  // They can be bound as event handlers in templates.
  methods: {
    increment() {
      this.count++
    }
  },

  // Lifecycle hooks are called at different stages
  // of a component's lifecycle.
  // This function will be called when the component is mounted.
  mounted() {
    console.log(`The initial count is ${this.count}.`)
  }
}
</script>
<template>
   <div class="container text-center">
      <h1>
         Options API
      </h1>
      <p>
         Options API С помощью этого стиля мы определяем логику компонента, используя объект опций, таких как data, methodsи mounted. Свойства, определяемые опциями, отображаются во thisвнутренних функциях, которые указывают на экземпляр компонента:
      </p>
      <button @click="increment">Count is: {{ count }}</button>
   </div>
</template> -->
<script>
   import { RouterLink, RouterView } from 'vue-router'
   // import { RouterLink } from 'vue-router'

   // import Header from './components/Header.vue' //? работает
   // import Form from './components/Form.vue'
// import Main from './components/Main.vue'
   console.dir(RouterLink);
   console.dir(RouterView);

</script>
<template>
   <h1>Hello App!</h1>
   <p>
     <!-- <strong>Current route path:</strong> {{ $route.fullPath }} -->
   </p>
   <nav>
      <h4>
         <!-- <router-link tag="a" to="{name: 'iMain'}"> -->
         <router-link tag="a" to="/main">
            Go to Main
         </router-link>
      </h4><br>
     <router-link tag="h4" to="/form">
         Go to Form
      </router-link>
   </nav>
   <main>
     <RouterView></RouterView>
      <!-- I am is main block. -->
   </main>
 </template>
