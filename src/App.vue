<script type="module" data-infa="работает">
   import { RouterLink, RouterView } from 'vue-router'

	export default {
      name: 'App',
      props: ['cartItemCount'],
      data() {},
	}
</script>
<template>
   <main>
      <router-view></router-view>
      <!-- I am is App.vue -->
   </main>
 </template>
