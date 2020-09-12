<template>
  <div>
    <layout-public v-if="!$store.state.token"/>
    <layout-secure v-else />
  </div>
</template>

<script>
    // <Navigation />
    // <h2 style="text-align: center;">{{ this.usd }} = {{ this.sgd }}</h2>
    // <router-view></router-view>

// import Navigation from './components/Navigation.vue'
import layoutPublic from './layouts/Public.vue'
import layoutSecure from './layouts/Secure.vue'

export default {
  name: 'App',
  components: {
    layoutPublic,
    layoutSecure
    // Navigation
  },
  // data () {
  //   return {
  //     usd: '',
  //     sgd: ''
  //   }
  // },
  // mounted () {
  //   fetch('https://api.exchangeratesapi.io/latest?symbols=USD,SGD')
  //     .then(res => res.json())
  //     .then(data => {
  //       // console.log(data)
  //       this.usd = new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'USD' }).format(1.0)
  //       this.sgd = new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'SGD' }).format(data.rates.SGD / data.rates.USD)
  //     })
  // },
}
</script>

<style lang="scss">
</style>