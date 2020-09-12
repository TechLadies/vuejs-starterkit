<template>
  <b-navbar>
      <template slot="brand">
          <b-navbar-item tag="router-link" :to="{ path: '/' }">
              <img
                  src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
                  alt="Lightweight UI components for Vue.js based on Bulma"
              >
          </b-navbar-item>
      </template>
      <template slot="start">
          <b-navbar-item href="#">
              Home
          </b-navbar-item>
          <b-navbar-item href="#">
              Documentation
          </b-navbar-item>
          <b-navbar-dropdown label="Info">
              <b-navbar-item href="#">
                  About
              </b-navbar-item>
              <b-navbar-item href="#">
                  Contact
              </b-navbar-item>
          </b-navbar-dropdown>
      </template>

      <template slot="end">
          <b-navbar-item tag="div">
              <div class="buttons">
                  <a class="button is-primary">
                      <strong>Sign up</strong>
                  </a>
                  <a class="button is-light">
                      Log in
                  </a>
              </div>
          </b-navbar-item>
      </template>
  </b-navbar>
</template>

<script>
/*
  <header class="navigation">
    <nav>
      <ul>
        <router-link to="/" exact>Products</router-link>
      </ul>
      <ul>
        <router-link to="/carts">Carts {{ cartItemNumber }}</router-link>
      </ul>
    </nav>
  </header>

*/
export default {
  name: 'Navigation',
  computed: {
    cartItemNumber() {
      return this.$store.getters.cartItemNumber
    }
  },
}
</script>

<style lang="scss">
.navigation  {
  width: 100%;
  height: 4.5rem;
  background: #7A378B;
  nav {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  a {
    display: block;
    text-decoration: var(--text-decoration, none);
    color: var(--color, black);
    border-radius: var(--border-radius, 0);
    padding: var(--padding, 0);
    cursor: pointer;
  }
  .router-link-active {
    background: var(--background-active, white);
    color: var(--color-active, black);
    cursor: auto;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
  }
  li {
    margin: 0 1rem;
    border-radius: 5px;
    a {
      --color: white;
      --border-radius: 5px;
      --padding: 0.5rem 1rem;
    }
    &:hover {
      background: white;
      color: #00179b;
    }
    &:hover a {
      --color: black;
    }
  }
}
</style>