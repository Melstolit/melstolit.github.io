<template>
  <div>
    <ChartPanel msg="ChartJs demo"/>
  </div>
</template>

<script>
import ChartPanel from '../components/ChartPanel'

export default {
    name: 'ChartView',
    props: {
      msg: String
    },
    components: {
      ChartPanel
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