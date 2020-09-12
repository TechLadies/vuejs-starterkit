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
  computed: {
    carts() {
      return this.$store.getters.carts
    }
  },
  // created () {
  //   console.log('created')
  // },
  // mounted () {
  //   console.log('mounted')
  // },
  // beforeDestroy () {
  //   console.log('beforeDestroy')
  // }
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