<template>
  <div id="app">
    <Head></Head>
    <div class="content">
      <keep-alive>
        <router-view/>
      </keep-alive>
    </div>
    
  </div>
</template>

<script>
import Head from './components/head'
export default {
  name: 'App',
  components: {
    Head
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
* {
  margin: 0;
  padding: 0;
}
.content {
  margin-top: 80px;
}
</style>
