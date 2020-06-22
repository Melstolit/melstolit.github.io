<template>
  <div>
    <b-jumbotron header="BootstrapVue" lead="Bootstrap v4 Components for Vue.js 2">
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand>Home</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav variant="faded" type="light">
            <b-nav-item><router-link to="/" disabled>Main </router-link></b-nav-item>
            <b-nav-item><router-link to="/Chart"> ChartView</router-link></b-nav-item>
          </b-navbar-nav>

          <b-navbar-nav class="ml-auto">
              <b-nav-item-dropdown text="Lang" right>
              <b-dropdown-item href="#EN-us">English</b-dropdown-item>
              <b-dropdown-item href="#FR-fa">Francais</b-dropdown-item>
              </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </b-jumbotron>
  </div>
</template>

<script>
export default {
    name: 'NavigationPanel',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>