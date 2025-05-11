<template>
	   <div class="page"><!-- <div class="form-order-product"> -->
			<my-header data-infa="работает"
				:cartItemCount="cartItemCount">
			</my-header>
			<div class="container text-center">
				<div class="row">
					<h2 class="h2red">Product id: {{ $route.params.id }}</h2>
               <div class="col-md-5 col-md-offset-0 border border-dark">
                  <img class="product border border-danger"
                     v-bind:src="product.image" alt="">
               </div>
               <div class="col-md-5 col-md-offset-0 border border-dark">
                  <h1 v-text="product.title" class="text-success"></h1>
						<p v-html="product.description"></p>
						<p v-text="product.price"></p>
               </div>
				</div>
			</div>
		</div>

</template>

<script type="module">
	import MyHeader from './Header.vue'; // работает
   import Main from './Main.vue';
   console.log(Main.name);
   console.log(Main.data().prods);


	export default {
		name: 'Product',
		components: {'my-header': MyHeader},
		props: ['cartItemCount'],
		data() {
			return {
				product: '',
				// products: Main.data().prods,
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
      created: function () {
         console.log(this.$route.params.id);
         console.log(this.products.length);

         this.product = {
         	id: 1001,
         	title: "Cat Food, 25lb bag",
         	description: "A 25 pound bag of <em>irresistible</em>,"
         		+ "organic goodness for your pet (cat and dog).",
         	price: 2000,
         	image: "/static/images/Cat.png",
         	availableInventory: 10,
         	rating: 1
         };
      }
	}
</script>

<style lang="css" scoped>
	/* Атрибут "scoped" ограничивает область
		видимости CSS текущим компонентом
			Все стили файла app.css подкюченны
		глобально в файле /src/main.js.
	*/
	.h2red {
		color: red;
	}
</style>