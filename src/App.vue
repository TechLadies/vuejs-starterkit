<template>
  <div>
    <Navigation />
    <h2 style="text-align: center;">{{ this.usd }} = {{ this.sgd }}</h2>
    <router-view></router-view>
  </div>
</template>

<script>
import Navigation from '../components/Navigation.vue'

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
      .then(res => res.json())
      .then(data => {
        // console.log(data)
        this.usd = new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'USD' }).format(1.0)
        this.sgd = new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'SGD' }).format(data.rates.SGD / data.rates.USD)
      })
  },
}
</script>

<style lang="scss">
</style>