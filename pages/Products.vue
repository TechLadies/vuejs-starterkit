<template>
  <div class="products">
    <ul>
      <li v-for="(product, index) of products" :key="index">
        <Product :product="product" />
      </li>
    </ul>
  </div>
</template>

<script>
import Product from './Product.vue'

export default {
   name: 'Products',
   components: {
     Product
   },
   data () {
     return {
       products: [
        { id: 'p1', title: 'Gaming Mouse', price: 29.99 },
        { id: 'p2', title: 'Harry Potter 3', price: 9.99 },
        { id: 'p3', title: 'Used plastic bottle', price: 0.99 },
        { id: 'p4', title: 'Half-dried plant', price: 2.99 }
      ]
     }
   }
}
</script>

<style scoped>
.products {
  width: 50rem;
  max-width: 90%;
  margin: 2rem auto;
}
.products>ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>