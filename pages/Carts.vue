<template>
  <div class="carts">
    <p v-if="carts.length <= 0">No Item In The Cart!</p>
    <ul>
      <li v-for="(cartItem, index) of carts" :key="index">
        <Cart :product="cartItem" />
      </li>
    </ul>
  </div>
</template>

<script>
import Cart from './Cart.vue'

export default {
   name: 'Carts',
   components: {
    Cart
   },
   data () {
     return {
       carts: [
        { id: 'p1', title: 'Gaming Mouse', price: 29.99, quantity: 1 },
      ]
     }
   }
}
</script>

<style scoped>
.carts {
  width: 50rem;
  max-width: 90%;
  margin: 2rem auto;
}
.carts>ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>