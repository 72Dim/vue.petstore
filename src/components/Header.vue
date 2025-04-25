<template>
   <header>
      <!-- <div class="navbar navbar-default" style="background-color: brown;"> -->
      <div class="container text-center" style="background-color: brown;">
         <div class="row" style="margin: 0;">
            <div class="col wrap-for-header" style="float: left;">
               <header class="text-left header-properties">
                  <h1 class="btn btn-default btn-lg" style="margin: 0px;">
							<!-- <router-link to="/" data-infa="работает" -->
                     <!-- <router-link :to="{ name: 'iMain' }" data-infa="работает" -->
                     <router-link :to="{ path: '/' }" data-infa="работает"
								tag="a">
									{{ sitename }}
                     </router-link>
                  </h1>
               </header>
            </div>
				<div class="col-8 btn btn-default btn-lg current-route-path"
					style="display: inline-block; margin-top: 20px;">
					<strong>Current route path:</strong> {{ $route.fullPath }}
				</div>
            <div class="col wrap-btn-checkout">
               <div class="nav navbar-nav navbar-right for-btn-checkout">
                  <button type="button"
                     class="btn btn-default btn-lg"
                     v-on:click="showCheckout">
                     <span class="glyphicon glyphicon-shopping-cart">
								[{{ cartItemCount }}] Checkout
								<!-- [{{ cartCount }}] Checkout -->
								<!-- <router-link to="/form" data-infa="работает">
										[] Checkout
									</router-link>
								-->
                     </span>
                  </button>
               </div>
            </div>
         </div>
      </div>
   </header>
	<main>
		<!-- И header and main отображаются дважды если открыть теги -->
		<!-- <RouterView></RouterView> -->
		<router-view></router-view>
		<!-- I am is main block. -->
	</main>
</template>

<script type="module">
// let cartLength = 0;
// import Main from './Main.vue';
// console.dir(Main);
// console.dir(Main.computed.cartItemCount);
// var arrLength = Main.computed.cartItemCount;


   export default {
      name: 'my-header',
      data() {
         return {
            sitename: "Petstore.",
				cartCount: 2,
         }
      },
		// props: {
		// 	cartItemCount: Main.computed.cartItemCount
		// },
      props: ['cartItemCount'],
      methods: {
         showCheckout() {
				console.log('I am showCheckout.');
				console.dir(this.$router);
            this.$router.push({name: 'Form'});	// работает
            // this.$router.push({path: '/form'});	// работает
         }
      }
   }
</script>

<!-- Атрибут "scoped" ограничивает область видимости CSS текущим компонентом -->
<style scoped>
	/* Все стили файла app.css подкюченны глобально в файле /src/main.js, */
</style>
