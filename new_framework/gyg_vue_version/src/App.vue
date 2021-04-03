<template>
  <div id="app">
    <Navbar />
    <index />
  </div>
</template>

<script>
import Index from "./components/index.vue";
import Navbar from "./components/navbar.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Index,
  },
};
</script>

<style>
#app {
  margin-top: 4rem;
}

html {
}
</style>
