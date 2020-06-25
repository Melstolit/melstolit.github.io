<template>
  <div>
    <CollectionPanel msg="ChartJs demo"/>
  </div>
</template>

<script>
import CollectionPanel from '../components/CollectionPanel'
export default {
    name: 'Chart',
    props: {
      msg: String
    },
    components: {
      CollectionPanel
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