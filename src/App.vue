<template>
  <div>
    <Navigation />
    <Products />
    <Carts />
  </div>
</template>

<script>
import Products from '../pages/Products.vue'
import Carts from '../pages/Carts.vue'
import Navigation from '../components/Navigation.vue'

export default {
  name: 'App',
  components: {
    Products,
    Carts,
    Navigation
  }
}
</script>

<style lang="scss">
</style>