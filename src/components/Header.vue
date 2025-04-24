<template>
   <header>
      <div class="navbar navbar-default" style="background-color: brown;">
         <div class="row" style="margin: 0;">
            <div class="col-10 wrap-for-header">
               <header class="text-left header-properties">
                  <h1>
                     <!-- <router-link to="{name: 'iMain'}"> -->
                     <router-link
								to="/"
								tag="a">
									  Home
                     </router-link>
							<!-- {{ sitename }} -->
                     <!-- <RouterLink to="/"> {{ sitename }}</RouterLink> -->
                  </h1>
               </header>
            </div>
            <div class="col-2 wrap-btn-checkout">
               <div class="nav navbar-nav navbar-right for-btn-checkout">
                  <button type="button"
                     class="btn btn-default btn-lg">
                     <!-- v-on:click="showCheckout"> -->
                     <span class="glyphicon">
                           <!-- [{{ cartItemCount }}] Checkout -->
                           <router-link to="/form">[] Checkout</router-link>
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
      name: 'my-header',
      data() {
         return {
            sitename: "Vue test.",
         }
      },
      // props: ['cartItemCount'],
      methods: {
      //    showCheckout() {
      //       this.$router.push({name: 'Form'});
      //    }
      }
   }
</script>

<!-- Атрибут "scoped" ограничивает область видимости CSS текущим компонентом -->
<style scoped>
   .wrap-for-header {
       display: inline-block;
       margin: 20px 10px;
   }

   .header-properties {
       display: inline-block;
       height: 46px;
       vertical-align: middle;
       margin-right: 0;
       margin-left: 0;
   }

   div.col-10 header.header-properties h1 {
       color: burlywood;
       margin: 0;
   }

   .wrap-btn-checkout {
       display: inline-block;
       float: right;
       margin: 20px 10px;
   }

   .for-btn-checkout {
       display: inline-block;
       margin: 0;
   }

   .for-btn-checkout span {
       vertical-align: top;
       top: 0px;
       height: 24px;
   }

   .test-computed-properties,
   .products-for-animals,
   .about-product {
       display: inline-block;
   }

   .main-content {
       margin-right: 0;
       margin-left: 0;
   }

   .page-show-product,
   .page-checkout {}

   .form-group-wrapper {
       width: 98px;
       margin: auto;
   }

   .rating-active {
       color: black;
   }
</style>
