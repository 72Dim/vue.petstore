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
								<!-- [{{ cartItemCount }}] Checkout -->
								<!-- [{{ cartCount }}] Checkout -->
								<router-link to="/form" data-infa="работает">
										[] Checkout
									</router-link>

                     </span>
                  </button>
               </div>
            </div>
         </div>
      </div>
   </header>
</template>

<script type="module">
   export default {
      name: 'my-header',   // or name: 'Header',
      components: {},
      props: [],           // or props: {},
      data() {
         return {
            sitename: "Petstore.",
            // cart: [1001, 1002],
            // products: [
            //    {
            //       id: 1001,
            //       title: "Cat Food, 25lb bag",
            //       description: "A 25 pound bag of <em>irresistible</em>,"
            //          + "organic goodness for your dog.",
            //       price: 2000,
            //       image: "/static/images/Cat.png",
            //       availableInventory: 10,
            //       rating: 1
            //    },
            //    {
            //       id: 1002,
            //       title: "Strong dog",
            //       description: "A 25 pound bag of <em>irresistible</em>,"
            //          + "organic goodness for your dog.",
            //       price: 2000,
            //       image: "/static/images/Dog.png",
            //       availableInventory: 7,
            //       rating: 1
            //    },
            //    {
            //       id: 1003,
            //       title: "Yarn",
            //       description: "A 25 pound bag of <em>irresistible</em>,"
            //          + "organic goodness for your dog.",
            //       price: 2000,
            //       image: "/static/images/Cat_myau.png",
            //       availableInventory: 99,
            //       rating: 4
            //    },
            //    {
            //       id: 1004,
            //       // title: "Laser Pointer",
            //       title: "Kitty Litter",
            //       description: "A 25 pound bag of <em>irresistible</em>,"
            //          + "organic goodness for your dog.",
            //       price: 2000,
            //       image: "/static/images/Smol_cat.png",
            //       availableInventory: 11,
            //       rating: 5
            //    },
            //    {
            //       id: 1005,
            //       title: "Kind",
            //       description: "A 25 pound bag of <em>irresistible</em>,"
            //          + "organic goodness for your dog.",
            //       price: 2000,
            //       image: "/static/images/Frands.png",
            //       availableInventory: 25,
            //       rating: 1
            //    }
            // ],
         }
      },
      methods: {
         showCheckout() {
				console.log('I am showCheckout.');
				console.dir(this.$router);
            this.$router.push({name: 'Form'});	// работает
            // this.$router.push({path: '/form'});	// работает
         }
      },
      // computed: { // вычисляемые
      //    cartItemCount: function () {
      //       // console.log('I am cartItemCount.');
      //       return this.cart.length || '';
      //    },
      //    showFullCart() {
      //       return this.cart.length || '';
      //    }
      // }

   }
</script>

<!-- Атрибут "scoped" ограничивает область видимости CSS текущим компонентом -->
<style scoped>
	/* Все стили файла app.css подкюченны глобально в файле /src/main.js, */
</style>
