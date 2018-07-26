<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import rem from './assets/rem/rem.js';
export default {
  name: 'App'
}
</script>

<style>
@import 'assets/clearCss/clearCss.css';
@import "//at.alicdn.com/t/font_763809_oswt7kffh9.css";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
img{
  width: 100%;
}
</style>
