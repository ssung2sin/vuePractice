<template>
  <HelloWorld/>
  <EnglishVersion/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import EnglishVersion from './components/EnglishVersion.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    EnglishVersion
  }
}
</script>

<style>
#app {
  font-family: 'Pretendard','Apple SD Gothic Neo', 'Malgun Gothic','Nanum Gothic', 'Noto Sans','sans-serif';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  letter-spacing: -0.7px;
}
</style>
