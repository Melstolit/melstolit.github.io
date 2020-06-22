<template>
  <div class="hello">
    <h3>Quantum Libraries</h3>
    <b-container fluid="sm">
        <b-row>
          <b-col><b-link href="https://qiskit.org/" target="_blank" rel="noopener">Qiskit</b-link></b-col>
          <b-col><b-link href="https://www.microsoft.com/en-us/quantum/development-kit" target="_blank" rel="noopener">MS QDK</b-link></b-col>
          <b-col><b-link href="https://cirq.readthedocs.io/en/stable/" target="_blank" rel="noopener">Cirq</b-link></b-col>
        </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
    name: 'Main',
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