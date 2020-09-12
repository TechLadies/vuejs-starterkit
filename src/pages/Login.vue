<template>
  <div class="page-flex">
    <form class="form-box-flex">
      <h1>Sign In</h1>
      <input label="Username" outlined type="text" v-model="username" />
      <input label="Password" outlined type="password" v-model="password" />
      <div class="buttons-box-flex">
        <button @click="login">Login</button>
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
    login() {
      // assume seuccess
      this.$store.commit('setToken', this.username)
      this.$router.push('/products')
    }
  }
}
</script>

<style scoped>
.page-flex h1, .page-flex p {
  text-align: center;
}

.page-flex {
  display: flex;
  flex-direction: row;
  height: calc(100vh);
  justify-content: center;
  align-items: center;
}

.form-box-flex { 
  /* height: 320px; */
  width: 320px;

  display: flex; 
  flex-direction: column; 
  flex: 0 0 auto; 
  
  border: 1px solid; 
  border-radius: 5px;
  padding: 15px;
  background: lightgray;
}

.form-box-flex mwc-textfield, .form-box-flex mwc-button {
  margin-top: 15px;
}

.form-box-flex mwc-textfield {
  flex: 1 1 auto;
  font-size: 20px;
}

.buttons-box-flex {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.buttons-box-flex mwc-button {
  flex: 0 1 95px;
  font-size: 20px;
}
</style>
