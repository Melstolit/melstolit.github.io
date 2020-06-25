<template>
  <div>
    <textarea v-model="formula" cols="40" rows="2"></textarea>
    <vue-mathjax :formula="formula"></vue-mathjax>
</div>
</template>
<script>
import { VueMathjax } from 'vue-mathjax'

export default {
  name: 'Main',
  components: {
    'vue-mathjax': VueMathjax
  },
  data () {
    return {
      formula: '$$x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}$$',
      msg: 'Welcome to Your Vue.js App'
    }
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