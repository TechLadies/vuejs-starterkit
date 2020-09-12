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
  computed: {
    products() {
      return this.$store.getters.products
    }
  },
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