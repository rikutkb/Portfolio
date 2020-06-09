<template>
  <div>
    <portfolioheader></portfolioheader>
    <div id="app">
      <router-view/>
    </div>
  </div>
</template>
<script>
import portfolioheader from '@/components/molecules/header.vue'

export default {
  name: 'App',
  components: {
    portfolioheader
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
