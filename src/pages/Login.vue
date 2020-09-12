<template>
  <div class="page-flex">
    <form class="form-box-flex">
      <h1>Sign In</h1>
      <input label="Username" type="text" v-model="username" />
      <input label="Password" type="password" v-model="password" />
      <div class="buttons-box-flex">
        <button type="button" @click="login">Login</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login () {
      const token = this.username + '-' + Date.now()
      this.$store.commit('setToken', token)
      this.$router.push('/products')
      window.localStorage.setItem('my-token', token)
    }
  }
}
</script>

<style scoped>
.page-flex {
  display: flex;
  flex-direction: row;
  height: calc(100vh);
  justify-content: center;
  align-items: center;
}
.page-flex h1 {
  text-align: center;
}

.form-box-flex {
  width: 320px;
  display: flex;
  flex-direction: column;
  flex: 0 0 auto;
  border: 1px solid;
  border-radius: 5px;
  padding: 15px;
  background: lightgray;
}

.form-box-flex input, .form-box-flex button {
  margin-top: 15px;
}

.form-box-flex input {
  flex: 1 1 auto;
}

</style>