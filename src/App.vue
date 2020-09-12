<template>
  <div>
    <Navigation />
    <Products />
    <Carts />
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'
import Products from './pages/Products.vue'
import Carts from './pages/Carts.vue'

export default {
  name: 'App',
  components: {
    Navigation,
    Products,
    Carts
  }
}
</script>

<style lang="scss">
  button {
    font: inherit;
    padding: 0.25rem 0.5rem;
    background: #35495e;
    color: white;
    border-color: #35495e;
    cursor: pointer;
  }

  button:focus {
    outline: none;
  }

  button:hover,
  button:active {
    color: #35495e;
    border-color: currentColor;
    background-color: white;
  }
</style>