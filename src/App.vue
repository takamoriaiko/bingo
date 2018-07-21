<template>
  <div id="app">
    <Aiko />
  </div>
</template>

<script>
import Aiko from "./components/Aiko.vue";

export default {
  name: "app",
  components: {
    Aiko
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
