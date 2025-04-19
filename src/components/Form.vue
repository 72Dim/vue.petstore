<template>
   <div class="">
      <my-header :cartItemCount="cartItemCount"></my-header>
      <div class="row">
         <div class="">
            <div class="page-checkout">
               <!-- Start Checkout page -->
               <div class="col-md-6">
                  <strong>First name:</strong>
                  <input v-model.trim.lazy="order.firstName" class="form-control" />
               </div>
               <div class="col-md-6">
                  <strong>Last name:</strong>
                  <input v-model.trim="order.lastName" class="form-control" />
               </div>
               <div class="form-group">
                  <div class="col-md-12">
                     <strong>Adress:</strong>
                     <div class="col-md-12">
                           <input v-model="order.adress" class="form-control" />
                     </div>
                  </div>
               </div>
               <div class="form-group">
                  <div class="col-md-12">
                     <strong>City:</strong>
                     <div class="col-md-12">
                           <input v-model="order.city" class="form-control" />
                     </div>
                  </div>
               </div>
               <div class="form-group">
                  <div class="col-md-2">
                     <strong>State:</strong>
                     <select v-model="order.state" class="form-control">
                           <option disabled value="">State</option>
                           <!-- <option v-bind:value="states.AL">AL</option> -->
                           <option v-for="(state, key) in states" v-bind:value="state">
                              {{key}}
                           </option>
                     </select>
                  </div>
               </div>
               <div class="form-group">
                  <div class="col-md-6">
                     <strong>Zip / Postal Code:</strong>
                     <input v-model.number="order.zip" class="form-control" type="number" />
                  </div>
               </div>
               <div class="form-group">
                  <div class="col-md-6 boxes">
                     <input type="checkbox" id="gift" value="true" v-bind:true-value="order.sendGift"
                           v-bind:false-value="order.dontSendGift" v-model="order.gift">
                     <label for="gift">Ship As Gift?</label>
                  </div>
               </div>
               <div class="form-group">
                  <div class="col-md-6 boxes">
                     <input type="radio" id="home" value="Home" v-model="order.method">
                     <label for="home">
                           Home
                     </label>
                     <input type="radio" id="business" value="Business" v-model="order.method">
                     <label for="business">
                           Business
                     </label>
                  </div>
               </div>
               <div class="form-group">
                  <!-- <div class="col-md-6"> -->
                  <div class="col-md-12">
                     <div class="form-group-wrapper">
                           <button type="submit" class="btn btn-primary submit" v-on:click="submitForm">
                              Place order
                           </button>
                     </div>
                  </div>
               </div>
               <div class="col-md-12 verify">
                  <pre>
                     First name: {{order.firstName}}
                     Last name: {{order.lastName}}
                     Adress: {{order.adress}}
                     City: {{order.city}}
                     Zip value: {{order.zip}}
                     Zip type: {{typeof(order.zip)}}
                     State: {{order.state}}
                     Method: {{order.method}}
                     Gift: {{order.gift}}
                  </pre>
               </div>
            </div><!-- End Checkout page -->
         </div>
      </div>
   </div>
</template>
   <!-- <script type="importmap">
   {
      "imports": {
         "vue": "https://unpkg.com/vue@3/dist/vue.esm-browser.js"
      }
   }
   </script> -->

   <!-- <script type="module">
   import { createApp } from 'vue'

   createApp({
      data() {
         return {
         message: 'Hello Vue!'
         }
      }
   }).mount('#app')
   </script> -->

<script type="module">
   import MyHeader from './Header.vue';
   export default {
      name: 'Form',
      props: ['cartItemCount'],
      data() {
         return {
            order: {
               firstName: '',
               lastName: '',
               adress: '',
               city: '',
               zip: '',
               state: '',
               method: 'Home',
               Home: 'Home Address',
               Business: 'Business Address',
               // gift: true, // false
               gift: 'Send As A Gift',
               sendGift: 'Send As A Gift',
               dontSendGift: 'Do not send as a gift',
            },
            states: {
               AK: 'Alaska',
               AL: 'Alabama',
               AR: 'Arisona',
               CA: 'California',
               NV: 'Nevada'
            },
         }
      },
      componentes: { MyHeader },
      method: {
         SubmitForm() {
            alert('Submitted');
         }
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
      .product-cats,
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
