<template>
  <div class="small">
    <line-chart :chart-data="datacollection"></line-chart>
    <!--<button @click="fillData()">Randomize</button>-->
  </div>
</template>

<script>
import LineChart from '../data/LineChart.js'
import planetChartData from '../data/chart-data.js';

  export default {
    components: {
      LineChart
    },
    data () {
      return {
        datacollection: planetChartData.data
      }
    }/*,
    mounted () {
      this.fillData()
    },
    methods: {
      fillData () {
        this.datacollection = planetChartData.data
      }
    }*/
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #2099d3;
}
</style>