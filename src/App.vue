<template>
  <div>
    <Navigation />
    <h2 style="text-align: center;">{{ usd }} = {{ sgd }}</h2>
    <router-view></router-view>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'

export default {
  name: 'App',
  components: {
    Navigation
  },
  data () {
    return {
      usd: '',
      sgd: ''
    }
  },
  mounted () {
    fetch('https://api.exchangeratesapi.io/latest?symbols=USD,SGD')
      .then(response => response.json())
      .then(data => {
        this.usd = new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'USD' }).format(1.0)
        this.sgd = new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'SGD' }).format(data.rates.SGD / data.rates.USD)
      })
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