<template>
  <NewHeader/>
  <HelloWorld/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import NewHeader from './components/NewHeader.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    NewHeader
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
