<template>
  <div id="app">
    <b-container class="bv-example-row">
      <b-row>
        <b-col sm="10" offset="1">
          <NavigationPanel />
        </b-col>
      </b-row>
      <b-row>
        <b-col sm="10" offset="1">
          <router-view />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import NavigationPanel from './components/NavigationPanel'

export default {
  name: 'App',
  components: {
    NavigationPanel
  }
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
