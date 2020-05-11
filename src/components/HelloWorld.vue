<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Quantum Libraries</h3>
    <ul>
      <li><a href="https://qiskit.org/" target="_blank" rel="noopener">Qiskit</a></li>
      <li><a href="https://www.microsoft.com/en-us/quantum/development-kit" target="_blank" rel="noopener">MS QDK</a></li>
      <li><a href="https://cirq.readthedocs.io/en/stable/" target="_blank" rel="noopener">Cirq</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
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
